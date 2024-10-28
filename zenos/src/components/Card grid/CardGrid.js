// src/components/CardGrid.js
import React from "react";
import CardComponent from "../card/card";

const CardGrid = () => {
  // Dummy data for cards
  const cardsData = Array.from({ length: 12 }).map((_, index) => ({
    title: `Product ${index + 1}`,
    imgSrc: "https://i.imgur.com/XR7wb7v.jpeg", // Placeholder image
    price: `Ksh${(index + 1) * 100}`,
    rating: 5, // Assuming all cards have a rating of 5 for now
  }));

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {cardsData.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          imgSrc={card.imgSrc}
          price={card.price}
          rating={card.rating}
        />
      ))}
    </div>
  );
};

export default CardGrid;
