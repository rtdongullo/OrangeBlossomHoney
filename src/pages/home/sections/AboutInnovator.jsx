import React from "react";
import AboutIn from "../../../assets/aboutIn.jpg"

const AboutInnovator = () => {
  return (
    <div id="aboutInnovator" className="p-6 flex flex-col lg:flex-row justify-center items-center align-middle h-auto border-b-2">

      <div className="w-full lg:w-1/2 p-4 text-white flex justify-center items-center">
        <div className="w-full sm:w-[300px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 
        border-4 border-yellow-600 rounded-lg overflow-hidden relative flex justify-center items-center">
          <img src={AboutIn} alt="About Us Section Image" className="object-cover w-full h-full hover:scale-110 transition-all duration-300" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-4 text-black flex flex-col justify-center items-center 
      gap-y-4 sm:gap-y-12 md:gap-y-12 lg:gap-y-12 xl:gap-y-12">
        <span className="flex flex-col justify-center items">
          <span className="text-xl font-bold mb-4 text-black">Winnie Abena Anhwere Anim</span>
          <p>
          Innovator from Jukwa Efutu, Central Region, addresses the low yields of lemon farms and the lack of Ghanaian-made Orange Blossom Honey. Her solution involves deploying beehives to lemon farms for six weeks to enable pollination by bees, increasing lemon yields and producing organic Orange Blossom Honey. The honey is processed to meet Ghana's FDA and supermarket standards, ensuring availability, quality, and affordability for consumers. Revenue from honey sales compensates for the cost of moving the beehives, so farmers do not have to pay for the service.

          </p>
        </span>

        <span className="flex flex-col justify-center items">
          <span className="text-xl font-bold mb-4 text-black">Socials</span>
          <p>
           
          </p>
        </span>

      </div>
    </div>
  )
}

export default AboutInnovator;
