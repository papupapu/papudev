'use client';

import { useState, useRef, forwardRef } from 'react';

import ReactPortal from '../ReactPortal';

const ModalContent = forwardRef(({ isUp, close, modal }, ref) => {
  const Content = modal.content;
  return (
    <>
      <div ref={ref} className={`fixed bg-darkest z-2 overscroll-contain w-screen h-screen md:rounded-lg ${isUp ? 'animate-modal' : 'animate-modal-down opacity-0'}`} style={modal.style}>
        <div className="w-full h-full flex flex-col">
          <Content data={{ close }} />
        </div>
      </div>
      <div
        onClick={close}
        className={`fixed pointer top-0 left-0 w-screen h-screen bg-dark ${isUp ? 'animate-overlayer opacity-70' : 'animate-overlayer-down opacity-0'} z-1`}
      />
    </>
  );
});

ModalContent.displayName = 'ModalContent';

export default function Modal({ content, style, closeModal }) {
  const modalContentRef = useRef(null);
  const [isUp, setIsUp] = useState(true);
  
  const handleClose = () => {
    setIsUp(false);
    modalContentRef.current.addEventListener('animationend', (e) => {
      if (e.animationName === 'modalDown') {
        closeModal();
      }
    });
  };

  return (
    <ReactPortal
      wrapperId="react-portal-modal"
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-100"
    >
      <ModalContent
        isUp={isUp}
        close={handleClose}
        ref={modalContentRef}
        modal={{
          content,
          style,
        }}
      />
    </ReactPortal>
  );
}