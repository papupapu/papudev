const className = {
  p: 'mb-5',
  h3: 'text-2xl font-bold mb-5',
  h4: 'text-xl font-bold mb-5',
  h5: 'text-lg font-bold mb-5',
  h6: 'text-base font-bold mb-5',
  ul: 'list-disc list-inside mb-5',
  li: 'pb-1',
  ol: 'list-decimal list-inside mb-5',
  blockquote: 'border-l-4 border-dark pl-4 italic mb-5',
  code: 'block p-4 mb-5 bg-dark/30 rounded-md text-lessdark',
  a: 'text-lightest hover:text-light transition-colors duration-200',
};

export default function printContent(obj, index, printJustContentForThisTag = null) {
  const { type, value } = obj;
  const Tag = type;

  const content = value.map((item, n) => {
    const key = `${type}_${index}_${n}`;
    if (item.type === 'text') {
      return item.value;
    }
    return printContent(item, key);
  });

  return printJustContentForThisTag && type === printJustContentForThisTag ? content : (
    <Tag key={`${type}_${index}`} className={className[type] || null} {...obj.attributes}>
      {content}
    </Tag>
  );
}