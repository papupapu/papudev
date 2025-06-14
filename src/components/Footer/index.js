import Wrapper from "@/components/Wrapper";

export default function Footer() {
  return (
    <footer id="footer" className="mt-8 border-t-2 border-t-light">
      <Wrapper classname="flex flex-col py-8 md:h-80">
        <div className="md:grid md:grid-cols-[67%_33%] pb-8 grow justify-between">
          <div className="md:pr-8 pb-8 md:pb-0 grid grid-cols-2 md:grid-cols-3 gap-4 text-lessdark">
            <p>link di servizio</p>
            <p>link di servizio</p>
            <p>link di servizio</p>
            <p>link di servizio</p>
            <p>link di servizio</p>
            <p>link di servizio</p>            
          </div>
          <div className="p-5 bg-dark/30 md:h-full border-1 border-light rounded-3xl text-lessdark">
            <h3 className="pb-1 font-bold">Titolo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <p className="text-sm text-lightest text-center">© 2025 Papudev. All rights reserved.</p>
      </Wrapper>
    </footer>
  );
}