"use client";
import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

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
