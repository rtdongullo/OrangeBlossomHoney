import { useEffect } from 'react';
import NavLogo from "../../../assets/navLogo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

const Story = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    return (
        <div className="bg-yellow-100 flex flex-col min-h-screen">
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full bg-[#2D1B0F] z-50 h-[60px] lg:h-[80px] px-4 lg:px-8 flex items-center justify-between shadow-md">
                <Link to="/">
                    <img src={NavLogo} alt="Logo" className="h-[40px] lg:h-[50px]" />
                </Link>
                <a
                    href="https://paystack.shop/lifestyle-honey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-yellow-500 text-[#5D4037] font-bold rounded-lg shadow hover:bg-yellow-600 hover:scale-105 transition duration-300"
                >
                    Shop
                </a>
            </header>

            {/* Story Content */}
            <main className="mt-[80px] px-4 sm:px-8 md:px-16 lg:px-40 py-10 max-w-5xl mx-auto">
                <h1 className="text-3xl font-serif tracking-wide font-bold mb-6 text-[#5D4037]">The Story Behind Lifestyle Honey 🍯💛</h1>
                <p className="text-base md:text-lg leading-relaxed text-[#3b2c22] space-y-4">
                    It all started with a personal need. I struggled with terrible acne on my face, chest, and back. After trying different treatments, I learned about the healing power of honey—but not just any honey. I needed raw, unprocessed honey, rich in phytonutrients and enzymes that work with other natural ingredients to heal the skin.
                    <br /><br />
                    But finding real, unadulterated honey in Ghana was a struggle! Supermarket options were overly processed, removing the very nutrients I needed. My usual supplier stopped producing, and the alternatives I found were either diluted or adulterated.
                    <br /><br />
                    After months of searching, I finally found a reliable source. I experienced firsthand the power of raw honey—not just for my skin, but for overall wellness. Friends and family noticed my transformation and started asking for honey too! 🍯
                    <br /><br />
                    What started as a personal quest soon became something bigger. The demand kept growing, and I knew I had to make it sustainable. That’s when I invested in beekeeping. The fun part is that beekeeping aligns with my passion for nature and environmental sustainability.🌱
                    <br /><br />
                    And so, Lifestyle Honey was born—a brand committed to providing raw, unpasteurized, and unadulterated honey straight from citrus farms. We don’t process it. We simply clean, package, and deliver it in its purest form. 💛
                    <br /><br />
                    Today, Lifestyle Honey isn’t just about selling honey—it’s about health, sustainability, and impact. And guess what? I’m still my first customer! I use our honey for my skin, hair, and daily wellness because I believe in its power.💛
                    <br /><br />
                    Thank you for being part of this journey! Have you experienced the benefits of raw honey?
                    <span className="flex items-center space-x-2">
                        <p className="mr-2" style={{ fontFamily: "cursive" }}>
                            Share your comments on our socials!
                        </p>
                        <a
                            href="https://www.instagram.com/lifestylehoney1?igsh=OGN4Zmg2c2kwMWNi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-full bg-yellow-500 text-[#2D1B0F] hover:bg-yellow-600 transition-transform duration-300 hover:scale-110"
                        >
                            <FaInstagram size={17} />
                        </a>
                        <a
                            href="https://web.facebook.com/profile.php?id=61573658722495"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-full bg-yellow-500 text-[#2D1B0F] hover:bg-yellow-600 transition-transform duration-300 hover:scale-110"
                        >
                            <FaFacebookF size={17} />
                        </a>
                    </span>
                </p>

                {/* Placeholder Card Section */}
                <section className="mt-10">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-yellow-300">
                        <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">Watch How We Harvest Our Honey</h2>
                        <p className="text-gray-500">
                            <a href="https://www.facebook.com/61573658722495/videos/1721405045136021/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-2 text-[#5D4037] " style={{ fontFamily: "cursive" }}>
                                ▶️ Watch on Facebook
                            </a>
                        </p>
                    </div>

                    {/* Back button positioned to bottom right */}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="px-4 py-2 bg-yellow-500 text-[#5D4037] rounded-lg font-medium hover:bg-yellow-600 transition-transform duration-300 hover:scale-105"
                        >
                            <span className="flex items-center gap-1">
                                <TiArrowBack size={20} /> Back
                            </span>
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#2D1B0F] text-white py-10 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Branding */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <img src={NavLogo} alt="Brand Logo" className="w-32 mb-3" />
                        <p className="text-sm text-gray-300">
                            Pure, organic honey sourced from lemon farms. Experience the golden touch of nature with every drop.
                        </p>
                        <p className="text-sm text-gray-300 mt-2">
                            Our honey is ethically harvested and packed with natural nutrients. Savor the purity of raw honey, just as nature intended.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-center text-center md:text-center">
                        <h3 className="text-yellow-500 text-xl font-serif font-medium mb-3">Quick Links</h3>
                        <a
                            href="https://paystack.shop/lifestyle-honey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400 text-sm block transition-all hover:scale-105"
                        >
                            Shop
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <h3 className="text-yellow-500 text-xl font-serif font-medium mb-3">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/lifestylehoney1?igsh=OGN4Zmg2c2kwMWNi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white text-[#2D1B0F] hover:bg-yellow-600 transition-transform duration-300 hover:scale-110"
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a
                                href="https://web.facebook.com/profile.php?id=61573658722495"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white text-[#2D1B0F] hover:bg-yellow-600 transition-transform duration-300 hover:scale-110"
                            >
                                <FaFacebookF size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Lifestyle Honey. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Story;
