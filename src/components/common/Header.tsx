import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <header className="border-gray-700 border-b">
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold border-l border-gray-700 p-5 ">
            DAMIEN
          </div>
        </div>

        <nav className="flex border-x border-t border-gray-700 rounded-md ml-6 mt-5">
          <NavLink
            href="/"
            className="border-r p-5 border-gray-700 items-center"
          >
            Home
          </NavLink>
          <NavLink
            href="/about"
            className="border-r p-5 border-gray-700 items-center"
          >
            About Me
          </NavLink>
          <NavLink
            href="/portfolio"
            className="border-r p-5 border-gray-700 items-center"
          >
            Portfolio
          </NavLink>
          <NavLink href="/services" className="p-5 items-center">
            Services
          </NavLink>
        </nav>

        <Link
          href="/contact"
          className="font-bold border-r border-gray-700 p-5"
        >
          <div className="inline-block">
            <Button>Contact Me</Button>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
