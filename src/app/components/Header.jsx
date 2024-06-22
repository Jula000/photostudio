"use client";
import Link from "next/link";
import NavLink from "./common/NavLink";
import Button from "./common/Button";

export default function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">DAMIEN</div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/services">Services</NavLink>
        </nav>

        {/* Contact Me Button */}
        <Link href="/contact">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </header>
  );
}
