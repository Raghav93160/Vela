import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Premium Beauty Products"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1612817288484-6f91600674a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Skincare Collection"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit:crop&w=2000&q=80",
      alt: "Makeup Essentials"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Fragrance Collection"
    }
  ];

  return (
    // Updated container to be full width
    <div className="w-full px-4 md:px-8 mt-7  ">
      <div className="mx-auto">
        <Swiper
          // ⭐ ADDED: This enables the infinite loop functionality
          loop={true}
          
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3500, 
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          
          className="rounded-3xl shadow-2xl" 
          style={{
            '--swiper-pagination-color': '#fff', 
            '--swiper-pagination-bullet-inactive-color': '#ffffff99',
            '--swiper-pagination-bullet-inactive-opacity': '0.7',
            '--swiper-pagination-bullet-size': '8px', 
            '--swiper-pagination-bullet-horizontal-gap': '8px', 
            '--swiper-navigation-color': '#fff',
            '--swiper-navigation-size': '30px', 
            '--swiper-pagination-bottom': '16px', 
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* Responsive Aspect Ratio Container */}
              <div className="relative w-full h-48 sm:h-72 lg:h-96  "> 
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
                {/* Enhanced Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;