import { fetchByCategory } from "@/api";

import ArticleImage from "@/components/Article/Cover";

import { tagClassNames } from "@/utils/printContent";

export async function generateMetadata({ params }, parent) {
  const { category } = await params;

  const apires = await fetchByCategory({ category });
  
  const { data } = apires;

  const [first] = data;

  return {
    title: first.categories?.main?.name || 'Category',
  }
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const apires = await fetchByCategory({ category });

  if (!apires || apires.error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-dark">
        <h1 className="text-2xl font-bold">We got an error!</h1>
        <p className="mt-4">Please try again later.</p>
      </div>
    );
  }

  const { data } = apires;

  if (!data || !data.length) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-dark">
        <h1 className="text-2xl font-bold">
          No articles available in this category
        </h1>
        <p className="mt-4">Please try again later.</p>
      </div>
    );
  }

  const [first, ...rest] = data;

  console.log(first)

  return (
    <div className="w-full pt-2 lg:pt4">
      <div className="flex flex-col mt-2 mb-4 lg:mb-8 bg-darker md:flex-row rounded-xl overflow-hidden">
        <ArticleImage article={first} className="w-full lg:max-w-2/5" />
        <div className="pt-2 px-2 pb-4 lg:px-6 lg:pt-4 lg:max-w-3/5">
          <h2 className="text-3xl font-bold">
            <a href={`/blog/${first.slug}`} className={tagClassNames.a}>{first.title}</a>
          </h2>
          <p className="pt-2 text-lg line-clamp-5">{first.description}</p>
        </div>
      </div>
      {rest.length > 0 ? (
        <div className="flex flex-col gap-4 md:gap-8 mb-4 lg:mb-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {[...rest, ...rest, ...rest, ...rest].map((post) => (
            <div key={post.slug} className="pb-4 w-full md:w-auto rounded-xl overflow-hidden border border-light">
              <ArticleImage article={post} className="w-full" />
              <h3 className="pt-3 px-3 text-xl font-bold">
                <a href={`/blog/${post.slug}`} className={tagClassNames.a}>{post.title}</a>
              </h3>
              <p className="pt-1 px-3">{post.description}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
