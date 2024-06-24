import Image from "next/image";
import Link from "next/link";
import Button from "./common/Button";

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
          <Button className="p-2 rounded-full">{"<"}</Button>
          <Button className="p-2 rounded-full">{">"}</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div
                className="flex group cursor-pointer w-96 h-96 bg-cover bg-center rounded-lg overflow-hidden relative"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="rounded-lg"></div>
                <div className="flex place-self-end bottom-4 left-4 flex-col relative z-10">
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
            <Button className="px-6 py-3 rounded-lg">View All Works →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
