import Topics from './Topics';
import Summary from './Summary';

export default function ArticleSidebar({ article, className }) {
  const {
    lastUpdate,
    publishDate,
    categories,
    summary,
  } = article;

  const mobileClassName = 'border-t items-center border-darker';
  const desktopClassName = 'lg:border-r lg:block lg:border-t-0';

  return (
    <div className={`${mobileClassName} ${desktopClassName} ${className}`}>
      <div className="pt-4 flex justify-between lg:block lg:pt-0">
        <p>
          <span className="text-sm block pb-1">Author:</span> Giancarlo Gerbaz
        </p>
        <p className="lg:pt-3">
          <span className="text-sm block pb-1">Publish date:</span> {lastUpdate || publishDate}
        </p>
      </div>
      <Topics categories={categories} />
      {summary ? <Summary summary={summary} /> : null}
    </div>
  );
}