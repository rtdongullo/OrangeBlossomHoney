import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Sachet from "../../../assets/sachet.jpg"
import FiveKg from "../../../assets/fiveKg.jpg"
import FourFifty from "../../../assets/fourFifty.jpg"
import TwoTwenty from "../../../assets/twoTwenty.jpg"

const products = [
  { id: 1, name: "Big Pouch 5.5Kg", price: "₵400", image: FiveKg, description: "Pure and organic honey sourced from nature." },
  { id: 2, name: "Honey 455g", price: "₵45", image: FourFifty, description: "Infused with natural lemon essence for a refreshing taste." },
  { id: 3, name: "Travel Sachet 65g", price: "₵5", image: Sachet, description: "Harvested from citrous blossoms, offering a sweet and tangy flavor." },
  { id: 4, name: "Honey 220g", price: "₵12", image: TwoTwenty, description: "Raw and unfiltered, packed with natural nutrients." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const Showcase = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} id="gallery" className="p-8 flex flex-col items-center bg-yellow-100 min-h-[70vh]">
      <motion.h4
        className="text-4xl font-serif tracking-wide font-bold text-[#2D1B0F] mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Product Gallery
      </motion.h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center 
            transition-all duration-300 hover:shadow-2xl hover:scale-105"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[300px] h-[200px] object-cover rounded-xl mb-4"
            />
            <h5 className="text-lg font-serif tracking-wide font-semibold text-[#5D4037] mb-2">{product.name}</h5>
            <div className="bg-[#fef9c2] p-3 rounded-md text-center w-full min-h-[60px] mb-3">
              <p className="text-sm text-[#5D4037]">{product.description}</p>
            </div>
            <div className="flex justify-between items-center w-full px-2">
              <p className="text-green-700 text-lg font-bold"><span className="text-[#5D4037] font-serif tracking-wide font-medium">Price</span> {product.price}</p>
              <a
                href="https://paystack.shop/lifestyle-honey"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-yellow-500 text-[#5D4037] font-semibold rounded-lg shadow-md 
                hover:bg-yellow-600 transition-all duration-300"
              >
                Buy
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
