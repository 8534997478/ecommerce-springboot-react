import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#8b1c62] text-white px-6 py-4 flex justify-between items-center font-heading">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        VASTRAA
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/products" className="hover:text-yellow-400">Shop</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
        <Link to="/register" className="hover:text-yellow-400">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
