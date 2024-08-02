"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Button from "./Button";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-gray-600 border-b">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold border-l border-gray-600 p-6">
            <Link href="/">DAMIEN</Link>
          </div>
        </div>

        <div className="hidden lg:flex self-end">
          <nav className="flex border-x border-t border-gray-600 rounded-md">
            <NavLink href="/" className="border-r p-5 border-gray-600">
              Home
            </NavLink>
            <NavLink href="/about" className="border-r p-5 border-gray-600">
              About Me
            </NavLink>
            <NavLink href="/portfolio" className="border-r p-5 border-gray-600">
              Portfolio
            </NavLink>
            <NavLink href="/services" className="p-5">
              Services
            </NavLink>
          </nav>
        </div>

        <div className="hidden lg:flex p-6 border-r border-gray-600">
          <Link href="/contact" className="font-bold">
            <Button>Contact Me</Button>
          </Link>
        </div>

        <div className="lg:hidden flex items-center border-r p-3 border-gray-600">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none border rounded-3xl p-3 border-gray-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 border-t bg-main-color border-gray-600 z-50">
          <nav className="flex flex-col space-y-4 p-5">
            <NavLink href="/" className="p-2 border-b border-gray-600">
              Home
            </NavLink>
            <NavLink href="/about" className="p-2 border-b border-gray-600">
              About Me
            </NavLink>
            <NavLink href="/portfolio" className="p-2 border-b border-gray-600">
              Portfolio
            </NavLink>
            <NavLink href="/services" className="p-2 border-b border-gray-600">
              Services
            </NavLink>
            <Link href="/contact" className="p-2 border-b border-gray-600">
              <Button>Contact Me</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
