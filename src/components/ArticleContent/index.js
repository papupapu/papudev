const printContent = (obj, index) => {
  const { type, value } = obj;
  const Tag = type;

  const content = value.map((item, n) => {
    const key = `${type}_${index}_${n}`;
    if (item.type === 'text') {
      return item.value;
    }
    return printContent(item, key);
  });

  return (
    <Tag key={`${type}_${index}`} {...obj.attributes}>
      {content}
    </Tag>
  );
}

export default function ArticleContent({ content }) {
  if (content) {
    return <>{content.map((item, index) => printContent(item, index))}</>
  }
  return null;
}
  
