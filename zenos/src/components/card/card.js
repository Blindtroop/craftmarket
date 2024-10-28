// CardComponent.js
"use client";

import React from "react";
import { Card } from "flowbite-react";

const CardComponent = ({ cardData }) => {
  return (
    <div className="p-4">
      <Card className="max-w-sm">
        <a href="#">
          <img 
            src={cardData.imgSrc} 
            alt={cardData.title} 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed height and width
          />
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {cardData.title}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${cardData.price}</span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </a>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
