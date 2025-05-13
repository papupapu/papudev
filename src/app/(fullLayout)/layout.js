export default function FullLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16">header</header>
      <div className="grow">
        {children}
      </div>
      <footer className="h-80">footer</footer>
    </div>
  );
}
