import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Faces of Resilience",
    date: "March 2022",
    image: "/kytsya.jpg",
    link: "",
  },
  {
    title: "A Wedding Tale",
    date: "January 2020",
    image: "/kytsya.jpg",
    link: "",
  },
  {
    title: "Product Elegance",
    date: "January 2020",
    image: "/kytsya.jpg",
    link: "",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Explore My Photography Work
        </h1>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-gray-800 p-2 rounded">{"<"}</button>
          <button className="bg-gray-800 p-2 rounded">{">"}</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="relative group cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 rounded-lg"></div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm">{project.date}</p>
                  <p className="mt-2 text-sm font-semibold">VIEW PROJECT</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/all-works">
            <button className="bg-gray-800 px-6 py-3 rounded-lg">
              View All Works →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
