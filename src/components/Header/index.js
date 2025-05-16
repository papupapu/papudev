import Hamburger from "@/components/Icons/hamburger";

export default function Header() {
  return (
    <header className="fixed flex items-center h-16">
      
      <h1 className="text-customlight">
        Papudev
      </h1>
      <Hamburger />
    </header>
  );
}
