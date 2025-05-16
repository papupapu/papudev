'use client';

import { useState, useEffect } from 'react';

export default function Background() {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const computeBackgroundOpacityOnScroll = () => {
      if (window.scrollY < 80) {
        setIsTransparent(true);        
      } else {
        setIsTransparent(false);
      }      
    };
    window.addEventListener('scroll', computeBackgroundOpacityOnScroll);
    return () => {
      window.removeEventListener('scroll', computeBackgroundOpacityOnScroll);
    };
  }, []);

  return (
    <div className={`absolute top-0 left-0 w-full h-full bg-darker transition-opacity ${isTransparent ? 'opacity-0' : 'opacity-70'} -z-1`} />
  );
}
