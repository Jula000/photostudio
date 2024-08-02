import React from "react";
import Link from "next/link";
import Button from "../../common/Button";
import SocialMediaButtons from "../../common/SocialMediaButtons";
import Ratings from "./Ratings";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily Johnson",
    location: "USA, California",
    rating: 5,
    text: "Damien's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing.",
  },
  {
    name: "John Smith",
    location: "USA, California",
    rating: 5,
    text: "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
  },
  {
    name: "Samantha Davis",
    location: "USA, California",
    rating: 5,
    text: "I was blown away by Damien's ability to capture the essence of our wedding day. His photographs are our cherished memories.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-semibold uppercase text-gray-400">
          Testimonials
        </h2>
        <h1 className="text-4xl font-bold mb-6">What My Clients Say</h1>
        <p className="mb-2 text-gray-400">Total Reviews</p>
        <div className="flex justify-between border-b border-gray-600 pb-10">
          <p className="text-2xl font-bold self-center">323</p>
          <div className="flex space-x-4 ml-3 items-center">
            <div className="border border-gray-600 rounded-full space-x-4 p-2">
              <Button className="p-2 rounded-full">{"<"}</Button>
              <Button className="p-2 rounded-full">{">"}</Button>
            </div>
            <Link href="/all-testimonials">
              <Button className="px-6 py-3 rounded-lg">
                View All Testimonials →
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <SocialMediaButtons className="inline-flex rounded-3xl border border-gray-900 p-1 bg-main-color" />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Ratings rating={testimonial.rating} />
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
