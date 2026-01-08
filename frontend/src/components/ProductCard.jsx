import { FiArrowRight } from "react-icons/fi";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"> 
            
            <div className="relative overflow-hidden group mt-0 sm:mt-5 md:mt-5"> 
                <img src={product.image} alt={product.name} className="w-full h-64 sm:h-72 md:h-72 object-contain group-hover:scale-105 transition duration-300" />
            </div>
            
            <div className="p-2 text-center">
                <h3 className="font-heading text-lg mb-1">{product.name}</h3>
                <p className="text-[#8b1c62] font-semibold mb-1">₹{product.price}</p>
                <button className="flex items-center justify-center gap-2 w-full py-1 border border-[#8b1c62] text-[#8b1c62] 
                rounded-lg hover:bg-[#8b1c62] hover:text-white transition group"> 
                    View Details<FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
