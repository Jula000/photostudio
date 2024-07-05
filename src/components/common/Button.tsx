import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => (
  <button
    className={`bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
