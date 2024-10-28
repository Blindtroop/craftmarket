import React from "react";

const CardComponent = ({ cardData }) => {
  return (
    <div className="p-5  shadow-md ">
      <a href="#">
        <img
          src={cardData.imgSrc}
          alt={cardData.title}
          className="sm:h-[150px]"
          style={{ width: "68%", height: "250px", objectFit: "contain" }}
        />
        <h5 className="text-xl font-semibold tracking-tight text-custom-dark-gray">
          {cardData.title}
        </h5>
      </a>
      <div className="flex items-center justify-between mt-2">
        <span className="text-3xl font-bold text-custom-dark-gray">
          {cardData.price || "N/A"} {/* Displaying the original price */}
        </span>
        <button className="rounded-lg bg-white px-5 py-2.5 text-center border-2 border-b-custom-orange text-sm font-medium text-custom-orange hover:border-custom-orange transition duration-200 ease-in-out">
        Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardComponent;

