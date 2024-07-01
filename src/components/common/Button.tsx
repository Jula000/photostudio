import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => (
  <button
    className={`bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 ${className}`}
  >
    {children}
  </button>
);

export default Button;
