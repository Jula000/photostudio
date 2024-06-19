"use client";

import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <span className="text-gray-300 hover:text-white transition duration-300">
        {children}
      </span>
    </Link>
  );
}
