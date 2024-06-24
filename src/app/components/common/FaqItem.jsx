"use client";
import React, { useState } from "react";

const FaqItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-1/2 p-2">
      <div className="mb-4">
        <button
          onClick={toggleOpen}
          className="flex justify-between w-full py-4 text-left focus:outline-none"
        >
          <span className="font-semibold">{faq.question}</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="pl-4 text-gray-400">
            <p>{faq.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
