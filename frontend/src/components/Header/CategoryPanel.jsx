// import {
//   Category,
//   Close,
//   ExpandLess,
//   ExpandMore,
//   ShoppingBag,
//   Star,
//   TrendingUp,
// } from "@mui/icons-material";
// import {
//   Flower,
//   Palette,
//   Sun,
//   Feather,
//   Droplet,
//   User,
//   Zap,
//   ChevronRight,
// } from "lucide-react"; // Imported Lucide icons for better visuals
// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { useState } from "react";

// const CategoryPanel = ({ isOpenCatPanel, openCategoryPanel }) => {
//   const [openCategories, setOpenCategories] = useState({});

//   const handleClose = () => {
//     openCategoryPanel(false);
//   };

//   const toggleCategory = (categoryName) => {
//     setOpenCategories((prev) => ({
//       ...prev,
//       [categoryName]: !prev[categoryName],
//     }));
//   }; // Updated Categories with more relevant Lucide icons

//   const categories = [
//     {
//       name: "Makeup",
//       icon: <Palette className="text-pink-600" />, // Changed to Palette
//       color: "from-pink-50 to-rose-50",
//       subCategories: [
//         "Foundation & Concealer",
//         "Lipstick & Lip Gloss",
//         "Eye Makeup",
//         "Blush & Bronzer",
//         "Makeup Kits",
//         "Makeup Remover",
//       ],
//     },
//     {
//       name: "Skincare",
//       icon: <Sun className="text-blue-600" />, // Changed to Sun
//       color: "from-blue-50 to-cyan-50",
//       subCategories: [
//         "Face Cleansers",
//         "Moisturizers",
//         "Serums & Treatments",
//         "Sunscreen",
//         "Acne Care",
//         "Anti-Aging",
//       ],
//     },
//     {
//       name: "Hair Care",
//       icon: <Feather className="text-amber-600" />, // Changed to Feather
//       color: "from-amber-50 to-orange-50",
//       subCategories: [
//         "Shampoo & Conditioner",
//         "Hair Styling",
//         "Hair Color",
//         "Hair Treatments",
//         "Hair Accessories",
//         "Hair Tools",
//       ],
//     },
//     {
//       name: "Fragrance",
//       icon: <Flower className="text-purple-600" />, // Changed to Flower
//       color: "from-purple-50 to-violet-50",
//       subCategories: [
//         "Women's Perfume",
//         "Men's Cologne",
//         "Unisex Fragrances",
//         "Body Mists",
//         "Scented Candles",
//         "Gift Sets",
//       ],
//     },
//     {
//       name: "Men's Grooming",
//       icon: <User className="text-indigo-600" />, // Changed to User
//       color: "from-indigo-50 to-blue-50",
//       subCategories: [
//         "Skincare for Men",
//         "Shaving & Grooming",
//         "Hair Care for Men",
//         "Men's Fragrances",
//         "Beard Care",
//         "Body Care",
//       ],
//     },
//     {
//       name: "Bath & Body",
//       icon: <Droplet className="text-teal-600" />, // Changed to Droplet
//       color: "from-teal-50 to-emerald-50",
//       subCategories: [
//         "Body Wash & Soap",
//         "Body Lotions",
//         "Body Scrubs",
//         "Bath Bombs & Salts",
//         "Hand Care",
//         "Foot Care",
//       ],
//     },
//   ];

//   const popularCategories = [
//     {
//       name: "🔥 Top Deals",
//       icon: <Zap className="text-red-500" />,
//       color: "bg-gradient-to-r from-red-50 to-orange-50",
//     },
//     {
//       name: "🆕 New Arrivals",
//       icon: <TrendingUp className="text-green-600" />,
//       color: "bg-gradient-to-r from-green-50 to-emerald-50",
//     },
//     {
//       name: "⭐ Best Sellers",
//       icon: <Star className="text-yellow-600" />,
//       color: "bg-gradient-to-r from-yellow-50 to-amber-50",
//     },
//     {
//       name: "💥 Clearance Sale",
//       icon: <Category className="text-purple-600" />,
//       color: "bg-gradient-to-r from-purple-50 to-pink-50",
//     },
//   ];

