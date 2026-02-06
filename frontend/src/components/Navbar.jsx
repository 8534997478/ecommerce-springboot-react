import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-[#8b1c62]/95 text-white px-6 py-4 font-heading  fixed top-0 left-0 w-full z-50
       backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-widest transition">
          VASTRAA
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <NavLink to="/"
            className={({ isActive }) =>
              isActive ? "text-[#d4af37]  shadow-[0_0_25px_rgba(245,240,206,0.50) " : " hover:text-[#d4af37]"}>
            <span>Home</span>
          </NavLink>
          <NavLink to="/shop"
            className={({ isActive }) =>
              isActive ? "text-[#d4af37]  shadow-[0_0_25px_rgba(245,240,206,0.50) " : " hover:text-[#d4af37]"}>
            <span>Shop</span>
          </NavLink>
          <NavLink to="/my-orders"
            className={({ isActive }) =>
              isActive ? "text-[#d4af37]  shadow-[0_0_25px_rgba(245,240,206,0.50) " : " hover:text-[#d4af37]"}>
            <span>My orders</span>
          </NavLink>

        </div>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/cart" className="hover:text-[#d4af37] transition">

            <div className="relative">
              <FiShoppingCart size={20} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-gray-800 px-1  text-white text-xs  rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
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
        <div className="fixed top-0 right-0 h-screen w-2/4 bg-[#8b1c62] z-50 p-6 md:hidden shadow-lg">

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

            <Link to="/shop" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
              Shop
            </Link>

            <Link to="/cart" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
              Cart
            </Link>
            <Link to="/my-orders" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
              My Orders
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
