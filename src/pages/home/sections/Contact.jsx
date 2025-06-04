import { useEffect, useState } from "react";
import InstaLogo from "../../../assets/instaLogo.png";
// import XLogo from "../../../assets/xLogo.png";
import FacebookLogo from "../../../assets/facebookLogo.png";
// import TiktokLogo from "../../../assets/tiktokLogo.png";

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mpwrwaqg", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitted(true);
    form.reset();
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div id="contactUs" className="bg-yellow-100 p-6 min-h-[70vh] flex flex-col items-center text-center border">
      <h2 className="text-4xl font-serif tracking-wide text-[#2D1B0F] font-bold mb-6">
        Get in Touch with Us!
      </h2>
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">

        {/* Contact Information */}
        <div className="bg-white shadow-md p-6 rounded-lg flex-1 flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-serif tracking-wide font-medium text-[#2D1B0F] mb-4">Contact Details</span>
            <span>
              <a href="tel:+233247653987" className="text-lg text-gray-700">
                <strong>Phone:</strong> 024 765 3987
              </a>
            </span>

            <span>
              <a href="mailto:lifestylemarket20@gmail.com" className="text-lg text-gray-700">
                <strong>Email:</strong> lifestylemarket20@gmail.com
              </a>
            </span>
            <p className="text-lg text-gray-700"><strong>Address:</strong> Efutu Jukwa Road, Cape Coast</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-grow justify-center items-center gap-4 mt-6 md:mt-0">
            <a href="https://www.instagram.com/lifestylehoney1?igsh=OGN4Zmg2c2kwMWNi" target="_blank" rel="noopener noreferrer">
              <img
                src={InstaLogo}
                alt="Instagram"
                className="w-12 h-12 -mt-1 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>

            {/* <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={XLogo} 
                alt="Twitter (X)" 
                className="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a> */}

            <a href="https://web.facebook.com/profile.php?id=61573658722495" target="_blank" rel="noopener noreferrer">
              <img
                src={FacebookLogo}
                alt="Facebook"
                className="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>

            {/* <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={TiktokLogo} 
                alt="TikTok" 
                className="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a> */}
          </div>

          {/* AyekooMart Store Link */}
          <div className="mt-auto pt-6 text-center">
            <p className="text-lg font-semibold text-red-600 mb-2 animate-pulse">We're on AyekooMart!</p>
            <a
              href="https://lifestyle.ayekoomart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-[#2D1B0F] font-bold py-2 px-6 rounded-md hover:bg-yellow-600"
            >
              Visit Us
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md p-6 rounded-lg flex-1">
          <h3 className="text-2xl font-serif tracking-wide font-medium text-[#2D1B0F] mb-4">Send Us a Message</h3>

          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mpwrwaqg"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input type="text" name="name" placeholder="Your Name" className="p-3 border rounded-md" />
            <div className="flex flex-col">
              <input type="email" name="email" placeholder="Your Email" className="p-3 border rounded-md" />
              <small className="text-xs text-gray-500 mt-1 self-end">This will help us respond to your message.</small>
            </div>
            <textarea name="message" placeholder="Your Message" rows="4" className="p-3 border rounded-md"></textarea>
            <button type="submit" className="bg-yellow-500 text-[#2D1B0F] font-bold py-2 px-4 rounded-md hover:bg-yellow-600">
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 text-sm mt-2">Thank you! Message sent to LifeStyle Honey.</p>
            )}

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
