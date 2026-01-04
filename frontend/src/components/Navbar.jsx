import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#8b1c62] text-white px-6 py-4 font-heading relative">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest transition"
        >
          VASTRAA
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <Link to="/" className="hover:text-[#d4af37] transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-[#d4af37] transition">
            Shop
          </Link>
        </div>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/cart" className="hover:text-[#d4af37] transition">
            <FiShoppingCart size={20} />
          </Link>
          <Link to="/login" className="hover:text-[#d4af37] transition">
            <FiUser size={20} />
          </Link>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {open && (
        <div className="fixed top-0 right-0 h-screen w-1/3 bg-[#8b1c62] z-50 p-6 md:hidden shadow-lg">

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setOpen(false)}
          >
            <FiX size={24} />
          </button>

          {/* MENU LINKS */}
          <div className="mt-16 flex flex-col space-y-6 text-lg  font-heading">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
              Home
            </Link>

            <Link to="/products" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
              Shop
            </Link>

            <Link to="/cart" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
              Cart
            </Link>

            <Link to="/login" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
              Login
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
