import React from "react";

function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Capture Moments</h1>
        <p className="text-lg md:text-xl mb-12">
          Professional photography services to preserve your precious moments.
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg transition duration-300"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
