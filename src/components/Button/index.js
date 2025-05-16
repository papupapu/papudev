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
      className={`flex justify-center items-center bg-lightest hover:bg-light cursor-pointer rounded-full text-darker hover:text-darker transition-colors ${className}`}
      onClick={action}
      disabled={isDisabled || isLoading}
    >
      {text || children}
    </button>
  );
}