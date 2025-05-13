import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

export default function Full({ close }) {
  return (
    <>
      <Header close={close} />
      <Body />
      <Footer />    
    </>
  );
}