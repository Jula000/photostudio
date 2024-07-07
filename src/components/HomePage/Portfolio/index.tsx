import React from "react";
import Link from "next/link";
import Button from "../../common/Button";
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
    <div className="text-white py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Explore My Photography Work
        </h1>
      </div>
      <div className="container mx-auto">
        <ProjectList projects={projects} />
      </div>
      <div className="text-center mt-8">
        <Link href="/all-works">
          <Button className="px-6 py-3 rounded-lg">View All Works →</Button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
