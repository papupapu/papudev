export default function ModalHeader({ close }) {
  console.log(close);
  return (
    <div className="grow-0 shrink-1 basis-auto border-b">
      <p onClick={() => close()}>header</p>
    </div>
  );
}