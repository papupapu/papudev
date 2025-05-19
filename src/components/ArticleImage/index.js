import Image from "next/image";

export default function ArticleImage({ article }) {
  if (!article.cover) return null;

  const { cover: { src, width, height } } = article;
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={article.title}
    />
  );
}
