'use client';

import Button from "@/components/Button";
import Summary from "@/components/Icons/summary";

export default function SummaryButton({ className }) {
  const handleClick = () => console.log("Summary button clicked");

  return (
    <Button
      type="button"
      ariaLabel="Site menu"
      action={handleClick}
      className={`w-10 h-10${className ? ` ${className}` : ''}`}
    >
      <Summary />
    </Button>
  );
}