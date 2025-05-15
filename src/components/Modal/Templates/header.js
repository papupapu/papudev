import Header from "./components/header";
import Body from "./components/body";

export default function HeaderOnly({ header, body }) {
  return (
    <>
      <Header data={header} />
      <Body data={body} />   
    </>
  );
}