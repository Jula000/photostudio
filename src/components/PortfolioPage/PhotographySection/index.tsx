import React from "react";
import ProjectList from "@/components/common/ProjectList";

const projects = {
  portraits: [
    {
      title: "Faces of Resilience",
      date: "March 2022",
      image: "/kytsya.jpg",
      link: "/projects/faces-of-resilience",
    },
    {
      title: "Innocence Unveiled",
      date: "January 2020",
      image: "/public/kytsya.jpg",
      link: "/projects/innocence-unveiled",
    },
    {
      title: "Elegance in Monochrome",
      date: "January 2023",
      image: "/kytsya.jpg",
      link: "/projects/elegance-in-monochrome",
    },
  ],
  events: [
    {
      title: "A Wedding Tale",
      date: "September 2022",
      image: "/kytsya.jpg",
      link: "/projects/a-wedding-tale",
    },
    {
      title: "Corporate Excellence Summit",
      date: "November 2019",
      image: "/kytsya.jpg",
      link: "/projects/corporate-excellence-summit",
    },
    {
      title: "Festival of Colors",
      date: "March 2018",
      image: "/kytsya.jpg",
      link: "/projects/festival-of-colors",
    },
  ],
  commercial: [
    {
      title: "Product Elegance",
      date: "August 2020",
      image: "/kytsya.jpg",
      link: "/projects/product-elegance",
    },
    {
      title: "Brand Storytelling",
      date: "May 2019",
      image: "/kytsya.jpg",
      link: "/projects/brand-storytelling",
    },
    {
      title: "Culinary Delights",
      date: "February 2017",
      image: "/kytsya.jpg",
      link: "/projects/culinary-delights",
    },
  ],
};

const PhotographySection: React.FC = () => {
  return (
    <div className="text-white py-16">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">PORTRAITS PHOTOGRAPHY</h1>
        <ProjectList projects={projects.portraits} />
      </section>
      <section className="container mx-auto px-4 mt-16">
        <h1 className="text-4xl font-bold mb-8">EVENTS PHOTOGRAPHY</h1>
        <ProjectList projects={projects.events} />
      </section>
      <section className="container mx-auto px-4 mt-16">
        <h1 className="text-4xl font-bold mb-8">COMMERCIAL PHOTOGRAPHY</h1>
        <ProjectList projects={projects.commercial} />
      </section>
    </div>
  );
};

export default PhotographySection;
