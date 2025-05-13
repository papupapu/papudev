'use client';

import { useCtxModal } from '@/state/Modal';
import { useCtxDevice } from '@/state/Device';

import Test from '@/modals/test';

export default function ModalButton() {
  const { openModal } = useCtxModal();  
  const { device } = useCtxDevice();

  const handleClick = () => openModal({
    content: ({ data }) => <Test data={data} text="text" text1="text1" text2="text2" />,
    style: device !== 'smartphone' ? {
      maxWidth: 520,
      maxHeight: 560,
    } : null,
  });

  return (
    <button onClick={handleClick}>
      Open Modal
    </button>
  );
}