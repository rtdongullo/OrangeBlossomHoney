import React from "react";
import InstaLogo from "../../../assets/instaLogo.png";
import XLogo from "../../../assets/xLogo.png";
import FacebookLogo from "../../../assets/facebookLogo.png";
import TiktokLogo from "../../../assets/tiktokLogo.png";

const Contact = () => {
  return (
    <div id="contactUs" className="bg-yellow-100 p-6 min-h-[70vh] flex flex-col items-center text-center">
      <h2 className="text-4xl font-serif tracking-wide text-[#2D1B0F] font-bold mb-6">
        Get in Touch with Us!
      </h2>
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
        
        {/* Contact Information */}
        <div className="bg-white shadow-md p-6 rounded-lg flex-1">
          <h3 className="text-2xl font-semibold text-[#2D1B0F] mb-4">Contact Details</h3>
          <p className="text-lg text-gray-700"><strong>Phone:</strong> +233 0123456</p>
          <p className="text-lg text-gray-700"><strong>Email:</strong> lifestylehoney@gmail.com</p>
          <p className="text-lg text-gray-700"><strong>Address:</strong> Kotokraba Market Ave, Cape Coast</p>
          
          {/* Social Media Icons */}
          <div className="mt-6 flex gap-4 justify-center">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={InstaLogo} 
                alt="Instagram" 
                className="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={XLogo} 
                alt="Twitter (X)" 
                className="w-14 h-14 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={FacebookLogo} 
                alt="Facebook" 
                className="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={TiktokLogo} 
                alt="TikTok" 
                className="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md p-6 rounded-lg flex-1">
          <h3 className="text-2xl font-semibold text-[#2D1B0F] mb-4">Send Us a Message</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 border rounded-md" />
            <input type="email" placeholder="Your Email" className="p-3 border rounded-md" />
            <textarea placeholder="Your Message" rows="4" className="p-3 border rounded-md"></textarea>
            <button type="submit" className="bg-yellow-500 text-[#2D1B0F] font-bold py-2 px-4 rounded-md hover:bg-yellow-600">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
