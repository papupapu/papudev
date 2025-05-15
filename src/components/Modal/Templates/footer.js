import Body from "./components/body";
import Footer from "./components/footer";

export default function FooterOnly({ body, footer }) {
  return (
    <>
      <Body data={body} />
      <Footer data={footer} />
    </>
  );
}