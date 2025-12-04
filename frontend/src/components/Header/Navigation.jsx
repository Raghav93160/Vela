import Button from "@mui/material/Button";
import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { LiaAngleDownSolid } from "react-icons/lia";

const Navigation = () => {
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const categories = [
    "MakeUp",
    "Skin",
    "Hair",
    "Fragrance",
    "Men",
    "Bath & Body",
    "Tools & Brushes",
  ];

  return (
    <nav className="w-full border-t border-gray-100 bg-white">
      <div className="w-full px-3 sm:px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center py-3 gap-3 md:gap-0">
          {/* Shop By Categories Button with Hamburger Icon */}
          <div className="w-full md:w-auto mb-3 md:mb-0 md:pr-4 lg:pr-6">
            <Button 
              className="!text-black !normal-case w-full"
              variant="contained"
              sx={{
                backgroundColor: '#f8f9fa',
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                padding: '10px 16px',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  borderColor: '#d1d5db',
                }
              }}
              onClick={() => setShowMobileCategories(!showMobileCategories)}
            >
              <div className="flex items-center gap-2">
                <div className="text-xl font-bold">三</div>
                <span className="text-sm sm:text-base font-bold whitespace-nowrap">SHOP BY CATEGORIES</span>
              </div>
              <LiaAngleDownSolid className="text-[16px] font-bold text-gray-600" />
            </Button>
          </div>

          {/* Desktop Categories Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-between">
            <div className="flex items-center flex-wrap gap-3 lg:gap-4 xl:gap-5">
              {categories.map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-800 hover:text-purple-600 transition-colors text-sm font-semibold whitespace-nowrap px-1"
                >
                  {category}
                </a>
              ))}
            </div>

            {/* Free International Delivery Badge */}
            <div className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-full border border-blue-100">
              <FaTruck className="text-blue-600 text-sm" />
              <span className="text-blue-700 text-xs font-bold">Free International Delivery</span>
            </div>
          </div>

          {/* Mobile Categories Dropdown */}
          {showMobileCategories && (
            <div className="md:hidden w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map((category, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors text-sm font-semibold p-2 rounded border border-gray-100 text-center"
                    onClick={() => setShowMobileCategories(false)}
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Horizontal Scroll Navigation */}
        <div className="md:hidden w-full overflow-x-auto pb-2 -mx-3 px-3">
          <div className="flex gap-3 min-w-max">
            {categories.slice(0, 4).map((category, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-gray-800 hover:text-purple-600 transition-colors text-xs font-semibold whitespace-nowrap px-1 py-0.5"
              >
                {category}
              </a>
            ))}
            <button 
              className="text-purple-600 text-xs font-bold whitespace-nowrap px-1 py-0.5"
              onClick={() => setShowMobileCategories(true)}
            >
              + More
            </button>
          </div>
          
          {/* Mobile Free Delivery Badge */}
          <div className="mt-2 flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-full border border-blue-100 w-fit mx-auto">
            <FaTruck className="text-blue-600 text-xs" />
            <span className="text-blue-700 text-xs font-bold">Free International Delivery</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;