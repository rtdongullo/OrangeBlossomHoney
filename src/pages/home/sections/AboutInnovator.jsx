import React, { useEffect, useState } from "react";
import AboutIn from "../../../assets/aboutIn.jpg";
import { motion } from "framer-motion";

const AboutInnovator = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("aboutInnovator");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set true when in view, false when out
      },
      { threshold: 0.6 } // Trigger at 60% visibility
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
    <div id="aboutInnovator" className="p-6 flex flex-col lg:flex-row justify-center items-center align-middle h-auto lg:h-[100vh] border-b-2">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Animate in & out on scroll
          variants={imageVariants}
        >
          <div className="w-full sm:w-[300px] md:w-[500px] lg:w-[450px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 
        border-4 border-[#2D1B0F] rounded-lg overflow-hidden relative flex justify-center items-center">
            <img 
              src={AboutIn} 
              alt="About Us Section Image" 
              className="object-cover w-full h-full hover:scale-110 transition-all duration-300" 
            />
          </div>
        </motion.div>
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col items-center gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-6">

        {/* Name Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 w-full sm:w-[90%] md:w-[80%] lg:w-[85%] text-center">
          <span className="text-xl md:text-2xl font-serif tracking-wide font-bold text-[#2D1B0F]">Winnie Abena Anhwere Anim</span>
        </div>

        {/* Description Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 w-full sm:w-[90%] md:w-[80%] lg:w-[85%]">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Innovator from Jukwa Efutu, Central Region, addresses the low yields of lemon farms and the lack of Ghanaian-made Orange Blossom Honey.
            Her solution involves deploying beehives to lemon farms for six weeks to enable pollination by bees, increasing lemon yields and producing
            organic Orange Blossom Honey. The honey is processed to meet Ghana's FDA and supermarket standards, ensuring availability, quality, and
            affordability for consumers. Revenue from honey sales compensates for the cost of moving the beehives, so farmers do not have to pay for
            the service.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutInnovator;
