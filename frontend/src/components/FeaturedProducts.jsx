import ProductCard from "./ProductCard";

// TEMP DATA (Later backend will replace this)
const products = [
    {
        id: 1,
        name: "Embroidered Kurti Set",
        price: 2499,
        image: "/src/assets/products/kurti1.jpg",
    },
    {
        id: 2,
        name: "Designer Saree",
        price: 3999,
        image: "/src/assets/products/saree1.jpg",
    },
    {
        id: 3,
        name: "Bridal Lehenga",
        price: 8999,
        image: "/src/assets/products/lehenga1.jpg",
    },
    {
        id: 4,
        name: "Anarkali Suit",
        price: 3499,
        image: "/src/assets/products/anarkali1.avif",
    },
    {
        id: 5,
        name: "Printed Palazzo Suit Set",
        price: 2999,
        image: "/src/assets/products/palazzo1.jpg",
    },
    {
        id: 6,
        name: "Festive Sharara Set",
        price: 5499,
        image: "/src/assets/products/sharara1.png",
    },
    {
        id: 7,
        name: "Embellished Ethnic Gown",
        price: 6299,
        image: "/src/assets/products/gown1.jpg",
    },
    {
        id: 8,
        name: "Banarasi Silk Dupatta",
        price: 1499,
        image: "/src/assets/products/dupatta1.jpg",
    },
];

const FeaturedProducts = () => {
    return (
        <section className="py-6 md:py-12 bg-[#faf5f7]">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-3xl font-heading text-center mb-2">
                    Featured Products
                </h2>
                <p className="text-center text-gray-600 mb-5 md:mb-10">
                    Handpicked styles just for you
                </p>

                {/* Grid */}
                <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;
