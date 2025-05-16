'use client';

import { useCtxModal } from '@/state/Modal';
import { useCtxDevice } from '@/state/Device';

import Button from "@/components/Button";
import User from "@/components/Icons/user";

import { createLoginModal } from '@/modals/factory';

export default function LoginButton() {
  const { openModal } = useCtxModal();  
  const { device } = useCtxDevice();

  const handleClick = () => openModal(createLoginModal({ device }));

  return (
    <Button
      type="button"
      action={handleClick}
      className="w-10 h-10"
    >
      <User />
    </Button>
  );
}