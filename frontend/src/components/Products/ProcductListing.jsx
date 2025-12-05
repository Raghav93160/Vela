import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ChevronRight, Filter, Home } from "lucide-react";
import { useState } from "react";

import FilterSideBar from "../FilterSidebar/FilterSideBar";
import ProductsItem from "../Products/ProductsItem";

const INITIAL_CATEGORIES = {
  MakeUp: false,
  Skin: false,
  Hair: false,
  Fragnance: false,
  Tools: false,
  Men: false,
  BathBody: false,
};

const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [wishlisted, setWishlisted] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(INITIAL_CATEGORIES);

  /** Wishlist Toggle */
  const toggleWishlist = (id) => {
    setWishlisted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  /** Category Change Handler */
  const handleCategoryChange = (updated) => setSelectedCategories(updated);

  /** Clear All Categories */
  const handleClearAll = () => setSelectedCategories(INITIAL_CATEGORIES);

  /** Get Selected Category Badges */
  const selectedBadges = Object.entries(selectedCategories).filter(([, val]) => val);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Floating Mobile Filter Button */}
      <button
        onClick={() => setShowFilters(true)}
        className="lg:hidden fixed bottom-4 right-4 z-40 p-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-2xl"
      >
        <Filter className="w-6 h-6" />
      </button>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
          <div className="absolute right-0 top-0 h-full w-4/5 bg-white overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                ✕
              </button>
            </div>

            <FilterSideBar
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white border-b py-3 px-4">
        <div className="container mx-auto">
          <Breadcrumbs separator={<ChevronRight className="w-4 h-4" />}>
            <Link href="/" className="flex items-center gap-1 text-sm hover:text-purple-600">
              <Home className="w-4 h-4" /> Home
            </Link>
            <Link href="/products" className="text-sm hover:text-purple-600">
              Products
            </Link>
            <Typography className="text-sm font-semibold">Beauty & Cosmetics</Typography>
          </Breadcrumbs>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto p-4">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Beauty & Cosmetics</h1>
          <p className="text-gray-600">Shop our premium collection</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-6">

          {/* Sidebar */}
          <aside className="w-1/4 sticky top-4">
            <FilterSideBar
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              onClearAll={handleClearAll}
            />
          </aside>

          {/* Products Area */}
          <main className="w-3/4">
            {/* Desktop Badges */}
            {selectedBadges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedBadges.map(([category]) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full flex items-center gap-1"
                  >
                    {category}
                    <button
                      onClick={() =>
                        handleCategoryChange({
                          ...selectedCategories,
                          [category]: false,
                        })
                      }
                      className="hover:text-purple-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            <ProductsItem
              selectedCategories={selectedCategories}
              wishlisted={wishlisted}
              onToggleWishlist={toggleWishlist}
            />
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">

          {/* Mobile Controls */}
          <div className="flex justify-between items-center mb-4 bg-white p-3 rounded-lg shadow-sm border">
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            <select className="px-3 py-2 border rounded-lg text-sm">
              <option>Sort: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Mobile Badges */}
          {selectedBadges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedBadges.map(([category]) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full flex items-center gap-1"
                >
                  {category}
                  <button
                    onClick={() =>
                      handleCategoryChange({
                        ...selectedCategories,
                        [category]: false,
                      })
                    }
                    className="hover:text-purple-900"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Products */}
          <ProductsItem
            selectedCategories={selectedCategories}
            wishlisted={wishlisted}
            onToggleWishlist={toggleWishlist}
          />

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg shadow-lg">
              Load More Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
