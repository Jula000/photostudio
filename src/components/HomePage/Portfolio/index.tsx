import React from "react";
import Link from "next/link";
import Button from "../../common/Button";

interface Project {
  title: string;
  date: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Faces of Resilience",
    date: "March 2022",
    image: "/kytsya.jpg",
    link: "/faces-of-resilience",
  },
  {
    title: "A Wedding Tale",
    date: "January 2020",
    image: "/kytsya.jpg",
    link: "/a-wedding-tale",
  },
  {
    title: "Product Elegance",
    date: "January 2020",
    image: "/kytsya.jpg",
    link: "/product-elegance",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="text-white py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Explore My Photography Work
        </h1>
        <div className="flex justify-end space-x-4 mb-6">
          <Button className="p-2 rounded-full">{"<"}</Button>
          <Button className="p-2 rounded-full">{">"}</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center w-96">
              <Link href={project.link} className="group cursor-pointer w-full">
                <div
                  className="w-full h-96 bg-cover bg-center rounded-lg overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="mt-4 flex flex-col self-start">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm">{project.date}</p>
                  <p className="mt-2 text-sm font-semibold text-blue-500">
                    VIEW PROJECT
                  </p>
                </div>
              </Link>
            </div>
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
