import React from "react";
import ProjectList from "../../common/ProjectList";

const projects = [
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
    <div className="text-white py-12 container mx-auto">
      <div className="container mx-auto">
        <h3 className="uppercase text-base text-gray-400">Portfolio</h3>
        <h1 className=" text-4xl font-bold mb-12 uppercase border-b border-gray-700 pb-5">
          Explore My Photography Work
        </h1>
      </div>
      <div className="container mx-auto">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default Portfolio;
