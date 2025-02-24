import React from "react";
import { Link } from "react-scroll";
import NavLogo from "../assets/navLogo.png"

const Navbar = () => {
  return (
    <div className="p-4 lg:p-3 fixed top-0 left-0 w-full flex items-center z-50 bg-[#2D1B0F] h-[60px] lg:h-[80px] justify-between lg:justify-around">
      {/* Logo */}
      <div className="flex items-center">
        <img src={NavLogo} alt="Logo" className="h-[40px] lg:h-[50px] lg:ml-0 ml-2" />
      </div>
      
      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex space-x-6">
        <Link to="home" smooth={true} duration={500} className="hover:text-yellow-400 font-serif tracking-wide font-bold text-white cursor-pointer">Home</Link>
        <Link to="aboutProducts" smooth={true} duration={500} className="hover:text-yellow-400 font-serif tracking-wide font-bold text-white cursor-pointer">Products</Link>
        <Link to="aboutInnovator" smooth={true} duration={500} className="hover:text-yellow-400 font-serif tracking-wide font-bold text-white cursor-pointer">Innovator</Link>
        <Link to="gallery" smooth={true} duration={500} className="hover:text-yellow-400 font-serif tracking-wide font-bold text-white cursor-pointer">Gallery</Link>
        <Link to="contactUs" smooth={true} duration={500} className="hover:text-yellow-400 font-serif tracking-wide font-bold text-white cursor-pointer">Contact</Link>
      </div>
      
      {/* Shop Button (Desktop & Mobile) */}
      <a href="https://paystack.com" target="_blank" rel="noopener noreferrer"
        className="px-5 py-2 bg-yellow-500 text-[#5D4037] font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-600 hover:scale-105">
        Shop
      </a>
    </div>
  );
};

export default Navbar;
