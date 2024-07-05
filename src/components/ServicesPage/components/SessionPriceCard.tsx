import React from "react";

interface SessionPriceCardProps {
  title: string;
  price: number;
  duration: string;
  imagesIncluded: number;
  additionalImagePrice: number;
  description: string;
}

const SessionPriceCard: React.FC<SessionPriceCardProps> = ({
  title,
  price,
  duration,
  imagesIncluded,
  additionalImagePrice,
  description,
}) => {
  return (
    <div className="flex justify-between items-center text-white p-6 rounded-lg shadow-md">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-4xl font-bold">${price}</p>
        <button className="mt-2 text-sm text-yellow-500 hover:text-yellow-600">
          BOOK A CALL &rarr;
        </button>
      </div>
      <div className="flex flex-col space-y-2 text-sm">
        <p>★ {description}</p>
        <p>
          ★ Includes a {duration} photoshoot and {imagesIncluded} professionally
          edited images.
        </p>
        <p>
          ★ Additional images can be purchased at ${additionalImagePrice} each.
        </p>
      </div>
    </div>
  );
};

export default SessionPriceCard;