//   const DrawerList = (
//     <Box
//       sx={{ width: { xs: "85vw", sm: 380 } }} // Adjusted width for better mobile display
//       role="presentation"
//       className="h-full flex flex-col bg-white"
//     >
//             {/* Header: Enhanced Gradient and Branding */}     {" "}
//       <div className="p-6 bg-gradient-to-br from-purple-700 via-violet-600 to-pink-600 text-white shadow-xl flex-shrink-0">
//                {" "}
//         <div className="flex justify-between items-start mb-4">
//                    {" "}
//           <div>
//                        {" "}
//             <h1 className="text-3xl font-black tracking-wider">V E L A .</h1>   
//                    {" "}
//             <p className="text-sm font-medium opacity-80 mt-1">
//               Shop Beauty & Wellness
//             </p>
//                      {" "}
//           </div>
//                    {" "}
//           <IconButton
//             onClick={handleClose}
//             className="!text-white hover:bg-white/20 transition-colors"
//           >
//                         <Close />         {" "}
//           </IconButton>
//                  {" "}
//         </div>
//                {" "}
//         <div className="flex items-center gap-3 mt-4">
//                    {" "}
//           <div className="p-2 bg-white/30 rounded-full">
//                         <ShoppingBag className="w-5 h-5" />         {" "}
//           </div>
//                     <h2 className="text-xl font-bold">Product Categories</h2>   
//              {" "}
//         </div>
//              {" "}
//       </div>
//             {/* Main Content: Scrollable List */}     {" "}
//       <div className="flex-1 overflow-y-auto">
//                {" "}
//         <List className="p-4">
//                    {" "}
//           {categories.map((category) => (
//             <div
//               key={category.name}
//               className="mb-3 rounded-xl overflow-hidden border border-gray-100 shadow-sm"
//             >
//                            {" "}
//               <ListItem disablePadding>
//                                {" "}
//                 <ListItemButton
//                   className={`hover:opacity-90 transition-all duration-300 px-4 py-3 bg-gradient-to-r ${category.color}`}
//                   onClick={() => toggleCategory(category.name)}
//                 >
//                                    {" "}
//                   <ListItemIcon className="min-w-10">
//                                         {category.icon}                 {" "}
//                   </ListItemIcon>
//                                    {" "}
//                   <ListItemText
//                     primary={category.name}
//                     primaryTypographyProps={{
//                       className: "text-gray-900 font-bold text-base",
//                     }}
//                   />
//                                    {" "}
//                   {openCategories[category.name] ? (
//                     <ExpandLess className="text-gray-700" />
//                   ) : (
//                     <ExpandMore className="text-gray-700" />
//                   )}
//                                  {" "}
//                 </ListItemButton>
//                              {" "}
//               </ListItem>
//                                          {" "}
//               <Collapse
//                 in={openCategories[category.name]}
//                 timeout="auto"
//                 unmountOnExit
//               >
//                 <List
//                   component="div"
//                   disablePadding
//                   className="bg-white border-t border-gray-100"
//                 >
                 
//                   {category.subCategories.map((subCategory, index) => (
//                     <ListItemButton
//                       key={index}
//                       className="pl-12 py-2 hover:bg-gray-50 transition-all duration-200 hover:pl-14"
//                       onClick={handleClose}
//                     >
                      
//                       <ListItemText
//                         primary={subCategory}
//                         primaryTypographyProps={{
//                           className: "text-gray-700 text-sm font-medium",
//                         }}
//                       />
//                       <ChevronRight className="w-4 h-4 text-gray-400" /> 
//                     </ListItemButton>
//                   ))}
//                 </List>
//               </Collapse>
//             </div>
//           ))}
//         </List>
//        {/* Popular Categories: Grid Layout */} 
//         <div className="p-4 border-t border-gray-200 bg-gray-50">
//           <h3 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
//                         <Zap className="text-purple-500 w-5 h-5" />           
//             Quick Links          {" "}
//           </h3>
//                    {" "}
//           <div className="grid grid-cols-2 gap-3">
//                        {" "}
//             {popularCategories.map((item) => (
//               <button
//                 key={item.name}
//                 className={`${item.color} flex flex-col items-center justify-center gap-2 px-3 py-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
//                 onClick={handleClose}
//               >
//                 {item.icon}   {" "}
//                 <span className="text-gray-800 font-bold text-xs text-center">
//                   {item.name}
//                 </span>
//               </button>
//             ))}
//                      {" "}
//           </div>
//                  {" "}
//         </div>
//              {" "}
//       </div>
//          {" "}
//     </Box>
//   );

//   return (
//     <Drawer
//       open={isOpenCatPanel}
//       onClose={handleClose}
//       anchor="left"
//       PaperProps={{
//         sx: {
//           backgroundColor: "#fff",
//           boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//           width: { xs: "85vw", sm: 380 },
//         },
//       }}
//     >
//             {DrawerList}   {" "}
//     </Drawer>
//   );
// };

// export default CategoryPanel;
