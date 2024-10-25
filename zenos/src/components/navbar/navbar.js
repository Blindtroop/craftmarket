// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <header className="relative flex flex-col overflow-hidden px-2 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
      <a
        href="#"
        className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-500"
      >
        <img
          src="https://i.imgur.com/PY2trC2.png" // URL of the car icon
          alt="Car Icon"
          className="mr-2 h-10 w-10" // Adjust the size as needed
        />
        Zenos
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-7 cursor-pointer text-blue-600 md:hidden"
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
          <li className="font-bold text-black-100 md:mr-12">
            <a href="#">Pricing</a>
          </li>
          <li className="text-black-100 md:mr-12">
            <a href="#">Features</a>
          </li>
          <li className="text-black-100 md:mr-12">
            <a href="#">Support</a>
          </li>
          <li className="md:mr-12">
            <button className="rounded-full border-2 border-black px-6 py-1 font-medium text-black transition-colors hover:bg-gray hover:text-red-700">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

