import React, { useEffect, useState } from "react";
import CardComponent from "../card/card"; // Ensure the correct path

const CardGrid = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const data = Array.from({ length: 12 }).map((_, index) => ({
      title: `Product ${index + 1}`,
      imgSrc: "https://i.imgur.com/ItiYQHM.png", // Placeholder image
      price: (index + 1) * 100000, // Original price value
      rating: 5,
    }));

    console.log(data); // Debugging line
    setCardsData(data);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
      {cardsData.map((card, index) => (
        <CardComponent
          key={index}
          cardData={{
            ...card,
            formattedPrice: card.price, // Pass price directly without formatting
          }}
        />
      ))}
    </div>
  );
};

export default CardGrid;
