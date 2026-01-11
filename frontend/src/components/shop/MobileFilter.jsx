import { useState } from "react";
import { PiFunnelBold, PiXBold, PiCaretDownBold } from "react-icons/pi";

const MobileFilter = () => {
    const [open, setOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState(true);
    const [openSize, setOpenSize] = useState(true);
    const [openPrice, setOpenPrice] = useState(true);

    const MIN_PRICE = 0;
    const MAX_PRICE = 20000;
    const [minPrice, setMinPrice] = useState(3815);
    const [maxPrice, setMaxPrice] = useState(12641);

    const handleMinChange = (value) => {
        const val = Math.min(Number(value), maxPrice - 500);
        setMinPrice(val);
    };

    const handleMaxChange = (value) => {
        const val = Math.max(Number(value), minPrice + 500);
        setMaxPrice(val);
    };

    return (
        <>
            {/* FILTER BUTTON (MOBILE ONLY) */}
            <button onClick={() => setOpen(true)}
                className="md:hidden flex items-center gap-2 border-2 px-8 py-2  text-xs font-medium"
            >
                <PiFunnelBold />
                Filters
            </button>

            {/* OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* DRAWER */}
            <div className={`fixed top-16 left-0 h-full w-[60%] max-w-sm bg-white z-50 px-3
              transform transition-transform duration-300
               ${open ? "translate-x-0" : "-translate-x-full"}`}>

                {/* HEADER */}
                <div className="flex justify-between items-center p-3 border-b">
                    <h2 className="font-semibold text-lg tracking-wider">Filters</h2>
                    <button onClick={() => setOpen(false)}>
                        <PiXBold size={20} />
                    </button>
                </div>

                {/* CONTENT */}
                <div className="px-4 py-3 space-y-6 text-sm overflow-y-auto h-[calc(100%-64px)]">

                    {/* CATEGORY */}
                    <div>
                        <button
                            onClick={() => setOpenCategory(!openCategory)}
                            className="w-full flex justify-between items-center font-semibold tracking-wider mb-2"
                        >
                            SHOP BY CATEGORY
                            <PiCaretDownBold
                                className={`transition-transform ${openCategory ? "rotate-180" : ""}`}
                            />
                        </button>

                        {openCategory && (
                            <div className="space-y-2">
                                {["Kurta Set", "Sharara Set", "Lehenga Set", "Blouse", "Coord Set", "Saree",].map((item) => (
                                    <label key={item} className="flex items-center gap-2">
                                        <input type="checkbox" />
                                        {item}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SIZE */}
                    <div className="border-t pt-2">
                        <button type="button" onClick={() => setOpenSize(!openSize)}
                            className="w-full flex justify-between items-center font-semibold tracking-wider mb-3"
                        >
                            SIZE
                            <PiCaretDownBold
                                size={18}
                                className={`transition-transform duration-300 ${openSize ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openSize && (
                            <div className="space-y-2 pl-1">
                                {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                                    <label key={size} className="flex items-center gap-2 text-sm cursor-pointer">
                                        <input type="checkbox" className="accent-black" />
                                        {size}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>


                    {/* PRICE (UI only – backend ready) */}
                    <div className="border-t pt-2 pb-20">
                        {/* Dropdown Header */}
                        <button
                            type="button"
                            onClick={() => setOpenPrice(!openPrice)}
                            className="w-full flex justify-between items-center font-semibold tracking-wider mb-4"
                        >
                            PRICE
                            <PiCaretDownBold
                                size={18}
                                className={`transition-transform duration-300 ${openPrice ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openPrice && (
                            <div className="space-y-5">

                                {/* Price Inputs */}
                                <div className="flex items-center gap-3">
                                    <input
                                        type="number"
                                        value={minPrice}
                                        onChange={(e) => handleMinChange(e.target.value)}
                                        className="w-24 border px-2 py-1 rounded text-sm"
                                    />
                                    <span>-</span>
                                    <input
                                        type="number"
                                        value={maxPrice}
                                        onChange={(e) => handleMaxChange(e.target.value)}
                                        className="w-24 border px-2 py-1 rounded text-sm"
                                    />
                                </div>

                                {/* Dual Slider */}
                                <div className="relative h-2">

                                    {/* Slider Track */}
                                    <div className="absolute inset-0 bg-gray-300 rounded-full" />

                                    {/* Active Range */}
                                    <div
                                        className="absolute h-2 bg-black rounded-full"
                                        style={{
                                            left: `${(minPrice / MAX_PRICE) * 100}%`,
                                            right: `${100 - (maxPrice / MAX_PRICE) * 100}%`,
                                        }}
                                    />

                                    {/* Min Slider */}
                                    <input
                                        type="range"
                                        min={MIN_PRICE}
                                        max={MAX_PRICE}
                                        value={minPrice}
                                        onChange={(e) => handleMinChange(e.target.value)}
                                        className="absolute w-full h-2 bg-transparent appearance-none z-10
                                        [&::-webkit-slider-thumb]:appearance-none
                                        [&::-webkit-slider-thumb]:h-4
                                        [&::-webkit-slider-thumb]:w-4
                                        [&::-webkit-slider-thumb]:rounded-full
                                        [&::-webkit-slider-thumb]:bg-black"
                                    />

                                    {/* Max Slider */}
                                    <input
                                        type="range"
                                        min={MIN_PRICE}
                                        max={MAX_PRICE}
                                        value={maxPrice}
                                        onChange={(e) => handleMaxChange(e.target.value)}
                                        className="absolute w-full h-2 bg-transparent appearance-none z-20
                                        [&::-webkit-slider-thumb]:appearance-none
                                        [&::-webkit-slider-thumb]:h-4
                                        [&::-webkit-slider-thumb]:w-4
                                        [&::-webkit-slider-thumb]:rounded-full
                                        [&::-webkit-slider-thumb]:bg-black"
                                    />
                                </div>

                                {/* Price Display */}
                                <div className="flex justify-between font-medium text-sm">
                                    <span>₹ {minPrice.toLocaleString("en-IN")}.00</span>
                                    <span>₹ {maxPrice.toLocaleString("en-IN")}.00</span>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
};

export default MobileFilter;
