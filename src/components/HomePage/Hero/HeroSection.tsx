import React from "react";
import Image from "next/image";
import Button from "../../common/Button";

import imgBg from "../../../../public/hero-bg.png";

const HeroSection: React.FC = () => {
  return (
    <div className="relative container mx-auto text-white h-[400px] flex items-center justify-between px-10 py-5">
      <div className="flex flex-col justify-center z-10">
        <span className="text-sm uppercase tracking-widest font-manrope">
          Stunning Photography By
        </span>
        <h1 className="text-4xl md:text-6xl font-bold font-manrope">
          Damien Braun
        </h1>
      </div>
      <div className="flex font-manrope uppercase flex-col items-start font-semibold text-5xl">
        <div className="flex mb-2">
          <span>Let's</span>
          <Button className="px-8 py-3 rounded-full ml-3 ">
            <Image
              src="/hero-btn.svg"
              alt="Hero Button"
              width={20.62}
              height={20.62}
            />
          </Button>
        </div>
        <span className="font-bold ml-0 inline-block">Work Together</span>
      </div>
      <div className="absolute inset-0 z-0 flex justify-center align-middle">
        <Image
          src={imgBg}
          width={346}
          height={346}
          style={{
            objectFit: "contain",
          }}
          alt="Header background"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
