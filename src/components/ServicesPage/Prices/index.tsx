"use client";
import React from "react";
import SessionPriceCard from "@/components/ServicesPage/components/SessionPriceCard";
import PhotographySection from "@/components/ServicesPage/components/PhotographySection";
import { useState } from "react";

const sections = [
  {
    title: "Portrait Photography",
    description:
      "Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.",
    linkText: "View Projects",
    linkUrl: "/projects",
    imageUrl: "/kytsya.jpg",
  },
];
const sections2 = [
  {
    title: "Portrait Photography",
    description:
      "Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.",
    linkText: "View Projects",
    linkUrl: "/projects",
    imageUrl: "/kytsya.jpg",
  },
];
const Prices: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handlePrev = () => {
    setCurrentSection((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
  };

  const handleNext = () => {
    setCurrentSection((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <PhotographySection
          title={sections[currentSection].title}
          description={sections[currentSection].description}
          linkText={sections[currentSection].linkText}
          linkUrl={sections[currentSection].linkUrl}
          imageUrl={sections[currentSection].imageUrl}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <div>
          <SessionPriceCard
            title="Individual Session"
            price={250}
            duration="2-hour"
            imagesIncluded={20}
            additionalImagePrice={10}
            description="Ideal for capturing your unique personality and style."
          />
          <SessionPriceCard
            title="Family Session"
            price={400}
            duration="3-hour"
            imagesIncluded={30}
            additionalImagePrice={10}
            description="Perfect for creating lasting memories with your loved ones."
          />
          <SessionPriceCard
            title="Couple Session"
            price={300}
            duration="2.5-hour"
            imagesIncluded={25}
            additionalImagePrice={10}
            description="Celebrate your love story with an intimate photoshoot."
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <PhotographySection
          title={sections2[currentSection].title}
          description={sections2[currentSection].description}
          linkText={sections2[currentSection].linkText}
          linkUrl={sections2[currentSection].linkUrl}
          imageUrl={sections2[currentSection].imageUrl}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <SessionPriceCard
          title="Couple Session"
          price={300}
          duration="2.5-hour"
          imagesIncluded={25}
          additionalImagePrice={10}
          description="Celebrate your love story with an intimate photoshoot."
        />
        <SessionPriceCard
          title="Couple Session"
          price={300}
          duration="2.5-hour"
          imagesIncluded={25}
          additionalImagePrice={10}
          description="Celebrate your love story with an intimate photoshoot."
        />
        <SessionPriceCard
          title="Couple Session"
          price={300}
          duration="2.5-hour"
          imagesIncluded={25}
          additionalImagePrice={10}
          description="Celebrate your love story with an intimate photoshoot."
        />
      </div>
      <div className="container mx-auto p-4">
        <PhotographySection
          title={sections2[currentSection].title}
          description={sections2[currentSection].description}
          linkText={sections2[currentSection].linkText}
          linkUrl={sections2[currentSection].linkUrl}
          imageUrl={sections2[currentSection].imageUrl}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <SessionPriceCard
          title="Couple Session"
          price={300}
          duration="2.5-hour"
          imagesIncluded={25}
          additionalImagePrice={10}
          description="Celebrate your love story with an intimate photoshoot."
        />
        <SessionPriceCard
          title="Couple Session"
          price={300}
          duration="2.5-hour"
          imagesIncluded={25}
          additionalImagePrice={10}
          description="Celebrate your love story with an intimate photoshoot."
        />
        <SessionPriceCard
          title="Couple Session"
          price={300}
          duration="2.5-hour"
          imagesIncluded={25}
          additionalImagePrice={10}
          description="Celebrate your love story with an intimate photoshoot."
        />
      </div>
    </>
  );
};

export default Prices;
