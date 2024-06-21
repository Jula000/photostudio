import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Button = ({ text, className }) => (
  <button
    className={`bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 ${className}`}
  >
    {text}
  </button>
);

const Section = ({ title, children }) => (
  <div className="border border-about-bg p-6 rounded-lg space-y-4">
    <div className="flex items-center space-x-2">
      <span className="text-blue-400">✦</span>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    {children}
  </div>
);

const SocialMediaButtons = () => (
  <div className="inline-flex border border-about-bg px-4 py-2 rounded-3xl mr-6	 ">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-white mr-2"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://x.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-white mr-2"
    >
      <FaXTwitter />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-white"
    >
      <FaLinkedinIn />
    </a>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">I AM DAMIEN</h1>
          <Button text="Know More ➔" />
        </div>
        <div className="relative flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="relative w-full md:w-1/2 h-80">
            <Image
              src="/kytsya.jpg"
              alt="Damien"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <Section title="Introduction">
              <p>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </Section>
            <Section title="Contact Information">
              <p>Email: damienbraun@gmail.com</p>
              <p>Phone Number: +00 0000000000</p>
              <div className="flex">
                <SocialMediaButtons />
                <div className="flex space-x-4">
                  <Button text="Let's Work" />
                  <Button text="Download CV" />
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
