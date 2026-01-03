import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FFF7ED] min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
          VASTRAA
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Elegance in Every Drape
        </p>
        <button className="bg-rose-900 text-white px-8 py-3 rounded-full hover:bg-rose-800 transition">
          Explore Collection
        </button>
      </div>
    </>
  );
};

export default Home;
