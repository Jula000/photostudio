import { FaExternalLinkAlt } from "react-icons/fa";
const ServiceSection = ({ title, description, highlights }) => (
  <div className="border border-about-bg p-6 rounded-lg space-y-4">
    <div className="flex items-center space-x-2">
      <h2 className="text-2xl font-semibold flex items-center space-x-2">
        <span className="uppercase">{title}</span>
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
export default ServiceSection;
