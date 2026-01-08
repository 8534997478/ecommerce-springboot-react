import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" text-white bg-[#8b1c62] pt-14 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-col-2 md:grid-cols-4 gap-10 ">

                {/* Brand */}
                <div>
                    <h3 className="font-heading text-[#d4af37] text-2xl mb-4">Vastraa</h3>
                    <p className="text-white/90 text-sm">
                        Premium ethnic wear crafted with elegance, tradition, and modern style.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-semibold text-[#d4af37] mb-4 ">Quick Links</h4>
                    <ul className="space-y-2 text-white/90 text-sm ">
                        <li className="hover:text-[#d4af37]">Home</li>
                        <li className="hover:text-[#d4af37]">Shop</li>
                        <li className="hover:text-[#d4af37]">Collections</li>
                        <li className="hover:text-[#d4af37]">Contact</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-semibold text-[#d4af37] mb-4">Support</h4>
                    <ul className="space-y-2 text-white/90 text-sm">
                        <li className="hover:text-[#d4af37]">Shipping & Returns</li>
                        <li className="hover:text-[#d4af37]">Privacy Policy</li>
                        <li className="hover:text-[#d4af37]">Terms & Conditions</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="font-semibold text-[#d4af37] mb-4">Follow Us</h4>
                    <div className="flex gap-4 text-xl">
                        <FaInstagram className="hover:text-[#d4af37] cursor-pointer  hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
                        <FaFacebookF className="hover:text-[#d4af37] cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
                        <FaTwitter className="hover:text-[#d4af37] cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" />
                    </div>
                </div>

            </div>

            <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/50">
                © {new Date().getFullYear()} Vastraa. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
