import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hexagon from "../../../components/Hexagon";
import combOne from "../../../assets/combOne.jpg";
import combTwo from "../../../assets/combTwo.jpg";
import combFour from "../../../assets/combFour.jpg";
import combThree from "../../../assets/combThree.jpg";

const imageSources = [combOne, combTwo, combFour, combThree];

const AboutProduct = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      id="aboutProducts"
      className="p-6 flex flex-col lg:flex-row bg-yellow-100 justify-center items-center align-middle h-auto lg:h-[90vh] border-b-2"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Honeycomb Section */}
      <div className={`honeycomb-container lg:w-1/2 ${inView ? "active" : ""}`}>
        {imageSources.map((src, index) => (
          <Hexagon key={index} index={index} imageSrc={src} />
        ))}
      </div>

      {/* Write-up Section */}
      <motion.div
        className="lg:w-1/2 p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h4 className="text-4xl font-bold mb-4">About the Products</h4>
        <p className="text-lg">
          Honey has been a staple in natural remedies and culinary delights for centuries. Our honey is
          sourced from the finest flowers, providing a rich, pure taste that you can enjoy in your tea, on
          toast, or straight from the jar. Learn more about the benefits and origins of our honey in this section!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutProduct;
