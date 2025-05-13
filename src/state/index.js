'use client';

import { ModalStateProvider } from "./Modal";
import { DeviceStateProvider } from "./Device";

export default function StateProvider({ children }) {
  return (
    <DeviceStateProvider>
      <ModalStateProvider>
        {children}
      </ModalStateProvider>
    </DeviceStateProvider>
  );
}
