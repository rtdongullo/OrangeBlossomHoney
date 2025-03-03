import React, { useEffect, useState, useRef } from "react"; 
import { motion } from "framer-motion";
import CombTwo from "../../../assets/combTwo.jpg";
import CombThree from "../../../assets/combThree.jpg";
import CombOne from "../../../assets/combOne.jpg";

const products = [
  { id: 1, name: "Organic Honey", price: "₵50", image: CombTwo },
  { id: 2, name: "Lemon Flavor Honey", price: "₵65", image: CombOne },
  { id: 3, name: "Orange Blossom Honey", price: "₵70", image: CombThree },
  { id: 4, name: "Organic Honey", price: "₵50", image: CombTwo },
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
        className="text-4xl font-serif tracking-wide font-bold text-[#2D1B0F] mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Product Showcase
      </motion.h4>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center border border-[#2D1B0F] 
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
            <h5 className="text-lg font-semibold text-[#5D4037]">{product.name}</h5>
            <p className="text-green-700 text-lg font-bold">{product.price}</p>
            <a
              href="https://paystack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 mt-2 bg-yellow-500 text-[#5D4037] font-semibold rounded-lg shadow-md 
              hover:bg-yellow-600 transition-all duration-300"
            >
              Buy
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
