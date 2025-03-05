// Hero.js
import React from "react";
import { motion } from "framer-motion";
import main from "../../main.png";

const dropInVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
};

const floatingAnimation = {
  y: [0, -10, 0], // Moves up by 10px, then back to original position
  transition: {
    duration: 3, // Takes 3 seconds per cycle
    repeat: Infinity, // Loops forever
    ease: "easeInOut",
  },
};

const Hero = () => {
  return (
    <div className="bg-custom-pink">
      <section className="mx-auto max-w-screen-xl h-170 pt-12 pb-12 px-4 items-center lg:flex md:px-8">
        
        {/* Animated Text Section */}
        <motion.div
          variants={dropInVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 flex-1 sm:text-center lg:text-left"
        >
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Discover Unique Handmade Treasures at  
            <span className="text-custom-copper"> CraftMarket</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Empowering Women, One Handmade Creation at a Time
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Check our Collections
            </a>
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-custom-copper text-black-200 text-center rounded-md block sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          variants={dropInVariants}
          initial=""
          animate= {floatingAnimation}
          transition={{ delay: 0.9, type: "spring", stiffness: 100, damping: 10 }}
          className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3"
        >
          <img src={main} className="w-full mx-auto sm:w-10/12 lg:w-full" alt="Dream Car" />
        </motion.div>

      </section>
    </div>
  );
};

export default Hero;

