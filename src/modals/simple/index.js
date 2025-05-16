import Button from "@/components/Button";
import Close from "@/components/Icons/close";
import Simple from '@/components/Modal/Templates/simple';

function Body({ data }) {
  return (
    <div className="p-4">
      <Button
        className="absolute top-2 right-3 w-10 h-10"
        onClick={data.close}
      >
        <Close />
      </Button>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
      <p>{data.text}</p>
      <p>{data.text1}</p>
      <p>{data.text2}</p>
    </div>
  );
}

export default function SimpleModal({ data, text, text1, text2 }) {
  return (
    <Simple 
      body={
        <Body data={{ text, text1, text2, close: data.close }} />
      }
    />
  );
}
