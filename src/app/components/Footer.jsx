import SocialMediaButtons from "./common/SocialMediaButton";
import Link from "next/link";
import Button from "./common/Button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="flex-grow container mx-auto">
        <section className="py-20">
          <h1 className="text-136-px font-bold text-white/40 flex justify-end">
            DAMIEN
          </h1>
        </section>
      </div>
      <div className="text-white min-h-screen flex flex-col">
        <div className="container mx-auto flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              A MORE MEANINGFUL HOME FOR PHOTOGRAPHY
            </h2>
            <div className="flex mb-2">
              <div className="flex font-manrope uppercase flex-col items-start font-semibold text-5xl">
                <div className="flex mb-2">
                  <span>Let's</span>
                  <Button className="px-8 py-3 rounded-full ml-3 ">
                    <Image src="/hero-btn.svg" width={20.62} height={20.62} />
                  </Button>
                </div>
                <span className=" font-bold ml-0 inline-block">
                  Work Together
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-20">
            <div>
              <h3 className="font-semibold">HOME</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/about">About Me</Link>
                </li>
                <li>
                  <Link href="/works">My Works</Link>
                </li>
                <li>
                  <Link href="/testimonials">Testimonials</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">CLIENTS</h3>
              <ul className="mt-2 space-y-2">
                <li>Klovesto</li>
                <li>Nukeway</li>
                <li>Cloven's</li>
                <li>Menvol</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">PORTFOLIO</h3>
              <ul className="mt-2 space-y-2">
                <li>Events</li>
                <li>Portrait</li>
                <li>Branding</li>
                <li>Commerciale</li>
                <li>Wedding</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">SERVICES</h3>
              <ul className="mt-2 space-y-2">
                <li>Portraits</li>
                <li>Events</li>
                <li>Commercial</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 flex justify-between items-center">
          <div className="text-sm">
            <Link href="/terms">Terms & Conditions</Link> |{" "}
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className="space-x-4">
            <SocialMediaButtons />
          </div>
          <div className="text-sm">
            &copy; 2024 Damien Braun Photography. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
