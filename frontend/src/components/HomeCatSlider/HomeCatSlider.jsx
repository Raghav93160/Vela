import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const HomeCatSlider = () => {
  const scrollContainerRef = useRef(null);
  const [showScrollControls, setShowScrollControls] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Makeup",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Skincare",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      image: "https://images.unsplash.com/photo-1612817288484-6f91600674a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Hair",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      image: "https://images.unsplash.com/photo-1603577789420-562e840a1b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Fragrance",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      image: "https://images.unsplash.com/photo-1596541539669-e65b75f7396a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Bath & Body",
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
      image: "https://images.unsplash.com/photo-1612543997635-430932585f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Men's Grooming", // More professional name
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      image: "https://images.unsplash.com/photo-1585376326622-4a0004543d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 7,
      name: "Tools & Brushes",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      image: "https://images.unsplash.com/photo-1628171698711-6be2372c3d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      name: "Wellness",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      image: "https://images.unsplash.com/photo-1557767710-189f41b3924c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Logic to determine if scroll controls should be visible (if content overflows)
  useEffect(() => {
    const checkOverflow = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScrollControls(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [categories]);


  const scrollAmount = 350; // Increased scroll amount for larger cards

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-12 bg-gray-50"> {/* Use a slight background for lift */}
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header and Controls */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2"
            >
              Top <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Collections</span>
            </motion.h2>
            <p className="text-gray-600 text-base">
              Discover our premium beauty & skincare collections
            </p>
          </div>
          
          {/* Navigation Controls - Desktop (only visible if content overflows) */}
          {showScrollControls && (
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={scrollLeft}
                className="p-3 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={scrollRight}
                className="p-3 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          )}
        </div>

        {/* Categories Slider */}
        <div className="relative">
          {/* Scroll Container - Added snapping for better user experience */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: category.id * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                // Responsive card width: show ~1.5 cards on small, 3 on md, 4 on lg
                className="group flex-shrink-0 w-[60vw] sm:w-[45vw] md:w-[28vw] lg:w-[22vw] xl:w-[20vw] snap-start cursor-pointer" 
              >
                <div className={`relative ${category.bgColor} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-purple-300`}>
                  
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Darker Gradient Overlay for contrast on text/image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 relative">
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 transition-all duration-300 mb-0">
                      {category.name}
                    </h3>
                    {/* Stylish Hover Link/Button */}
                    <p className="mt-2 text-sm font-semibold text-gray-600 group-hover:text-purple-600 transition-colors duration-300 flex items-center gap-1">
                        Shop Now 
                        <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                           <ChevronRight className="w-4 h-4" />
                        </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fading Edges for Scroll Cue (Professionally suggests more content) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent md:w-16"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent md:w-16"></div>


          {/* Navigation Controls - Mobile (Simplified) */}
          {showScrollControls && (
            <div className="flex md:hidden items-center justify-center gap-6 mt-8">
              <button
                onClick={scrollLeft}
                className="p-3 bg-white border border-gray-200 rounded-full shadow-lg text-gray-700 hover:text-purple-600 transition"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="p-3 bg-white border border-gray-200 rounded-full shadow-lg text-gray-700 hover:text-purple-600 transition"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCatSlider;