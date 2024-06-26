"use client";
import Image from "next/image";
import Link from "next/link";

const GlossyButton = () => {
  const handleClick = (e) => {
    console.log("Button was clicked");
  };

  return (
    <Link href="/your-target-path" className="inline-block">
      <button
        onClick={handleClick}
        className="bg-button-blue px-8 py-3 rounded-full ml-3 flex items-center justify-center shadow-lg"
      >
        <Image
          src="/hero-btn.svg"
          alt="Icon"
          width={20.62}
          height={20.62}
          layout="fixed"
        />
      </button>
    </Link>
  );
};

export default GlossyButton;
