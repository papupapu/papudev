'use client';

import { useState, useEffect } from 'react';

import throttle from '@/utils/throttle';

export default function Background() {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const computeBackgroundOpacity = () => {
      const scrollTop = window.scrollY;
      if (scrollTop < 80) {
        setIsTransparent(true);        
      } else {
        setIsTransparent(false);
      }      
    };
    const computeBackgroundOpacityOnScroll = throttle(computeBackgroundOpacity, 100);
    window.addEventListener('scroll', computeBackgroundOpacityOnScroll);
    window.addEventListener('scrollend', computeBackgroundOpacity);
    return () => {
      window.removeEventListener('scroll', computeBackgroundOpacityOnScroll);
      window.removeEventListener('scrollend', computeBackgroundOpacity);
    };
  }, []);

  return (
    <div className={`absolute top-0 left-0 w-full h-full bg-darker transition-opacity ${isTransparent ? 'opacity-0' : 'opacity-70'} -z-1`} />
  );
}
