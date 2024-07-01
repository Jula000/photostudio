"use client";
import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-1/2 p-2">
      <div className="mb-4">
        <button
          onClick={onToggleOpen}
          className="flex justify-between w-full py-4 text-left focus:outline-none"
        >
          <span className="font-semibold">{question}</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="pl-4 text-gray-400">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
