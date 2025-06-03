'use client';

import Button from "@/components/Button";
import Hamburger from "@/components/Icons/hamburger";

export default function MenuButton({ className }) {
  const handleClick = () => console.log("Menu button clicked");

  return (
    <Button
      type="button"
      ariaLabel="Site menu"
      action={handleClick}
      className={`w-10 h-10${className ? ` ${className}` : ''}`}
    >
      <Hamburger />
    </Button>
  );
}