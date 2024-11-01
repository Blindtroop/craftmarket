import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../Contexts/CartContext";

const CardComponent = ({ cardData, index }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [mainImage, setMainImage] = useState(cardData.imgSrc);
  const [isSelected, setIsSelected] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  const handleOutsideClick = (e) => {
    if (isSelected && !e.target.closest(".card")) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    if (isSelected) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isSelected]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(cardData);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  // Handle mouse move for zoom effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" });
  };

  return (
    <>
      {isSelected && <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}

      <motion.div
        className={`card bg-white rounded-lg p-5 shadow-lg transition-all cursor-pointer ${isSelected ? "opacity-50" : ""}`}
        onClick={handleCardClick}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.25 }}
      >
        {/* Image Section with Zoom Effect */}
        <div className="flex items-center justify-center rounded-t-lg overflow-hidden relative">
          <img
            src={mainImage}  // Use mainImage as the source
            alt={cardData.title}
            className="w-full h-48 object-contain object-center transition-transform duration-300 ease-in-out"
            style={zoomStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-start gap-2 mt-3">
          {cardData.thumbnails?.length > 0 ? (
            cardData.thumbnails.map((thumbnail, idx) => (
              <img
                key={idx}
                src={thumbnail}
                alt={`Thumbnail ${idx + 1}`}
                onClick={(e) => {
                  e.stopPropagation();  // Prevent triggering handleCardClick
                  setMainImage(thumbnail);  // Set clicked thumbnail as main image
                }}
                className={`w-16 h-16 rounded-lg cursor-pointer object-cover border ${
                  mainImage === thumbnail ? "border-blue-400" : "border-gray-200"
                } hover:border-gray-400 transition-all`}
              />
            ))
          ) : (
            <p className="text-gray-500 text-sm">No thumbnails available</p>
          )}
        </div>

        {/* Other Card Content */}
        <div className="flex justify-between items-center mt-4">
          <h5 className="text-xl font-semibold text-gray-800">{cardData.title}</h5>
          <span className="px-2 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-lg">
            {cardData.country || "Unknown"}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {cardData.description || "No description available."}
        </p>
        <h2 className="text-2xl font-bold text-gray-800">Ksh {cardData.price}</h2>

        <div className="mt-4">
          <p className="text-gray-500 text-sm">Perfect for you, if you enjoy:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {cardData.badges?.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-lg"
              >
                {badge.emoji} {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2 px-4 rounded-lg transition-all duration-200 ${
              isAdded
                ? "bg-custom-orange text-white"
                : "bg-white border-2 border-custom-white text-custom-dark-gray hover:bg-custom-orange border-custom-orange hover:text-white"
            }`}
          >
            {isAdded ? "Added to Cart!" : "Add to cart"}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default CardComponent;
