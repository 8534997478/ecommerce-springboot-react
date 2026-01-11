import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";

const products = [
  {
    id: 1,
    name: "Embroidered Kurti Set",
    price: 2499,
    originalPrice: 3499,
    images: [
      "/src/assets/products/kurti1.jpg",
      "/src/assets/products/kurti2.jpg",
    ],
    description: "Premium embroidered kurti set crafted with fine cotton fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState("auto");

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight);
    }
  }, []);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-8 mt-10 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

        {/* LEFT: IMAGE (AUTO HEIGHT) */}
        <div ref={imageRef}>
          <ProductGallery ref={imageRef} images={product.images} />
        </div>

        {/* RIGHT: INFO (MATCH IMAGE HEIGHT) */}
        <div
          style={{ height: imageHeight }}
          className="overflow-y-auto pr-2 scrollbar-hide"
        >
          <ProductInfo product={product} />
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
