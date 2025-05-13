'use client';

import { useState, useRef, forwardRef } from 'react';

import ReactPortal from '../ReactPortal';

const ModalContent = forwardRef(({ isUp, close, modal }, ref) => {
  const Content = modal.content;
  return (
    <>
      <div ref={ref} className={`fixed bg-white z-2 overscroll-contain w-screen h-screen ${isUp ? 'animate-modal' : 'animate-modal-down opacity-0'}`} style={modal.style}>
        <div className="w-full h-full flex flex-col">
          <Content data={{ close }} />
        </div>
      </div>
      <div className={`fixed pointer top-0 left-0 w-screen h-screen bg-black ${isUp ? 'animate-overlayer opacity-50' : 'animate-overlayer-down opacity-0'} z-1`} />        
    </>
  );
});

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
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
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