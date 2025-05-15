'use client';

import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

function createWrapperElement(wrapperId) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export default function ReactPortal({ children, wrapperId, className }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      element = createWrapperElement(wrapperId, className);
      systemCreated = true;
    }

    className && element.setAttribute('class', className);

    setWrapperElement(element);

    return () => {
      if (systemCreated && element) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId, className]);

  if (!wrapperElement) {
    return null;
  }

  return createPortal(children, wrapperElement);
}