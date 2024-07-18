import React from "react";
import Image from "next/image";

interface GlossyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const GlossyButton: React.FC<GlossyButtonProps> = ({
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`bg-button-blue px-8 py-3 rounded-full ml-3 flex items-center justify-center shadow-lg ${className}`}
      onClick={onClick}
      {...rest}
    >
      <Image
        src="/hero-btn.svg"
        alt="Icon"
        width={20.62}
        height={20.62}
        layout="fixed"
      />
    </button>
  );
};

export default GlossyButton;
