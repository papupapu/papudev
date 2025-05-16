import Hamburger from "@/components/Icons/hamburger";
import User from "@/components/Icons/user";
import Wrapper from "@/components/Wrapper";

export default function Header() {
  return (
    <header className="fixed w-full">
      <Wrapper classname="flex justify-between items-center h-16 lg:h-20">
      <h1 className="text-3xl font-bold text-light italic">
        Papudev
      </h1>
      <div className="flex gap-3">
        {/* <button type="button" className="flex justify-center items-center pl-3 pr-4 h-10 bg-light hover:bg-lightest cursor-pointer rounded-full text-darker hover:text-darkest transition-colors">
          <User /> <span className="ml-2 font-semibold">Login</span>
        </button>         */}
        <button type="button" className="flex justify-center items-center w-10 h-10 bg-light hover:bg-lightest cursor-pointer rounded-full text-darker hover:text-darkest transition-colors">
          <User />
        </button>
        <button type="button" className="flex justify-center items-center w-10 h-10 bg-light hover:bg-lightest cursor-pointer rounded-full text-darker hover:text-darkest transition-colors">
          <Hamburger />
        </button>
      </div>
      </Wrapper>
    </header>
  );
}
