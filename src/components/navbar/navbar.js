import React, { useState } from "react";
import CartDrawer from "../CartDrawer/CartDrawer"; 
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from "../../Contexts/CartContext"; // Import the useCart hook

const Navbar = () => {
  const { cartItems, addToCart, removeFromCart } = useCart(); // Access cart context
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Calculate total item count in cart
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="relative flex justify-between items-center bg-gray-900 overflow-hidden px-2 py-4 text-custom-orange md:mx-auto md:flex-row">
        <a
          href="/"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-custom-orange"
        >
          <img
            src="https://i.imgur.com/jn2PBVY.png"
            alt="Car Icon"
            className="mr-2 h-10 w-10"
          />
          Zenos
        </a>
        <nav aria-label="Header Navigation" className="md:flex md:items-center">
          <ul className="flex flex-col items-center space-y-2 md:flex-row md:space-x-12 md:space-y-0">
            <li className="font-bold text-custom-orange">
              <a href="/">Home</a>
            </li>
            <li className="font-bold text-custom-orange">
              <a href="/home">Collection</a>
            </li>
            <li className="relative">
              <button
                className="font-bold rounded-full border-2 border-custom-orange px-6 py-1 text-custom-orange transition-colors hover:bg-gray hover:text-red-700 relative"
                onClick={toggleDrawer}
              >
                <FaCartPlus className="inline-block" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItemsInCart > 0 ? totalItemsInCart : 0}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Render the CartDrawer component with necessary props */}
      <CartDrawer 
        isOpen={isDrawerOpen} 
        toggleDrawer={toggleDrawer} 
        cartItems={cartItems} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
      />
    </>
  );
};

export default Navbar;
