import { fetchAll } from "@/api";
import ArticleContent from "@/components/ArticleContent";
import ArticleImage from "@/components/ArticleImage";

async function Movies() {
  const apires = await fetchAll();  
  
  if (!apires || apires.error) {
    console.log("Error fetching data:", apires.error);
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
        <h1 className="text-2xl font-bold">No data available</h1>
        <p className="mt-4">Please try again later.</p>
      </div>
    );
  }

  return (data || []).map((article, index) => {
    if (!article) {
      return null;
    }
    console.log(article)

    return (
      <div key={article.slug} className={`grow pt-4 justify-center lg:grid lg:auto-rows-auto`}>
        <div className="lg:grid lg:grid-cols-5 lg:gap-6">
          <div className="lg:col-span-3 lg:col-start-2">
            <h1 className="mb-3 text-5xl font-bold text-lightest">{article.title}</h1>
            <h2 className="mb-5 text-3xl font-bold">{article.description}</h2>
          </div>
        </div>        
        <div className="lg:grid lg:grid-cols-5 lg:gap-6">
          <div className="lg:col-span-3">
            <ArticleImage article={article} />        
            <ArticleContent content={article.ck} />
          </div>
          <div className="lg:col-start-1">allora vediamo un po&apos; cosa ci sta qui</div>
        </div>
      </div>      
    );
  });
}

export default function Home() {
  return <Movies />;
}
