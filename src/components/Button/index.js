export default function Button({
  text,
  action,  
  isLoading,
  isDisabled,
  className,
  children,
}) {
  return (
    <button
      type="button"
      className={`flex justify-center items-center bg-light hover:bg-lightest cursor-pointer rounded-full text-darker hover:text-darkest transition-colors ${className}`}
      onClick={action}
      disabled={isDisabled || isLoading}
    >
      {text || children}
    </button>
  );
}