import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

export default function Full({ header, body, footer }) {
  return (
    <>
      <Header data={header} />
      <Body data={body} />
      <Footer data={footer} />    
    </>
  );
}