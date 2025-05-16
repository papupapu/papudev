export default function Wrapper({ children, classname }) {
  return (
    <div className={`px-4 sm:px-8 lg:px-12 xl:px-16 ${classname}`}>
      {children}
    </div>
  );
}