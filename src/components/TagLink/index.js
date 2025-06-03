export default function TagLink ({ tag }) {
  return (
    <a
      className="bg-dark/30 hover:bg-dark/50 px-3 py-1 rounded-md text-sm whitespace-nowrap block"
      href={`/${tag.slug}`}
    >
      {tag.name}
    </a>
  );
}