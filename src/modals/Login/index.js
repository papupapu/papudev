import Button from "@/components/Button";
import Close from "@/components/Icons/close";
import Simple from '@/components/Modal/Templates/simple';

function Body({ data }) {
  return (
    <div className="p-4">
      <Button
        className="absolute top-4 right-3 w-10 h-10"
        action={data.close}
      >
        <Close />
      </Button>
      <p className="text-ligth">loggati stronzolo!</p>    
    </div>
  );
}

export default function LoginModal({ data }) {
  return (
    <Simple 
      body={
        <Body data={{ close: data.close }} />
      }
    />
  );
}
