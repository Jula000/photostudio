import React from "react";
import GlossyButton from "@/components/common/GlossyButton";
interface ServiceHighlightsProps {
  title: string;
  description: string;
  highlights: string[];
}

const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({
  title,
  description,
  highlights,
}) => {
  return (
    <div className="border border-about-bg p-6 rounded-lg space-y-4">
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-semibold flex items-center space-x-2">
          <span className="uppercase">{title}</span>
          <GlossyButton />
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
};

export default ServiceHighlights;
