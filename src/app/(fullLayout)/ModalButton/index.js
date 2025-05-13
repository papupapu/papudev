'use client';

import { useCtxModal } from '@/state/Modal';
import { useCtxDevice } from '@/state/Device';

import Full from '@/components/Modal/Templates/full';

export default function ModalButton() {
  const { openModal } = useCtxModal();  
  const { device } = useCtxDevice();

  const handleClick = () => {
    openModal({
      content: ({ close }) => <Full text="diocane?" close={close} />,
      style: device !== 'smartphone' ? {
        maxWidth: 520,
        maxHeight: 560,
      } : null,
    });
  };

  return (
    <button onClick={handleClick}>
      Open Modal
    </button>
  );
}