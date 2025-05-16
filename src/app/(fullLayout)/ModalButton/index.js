'use client';

import { useCtxModal } from '@/state/Modal';
import { useCtxDevice } from '@/state/Device';

import Button from '@/components/Button';

import { createFullModal } from '@/modals/factory';

export default function ModalButton() {
  const { openModal } = useCtxModal();  
  const { device } = useCtxDevice();

  const handleClick = () => openModal(createFullModal({ device }));

  return (
    <Button
      action={handleClick}
      className="leading-10 px-4"
    >
      Full Modal
    </Button>
  );
}