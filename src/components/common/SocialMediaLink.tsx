import Link from "next/link";
import React from "react";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ComponentType;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  icon: Icon,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-white"
    >
      <Icon />
    </Link>
  );
};

export default SocialMediaLink;
