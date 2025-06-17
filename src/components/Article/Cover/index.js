export default function ArticleImage({ article, className }) {
  if (!article.cover) return null;
  const { cover: { large, medium, small } } = article;
  return (
    <picture className={`block ${className}`}>
      <source media="(max-width: 500px)" srcSet={small.src} />
      <source media="(max-width: 750px)" srcSet={medium.src} />
      <img
        src={large.src}
        width={large.width}
        height={large.height}
        alt={article.title}
      />
    </picture>
  );
  return null;
}
