import React from "react";
import Link from "next/link";
import Button from "@/components/common/Button";

const projects = {
  portraits: [
    { title: "Faces of Resilience", date: "March 2022", image: "/kytsya.jpg" },
    { title: "Innocence Unveiled", date: "January 2020", image: "/kytsya.jpg" },
    {
      title: "Elegance in Monochrome",
      date: "January 2023",
      image: "/kytsya.jpg",
    },
  ],
  events: [
    { title: "A Wedding Tale", date: "September 2022", image: "/kytsya.jpg" },
    {
      title: "Corporate Excellence Summit",
      date: "November 2019",
      image: "/kytsya.jpg",
    },
    { title: "Festival of Colors", date: "March 2018", image: "/kytsya.jpg" },
  ],
  commercial: [
    { title: "Product Elegance", date: "August 2020", image: "/kytsya.jpg" },
    { title: "Brand Storytelling", date: "May 2019", image: "/kytsya.jpg" },
    { title: "Culinary Delights", date: "February 2017", image: "/kytsya.jpg" },
  ],
};

const PhotographySection: React.FC = () => {
  const renderProjects = (
    projects: { title: string; date: string; image: string }[]
  ) => (
    <>
      <div className="flex justify-end space-x-4 mb-6">
        <Button className="p-2 rounded-full">{"<"}</Button>
        <Button className="p-2 rounded-full">{">"}</Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center w-96">
            <Link
              href="#"
              className="group cursor-pointer w-full h-96 bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${project.image})` }}
            ></Link>
            <div className="mt-4 flex flex-col self-start">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm">{project.date}</p>
              <p className="mt-2 text-sm font-semibold text-blue-500 cursor-pointer">
                VIEW PROJECT
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8"></div>
    </>
  );

  return (
    <div className="text-white py-16">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">PORTRAITS PHOTOGRAPHY</h1>
        {renderProjects(projects.portraits)}
      </section>
      <section className="container mx-auto px-4 mt-16">
        <h1 className="text-4xl font-bold mb-8">EVENTS PHOTOGRAPHY</h1>
        {renderProjects(projects.events)}
      </section>
      <section className="container mx-auto px-4 mt-16">
        <h1 className="text-4xl font-bold mb-8">COMMERCIAL PHOTOGRAPHY</h1>
        {renderProjects(projects.commercial)}
      </section>
    </div>
  );
};

export default PhotographySection;
