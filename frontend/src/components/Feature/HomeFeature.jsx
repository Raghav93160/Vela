import { CheckCircle, RotateCw, Truck, User } from 'lucide-react'; // Using Lucide React for icons
import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  // Updated text colors for better contrast on the lighter background
  <div className="flex flex-col items-center text-center p-4 sm:p-6 md:p-8 bg  ">
    <div className="text-4xl text-fuchsia-600 mb-4"> {/* Icon color: Bright Pink/Fuchsia */}
      {/* The Lucide icon component is passed via prop */}
      <Icon size={32} strokeWidth={1.5} /> 
    </div>
    <h3 className="text-lg font-semibold text-purple-800 mb-2"> {/* Title color: Darker Purple */}
      {title}
    </h3>
    <p className="text-sm text-purple-600"> {/* Description color: Muted Purple */}
      {description}
    </p>
  </div>
);

const HomeFeature = () => {
  // Data for the four features, mapping the image icons to Lucide-React icons (closest visual match)
  const features = [
    {
      icon: CheckCircle,
      title: '100% Authentic',
      description: 'All our products are directly sourced from brands',
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On all orders above ₹299',
    },
    {
      icon: User, // Using 'User' as a generic person icon for 'Beauty Advisors'
      title: 'Certified Beauty Advisors',
      description: 'Get expert consultations',
    },
    {
      icon: RotateCw, // Using 'RotateCw' for a refresh/return look
      title: 'Easy Returns',
      description: 'Hassle-free pick-ups and refunds',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4  bg-white">
      {/* Background: Lightest Pink/Purple (e.g., rose-50 or purple-50) */}
      <div className="bg-purple-50 rounded-lg shadow-xl"> 
        {/* Dividers: A middle tone between the background and text (e.g., purple-200) */}
        <div className="grid grid-cols- md:grid-cols-4 divide-x divide-purple-200 divide-y md:divide-y-0">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <FeatureCard {...feature} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;