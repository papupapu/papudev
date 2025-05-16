import Hamburger from "@/components/Icons/hamburger";
import Wrapper from "@/components/Wrapper";
import LoginButton from "./LoginButton";
import Background from "./Background";

export default function Header() {
  return (
    <header className="fixed w-full">
      <Wrapper classname="flex justify-between items-center h-16 lg:h-20">
      <h1 className="text-3xl font-bold text-lightest italic">
        Papudev
      </h1>
      <div className="flex gap-3">
        <LoginButton />
        <button type="button" className="flex justify-center items-center w-10 h-10 bg-lightest hover:bg-light cursor-pointer rounded-full text-darkest hover:text-darker transition-colors">
          <Hamburger />
        </button>
      </div>
      </Wrapper>
      <Background />
    </header>
  );
}
