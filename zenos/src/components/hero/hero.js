// Hero.js
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-custom-blue mx-auto h-full py-28 sm:max-w-xl md:max-w-full md:px-24 md:py-40 lg:px-9 lg:mx-6">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://i.imgur.com/tmmSn07.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center"> {/* Centering items */}
        
        <div className="lg:max-w-lg text-center lg:text-left lg:pr-10"> {/* Center text, add right padding */}
          <p className="flex text-sm uppercase text-gray-300 justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 inline h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Find Your Dream Car Today
          </p>
          <h2 className="mb-4 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl">
            We make you drive{" "}
            <span className="my-1 inline-block border-b-8 border-white bg-custom-orange 400 px-4 font-bold">
              classy
            </span>
          </h2>
          <p className="text-base text-gray-400 mb-4">
          </p>
          <div className="mt-6 flex flex-col items-center"> {/* Center buttons */}
            
            <a
              href="/"
              className="group inline-flex items-center font-semibold text-white"
            >
              Browse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* The image is now a background, so this section is removed */}
        
      </div>
    </div>
  );
};

export default Hero;
