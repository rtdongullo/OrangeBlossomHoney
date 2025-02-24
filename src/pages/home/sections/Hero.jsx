import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../../assets/heroImage.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative p-6 flex justify-center bg-cover bg-center bg-no-repeat items-center align-middle h-[70vh] md:h-[80vh] lg:h-[100vh] border-b-2"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-[#000000] opacity-60"></div>

      {/* Animated Text */}
      <motion.div
        className="z-10 text-center text-white px-4 sm:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h4 className="text-lg sm:text-2xl lg:text-3xl font-extrabold font-serif tracking-wide drop-shadow-md">
          Pure, sweet, and straight from the hive
        </h4>
        <h4 className="text-base sm:text-xl lg:text-2xl font-semibold font-sans italic mt-2 drop-shadow-sm">
          Experience honey like never before!
        </h4>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4 mt-4 sm:mt-6">
          {/* Shop Now Button */}
          <motion.a
            href="https://paystack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-[#2D1B0F] font-semibold text-lg sm:text-xl px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-yellow-100"
            whileHover={{ scale: 1.1 }}
          >
            Shop Now
          </motion.a>

          {/* View Products Button */}
          <Link Link to="gallery" smooth={true} duration={500}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              duration={500}
              className="inline-block text-white font-semibold text-lg sm:text-xl px-6 py-3 border-2 border-yellow-400 rounded-lg transition-transform transform hover:scale-105 hover:bg-yellow-100 hover:text-[#2D1B0F] cursor-pointer"

            >
              View Products
            </motion.a>
          </Link>
        </div>

      </motion.div>

    </div>
  );
};

export default Hero;
