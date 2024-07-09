import GlossyButton from "@/components/common/GlossyButton";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mr-9">
            <div>
              <h1 className="text-4xl font-bold mb-4">Contact Information</h1>
              <p className="text-lg mb-8">
                Feel free to reach out to us through various channels. We are
                <br />
                available by phone, email, and social media for your
                convenience.
              </p>
            </div>
            <div className="flex md:flex-row md:items-center md:space-x-4">
              <div className="flex items-center space-x-2 mr-10">
                <span>+1-123-456-7890</span>
                <FaArrowRight className="text-blue-500" />
              </div>
              <div className="flex items-center space-x-2">
                <span>info@damienbraunphotography.com</span>
                <FaArrowRight className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-row justify-between">
          <div className="flex flex-col">
            <h3 className="uppercase mb-2 text-3xl">Send Me A Message</h3>
            <p className="text-lg mb-8">
              Have a specific inquiry or message for us? Please use the <br />
              contact form below, and we'll get back to you promptly.
            </p>
          </div>
          <div className="justify-self-start">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="mt-1 p-3 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm text-white"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="mt-1 p-3 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm text-white"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block p-3 w-full bg-gray-800 border-gray-700 rounded-md shadow-sm text-white"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    className="mt-1 p-3 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm text-white"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 p-3 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm text-white"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <span className="self-center uppercase text-6xl">
                  Send Message
                </span>
                <GlossyButton type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
