'use server';

import parse from 'html-react-parser';

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
    contents = [{ type: children.type, value: getNodeContents(children) }];
  } else if (typeof children === 'string') {
    contents = [{ type: 'text', value: children }];
  }
  return contents;
};

const getDocumentNodes = (data) => {
  const parsedHtmlString = parse(data);
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

export async function fetchAll() {
  const strapi_key = process.env.STRAPI_API_TOKEN;
  const strapi_url = process.env.STRAPI_API_HOST;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${strapi_key}`,
    },
  };
  
  const strapi = await fetch(`${strapi_url}/api/articles?populate=*&sort=createdAt:desc`, options)
    .then((res) => res.json())
    .catch((error) => console.error(error));

  
  return strapi.data.map((item) => ({
    slug: item.slug,
    title: item.Title,
    description: item.Description,
    content: item.Content,
    ck: getDocumentNodes(item.Ckcontent),
    categories: item.categories,
  }));
}