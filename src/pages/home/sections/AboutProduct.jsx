import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hexagon from "../../../components/Hexagon";
import combOne from "../../../assets/combOne.jpg";
import combTwo from "../../../assets/combTwo.jpg";
import combFour from "../../../assets/combFour.jpg";
import combThree from "../../../assets/combThree.jpg";
import { FaTree, FaLemon, FaTint, FaCube } from "react-icons/fa";

const imageSources = [combOne, combTwo, combFour, combThree];

const AboutProduct = () => {
  const [inView, setInView] = useState(false);
  const [flavorPopup, setFlavorPopup] = useState(false);
  const [formPopup, setFormPopup] = useState(false);
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
    <div id="aboutProducts" className="p-6 bg-yellow-100 h-auto lg:h-[90vh] flex justify-center items-center">
    <div ref={ref} className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl">
      
      {/* Honeycomb Section */}
      <div className="honeycomb-container lg:w-1/2 min-h-[300px] flex justify-center items-center flex-wrap">
        {imageSources.map((src, index) => (
          <Hexagon key={index} index={index} imageSrc={src} />
        ))}
      </div>
  
      {/* Animated Text Section */}
      <motion.div
        className="lg:w-1/2 p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h4 className="text-4xl font-serif tracking-wide text-[#2D1B0F] font-bold mb-2">
          About the Products
        </h4>
        <p className="text-lg">
        Pure, organic honey sourced from lemon farms.
        Experience the golden touch of nature with every drop. Our honey is ethically harvested, ensuring the highest quality and taste.
        Each jar is packed with natural nutrients, offering a rich and delightful flavour. Savor the purity of raw honey, just as nature intended.
        </p>
        <h3 className="text-xl font-serif tracking-wide text-[#2D1B0F] font-bold mt-2 mb-2">
          Discover More
        </h3>
        <div className="flex gap-4">
          <button onClick={() => setFlavorPopup(true)} className="px-4 py-2 bg-[#E8A317] text-[#2D1B0F] font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105">
            Discover Flavours
          </button>
          <button onClick={() => setFormPopup(true)} className="px-4 py-2 bg-[#E8A317] text-[#2D1B0F] font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105">
            Discover Forms
          </button>
        </div>
      </motion.div>
    </div>
  
    {flavorPopup && (
      <Popup title="Discover Flavours" onClose={() => setFlavorPopup(false)}>
        <PopupCard icon={<FaTree />} title="Forest Flavour" description="Sourced from deep forest nectar, this honey boasts a rich, earthy sweetness with herbal undertones." />
        <PopupCard icon={<FaLemon />} title="Citrous Flavour" description="Infused with the essence of citrous blossoms, this honey offers a tangy and refreshing taste experience." />
      </Popup>
    )}
    
    {formPopup && (
      <Popup title="Discover Forms" onClose={() => setFormPopup(false)}>
        <PopupCard icon={<FaTint />} title="Liquid Form" description="Golden, smooth, and easy to drizzle, our liquid honey is perfect for cooking, baking, or stirring into beverages." />
        <PopupCard icon={<FaCube />} title="Cube Form" description="Solid, bite-sized honey cubes for a convenient, mess-free way to enjoy natural sweetness anywhere." />
      </Popup>
    )}
  </div>
  
  );
};

const Popup = ({ title, children, onClose }) => (
  <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <motion.div className="bg-yellow-100 p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
      <h2 className="text-2xl font-serif tracking-wide text-[#2D1B0F] mb-4">{title}</h2>
      {children}
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-yellow-600 text-[#2D1B0F] font-bold rounded">Close</button>
    </motion.div>
  </motion.div>
);

const PopupCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md mb-4">
    <div className="text-3xl text-[#E8A317] mb-2">{icon}</div>
    <h3 className="text-lg font-serif tracking-wide mb-1">{title}</h3>
    <p className="text-sm text-gray-700 text-center">{description}</p>
  </div>
);

export default AboutProduct;
