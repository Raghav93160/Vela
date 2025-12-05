import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProductsItem = ({ selectedCategories = {}, wishlisted = [], onToggleWishlist }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const products = [
    { id: 1, brand: "Flying Machine", name: "Women Wide Leg Killer Jeans", rating: 5, reviews: 128, price: "₹1,200.00", originalPrice: "₹1,800.00", discount: "33% OFF", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&w=400&q=80", badge: "BESTSELLER", category: "MakeUp" },
    { id: 2, brand: "Skin", name: "Mandarin Collar Printed Shirt", rating: 4, reviews: 89, price: "₹699.00", originalPrice: "₹785.00", discount: "11% OFF", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&w=400&q=80", badge: "NEW", category: "Skin" },
    { id: 3, brand: "Campus Sutra", name: "Men Comfort Cuban Collar Shirt", rating: 5, reviews: 256, price: "₹2,300.00", originalPrice: "₹1,850.00", discount: "24% OFF", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&w=400&q=80", badge: "TRENDING", category: "Men" },
    { id: 4, brand: "Allen Solly", name: "Men Pure Cotton Striped Shirt", rating: 5, reviews: 342, price: "₹2,250.00", originalPrice: "₹1,999.00", discount: "13% OFF", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&w=400&q=80", badge: "POPULAR", category: "Men" },
    { id: 5, brand: "all about you", name: "Embroidered Satin Saree", rating: 5, reviews: 167, price: "₹5,500.00", originalPrice: "₹4,785.00", discount: "15% OFF", image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&w=400&q=80", badge: "PREMIUM", category: "MakeUp" },
    { id: 6, brand: "kasee", name: "Embellished Embroidered Kurti", rating: 5, reviews: 94, price: "₹1,999.00", originalPrice: "₹1,922.00", discount: "4% OFF", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&w=400&q=80", badge: "HOT", category: "MakeUp" },
    { id: 7, brand: "Nike", name: "Running Shoes Premium", rating: 4, reviews: 210, price: "₹3,500.00", originalPrice: "₹4,200.00", discount: "17% OFF", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&w=400&q=80", badge: "SALE", category: "Tools" },
    { id: 8, brand: "Apple", name: "iPhone 14 Pro Max", rating: 5, reviews: 450, price: "₹89,999.00", originalPrice: "₹99,999.00", discount: "10% OFF", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400&q=80", badge: "FEATURED", category: "Tools" },
    { id: 9, brand: "Garnier", name: "Hair Care Shampoo", rating: 4, reviews: 178, price: "₹450.00", originalPrice: "₹600.00", discount: "25% OFF", image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?auto=format&w=400&q=80", badge: "BESTSELLER", category: "Hair" },
    { id: 10, brand: "Chanel", name: "Premium Fragrance", rating: 5, reviews: 89, price: "₹3,200.00", originalPrice: "₹4,000.00", discount: "20% OFF", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&w=400&q=80", badge: "LUXURY", category: "Fragnance" },
    { id: 11, brand: "Dove", name: "Body Wash & Soap", rating: 4, reviews: 342, price: "₹350.00", originalPrice: "₹450.00", discount: "22% OFF", image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?auto=format&w=400&q=80", badge: "POPULAR", category: "BathBody" },
    { id: 12, brand: "L'Oréal", name: "Skincare Cream", rating: 5, reviews: 234, price: "₹890.00", originalPrice: "₹1,100.00", discount: "19% OFF", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&w=400&q=80", badge: "TRENDING", category: "Skin" }
  ];

  const calculateSaved = (originalPrice, price) => {
    const o = parseFloat(originalPrice.replace(/[^0-9.]/g, ""));
    const p = parseFloat(price.replace(/[^0-9.]/g, ""));
    return (o - p).toFixed(2);
  };

  const filteredProducts = (() => {
    const active = Object.values(selectedCategories).some(Boolean);
    return active
      ? products.filter(p => selectedCategories[p.category])
      : products;
  })();

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories]);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const getPageNumbers = () => {
    const pages = [];
    const max = 5;

    if (totalPages <= max) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full">

      {/* PRODUCT COUNT */}
      <div className="mb-4 text-gray-600">
        Showing <b>{(currentPage - 1) * productsPerPage + 1}</b> –
        <b>{Math.min(currentPage * productsPerPage, filteredProducts.length)}</b> of{" "}
        <b>{filteredProducts.length}</b> products
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {currentProducts.map(product => {
          const saved = calculateSaved(product.originalPrice, product.price);
          const heartFilled = wishlisted.includes(product.id);

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                {product.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold rounded-full shadow-md">
                    {product.badge}
                  </span>
                )}

                {product.discount && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-md">
                    {product.discount}
                  </span>
                )}

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full shadow-md"
                >
                  <Heart className={`w-5 h-5 ${heartFilled ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
                </button>
              </div>

              <div className="p-4">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-500 uppercase">{product.brand}</p>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">{product.category}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 line-clamp-2 text-sm md:text-base mt-1">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="mb-4">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>

                  {saved > 0 && (
                    <p className="text-sm text-green-600 mt-1">Save ₹{saved}</p>
                  )}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}

        {currentProducts.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No products found for selected categories
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className={`px-3 py-2 border rounded-lg ${
                currentPage === 1 ? "text-gray-400 border-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {getPageNumbers().map((num, i) =>
              num === "..." ? (
                <span key={i} className="px-2">...</span>
              ) : (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                    currentPage === num
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {num}
                </button>
              )
            )}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className={`px-3 py-2 border rounded-lg ${
                currentPage === totalPages ? "text-gray-400 border-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsItem;
