import ShopHeader from "../components/shop/ShopHeader";
import FilterSidebar from "../components/shop/FilterSidebar";
import MobileFilter from "../components/shop/MobileFilter";
import ProductGrid from "../components/shop/ProductGrid";

const Shop = () => {
  return (
    <div className="bg-white">
      {/* PAGE HEADER */}
      <ShopHeader />
      <div className="mb-2">
        <img src="../flashSale1.png"
          onClick={() =>
            document
              .getElementById("price-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <div className="flex h-screen overflow-hidden gap-8">

          {/* FILTERS (Desktop) */}
          <div className="hidden md:block lg:block md:1/5 lg:w-1/6">
            <div className="h-full overflow-y-auto scrollbar-hide px-3">
              <FilterSidebar />
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="w-full h-full flex flex-col md:4/5 lg:w-5/6">

            {/* MOBILE: Filter + Sort in same row */}
            <div className="flex items-center justify-between mb-4 md:hidden lg:hidden">
              <MobileFilter />
              <select className="border-2 px-2 py-2  text-sm md:text-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {/* DESKTOP: Sort only (right aligned) */}
            <div className="hidden  md:flex lg:flex justify-end mb-4">
              <select className="border-2 px-4 py-2 text-sm md:text-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
              <ProductGrid />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Shop;
