import FullModalButton from "./ModalButton";
import SimpleModalButton from "./ModalButton/simple";
import HeaderModalButton from "./ModalButton/header";
import FooterModalButton from "./ModalButton/footer";

export default function Home() {
  console.log('Home');
  return (
    <>
      questa è una frase in font Lora
      <p className="text-3xl font-bold text-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-3xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-3xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-3xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-3xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-3xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-3xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>    
      <FullModalButton />
      <SimpleModalButton />
      <HeaderModalButton />
      <FooterModalButton />
    </>
  );
}
