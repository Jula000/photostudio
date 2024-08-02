import React from "react";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-white">
      <div className="flex items-center space-x-4 mb-8 justify-between">
        <div className="flex flex-col space-y-2">
          <p className="uppercase text-base text-gray-400">About</p>
          <h1 className="text-4xl font-bold">ABOUT DAMIEN BRAUN</h1>
        </div>
        <div className="relative h-36 lg:w-7/12 xl:w-10/12 rounded-3xl overflow-hidden bg-cover bg-center custom-bg-image"></div>
      </div>
      <div className="flex flex-wrap mb-8 justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { count: "15+", label: "Years in Business" },
            { count: "500+", label: "Happy Clients" },
            { count: "10+", label: "Photography Awards" },
            { count: "05+", label: "International Shoots" },
            { count: "10,000+", label: "Social Media Followers" },
            { count: "90%", label: "Client Retention Rate" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold">{item.count}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="container mx-auto px-4 mb-16">
        <div
          className="relative w-full h-96 rounded-3xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/kytsya.jpg')" }}
        ></div>
      </section>
      <h2 className="text-3xl font-bold mb-4">MY BIOGRAPHY</h2>
      <p className="text-lg leading-relaxed">
        Damien Braun's love affair with photography began at a young age,
        nurtured by the captivating landscapes and vibrant cultures surrounding
        her in the heart of the USA. Her passion for storytelling through
        imagery led her to embark on a photography journey that has spanned over
        15 years. Driven by an insatiable curiosity to explore the beauty in
        everyday moments, Damien has honed her craft meticulously. Her
        background in digital media provided her with a solid foundation, but
        it's her keen eye for detail and an innate ability to capture raw
        emotions that truly set her apart. Damien's journey is more than just
        taking pictures; it's about capturing the essence of the human spirit,
        the fleeting magic of nature, and the emotions that define our lives.
        With each click of her camera, she weaves stories that transcend time
        and space.
      </p>
    </section>
  );
};

export default AboutSection;
