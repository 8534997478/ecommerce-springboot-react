import ProductCard from "../shop/ShopProductcard";

const dummyProducts = Array.from({ length: 16 });

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {dummyProducts.map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
