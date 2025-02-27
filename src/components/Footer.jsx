import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import navLogo from "../assets/navLogo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#2D1B0F] text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center md:items-start">
          <img src={navLogo} alt="Brand Logo" className="w-32 mb-3" />
          <p className="text-sm text-gray-300 text-center md:text-left">
            Pure, organic honey sourced from lemon farms.
          </p>
          <p className="text-sm text-gray-300 text-center md:text-left">
            Experience the golden touch of nature with every drop. Our honey is ethically harvested, ensuring the highest quality and taste.
            Each jar is packed with natural nutrients, offering a rich and delightful flavor. Savor the purity of raw honey, just as nature intended.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full flex justify-center md:justify-end">

          <div>
            <h3 className="text-yellow-500 text-xl font-serif tracking-wide font-medium mb-3 text-center md:text-left">Quick Links</h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-2 text-center md:text-left">
              <Link to="home" smooth={true} duration={500} className="hover:text-yellow-400 text-white cursor-pointer">Home</Link>
              <Link to="aboutProducts" smooth={true} duration={500} className="hover:text-yellow-400 text-white cursor-pointer">Products</Link>
              <Link to="aboutInnovator" smooth={true} duration={500} className="hover:text-yellow-400 text-white cursor-pointer">Innovator</Link>
              <Link to="gallery" smooth={true} duration={500} className="hover:text-yellow-400 text-white cursor-pointer">Gallery</Link>
              <a href="https://paystack.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Shop</a>
              <Link to="contactUs" smooth={true} duration={500} className="hover:text-yellow-400 text-white cursor-pointer">Contact</Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-yellow-500 text-lg font-serif tracking-wide font-medium mb-3">Follow Us</h3>
          <div className="flex space-x-4">

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-white text-[#2D1B0F] hover:bg-yellow-400 transition-transform duration-300 hover:scale-110 hover:opacity-80">
              <FaInstagram size={18} />
            </a>

            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-white text-[#2D1B0F] hover:bg-yellow-400 transition-transform duration-300 hover:scale-110 hover:opacity-80">
              <FaXTwitter size={18} />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61573658722495" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-white text-[#2D1B0F] hover:bg-yellow-400 transition-transform duration-300 hover:scale-110 hover:opacity-80">
              <FaFacebookF size={18} />
            </a>

            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-white text-[#2D1B0F] hover:bg-yellow-400 transition-transform duration-300 hover:scale-110 hover:opacity-80">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Lifestyle Honey. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
