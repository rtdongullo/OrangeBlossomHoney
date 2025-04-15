import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WaterMark from "../../../assets/waterMark.png";
import { Link } from "react-router-dom";
import AnnieOriginal from "../../../assets/annieOriginal.jpg"

const AboutInnovator = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("aboutInnovator");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <div
      id="aboutInnovator"
      className="relative bg-[#f4f1e7] p-4 flex flex-col lg:flex-row justify-center items-center align-middle h-auto lg:h-[100vh]"
    >
      {/* Watermark */}
      <img
        src={WaterMark}
        alt="Watermark"
        className="absolute bottom-4 right-4 opacity-80 w-1/5 md:w-1/6 lg:w-1/8 max-w-[150px] min-w-[80px]"
      />

      {/* Image Section */}
      <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={imageVariants}>
          <div className="w-full sm:w-[500px] md:w-[500px] lg:w-[450px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[490px] 
          border-4 border-[#2D1B0F] rounded-lg overflow-hidden relative flex justify-center items-center">
            <img
              src={AnnieOriginal}
              alt="Image of Lifestyle Honey CEO"
              className="object-cover w-full h-full hover:scale-110 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col items-center gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-6">
        {/* Name Card */}
        <div className="bg-yellow-50 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 w-full sm:w-[90%] md:w-[80%] lg:w-[85%] text-center">
          <span className="text-xl md:text-2xl font-serif tracking-wide font-bold text-[#2D1B0F]">
            Winnie Abena Anhwere Anim
          </span>
        </div>

        {/* Description Card */}
        <div className="bg-yellow-50 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 w-full sm:w-[90%] md:w-[80%] lg:w-[85%]">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Innovator from Jukwa Efutu, Central Region, addresses the low yields of lemon farms and the lack of Ghanaian-made Orange Blossom Honey.
            Her solution involves deploying beehives to lemon farms for six weeks to enable pollination by bees, increasing lemon yields and producing
            organic Orange Blossom Honey. The honey is processed to meet Ghana's FDA and supermarket standards, ensuring availability, quality, and
            affordability for consumers. Revenue from honey sales compensates for the cost of moving the beehives, so farmers do not have to pay for
            the service.
          </p>
          <Link to="/story">
            <button className="mt-2 px-4 py-2 bg-[#E8A317] text-[#2D1B0F] font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-105">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
