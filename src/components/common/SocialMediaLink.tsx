import Link from "next/link";
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
    <Link
      href={href}
      className={`bg-gray-800 p-3 rounded-full hover:bg-gray-700 h-9 w-9 ${className}`}
    >
      <Icon className="h-3 w-3 justify-center" />
    </Link>
  );
};

export default SocialMediaLink;
