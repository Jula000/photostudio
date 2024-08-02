import React from "react";
import Image from "next/image";
import Button from "../../common/Button";
import ServiceHighlights from "../../common/ServiceHighlights";
import Link from "next/link";

const highlights = [
  "Coverage for weddings, parties, corporate functions, and more.",
  "Skilled photographers who know how to seize the moment.",
  "A mix of candid and posed shots for a comprehensive story.",
  "Quick turnaround for you to relive the day's highlights.",
];

const title = "Events";
const description =
  "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.";

const ServiceSection = () => {
  return (
    <div className="text-white flex items-center justify-center">
      <div className="mx-auto p-6 space-y-6 container">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h1 className="uppercase text-base text-gray-400">Services</h1>
            <h1 className="text-4xl font-bold">MY PHOTOGRAPHY SERVICES</h1>
          </div>
          <div className="space-x-4 flex self-auto sm:self-end">
            <Button className="p-2 rounded-full w-10 h-10 items-center justify-center hidden md:flex">
              {"<"}
            </Button>
            <Button className="p-2 rounded-full w-10 h-10 items-center justify-center hidden md:flex">
              {">"}
            </Button>
            <Button className="w-full sm:w-auto px-4 py-2 text-center">
              View All Services →
            </Button>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 space-y-4">
            <ServiceHighlights
              title={title}
              description={description}
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
          <div className="flex sm:hidden justify-center space-x-4 md:justify-end mt-4">
            <Button className="p-2 rounded-full">{"<"}</Button>
            <Button className="p-2 rounded-full">{">"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
