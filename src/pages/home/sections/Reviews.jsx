import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  { id: 1, name: "Addo Dee", message: "Amazing honey! Best I've ever had.", rating: 5 },
  { id: 2, name: "Jane Mensah", message: "Absolutely delicious and natural.", rating: 5 },
  { id: 3, name: "Prof Naana", message: "Great quality and taste.", rating: 4 },
  { id: 4, name: "John Mahama", message: "Highly recommend this honey!", rating: 5 },
  { id: 5, name: "Afenyo Markin", message: "Best organic honey out there.", rating: 5 },
  { id: 6, name: "Bawu Bawu", message: "Love the texture and flavor.", rating: 4 },
];

const Reviews = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth >= 1024 ? 3 : 2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 3 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + itemsPerPage) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsPerPage]);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  const getInitials = (name) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  return (
    <div id="reviews" className="bg-yellow-100 p-6 flex flex-col items-center h-auto min-h-[60vh]">
      <h4 className="text-4xl font-serif tracking-wide text-[#2D1B0F] font-bold mb-6">
        Customer Reviews
      </h4>
      
      {/* Review Slider */}
      <div className="w-full max-w-3xl overflow-hidden relative flex justify-center">
        <motion.div 
          className="flex gap-4"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          {reviews.slice(index, index + itemsPerPage).map((review) => (
            <div key={review.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-[90%] md:w-1/2 lg:w-1/3">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-12 h-12 flex justify-center items-center bg-gray-300 text-[#2D1B0F] font-bold rounded-full">
                  {getInitials(review.name)}
                </div>
                <h5 className="font-semibold text-[#2D1B0F] text-center">{review.name}</h5>
              </div>
              <p className="text-gray-700 italic text-center">"{review.message}"</p>
              <div className="text-yellow-500 mt-2">{"⭐".repeat(review.rating)}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Leave Review Button */}
      <button 
        onClick={toggleForm} 
        className="mt-6 bg-yellow-500 text-[#2D1B0F] font-bold px-4 py-2 rounded-md hover:bg-yellow-600">
        Leave a Review
      </button>
      
      {/* Review Form Pop-up */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-5 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-4 relative">
            <button onClick={toggleForm} className="absolute top-2 right-2 text-xl" style={{ color: "#facc15" }}>✖</button>
            <h5 className="text-xl font-semibold text-[#2D1B0F] mb-4">Leave a Review</h5>
            <form className="flex flex-col space-y-4">
              <input type="text" placeholder="Your Name" className="p-2 border rounded-md w-full" />
              <textarea placeholder="Your Review" className="p-2 border rounded-md w-full h-24"></textarea>
              <button type="submit" className="bg-yellow-500 text-[#2D1B0F] font-bold px-4 py-2 rounded-md hover:bg-yellow-600">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
