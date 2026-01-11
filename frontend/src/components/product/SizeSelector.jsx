import { useState } from "react";

const SizeSelector = ({ sizes }) => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="border-t pt-4">
            <h3 className="font-semibold mb-4 tracking-wider">Select Size</h3>

            <div className="flex flex-wrap gap-3 max-w-full">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelected(size)}
                        className={`px-4 py-2 border rounded-lg whitespace-nowrap
                         ${selected === size
                                ? "bg-[#8b1c62] text-white"
                                : "border-gray-400"
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default SizeSelector;
