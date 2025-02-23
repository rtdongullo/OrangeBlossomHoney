import React, { useEffect, useState } from "react";
import Hexagon from "../../../components/Hexagon";
import combOne from "../../../assets/combOne.jpg";
import combTwo from "../../../assets/combTwo.jpg";
import combFour from "../../../assets/combFour.jpg";
import combThree from "../../../assets/combThree.jpg"

const imageSources = [combOne, combTwo, combFour, combThree
];

const AboutProduct = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );
    const aboutSection = document.getElementById("aboutProducts");
    observer.observe(aboutSection);
  }, []);

  return (
    <div
      id="aboutProducts"
      className="p-6 flex flex-col lg:flex-row justify-center items-center align-middle h-auto lg:h-[90vh] border-b-2"
    >
      {/* Honeycomb Section */}
      <div className={`honeycomb-container lg:w-1/2 ${inView ? "active" : ""}`}>
        {imageSources.map((src, index) => (
          <Hexagon key={index} index={index} imageSrc={src} />
        ))}
      </div>

      {/* Write-up Section */}
      <div className="lg:w-1/2 p-4">
        <h4 className="text-4xl font-bold mb-4">About the Products</h4>
        <p className="text-lg">
          Honey has been a staple in natural remedies and culinary delights for centuries. Our honey is
          sourced from the finest flowers, providing a rich, pure taste that you can enjoy in your tea, on
          toast, or straight from the jar. Learn more about the benefits and origins of our honey in this section!
        </p>
      </div>
    </div>
  );
};

export default AboutProduct;
