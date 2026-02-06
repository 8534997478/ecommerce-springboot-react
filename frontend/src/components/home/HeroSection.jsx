import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="bg-[#fff7f2] py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* LEFT: TEXT */}
                <div className="md:w-1/2 text-center md:text-left md:ml-5">
                    <p className="text-[#8b1c62] font-heading font-bold tracking-wide uppercase mb-2">
                        Elegance Redefined
                    </p>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                        Discover Timeless <span className="text-[#8b1c62]">Ethnic Wear</span>
                    </h1>

                    <p className="text-gray-600 mb-6 font-body">
                        Handpicked sarees, kurtis, and lehengas crafted for grace, tradition,
                        and modern elegance.
                    </p>

                    <Link to="/shop" className="inline-block bg-[#8b1c62] text-white px-8 py-3 
                    rounded-full hover:bg-[#6b1b4a] hover:scale-x-105 transition font-semibold"
                    >
                        Shop Now
                    </Link>
                </div>

                {/* RIGHT: IMAGE */}
                <div className="hidden md:flex md:w-1/2 justify-center">
                    <div className="w-full max-w-md h-auto overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="/Hero.png"
                            alt="Ethnic Fashion"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>

    );
};

export default HeroSection;
