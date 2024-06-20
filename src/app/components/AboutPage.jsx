import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-bold">I AM DAMIEN</h1>
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
            <div>
              <h2 className="text-xl font-semibold">Introduction</h2>
              <p>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p>Email: damienbraun@gmail.com</p>
              <p>Phone Number: +00 0000000000</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-gray-800 px-4 py-2 rounded">
                Let's Work
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
