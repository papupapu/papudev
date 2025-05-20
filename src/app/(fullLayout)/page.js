import { fetchAll } from "@/api";
import ArticleContent from "@/components/ArticleContent";
import ArticleImage from "@/components/ArticleImage";

async function Movies() {
  const data = await fetchAll();  
  if (!data || !data.length) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-dark">
        <h1 className="text-2xl font-bold">No data available</h1>
        <p className="mt-4">Please try again later.</p>
      </div>
    );
  }
  return data.map((article, index) => {    
    return (
      <div key={article.slug} className={`flex grow ${index === data.length - 1 ? 'pt-4 justify-center' : ' py-4 border-b border-light '}`}>
        <div className="grow max-w-72 pr-6">allora vediamo un po' cosa ci sta qui</div>
        <div className="grow lg:max-w-3xl xl:max-w-4xl">
          <h1 className="mb-3 text-5xl font-bold text-light">{article.title}</h1>
          <h2 className="mb-5 text-3xl font-bold">{article.description}</h2>
          <ArticleImage article={article} />        
          <ArticleContent content={article.ck} />
        </div>
        <div className="grow max-w-72 pl-6" />
      </div>
    );
  });
}

export default function Home() {
  return <Movies />;
}
