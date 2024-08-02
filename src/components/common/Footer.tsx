import React from "react";
import Link from "next/link";
import SocialMediaButtons from "./SocialMediaButtons";
import GlossyButton from "./GlossyButton";

const Footer: React.FC = () => {
  return (
    <footer className="pt-10 text-white">
      <div className="flex-grow container mx-auto">
        <section className="py-20 text-center lg:text-right">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white/40">
            DAMIEN
          </h1>
        </section>
      </div>
      <div className="border-t border-gray-600 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:border-l lg:border-r border-gray-600">
            <div className="lg:w-1/3 px-4 py-12 md:border-r border-gray-600">
              <h2 className="text-base font-semibold text-gray-400 pb-5 pt-12 lg:pt-0">
                A MORE MEANINGFUL HOME FOR PHOTOGRAPHY
              </h2>
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="text-3xl lg:text-5xl font-semibold">
                    Let's
                  </span>
                  <GlossyButton className="h-16 ml-2 lg:ml-4 px-6 lg:px-12" />
                </div>
                <span className="text-3xl lg:text-5xl font-bold">
                  Work Together
                </span>
              </div>
            </div>
            <div className="flex flex-wrap lg:justify-between lg:flex-grow mt-10 lg:mt-0 lg:px-10 md:px-10 self-center">
              <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6 lg:mb-0">
                <h3 className="font-semibold text-gray-400">HOME</h3>
                <ul className="mt-2 space-y-2">
                  <li className="border-b border-gray-600 pb-1">
                    <Link href="/about">About Me</Link>
                  </li>
                  <li className="border-b border-gray-600 pb-1">
                    <Link href="/works">My Works</Link>
                  </li>
                  <li className="border-b border-gray-600 pb-1">
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6 lg:mb-0">
                <h3 className="font-semibold text-gray-600">CLIENTS</h3>
                <ul className="mt-2 space-y-2">
                  <li className="border-b border-gray-600 pb-1">Klovesto</li>
                  <li className="border-b border-gray-600 pb-1">Nukeway</li>
                  <li className="border-b border-gray-600 pb-1">Cloven's</li>
                  <li className="border-b border-gray-600 pb-1">Menvol</li>
                </ul>
              </div>
              <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6 lg:mb-0">
                <h3 className="font-semibold text-gray-600">PORTFOLIO</h3>
                <ul className="mt-2 space-y-2">
                  <li className="border-b border-gray-600 pb-1">Events</li>
                  <li className="border-b border-gray-600 pb-1">Portrait</li>
                  <li className="border-b border-gray-600 pb-1">Branding</li>
                  <li className="border-b border-gray-600 pb-1">Commerciale</li>
                  <li className="border-b border-gray-600 pb-1">Wedding</li>
                </ul>
              </div>
              <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6 lg:mb-0">
                <h3 className="font-semibold text-gray-600">SERVICES</h3>
                <ul className="mt-2 space-y-2">
                  <li className="border-b border-gray-600 pb-1">Portraits</li>
                  <li className="border-b border-gray-600 pb-1">Events</li>
                  <li className="border-b border-gray-600 pb-1">Commercial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              <Link href="/terms">Terms & Conditions</Link> |{" "}
              <Link href="/privacy">Privacy Policy</Link>
            </div>
            <div className="mb-4 md:mb-0">
              <SocialMediaButtons />
            </div>
            <div className="text-sm">
              &copy; 2024 Damien Braun Photography. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
