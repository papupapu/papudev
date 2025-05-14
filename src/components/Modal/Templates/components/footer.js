import Button from '@/components/Button';

export default function ModalFooter({ data }) {
  return (
    <div className={`grow-0 shrink-1 basis-auto flex ${Object.keys(data).length > 1 ? 'justify-between' : 'justify-end'} py-2 px-4 border-t`}>
      {data.cancel && (
        <Button
          negative
          onClick={data.cancel.onClick}
        >
          {data.cancel.text}
        </Button>
      )}
      {data.confirm && (
        <Button
          action={data.confirm.onClick}
        >
          {data.confirm.text}
        </Button>
      )}
    </div>
  );
}