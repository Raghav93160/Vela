import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Badge,
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Close,
  ExpandLess,
  ExpandMore,
  ShoppingBag,
  Star,
  TrendingUp,
} from "@mui/icons-material";
import {
  Heart,
  ShoppingCart,
  User,
  Menu,
  ChevronDown,
  ChevronRight,
  Flower,
  Palette,
  Sun,
  Feather,
  Droplet,
  Zap,
  Search,
  Truck,
  X,
  Phone,
  Mail,
  MapPin,
  Shield,
  Gift,
  Clock,
} from "lucide-react";
import { IoIosGitCompare } from "react-icons/io";

// Custom Badge styling
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

// Announcement Bar Component
const AnnouncementBar = () => (
  <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white py-2 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>support@vela.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4" />
            <span className="font-semibold">Free Shipping on Orders $50+</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>100% Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Search Component
const SearchBar = ({ isMobile = false }) => (
  <div className={`${isMobile ? 'w-full' : 'w-full max-w-2xl'}`}>
    <div className="relative">
      <div className="flex items-center bg-white rounded-full px-4 py-3 border-2 border-gray-100 focus-within:border-purple-500 focus-within:shadow-lg transition-all shadow-sm">
        <Search className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search for premium beauty products..."
          className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-500 text-sm"
        />
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity ml-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-transform">
          Search
        </button>
      </div>
      {/* Quick Suggestions */}
      <div className="hidden md:flex items-center gap-3 mt-2 pl-4">
        <span className="text-xs text-gray-500">Trending:</span>
        {["Lipstick", "Face Serum", "Perfume", "Shampoo"].map((item) => (
          <button
            key={item}
            className="text-xs text-purple-600 hover:text-pink-500 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Mobile Search Overlay
const MobileSearchOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden animate-slideDown">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Search Products</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <SearchBar isMobile />
        
        {/* Recent Searches */}
        <div className="mt-8">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Searches</h4>
          <div className="flex flex-wrap gap-2">
            {["NARS Lipstick", "La Mer Cream", "Chanel Perfume", "Olaplex Shampoo"].map((item) => (
              <button
                key={item}
                className="px-4 py-2 bg-gray-50 hover:bg-purple-50 rounded-full text-sm text-gray-700 hover:text-purple-700 transition-colors border border-gray-200 hover:border-purple-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        
        {/* Popular Categories */}
        <div className="mt-8">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Popular Categories</h4>
          <div className="grid grid-cols-2 gap-3">
            {["Skincare", "Makeup", "Fragrance", "Hair Care"].map((category) => (
              <button
                key={category}
                className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all text-center"
              >
                <span className="text-gray-800 font-medium">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryPanelOpen, setIsCategoryPanelOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handlePopoverOpen = (event, category) => {
    setAnchorEl(event.currentTarget);
    setHoveredCategory(category);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setHoveredCategory(null);
  };

  // Categories Data
  const categories = [
    {
      name: "Makeup",
      icon: <Palette className="text-pink-600" />,
      color: "from-pink-50 to-rose-50",
      subCategories: [
        { name: "Foundation & Concealer", count: 245 },
        { name: "Lipstick & Lip Gloss", count: 189 },
        { name: "Eye Makeup", count: 167 },
        { name: "Blush & Bronzer", count: 98 },
        { name: "Makeup Kits", count: 56 },
        { name: "Makeup Remover", count: 72 },
      ],
    },
    {
      name: "Skincare",
      icon: <Sun className="text-blue-600" />,
      color: "from-blue-50 to-cyan-50",
      subCategories: [
        { name: "Face Cleansers", count: 156 },
        { name: "Moisturizers", count: 234 },
        { name: "Serums & Treatments", count: 189 },
        { name: "Sunscreen", count: 87 },
        { name: "Acne Care", count: 65 },
        { name: "Anti-Aging", count: 143 },
      ],
    },
    {
      name: "Hair Care",
      icon: <Feather className="text-amber-600" />,
      color: "from-amber-50 to-orange-50",
      subCategories: [
        { name: "Shampoo & Conditioner", count: 278 },
        { name: "Hair Styling", count: 165 },
        { name: "Hair Color", count: 89 },
        { name: "Hair Treatments", count: 134 },
        { name: "Hair Accessories", count: 212 },
        { name: "Hair Tools", count: 98 },
      ],
    },
    {
      name: "Fragrance",
      icon: <Flower className="text-purple-600" />,
      color: "from-purple-50 to-violet-50",
      subCategories: [
        { name: "Women's Perfume", count: 187 },
        { name: "Men's Cologne", count: 145 },
        { name: "Unisex Fragrances", count: 89 },
        { name: "Body Mists", count: 112 },
        { name: "Scented Candles", count: 67 },
        { name: "Gift Sets", count: 45 },
      ],
    },
    {
      name: "Men's Grooming",
      icon: <User className="text-indigo-600" />,
      color: "from-indigo-50 to-blue-50",
      subCategories: [
        { name: "Skincare for Men", count: 123 },
        { name: "Shaving & Grooming", count: 178 },
        { name: "Hair Care for Men", count: 95 },
        { name: "Men's Fragrances", count: 134 },
        { name: "Beard Care", count: 89 },
        { name: "Body Care", count: 112 },
      ],
    },
    {
      name: "Bath & Body",
      icon: <Droplet className="text-teal-600" />,
      color: "from-teal-50 to-emerald-50",
      subCategories: [
        { name: "Body Wash & Soap", count: 167 },
        { name: "Body Lotions", count: 189 },
        { name: "Body Scrubs", count: 78 },
        { name: "Bath Bombs & Salts", count: 92 },
        { name: "Hand Care", count: 145 },
        { name: "Foot Care", count: 67 },
      ],
    },
  ];

  const popularCategories = [
    {
      name: "🔥 Hot Deals",
      icon: <Zap className="text-red-500" />,
      color: "bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100",
      desc: "Limited Time Offers"
    },
    {
      name: "✨ New Arrivals",
      icon: <TrendingUp className="text-green-600" />,
      color: "bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100",
      desc: "Just In"
    },
    {
      name: "⭐ Best Sellers",
      icon: <Star className="text-yellow-600" />,
      color: "bg-gradient-to-r from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100",
      desc: "Top Rated"
    },
    {
      name: "🎁 Gift Sets",
      icon: <Gift className="text-purple-600" />,
      color: "bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100",
      desc: "Perfect Presents"
    },
  ];

  const navCategories = [
    { name: "Makeup", subCategories: ["Face", "Eyes", "Lips", "Cheeks", "Brows", "Nails", "Makeup Kits"] },
    { name: "Skincare", subCategories: ["Cleansers", "Moisturizers", "Serums", "Face Masks", "Sunscreen", "Eye Care"] },
    { name: "Hair Care", subCategories: ["Shampoo", "Conditioner", "Hair Oil", "Hair Mask", "Styling", "Color"] },
    { name: "Fragrance", subCategories: ["Perfumes", "Body Mists", "Deodorants", "Roll-ons", "Gift Sets"] },
    { name: "Men's", subCategories: ["Face Care", "Shaving", "Hair Care", "Body Care", "Grooming Kits"] },
    { name: "Bath & Body", subCategories: ["Body Wash", "Body Lotion", "Body Scrubs", "Hand Care", "Bath Salts"] },
    { name: "Tools", subCategories: ["Makeup Brushes", "Beauty Blenders", "Hair Tools", "Skincare Tools"] },
    { name: "Brands", subCategories: ["Chanel", "Dior", "MAC", "NARS", "La Mer", "Estée Lauder"] },
  ];

  const open = Boolean(anchorEl);

  // Category Panel Drawer Content
  const CategoryPanelContent = () => (
    <Box sx={{ width: { xs: "85vw", sm: 400 } }} className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white shadow-xl flex-shrink-0">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-white/20 rounded-lg">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-black tracking-wider">VELA.</h1>
            </div>
            <p className="text-sm font-medium opacity-90">Premium Beauty & Wellness</p>
          </div>
          <IconButton
            onClick={() => setIsCategoryPanelOpen(false)}
            className="!text-white hover:bg-white/20 transition-colors"
          >
            <Close />
          </IconButton>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Open 24/7</span>
          </div>
          <span className="opacity-50">•</span>
          <span>1,000+ Brands</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">All Categories</h3>
            {categories.map((category) => (
              <div key={category.name} className="mb-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <ListItem disablePadding>
                  <ListItemButton
                    className={`hover:opacity-90 transition-all duration-300 px-4 py-4 bg-gradient-to-r ${category.color}`}
                    onClick={() => toggleCategory(category.name)}
                  >
                    <ListItemIcon className="min-w-10">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {category.icon}
                      </div>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <div className="flex items-center justify-between">
                          <span className="text-gray-900 font-bold">{category.name}</span>
                          <span className="text-xs text-gray-600 bg-white/80 px-2 py-1 rounded-full">
                            {category.subCategories.reduce((acc, curr) => acc + curr.count, 0)} items
                          </span>
                        </div>
                      }
                    />
                    {openCategories[category.name] ? (
                      <ExpandLess className="text-gray-700" />
                    ) : (
                      <ExpandMore className="text-gray-700" />
                    )}
                  </ListItemButton>
                </ListItem>
                <Collapse in={openCategories[category.name]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding className="bg-white border-t border-gray-100">
                    {category.subCategories.map((subCategory, index) => (
                      <ListItemButton
                        key={index}
                        className="pl-14 py-3 hover:bg-gray-50 transition-all duration-200 group"
                        onClick={() => setIsCategoryPanelOpen(false)}
                      >
                        <ListItemText
                          primary={
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 font-medium">{subCategory.name}</span>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {subCategory.count}
                              </span>
                            </div>
                          }
                        />
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </div>

          {/* Popular Categories */}
          <div className="p-4 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="text-purple-500 w-5 h-5" />
              Featured Collections
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {popularCategories.map((item) => (
                <button
                  key={item.name}
                  className={`${item.color} flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                  onClick={() => setIsCategoryPanelOpen(false)}
                >
                  <div className="p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-bold text-sm text-center">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-600">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield className="w-4 h-4" />
            <span>Secure Shopping</span>
          </div>
          <button className="text-purple-600 hover:text-purple-700 text-sm font-semibold">
            View All Categories →
          </button>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Mobile Search Overlay */}
      <MobileSearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Main Header */}
      <div className="sticky top-0 z-40 bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4">
          {/* Top Row */}
          <div className="flex items-center justify-between py-4">
            {/* Left: Hamburger (Mobile) & Logo */}
            <div className="flex items-center gap-4">
              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsCategoryPanelOpen(true)}
                className="md:hidden p-2 hover:bg-gray-50 rounded-xl"
                aria-label="Open categories"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>

              {/* Logo */}
              <Link to="/" className="block">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 blur-lg opacity-30"></div>
                    <h1 className="relative text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      VELA.
                    </h1>
                  </div>
                  <span className="hidden md:inline text-xs text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded-full">
                    Premium
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Categories - ONLY SHOW ON DESKTOP */}
            <div className="hidden lg:flex items-center gap-6">
              {navCategories.slice(0, 5).map((category, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={(e) => handlePopoverOpen(e, category)}
                  onMouseLeave={handlePopoverClose}
                >
                  <a
                    href="#"
                    className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-semibold whitespace-nowrap py-2 flex items-center gap-1 group"
                  >
                    {category.name}
                    <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </a>
                </div>
              ))}
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-semibold whitespace-nowrap py-2"
              >
                More
              </a>
            </div>

            {/* Right: Search & Action Icons */}
            <div className="flex items-center gap-4">
              {/* Desktop Search */}
              <div className="hidden md:block w-64 lg:w-80">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-white rounded-full border border-gray-200 hover:border-purple-300 transition-all text-left"
                >
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-500 text-sm">Search products...</span>
                  </div>
                  <kbd className="hidden lg:inline-flex items-center px-2 py-1 text-xs text-gray-500 bg-white border border-gray-300 rounded">
                    ⌘K
                  </kbd>
                </button>
              </div>

              {/* Mobile Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 hover:bg-gray-50 rounded-xl"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              {/* Action Icons */}
              <div className="flex items-center gap-1">
                {/* Compare */}
                <Tooltip title="Compare" arrow>
                  <IconButton
                    aria-label="compare"
                    className="p-2 hover:bg-purple-50 hover:scale-110 transition-all duration-300 relative"
                    size="small"
                  >
                    <StyledBadge badgeContent={2} color="secondary">
                      <IoIosGitCompare className="w-5 h-5 text-gray-700 hover:text-purple-600" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>

                {/* Wishlist */}
                <Tooltip title="Wishlist" arrow>
                  <IconButton
                    aria-label="wishlist"
                    className="p-2 hover:bg-pink-50 hover:scale-110 transition-all duration-300 relative"
                    size="small"
                  >
                    <StyledBadge badgeContent={3} color="secondary">
                      <Heart className="w-5 h-5 text-gray-700 hover:text-pink-500" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>

                {/* Cart */}
                <Tooltip title="Cart" arrow>
                  <IconButton
                    aria-label="cart"
                    className="p-2 hover:bg-purple-50 hover:scale-110 transition-all duration-300 relative group"
                    size="small"
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-purple-600" />
                    </StyledBadge>
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      $249.99
                    </span>
                  </IconButton>
                </Tooltip>

                {/* Account */}
                <Tooltip title="Account" arrow>
                  <Link
                    to="/login"
                    className="hidden md:flex items-center justify-center p-2 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <User className="w-5 h-5 text-gray-700 hover:text-purple-600" />
                  </Link>
                </Tooltip>

                {/* Mobile Account */}
                <Link
                  to="/login"
                  className="md:hidden flex items-center justify-center p-2 hover:bg-gray-50 rounded-xl"
                >
                  <User className="w-5 h-5 text-gray-700" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Categories Button & Delivery Info */}
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            {/* Categories Button (Desktop) */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsCategoryPanelOpen(true)}
                className="!text-white !normal-case group"
                variant="contained"
                sx={{
                  background: 'linear-gradient(90deg, #9C27B0 0%, #EC407A 100%)',
                  color: '#fff',
                  padding: '10px 20px',
                  fontWeight: 700,
                  textTransform: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(156, 39, 176, 0.3)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #8E24AA 0%, #D81B60 100%)',
                    boxShadow: '0 6px 20px rgba(156, 39, 176, 0.4)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Menu className="w-5 h-5" />
                <span className="text-sm font-bold">ALL CATEGORIES</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Button>
            </div>

            {/* Delivery Info */}
            <div className="hidden md:flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-sm">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <Truck className="w-4 h-4 animate-pulse" />
                  <span>Free Delivery</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">24/7 Support</span>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="hidden xl:flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>SSL Secure</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Gift className="w-4 h-4" />
                  <span>Gift Ready</span>
                </div>
              </div>
            </div>

            {/* Mobile Categories Button - REMOVED (No longer needed) */}
            {/* <div className="md:hidden">
              <button
                onClick={() => setIsCategoryPanelOpen(true)}
                className="flex items-center gap-2 text-sm font-semibold text-purple-600 bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-full transition-colors"
              >
                <Menu className="w-4 h-4" />
                Categories
              </button>
            </div> */}
          </div>

          {/* REMOVED: Mobile Categories Scroll (Cart ke niche jo categories dikhte the) */}
          {/* <div className="md:hidden w-full overflow-x-auto py-3 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-3 min-w-max">
              {navCategories.slice(0, 6).map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors text-xs font-semibold whitespace-nowrap px-4 py-2 rounded-full bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-200 shadow-sm"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div> */}
        </div>

        {/* Hover Dropdown */}
        <Popover
          id="mouse-over-popover"
          sx={{ pointerEvents: 'none', mt: 1 }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          PaperProps={{
            onMouseEnter: () => setAnchorEl(anchorEl),
            onMouseLeave: handlePopoverClose,
            sx: {
              pointerEvents: 'auto',
              width: 300,
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '1px solid #f3f4f6',
              overflow: 'hidden',
            }
          }}
        >
          {hoveredCategory && (
            <Box className="bg-white">
              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-100">
                <Typography
                  variant="h6"
                  className="text-gray-900 font-extrabold mb-2"
                  sx={{ fontSize: '18px' }}
                >
                  {hoveredCategory.name}
                </Typography>
                <p className="text-sm text-gray-600">Premium beauty products</p>
              </div>
              <List className="p-4">
                {hoveredCategory.subCategories.map((subCat, index) => (
                  <ListItem key={index} disablePadding className="mb-2">
                    <ListItemButton
                      className="hover:bg-purple-50 rounded-xl group"
                      sx={{ py: 2, px: 3 }}
                    >
                      <ListItemText
                        primary={subCat}
                        primaryTypographyProps={{ className: "text-gray-700 font-medium" }}
                      />
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                    </ListItemButton>
                  </ListItem>
                ))}
                <ListItem disablePadding className="mt-4">
                  <ListItemButton
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-xl text-white font-semibold"
                    sx={{ py: 2, px: 3 }}
                  >
                    <ListItemText
                      primary="View All Products →"
                      primaryTypographyProps={{ className: "text-center" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          )}
        </Popover>
      </div>

      {/* Category Panel Drawer */}
      <Drawer
        open={isCategoryPanelOpen}
        onClose={() => setIsCategoryPanelOpen(false)}
        anchor="left"
        PaperProps={{
          sx: {
            backgroundColor: "#fff",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            width: { xs: "85vw", sm: 400 },
          },
        }}
      >
        <CategoryPanelContent />
      </Drawer>

      {/* Add CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Header;