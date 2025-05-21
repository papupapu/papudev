import { fetchOne } from "@/api";
import ArticleContent from "@/components/ArticleContent";
import ArticleImage from "@/components/ArticleImage";

async function Article({ slug }) {
  const apires = await fetchOne({ slug });  
  
  if (!apires || apires.error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-dark">
        <h1 className="text-2xl font-bold">We got an error!</h1>
        <p className="mt-4">Please try again later.</p>
      </div>
    );
  }

  const { data } = apires;

  if (!data || !Object.keys(data).length) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-dark">
        <h1 className="text-2xl font-bold">No data available</h1>
        <p className="mt-4">Please try again later.</p>
      </div>
    );
  }

  console.log(data)

  return (
    <div key={data.slug} className={`grow pt-4 justify-center lg:grid lg:auto-rows-auto`}>
      <div className="lg:grid lg:grid-cols-5 lg:gap-6">
        <div className="lg:col-span-3 lg:col-start-2">
          <h1 className="mb-3 text-5xl font-bold text-lightest">{data.title}</h1>
          <h2 className="mb-5 text-3xl font-bold">{data.description}</h2>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:gap-6">
        <div>allora vediamo un po&apos; cosa ci sta qui</div>
        <div className="lg:col-span-3">
          <ArticleImage article={data} />
          <ArticleContent content={data.ck} />
        </div>
      </div>
    </div>
  );
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  return <Article slug={slug} />;
}
