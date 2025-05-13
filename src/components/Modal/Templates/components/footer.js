export default function ModalFooter({ data }) {
  return (
    <div className={`grow-0 shrink-1 basis-auto flex ${Object.keys(data).length > 1 ? 'justify-between' : 'justify-end'} border-t`}>
      {data.cancel && (
        <button
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md"
          onClick={data.cancel.onClick}
        >
          {data.cancel.text}
        </button>
      )}
      {data.confirm && (
        <button
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md"
          onClick={data.confirm.onClick}
        >
          {data.confirm.text}
        </button>
      )}
    </div>
  );
}