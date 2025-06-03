import TagLink from '../../TagLink';

export default function ArticleSidebar({ article, className }) {
  const {
    lastUpdate,
    publishDate,
    categories: {
      main,
      additional,
    },
  } = article;
  const validAdditional = additional; // (additional || []).filter((cat) => cat.slug !== 'homepage' && cat.slug !== main.slug);

  const mobileClassName = 'border-t items-center border-darker';
  const desktopClassName = 'lg:border-r lg:block lg:border-t-0';

  return (
    <div className={`${mobileClassName} ${desktopClassName} ${className}`}>
      <div className="pt-4 flex justify-between lg:block lg:pt-0">
        <p>
          <span className="text-sm lg:block lg:pb-1">Author:</span> Giancarlo Gerbaz
        </p>
        <p className="lg:pt-3">
          <span className="text-sm lg:block lg:pb-1">Publish date:</span> {lastUpdate || publishDate}
        </p>
      </div>
      <div className="flex pt-1 lg:block lg:pt-1 lg:pb-5">
        <p className="mt-2 mr-2 py-1 text-sm">Topic{validAdditional.length ? 's' : ''}:</p>
        <ul className="flex mt-2 gap-2">
          <li><TagLink tag={main} /></li>        
          {validAdditional.map((cat => (
            <li key={cat.slug}><TagLink tag={cat} /></li>
          )))}
        </ul>
      </div>
      <div className="hidden lg:block">
        <p className="lg:text-sm">Summary:</p>
        <ul className="lg:pt-1">
          <li>Chapter 1</li>
          <li>Chapter 2</li>
          <li>Chapter 3</li>
          <li>Chapter 4</li>
          <li>Chapter 5</li>
        </ul>
      </div>
    </div>
  );
}