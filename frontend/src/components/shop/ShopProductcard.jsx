const ShopProductcard = ({ product = {} }) => {
  const {
    image = "/placeholder.png",
    title = "Product Name",
    price = 0,
  } = product;

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="mt-3 font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-[#d4af37] font-bold mt-1">
        ₹{price}
      </p>

      <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  );
};

export default ShopProductcard;
