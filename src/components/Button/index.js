export default function Button({
  text,
  action,  
  isLoading,
  isDisabled,
  negative,
  children,
}) {
  const cls = negative
    ? 'border font-medium hover:bg-gray-200 active:bg-gray-300'
    : 'bg-blue-600 text-white font-bold hover:bg-blue-700 active:bg-blue-800';

  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-md px-4 leading-10 cursor-pointer ${cls}`}
      onClick={action}
      disabled={isDisabled || isLoading}
    >
      {text || children}
    </button>
  );
}