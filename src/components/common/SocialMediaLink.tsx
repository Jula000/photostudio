import React from "react";
import { IconType } from "react-icons";

interface SocialMediaLinkProps {
  href: string;
  icon: IconType;
  className?: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  icon: Icon,
  className = "",
}) => {
  return (
    <a
      href={href}
      className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 ${className}"
    >
      <Icon className="h-3 w-3" />
    </a>
  );
};

export default SocialMediaLink;
