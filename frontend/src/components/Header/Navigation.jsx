// import {
//     Box,
//     List,
//     ListItem,
//     ListItemButton,
//     ListItemText,
//     Popover,
//     Typography,
// } from "@mui/material";
// import Button from "@mui/material/Button";
// import { ChevronDown, ChevronRight, Menu } from "lucide-react"; // Imported Lucide icons
// import { useState } from "react";
// import { FaTruck } from "react-icons/fa";
// import CategoryPanel from "./CategoryPanel";

// const Navigation = () => {
//   const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   const openCategoryPanel = () => {
//     setIsOpenCatPanel(true);
//   };

//   const handlePopoverOpen = (event, category) => {
//     setAnchorEl(event.currentTarget);
//     setHoveredCategory(category);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//     setHoveredCategory(null);
//   };

//   const open = Boolean(anchorEl);

//   const categories = [
//     { name: "MakeUp", subCategories: ["Face", "Eyes", "Lips", "Cheeks", "Brows", "Nails", "Makeup Kits"] },
//     { name: "Skin Care", subCategories: ["Cleansers", "Moisturizers", "Serums", "Face Masks", "Sunscreen", "Eye Care"] },
//     { name: "Hair Care", subCategories: ["Shampoo", "Conditioner", "Hair Oil", "Hair Mask", "Styling", "Color"] },
//     { name: "Fragrance", subCategories: ["Perfumes", "Body Mists", "Deodorants", "Roll-ons", "Gift Sets"] },
//     { name: "Men's Grooming", subCategories: ["Face Care", "Shaving", "Hair Care", "Body Care", "Grooming Kits"] },
//     { name: "Bath & Body", subCategories: ["Body Wash", "Body Lotion", "Body Scrubs", "Hand Care", "Bath Salts"] },
//     { name: "Tools & Brushes", subCategories: ["Makeup Brushes", "Beauty Blenders", "Hair Tools", "Skincare Tools"] },
//   ];

//   return (
//     <>
//       <nav className="w-full bg-white relative">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex flex-col md:flex-row items-stretch md:items-center py-2 md:py-3 gap-3 md:gap-0">
//             {/* Shop By Categories Button with Hamburger Icon */}
//             <div className="w-full md:w-auto md:pr-4 lg:pr-6">
//               <Button
//                 onClick={openCategoryPanel}
//                 className="!text-black !normal-case w-full group"
//                 variant="contained"
//                 sx={{
//                   // Professional Gradient Styling
//                   background: 'linear-gradient(90deg, #9C27B0 0%, #EC407A 100%)',
//                   color: '#fff',
//                   padding: '10px 16px',
//                   fontWeight: 700,
//                   textTransform: 'none',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   gap: '12px',
//                   borderRadius: '8px',
//                   boxShadow: '0 4px 10px rgba(156, 39, 176, 0.4)',
//                   transition: 'all 0.3s',
//                   '&:hover': {
//                     background: 'linear-gradient(90deg, #8E24AA 0%, #D81B60 100%)',
//                     boxShadow: '0 6px 15px rgba(156, 39, 176, 0.6)',
//                   }
//                 }}
//               >
//                 <div className="flex items-center gap-2">
//                   <Menu className="w-5 h-5 group-hover:rotate-6 transition-transform" />
//                   <span className="text-sm sm:text-base font-bold whitespace-nowrap">SHOP BY CATEGORIES</span>
//                 </div>
//                 <ChevronDown className="text-white w-4 h-4 transition-transform group-hover:rotate-180 md:rotate-0" />
//               </Button>
//             </div>

//             {/* Desktop Categories Navigation with Hover Dropdown */}
//             <div className="hidden md:flex flex-1 items-center justify-between">
//               <div className="flex items-center flex-wrap gap-4 lg:gap-6 xl:gap-8">
//                 {categories.map((category, index) => (
//                   <div
//                     key={index}
//                     className="relative"
//                     onMouseEnter={(e) => handlePopoverOpen(e, category)}
//                     onMouseLeave={handlePopoverClose}
//                   >
//                     <a
//                       href="#"
//                       className="text-gray-800 hover:text-purple-600 transition-colors text-sm font-semibold whitespace-nowrap py-3 flex items-center gap-1"
//                       aria-owns={open ? 'mouse-over-popover' : undefined}
//                       aria-haspopup="true"
//                     >
//                       {category.name}
//                       <ChevronDown className="w-3 h-3 text-gray-500" />
//                     </a>
//                   </div>
//                 ))}
//               </div>

//               {/* Free International Delivery Badge */}
//               <div className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">
//                 <FaTruck className="text-blue-600 text-sm animate-bounce" />
//                 <span className="text-blue-700 text-xs font-bold">Free International Delivery</span>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Horizontal Scroll Navigation */}
//           <div className="md:hidden w-full overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
//             <div className="flex gap-4 min-w-max">
//               {categories.map((category, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-gray-700 hover:text-purple-600 transition-colors text-xs font-semibold whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-50 hover:bg-purple-100/50"
//                 >
//                   {category.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Hover Dropdown Popover */}
//         <Popover
//           id="mouse-over-popover"
//           sx={{ pointerEvents: 'none', mt: 1 }}
//           open={open}
//           anchorEl={anchorEl}
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//           transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//           onClose={handlePopoverClose}
//           disableRestoreFocus
//           PaperProps={{
//             onMouseEnter: () => setAnchorEl(anchorEl),
//             onMouseLeave: handlePopoverClose,
//             sx: {
//               pointerEvents: 'auto',
//               width: 280,
//               borderRadius: '12px',
//               boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
//               border: '1px solid #f3f4f6',
//             }
//           }}
//         >
//           {hoveredCategory && (
//             <Box className="p-4 bg-white">
//               <Typography 
//                 variant="h6" 
//                 className="text-gray-900 font-extrabold mb-3 pb-2 border-b-2 border-purple-100"
//                 sx={{ fontSize: '18px' }}
//               >
//                 {hoveredCategory.name}
//               </Typography>
//               <List className="p-0">
//                 {hoveredCategory.subCategories.map((subCat, index) => (
//                   <ListItem key={index} disablePadding className="mb-1">
//                     <ListItemButton 
//                       className="hover:bg-purple-50 rounded-lg group"
//                       sx={{ py: 1, px: 2 }}
//                     >
//                       <ListItemText 
//                         primary={subCat} 
//                         primaryTypographyProps={{ className: "text-gray-700 text-sm font-medium" }}
//                       />
//                       <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-transform" />
//                     </ListItemButton>
//                   </ListItem>
//                 ))}
//                 <ListItem disablePadding className="mt-2">
//                   <ListItemButton 
//                     className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg text-white"
//                     sx={{ py: 1.5, px: 2 }}
//                   >
//                     <ListItemText 
//                       primary="View All Products →" 
//                       primaryTypographyProps={{ className: "text-sm font-bold" }}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               </List>
//             </Box>
//           )}
//         </Popover>
//       </nav>

//       {/* CategoryPanel Drawer */}
//       <CategoryPanel
//         isOpenCatPanel={isOpenCatPanel}
//         openCategoryPanel={setIsOpenCatPanel}
//       />
//     </>
//   );
// };

// export default Navigation;