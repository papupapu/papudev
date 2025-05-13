export default function ModalHeader({ data }) {
  const handleClose = () => data.close();
  return (
    <div className="grow-0 shrink-1 basis-auto border-b">
      <p onClick={handleClose}>{data.title}</p>
    </div>
  );
}