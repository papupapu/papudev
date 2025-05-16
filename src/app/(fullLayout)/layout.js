import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import Footer from "@/components/Footer";

export default function FullLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Wrapper classname="grow pt-16 lg:pt-20">
        {children}
      </Wrapper>
      <Footer />
    </div>
  );
}
