'use client';

import { useCtxModal } from '@/state/Modal';
import { useCtxDevice } from '@/state/Device';

import Button from '@/components/Button';

import { createFooterModal } from '@/modals/factory';

export default function ModalButton() {
  const { openModal } = useCtxModal();  
  const { device } = useCtxDevice();

  const handleClick = () => openModal(createFooterModal({ device }));

  return (
    <Button
      action={handleClick}
    >
      Footer Modal
    </Button>
  );
}