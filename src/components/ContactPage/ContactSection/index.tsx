import React from "react";
import SocialMediaButtons from "@/components/common/SocialMediaButtons";

const Contact: React.FC = () => {
  return (
    <div className=" text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12">
        <div className="md:w-1/2">
          <h3 className="text-sm uppercase mb-2">Contact Me</h3>
          <h1 className="text-4xl font-bold mb-4">Get In Touch With Me</h1>
          <p className="text-lg mb-8">
            Step into a world of timeless photography with Damien Braun. Explore
            our range of photography services, each crafted to tell your unique
            story through captivating images. Whether it's the magic of
            portraits, the emotion of events, or the allure of commercial
            photography, we're here to bring your vision to life.
          </p>
        </div>
        <div className="md:w-auto md:ml-4 flex justify-center md:justify-end">
          <SocialMediaButtons />
        </div>
      </div>
    </div>
  );
};

export default Contact;
