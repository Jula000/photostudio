import React from "react";
import Image from "next/image";
import imgBg from "../../../public/hero-bg.png";

export default function HeroSection() {
  return (
    <div className="relative bg-black text-white h-[400px] flex items-center justify-between px-10 py-5">
      <div className="flex flex-col justify-center z-10">
        <span className="text-sm uppercase tracking-widest">
          Stunning Photography By
        </span>
        <h1 className="text-4xl md:text-6xl font-bold">Damien Braun</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full flex items-center">
          Let's Work Together
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <Image
          src={imgBg}
          width={346}
          height={346}
          alt="Header background"
          className="h-[346px]"
        />
      </div>
    </div>
  );
}
