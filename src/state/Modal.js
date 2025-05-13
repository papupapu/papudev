'use client';

import { useState, createContext, useContext } from 'react';

import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('../components/Modal'), { ssr: false });

export const ModalContext = createContext();

export const useCtxModal = () => useContext(ModalContext);

export const ModalStateProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const openModal = (modalProps) => {
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${window.scrollY}px`;
    setModal({ ...modalProps });
  };

  const closeModal = () => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('top');
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal && <Modal {...modal} closeModal={closeModal} />}
    </ModalContext.Provider>
  );
};

export default ModalContext;
