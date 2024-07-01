import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">ABOUT DAMIEN BRAUN</h1>
        <div className="flex flex-wrap mb-16">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-gray-400">Years in Business</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-gray-400">Photography Awards</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold">05+</div>
              <div className="text-sm text-gray-400">International Shoots</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-sm text-gray-400">
                Social Media Followers
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold">90%</div>
              <div className="text-sm text-gray-400">Client Retention Rate</div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4">MY BIOGRAPHY</h2>
        <p className="text-lg leading-relaxed">
          Damien Braun's love affair with photography began at a young age,
          nurtured by the captivating landscapes and vibrant cultures
          surrounding her in the heart of the USA. Her passion for storytelling
          through imagery led her to embark on a photography journey that has
          spanned over 15 years. Driven by an insatiable curiosity to explore
          the beauty in everyday moments, Damien has honed her craft
          meticulously. Her background in digital media provided her with a
          solid foundation, but it's her keen eye for detail and an innate
          ability to capture raw emotions that truly set her apart. Damien's
          journey is more than just taking pictures; it's about capturing the
          essence of the human spirit, the fleeting magic of nature, and the
          emotions that define our lives. With each click of her camera, she
          weaves stories that transcend time and space.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
