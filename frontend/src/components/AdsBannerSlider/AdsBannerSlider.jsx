// import React from 'react';
// import { ArrowRight, ShoppingBag, Smartphone, FootprintsIcon, Sparkles } from 'lucide-react';
// import { motion } from 'framer-motion';

// const AdsBanner = () => {
//   const promotions = [
//     {
//       id: 1,
//       title: "Buy Men's Bags with low price",
//       price: "¥900",
//       originalPrice: "¥1,500",
//       discount: "40% OFF",
//       icon: <ShoppingBag className="w-6 h-6" />,
//       color: "from-blue-600 to-cyan-500",
//       bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
//       image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       tag: "HOT DEAL"
//     },
//     {
//       id: 2,
//       title: "Buy Apple iPhone",
//       price: "¥75,000",
//       originalPrice: "¥85,000",
//       discount: "12% OFF",
//       icon: <Smartphone className="w-6 h-6" />,
//       color: "from-gray-800 to-gray-600",
//       bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
//       image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       tag: "NEW"
//     },
//     {
//       id: 3,
//       title: "Buy Men's Footwear with low price",
//       price: "¥1,500",
//       originalPrice: "¥2,500",
//       discount: "40% OFF",
//       icon: <FootprintsIcon className="w-6 h-6" />,
//       color: "from-amber-600 to-orange-500",
//       bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
//       image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       tag: "POPULAR"
//     },
//     {
//       id: 4,
//       title: "Buy Women's Fashion with low price",
//       price: "¥999",
//       originalPrice: "¥1,999",
//       discount: "50% OFF",
//       icon: <Sparkles className="w-6 h-6" />,
//       color: "from-pink-600 to-rose-500",
//       bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
//       image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       tag: "TRENDING"
//     }
//   ];

//   return (
//     <div className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Header */}
//         <div className="text-center mb-10 md:mb-12">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3"
//           >
//             Flash <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Deals</span>  
//           </motion.h2>
//           <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
//             Limited time offers on premium products. Hurry up before they're gone!
//           </p>
//         </div>

//         {/* Promo Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {promotions.map((promo) => (
//             <motion.div
//               key={promo.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: promo.id * 0.1 }}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="group relative"
//             >
//               {/* Discount Badge */}
//               <div className="absolute top-4 left-4 z-20">
//                 <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${promo.color} text-white font-bold text-sm shadow-lg`}>
//                   {promo.discount}
//                 </div>
//               </div>

//               {/* Hot/Trending Tag */}
//               <div className="absolute top-4 right-4 z-20">
//                 <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
//                   <span className="text-xs font-black text-gray-800 uppercase tracking-wider">
//                     {promo.tag}
//                   </span>
//                 </div>
//               </div>

//               {/* Promo Card */}
//               <div className={`relative ${promo.bgColor} rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500`}>
//                 {/* Image Section */}
//                 <div className="relative h-56 md:h-64 overflow-hidden">
//                   <img
//                     src={promo.image}
//                     alt={promo.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
//                   {/* Icon */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                     <div className={`p-4 rounded-full bg-gradient-to-r ${promo.color} text-white shadow-2xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
//                       {promo.icon}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 relative">
//                   {/* Title */}
//                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
//                     {promo.title}
//                   </h3>

//                   {/* Price Section */}
//                   <div className="flex items-center gap-3 mb-5">
//                     <div className="flex flex-col">
//                       <span className="text-2xl md:text-3xl font-black text-gray-900">
//                         {promo.price}
//                       </span>
//                       <span className="text-sm text-gray-500 line-through">
//                         {promo.originalPrice}
//                       </span>
//                     </div>
                    
//                     {/* Savings Badge */}
//                     <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
//                       Save ¥{promo.id === 1 ? "600" : promo.id === 2 ? "10,000" : promo.id === 3 ? "1,000" : "1,000"}
//                     </div>
//                   </div>

//                   {/* CTA Button */}
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`w-full py-3.5 bg-gradient-to-r ${promo.color} hover:opacity-90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
//                   >
//                     <span>SHOP NOW</span>
//                     <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                   </motion.button>

//                   {/* Additional Info */}
//                   <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
//                     <span className="text-xs text-gray-500 flex items-center gap-1">
//                       ⭐⭐⭐⭐⭐ 4.8
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       {promo.id === 1 ? "124 sold" : 
//                        promo.id === 2 ? "89 sold" : 
//                        promo.id === 3 ? "256 sold" : 
//                        "312 sold"} today
//                     </span>
//                   </div>
//                 </div>

//                 {/* Hover Border Effect */}
//                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-all duration-300 pointer-events-none"></div>

//                 {/* Countdown Timer (Optional) */}
//                 <div className="absolute bottom-24 left-4 right-4">
//                   <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2">
//                     <div className="flex items-center justify-center gap-1">
//                       {["24", "18", "45", "30"].map((time, index) => (
//                         <React.Fragment key={index}>
//                           <div className="px-2 py-1 bg-white/10 rounded text-xs font-bold text-white">
//                             {time}
//                           </div>
//                           {index < 3 && (
//                             <span className="text-white text-xs">:</span>
//                           )}
//                         </React.Fragment>
//                       ))}
//                       <span className="text-white/80 text-xs ml-2">left</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Animation */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-10 md:mt-12"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
//           >
//             <Sparkles className="w-5 h-5" />
//             <span>View All Flash Deals</span>
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//           </motion.button>
          
//           <p className="text-gray-500 text-sm mt-4">
//             🔥 Hurry! These offers end in <span className="font-bold text-red-500">24:18:45:30</span>
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AdsBanner;