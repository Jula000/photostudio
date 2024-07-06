import React from 'react';
import ProjectList from '@/components/common/ProjectList';

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
