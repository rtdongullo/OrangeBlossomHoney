import React from "react";
import { Link } from "react-scroll";
import NavLogo from "../assets/navLogo.png"

const Navbar = () => {
  return (
    <div className="p-4 lg:p-3 fixed top-0 left-0 w-full flex items-center z-50 bg-[#2D1B0F] h-[60px] lg:h-[80px] justify-between lg:justify-around">
      
      <div className="flex items-center">
        <img src={NavLogo} alt="Logo" className="h-[40px] lg:h-[50px] lg:ml-0 ml-2" />
      </div>
      
      
      <div className="hidden lg:flex space-x-6">
        <Link to="home" smooth={true} spy={true} activeClass="active" offset={-80} duration={800} className="nav-link cursor-pointer text-white font-serif tracking-wide font-bold">Home</Link>
        <Link to="aboutProducts" smooth={true} spy={true} activeClass="active" duration={2500} className="nav-link cursor-pointer text-white font-serif tracking-wide font-bold">About</Link>
        <Link to="aboutInnovator" smooth={true} spy={true} activeClass="active" duration={2500} className="nav-link cursor-pointer text-white font-serif tracking-wide font-bold">Innovator</Link>
        <Link to="gallery" smooth={true} spy={true} activeClass="active" duration={2500} className="nav-link cursor-pointer text-white font-serif tracking-wide font-bold">Gallery</Link>
        <Link to="contactUs" smooth={true} spy={true} activeClass="active" duration={2500} className="nav-link cursor-pointer text-white font-serif tracking-wide font-bold">Contact</Link>
      </div>
      
      
      <a href="https://paystack.shop/lifestyle-honey" target="_blank" rel="noopener noreferrer"
        className="px-5 py-2 bg-yellow-500 text-[#5D4037] font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-600 hover:scale-105">
        Shop
      </a>
    </div>
  );
};

export default Navbar;
