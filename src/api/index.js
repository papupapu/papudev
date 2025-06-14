'use server';

import qs from 'qs';
import parse from 'html-react-parser';

const formatDate = (date) => {
  if (!date) {
    return null;
  }
  const ts = Date.parse(date);
  const d = new Date(ts);
  return d.toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

const getCover = (data) => {
  if (data.Cover && data.Cover.formats) {
    const { large, medium, small } = data.Cover.formats;
    return {
      large: {
        src: large.url.replace(/upload/g, 'upload/f_auto/q_auto:eco'),
        width: large.width,
        height: large.height,
      },
      medium: {
        src: medium.url.replace(/upload/g, 'upload/f_auto/q_auto:eco'),
        width: medium.width,
        height: medium.height,
      },
      small: {
        src: small.url.replace(/upload/g, 'upload/f_auto/q_auto:eco'),
        width: small.width,
        height: small.height,
      },
    };
  }
  return null;
}

const getNodeContents = (data) => {
  const { props: { children } } = data;
  let contents = [];
  if (Array.isArray(children)) {
    contents = children.map((child) => {
      if (child.type) {        
        return child.type === 'a'
          ? { type: child.type, value: getNodeContents(child), attributes: { href: child.props.href, rel: child.props.rel, target: child.props.target } }
          : { type: child.type, value: getNodeContents(child) };
      }
      return ({ type: 'text', value: child });
    });
  } else if (children.type) {
    contents = children.type === 'a' && !Array.isArray(children)
      ? [{ type: children.type, value: getNodeContents(children), attributes: { href: children.props.href, rel: children.props.rel, target: children.props.target } }]
      : [{ type: children.type, value: getNodeContents(children) }];
  } else if (typeof children === 'string') {
    contents = [{ type: 'text', value: children }];
  }
  return contents;
};

const getDocumentNodes = (data) => {
  let parsedHtmlString = parse(data);
  if (!Array.isArray(parsedHtmlString)) {
    parsedHtmlString = [parsedHtmlString];
  }
  return parsedHtmlString.map((node) => {
    const value = getNodeContents(node);
    if (node.type === 'pre') {
      return value[0];
    }
    if (node.type === 'blockquote') {
      return { ...value[0], type: 'blockquote' };
    }
    return { type: node.type, value };
  });
}

const getCategories = (article) => {
  const main = article.MainCategory && article.MainCategory.length
    ? {
      name: article.MainCategory[0].Name,
      slug: article.MainCategory[0].Slug,
    } : null;

  const additional = article.AdditionalCategories && article.AdditionalCategories.length
    ? article.AdditionalCategories.map((cat) => ({
      name: cat.Name,
      slug: cat.Slug,
    })) : [];

  return main?.name ? {
    main,
    additional,
   } : null;
}

export async function fetchAll() {
  const strapi_key = process.env.STRAPI_API_TOKEN;
  const strapi_url = process.env.STRAPI_API_HOST;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${strapi_key}`,
    },
  };

  let strapi = [];
  try {
    strapi = await fetch(`${strapi_url}/api/articles?populate=*&sort=createdAt:desc`, options)
      .then((res) => res.json());
  } catch (error) {
    return  { error: JSON.stringify(error), data: [] };
  }

  return {
    error: false,
    data: strapi.data.map((item) => ({
      slug: item.slug,
      title: item.Title,
      description: item.Description,
      cover: getCover(item),
      ck: getDocumentNodes(item.Ckcontent),
      categories: item.categories,
    })),
  };
}

export async function fetchOne({ slug }) {
  const strapi_key = process.env.STRAPI_API_TOKEN;
  const strapi_url = process.env.STRAPI_API_HOST;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${strapi_key}`,
    },
  };

  let strapi = {};

  try {
    const query = qs.stringify({
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: '*',
    }, { encodeValuesOnly: true });

    strapi = await fetch(`${strapi_url}/api/articles?${query}`, options)
      .then((res) => res.json());
  } catch (error) {
    return  {
      error: JSON.stringify(error),
      data: strapi,
    };
  }

  if (!strapi.data.length) {
    return  {
      error: 'No data found',
      data: strapi,
    };
  }

  const [article] = strapi.data;

  return {
    error: false,
    data: {
      slug: article.slug,
      title: article.Title,
      publishDate: formatDate(article.createdAt),
      lastUpdate: formatDate(article.updatedAt),
      description: article.Description,
      cover: getCover(article),
      ck: getDocumentNodes(article.Ckcontent),
      summary: article.Summary ? getDocumentNodes(article.Summary) : null,
      categories: getCategories(article),
    },
  };
}