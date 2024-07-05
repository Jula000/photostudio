import React from "react";
import Image from "next/image";

const brands = [
  { name: "Infinity Parker", logo: "/brandLogo.png", width: 251 },
  { name: "Omega Million", logo: "/brandLogo1.png", width: 353 },
  { name: "WheelApp", logo: "/brandLogo2.png", width: 204 },
  { name: "High Country Club", logo: "/brandLogo3.png", width: 322 },
  { name: "EdgeKart", logo: "/brandLogo4.png", width: 183 },
];

const PortfolioSection: React.FC = () => {
  return (
    <div className="text-white py-16">
      <section className="container mx-auto px-4 text-start">
        <p className="uppercase text-base text-gray-400">Portfolio</p>
        <h1 className="text-4xl font-bold mb-4">VISUAL POETRY IN PIXELS</h1>
        <p className="text-lg leading-relaxed mb-8 text-gray-400">
          Step into a visual journey that encapsulates the essence of my lens.
          Each photograph in this portfolio is a narrative, a frozen moment in
          time, and a testament to the artistry and passion poured into every
          frame. Explore the diverse tapestry of stories I've had the privilege
          to capture and witness the world through my lens.
        </p>
        <h2 className="mb-4 uppercase text-gray-400 text-center">
          BRANDS I HAVE WORKED WITH
        </h2>
      </section>
      <div className="flex flex-wrap justify-center bg-zinc-900">
        {brands.map((brand, index) => (
          <div key={index} className="p-4">
            <Image
              src={brand.logo}
              alt={brand.name}
              height={50}
              width={brand.width}
              className="grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
