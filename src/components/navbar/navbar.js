// src/components/Navbar.js
import React, { useState } from "react";
import CartDrawer from "../CartDrawer/CartDrawer" // Import the CartDrawer component

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <header className="relative flex flex-col bg-gray-900 overflow-hidden px-2 py-4 text-custom-orange md:mx-auto md:flex-row md:items-center">
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
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="font-bold text-custom-orange md:mr-12">
              <a href="/">Home</a>
            </li>
            <li className="font-bold text-custom-orange md:mr-12">
              <a href="/home">Collection</a>
            </li>
            <li className="md:mr-12">
              <button
                className="font-bold rounded-full border-2 border-custom-orange px-6 py-1 text-custom-orange transition-colors hover:bg-gray hover:text-red-700"
                onClick={toggleDrawer} // Open drawer on click
              >
                Cart
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Render the CartDrawer component */}
      <CartDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
