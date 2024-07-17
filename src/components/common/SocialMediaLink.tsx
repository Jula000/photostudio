import Link from "next/link";
import React from "react";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  icon: Icon,
}) => {
  return (
    <Link href={href} passHref>
      <div
        className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full flex items-center justify-center"
        style={{ width: "40px", height: "40px" }}
      >
        <Icon className="w-4 h-4" />
      </div>
    </Link>
  );
};

export default SocialMediaLink;
