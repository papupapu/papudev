import { fetchOne } from "@/api";

import Content from "@/components/Article/Content";
import Cover from "@/components/Article/Cover";
import Infos from "@/components/Article/Infos";

export default async function PostPage({ params }) {
  const { slug } = await params;

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

  return (
    <div key={data.slug} className={`grow pt-4 sm:pb-18 justify-center lg:grid lg:pb-0 lg:auto-rows-auto`}>
      <div className="lg:grid lg:grid-cols-5 lg:gap-6">
        <div className="lg:col-span-3 lg:col-start-2">
          <h1 className="mb-3 text-5xl font-bold text-lightest">{data.title}</h1>
          <h2 className="mb-5 text-3xl font-bold">{data.description}</h2>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-6">
        <div className="order-1 lg:order-2 lg:col-span-3">
          <Cover article={data} className="mb-5" />
          <Content content={data.ck} />          
        </div>
        <Infos article={data} className="order-2 lg:order-1" />
      </div>
    </div>
  );
}
