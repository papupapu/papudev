import Close from "@/components/Icons/close";

export default function ModalHeader({ data }) {
  const handleClose = () => data.close();
  return (
    <div className="grow-0 shrink-1 basis-auto py-2 relative flex justify-center border-b">
      <p className="text-base font-semibold">
        {data.title}
      </p>
      <button
        type="button"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={handleClose}
      >
        <Close />
      </button>
    </div>
  );
}