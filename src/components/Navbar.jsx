import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="p-6 fixed top-0 left-0 w-full flex justify-center align-middle z-50 bg-amber-200">
      <div className="w-full flex justify-between items-center">
        <h4 className="text-xl font-bold">
          Honey
        </h4>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-black hover:text-white font-semibold cursor-pointer">
            Home
          </Link>

          <Link
            to="aboutProducts"
            smooth={true}
            duration={500}
            className="text-black hover:text-white font-semibold cursor-pointer"
          >
            Products
          </Link>

          <Link
            to="aboutInnovator"
            smooth={true}
            duration={500}
            className="text-black hover:text-white font-semibold cursor-pointer"
          >
            Innovator
          </Link>

          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="text-black hover:text-white font-semibold cursor-pointer"
          >
            Gallery
          </Link>

          <Link
            to="contactUs"
            smooth={true}
            duration={500}
            className="text-black hover:text-white font-semibold cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black p-4`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="block text-white hover:text-gray-400 py-2"
        >
          Home
        </Link>


        <Link
          to="aboutProducts"
          smooth={true}
          duration={500}
          className="block text-white hover:text-gray-400 py-2"
        >
          Products
        </Link>

        <Link
          to="aboutInnovator"
          smooth={true}
          duration={500}
          className="block text-white hover:text-gray-400 py-2"
        >
          Innovator
        </Link>

        <Link
          to="contactUs"
          smooth={true}
          duration={500}
          className="block text-white hover:text-gray-400 py-2"
        >
          Contact
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
