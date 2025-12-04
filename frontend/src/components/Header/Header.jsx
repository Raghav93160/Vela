import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { Phone, Sparkles, Truck } from "lucide-react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Navigation from "./Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: "0.65rem",
    fontWeight: "600",
    background: "linear-gradient(90deg, #9C27B0 0%, #EC407A 100%)",
  },
}));

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Promo Bar - Full width without gaps */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5">
        <div className="w-full px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Promo Section */}
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <p className="font-semibold text-xs sm:text-sm text-center sm:text-left tracking-wide">
                Premium Skincare Sale - Up to 50% Off
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                to="/beauty-advice"
                className="flex items-center gap-1.5 hover:text-white/90 transition-colors duration-200 text-xs"
              >
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">Beauty Advice</span>
              </Link>

              <div className="h-3 w-px bg-white/40"></div>

              <Link
                to="/free-shipping"
                className="flex items-center gap-1.5 hover:text-white/90 transition-colors duration-200 text-xs"
              >
                <Truck className="w-3 h-3" />
                <span className="hidden sm:inline">Free Shipping</span>
              </Link>

              <div className="h-3 w-px bg-white/40 hidden sm:block"></div>

              <Link
                to="/track-order"
                className="hover:text-white/90 transition-colors duration-200 text-xs font-medium hidden sm:inline"
              >
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Full width without gaps */}
      <div className="bg-white shadow-md border-b border-gray-100 w-full">
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            {/* Logo - Reduced left gap */}
            <div className="flex-shrink-0 w-24 sm:w-32">
              <Link to="/" className="block">
                <img
                  src="/images/Logo/vela logo white.png"
                  alt="Vela Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Search - Removed horizontal margins */}
            <div className="flex-1 max-w-2xl mx-0 sm:mx-4 lg:mx-6">
              <Search />
            </div>

            {/* Right side icons - Reduced gaps */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Login/Register */}
              <div className="hidden sm:flex flex-col items-end mr-1">
                <div className="flex items-center gap-1">
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
                  >
                    Login
                  </Link>
                  <span className="text-gray-400 text-sm">/</span>
                  <Link
                    to="/register"
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>
              </div>

              {/* Mobile Login/Register */}
              <div className="sm:hidden">
                <Link
                  to="/login"
                  className="text-xs text-gray-700 hover:text-purple-600 font-medium px-1"
                >
                  Login
                </Link>
              </div>

              {/* Action Icons - Tight spacing */}
              <div className="flex items-center gap-0.5 sm:gap-1.5">
                {/* Compare */}
                <Tooltip title="compare">
                  <IconButton 
                    aria-label="compare" 
                    className="p-1 sm:p-1.5 hover:bg-gray-50"
                    size="small"
                  >
                    <StyledBadge badgeContent={2} color="secondary">
                      <IoIosGitCompare className="w-5 h-5 sm:w-5 sm:h-5 text-gray-700" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>

                {/* Wishlist */}
                <Tooltip title="wishlist">
                  <IconButton 
                    aria-label="wishlist" 
                    className="p-1 sm:p-1.5 hover:bg-gray-50"
                    size="small"
                  >
                    <StyledBadge badgeContent={3} color="secondary">
                      <CiHeart className="w-5 h-5 sm:w-5 sm:h-5 text-gray-700" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
                
                {/* Cart */}
                <Tooltip title="cart">  
                  <IconButton 
                    aria-label="cart" 
                    className="p-1 sm:p-1.5 hover:bg-gray-50 relative"
                    size="small"
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <CiShoppingCart className="w-5 h-5 sm:w-5 sm:h-5 text-gray-700" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Full width without gaps */}
      <Navigation />
    </header>
  );
};

export default Header;