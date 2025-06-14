import TagLink from '../../../TagLink';

export default function Topics({ categories  }) {
  if (!categories) {
    return null;
  }

  const { main, additional = [] } = categories;
  const validAdditional = additional; // (additional || []).filter((cat) => cat.slug !== 'homepage' && cat.slug !== main.slug);
  return (
    <div className="pt-1 lg:pb-5">
      <p className="mt-2 mr-2 py-1 text-sm">Topic{validAdditional.length ? 's' : ''}:</p>
      <ul className="flex flex-wrap mt-2 gap-2">
        <li><TagLink tag={main} /></li>
        {validAdditional.map((cat => (
          <li key={cat.slug}><TagLink tag={cat} /></li>
        )))}
      </ul>
    </div>
  );
}