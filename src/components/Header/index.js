
import Wrapper from "@/components/Wrapper";
import LoginButton from "./LoginButton";
import MenuButton from "./MenuButton";
import Background from "./Background";

export default function Header() {
  return (
    <header className="fixed w-full z-10">
      <Wrapper classname="flex justify-between items-center h-16 lg:h-20">
      <h1 className="text-3xl font-bold text-lightest italic">
        Papudev
      </h1>
      <div className="flex gap-3">
        <LoginButton />
        <MenuButton />
      </div>
      </Wrapper>
      <Background />
    </header>
  );
}
