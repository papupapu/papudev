'use client';

import { useState, useEffect } from "react";

import Button from "@/components/Button";
import SummaryIcon from "@/components/Icons/summary";

import printContent from "@/utils/printContent";

export default function Summary({ summary }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisibile] = useState(true);
  const toggleSummary = () => setIsOpen(!isOpen);  

  useEffect(() => {
    const footer = document.querySelector('#footer');
    let observer = null;

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Footer is visible
          setIsVisibile(false);
          setIsOpen(false);
        } else {
          // Footer is not visible
          setIsVisibile(true);
        }
      });
    };

    if (footer && window && 'IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(observerCallback, {
        rootMargin: '0px',
        threshold: 0
      });
      observer.observe(footer);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    }
  }, []);  

  return (
    <div className={`fixed bottom-4 right-4 ${isVisible ? 'opacity-100' : 'opacity-0'} lg:static lg:pt-1 lg:opacity-100 transition`}>
      <Button
        type="button"
        ariaLabel="Summary"
        action={toggleSummary}
        className="w-10 h-10 relative lg:hidden z-2"
      >
        <SummaryIcon />
      </Button>
      <p className="hidden lg:block text-sm">Summary:</p>
      <ul className={`absolute bottom-5 right-5 bg-darkest/90 border border-light w-2xs p-4 pb-3 z-1 ${isOpen ? 'scale-100' : 'scale-0'} transition rounded-3xl origin-bottom-right lg:static lg:block lg:w-auto lg:p-0 lg:pt-1 lg:bg-transparent lg:border-0 lg:scale-100`}>
        {summary.map((item, index) => printContent(item, index, 'ul'))}
      </ul>
    </div>
  );
}