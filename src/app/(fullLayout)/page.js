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
      <div key={article.slug} className={`${index === data.length - 1 ? 'pt-4' : ' py-4 border-b border-light '}`}>
        <h2 className="text-xl font-bold text-light">{article.title}</h2>
        <ArticleImage article={article} />
        <ArticleContent content={article.ck} />
      </div>
    );
  });
}

export default function Home() {
  return <Movies />;
}
