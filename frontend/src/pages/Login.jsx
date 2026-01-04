import { useState } from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/loginCard.png";
import { FiArrowRight } from "react-icons/fi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // backend API call later
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                   md:bg-gray-200 px-4">

      <div className="flex w-auto max-w-4xl bg-white rounded-xl
                    md:rounded-xl shadow-lg overflow-hidden  ">

        {/* LEFT: FORM */}
        <div className="w-full md:w-1/2  max-w-sm mx-auto md:max-w-none md:mx-0 
                         p-8 flex flex-col justify-center  
                        md:bg-transparent transition-colors duration-300">
          <div className="h-2 bg-[#8b1c62] rounded-t-xl"></div>
          <h2 className="font-heading text-3xl font-bold text-center mb-6 text-[#8b1c62]">Vastraa</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button type="submit" className=" group w-full bg-[#8b1c62] hover:bg-[#73154f] md:bg-[#8b1c63] text-white p-3 rounded-lg hover:bg-gray-700 transition
                          flex items-center justify-center gap-1">
              Login
              <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </form>

          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 font-semibold underline">
              Register
            </Link>
          </p>
        </div>

        {/* RIGHT: IMAGE (HIDDEN ONLY ON MOBILE) */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={cardImg}
            alt="Ethnic Fashion"
            className="h-full w-full "
          />
        </div>

      </div>
    </div>
  );
};

export default Login;
