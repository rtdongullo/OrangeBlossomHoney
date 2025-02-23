import React from "react";
// import HeroVid from "../../../assets/heroVid.mp4"
import HeroImage from "../../../assets/heroImage.jpg"

const Hero = () => {
  return (
    <div id="home" className="relative p-6 flex justify-center bg-cover bg-center bg-no-repeat items-center align-middle h-[100vh] border-b-2"
    style={{ backgroundImage: `url(${HeroImage})` }}>

<div className="absolute inset-0 bg-[#000000] opacity-60"></div>
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={HeroVid} type="video/mp4" />
       
      </video> */}

      <div className="z-10 text-center text-white">
        <h4 className="text-2xl text-white font-bold">Pure, sweet, and straight from the hive</h4>
        <h4 className="text-xl text-white font-bold">Experience honey like never before!</h4>
      </div>
    </div>
  );
};

export default Hero;
