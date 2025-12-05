const HomeBanner = () => {
  return (
    <div className="w-full bg-white">
      {/* Mobile */}
      <div className="block md:hidden p-4">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Share the joy of beauty - gift cards now available"
          className="w-full h-56 object-cover rounded-lg shadow-md"
          loading="lazy"
        />
      </div>
      
      {/* Tablet */}
      <div className="hidden md:block lg:hidden p-6">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Share the joy of beauty - gift cards now available"
          className="w-full h-72 object-cover rounded-xl shadow-lg"
          loading="lazy"
        />
      </div>
      
      {/* Desktop */}
      <div className="hidden lg:block p-8">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Share the joy of beauty - gift cards now available"
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HomeBanner;