import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">DAMIEN</div>

        {/* Navigation */}
        <nav className="flex space-x-6 ">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/services">Services</NavLink>
        </nav>

        {/* Contact Me Button */}
        <Link href="/contact">
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full">
            Contact Me
          </button>
        </Link>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white">
      {children}
    </Link>
  );
}
