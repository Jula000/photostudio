"use client";
import React from "react";
import Image from "next/image";
import Button from "../../common/Button";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <div
      className="relative container mx-auto text-white flex items-center justify-between px-10 py-5"
      style={{
        backgroundImage: "url('/hero-bg.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "346px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center z-10 pt-20 pb-20">
        <span className="text-sm uppercase tracking-widest font-manrope text-gray-400">
          Stunning Photography By
        </span>
        <h1 className="text-4xl md:text-6xl font-bold font-manrope">
          Damien Braun
        </h1>
      </div>
      <div className="flex font-manrope uppercase flex-col items-start font-semibold text-5xl">
        <div className="flex mb-2 pt-20">
          <span className="justify-items-center">Let's</span>
          <Button onClick={handleClick} className="px-7 py-3 rounded-full ml-3">
            <Image
              src="/hero-btn.svg"
              alt="Hero Button"
              width={20.62}
              height={20.62}
            />
          </Button>
        </div>
        <span className="font-bold ml-0 inline-block pb-20">Work Together</span>
      </div>
    </div>
  );
};

export default HeroSection;
