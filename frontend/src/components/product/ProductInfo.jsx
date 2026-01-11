import SizeSelector from "./SizeSelector";
import { FaTruck, FaGlobeAsia, FaCheckCircle } from "react-icons/fa";
import { FaTag, FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

const ProductInfo = ({ product }) => {
    const discount =
        product.originalPrice &&
        Math.round(
            ((product.originalPrice - product.price) / product.originalPrice) * 100
        );
    const checkDelivery = () => {
        if (pincode.length === 6) {
            setDeliveryMsg("Delivery available by 3–5 business days");
        } else {
            setDeliveryMsg("Enter a valid pincode");
        }
    };

    const [copied, setCopied] = useState(false);
    const couponCode = "BIG1";

    const handleCopy = () => {
        navigator.clipboard.writeText(couponCode);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };


    return (
        <div>
            <h1 className="font-heading text-3xl tracking-wide mb-3">{product.name}</h1>
            <p className="text-gray-600 tracking-wide mb-6">{product.description}</p>

            {/* PRICE */}
            <div className="mb-4" id="price-section">
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-semibold text-[#8b1c62]">
                        ₹ {product.price.toLocaleString("en-IN")}
                    </span>

                    {product.originalPrice && (
                        <>
                            <span className="line-through text-gray-400">
                                ₹ {product.originalPrice.toLocaleString("en-IN")}
                            </span>

                            <span className="text-white text-sm font-medium bg-[#e57373] px-2 py-0.5 rounded">
                                {discount}% OFF
                            </span>
                        </>
                    )}
                </div>

                {/* SAVED AMOUNT */}
                {product.originalPrice && (
                    <div className="text-lg mt-3">
                        <p className="text-[#007900] font-medium">
                            Save ₹{" "}
                            {(product.originalPrice - product.price).toLocaleString("en-IN")}
                        </p>
                        <p className="text-gray-500 text-sm tracking-wide">
                            Inclusive of all taxes
                        </p>
                    </div>
                )}
            </div>
            <SizeSelector sizes={product.sizes} />
            <div className="mt-5 border-t py-5">
                <p className="text-sm px-1 text-gray-600 tracking-wider mb-1">500K+ Happy Customers | 1 Million+ Followers</p>
                <button className="w-full  bg-[#8b1c62] text-white py-3 tracking-widest font-bold  rounded-xl hover:opacity-90 transition">
                    ADD TO CART
                </button>

            </div>

            {/* offersection */}
            {/* ADDITIONAL OFFERS */}
            <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">
                    Additional Offers
                </h3>

                <div className="space-y-3">

                    {/* OFFER 1 */}
                    <div className="border border-dashed rounded-lg p-4 flex gap-3">
                        <FaTag className="text-[#8b1c62] mt-1" />

                        <div className="flex-1">
                            <p className="font-semibold">
                                BUY 1 GET 1 FREE
                            </p>
                            <p className="text-sm text-gray-600">
                                Buy 1 Get 1 FREE on Prepaid Orders
                            </p>

                            <div className="flex items-center gap-2 mt-2 text-sm">
                                <span>
                                    Use Coupon Code:
                                    <span className="font-semibold ml-1">
                                        {couponCode}
                                    </span>
                                </span>

                                <button
                                    onClick={handleCopy}
                                    className={`flex items-center gap-1 border border-dashed px-2 py-0.5 rounded transition
                                     ${copied
                                            ? "bg-green-600 text-white border-green-600"
                                            : "text-[#8b1c62] hover:bg-[#8b1c62] hover:text-white"
                                        }`}
                                >
                                    {copied ? (
                                        <>
                                            <FaCheck size={12} /> Copied
                                        </>
                                    ) : (
                                        <>
                                            <FaCopy size={12} /> Copy Code
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* OFFER 2 */}
                    <div className="border border-dashed rounded-lg p-4 flex gap-3">
                        <FaTag className="text-[#8b1c62] mt-1" />
                        <div>
                            <p className="font-semibold">FLAT 15% OFF</p>
                            <p className="text-sm text-gray-600">
                                Automatically Applied on Checkout
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* offerbanner  */}
            <div className="mb-2">
                <div className="py-5">
                    <img src="../flashSale2.png"
                        onClick={() =>
                            document
                                .getElementById("price-section")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="cursor-pointer"
                    />
                </div>
                <div className="mt-6 space-y-3 text-lg text-gray-700">
                    <div className="flex items-center gap-3">
                        <FaTruck className="text-[#8b1c62]" />
                        <span>Free Shipping on Prepaid & COD</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaGlobeAsia className="text-[#8b1c62]" />
                        <span>Worldwide Shipping Available</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500" />
                        <span>In Stock</span>
                    </div>
                </div>

                <div className="mt-8 space-y-3 text-sm">
                    <details className="border-b pb-2 cursor-pointer">
                        <summary className="font-medium">Delivery & Shipping</summary>
                        <p className="mt-2 text-gray-600">
                            Delivered within 5–7 business days.
                        </p>
                    </details>

                    <details className="border-b pb-2 cursor-pointer">
                        <summary className="font-medium">Return & Exchange</summary>
                        <p className="mt-2 text-gray-600">
                            Easy 7-day return and exchange available.
                        </p>
                    </details>

                    <details className="border-b pb-2 cursor-pointer">
                        <summary className="font-medium">Care Instructions</summary>
                        <p className="mt-2 text-gray-600">
                            Hand wash separately. Do not bleach.
                        </p>
                    </details>
                </div>


            </div>

        </div>
    );
};

export default ProductInfo;
