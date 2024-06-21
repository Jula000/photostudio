import Image from "next/image";
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const Button = ({ text, className, icon }) => (
  <button
    className={`bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition flex items-center space-x-2 ${className}`}
  >
    <span>{text}</span>
    {icon && <span>{icon}</span>}
  </button>
);

const ServiceSection = ({ title, description, highlights }) => (
  <div className="border border-about-bg p-6 rounded-lg space-y-4">
    <div className="flex items-center space-x-2">
      <h2 className="text-2xl font-semibold flex items-center space-x-2">
        <span>{title}</span>
        <FaExternalLinkAlt className="text-blue-400" />
      </h2>
    </div>
    <p>{description}</p>
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-blue-400">✦</span>
          <p>{highlight}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Services() {
  const highlights = [
    "Coverage for weddings, parties, corporate functions, and more.",
    "Skilled photographers who know how to seize the moment.",
    "A mix of candid and posed shots for a comprehensive story.",
    "Quick turnaround for you to relive the day's highlights.",
  ];

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl">SERVICES</h1>
            <h1 className="text-4xl font-bold">MY PHOTOGRAPHY SERVICES</h1>
          </div>
          <Button text="View All Services ➔" />
        </div>
        <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 space-y-4">
            <ServiceSection
              title="EVENTS"
              description="Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day."
              highlights={highlights}
            />
          </div>
          <div className="relative w-full md:w-1/2 h-80">
            <Image
              src="/kytsya.jpg"
              alt="Event Photography"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex space-x-4 justify-end">
          <Button text={<FaArrowLeft />} />
          <Button text={<FaArrowRight />} />
        </div>
      </div>
    </div>
  );
}
