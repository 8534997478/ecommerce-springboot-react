import { Link } from "react-router-dom";

const categories = [
  {
    name: "Sarees",
    image: "/saree.jpg",
  },
  {
    name: "Kurtis",
    image: "/kurti.jpg",
  },
  {
    name: "Lehengas",
    image: "/lehenga.jpg",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading text-center mb-10 text-gray-900">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/products"
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-heading font-semibold">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
