export default function Button({
  text,
  action,  
  ariaLabel,
  isLoading,
  isDisabled,
  className,
  children,
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`flex justify-center items-center bg-lightest hover:bg-light cursor-pointer rounded-full text-darker hover:text-darker transition-colors ${className}`}
      onClick={action}
      disabled={isDisabled || isLoading}
    >
      {text || children}
    </button>
  );
}