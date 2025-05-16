import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FullLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}
