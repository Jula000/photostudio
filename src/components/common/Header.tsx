import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-white text-2xl font-bold">DAMIEN</div>

        <nav className="flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/services">Services</NavLink>
        </nav>

        <Link href="/contact" passHref>
          <div className="inline-block">
            <Button>Contact Me</Button>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
