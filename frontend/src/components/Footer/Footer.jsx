import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  const shopCategories = [
    { name: 'What\'s New', href: '#new' },
    { name: 'Makeup', href: '#makeup' },
    { name: 'Skincare', href: '#skincare' },
    { name: 'Hair', href: '#hair' },
    { name: 'Fragrance', href: '#fragrance' },
    { name: 'Men', href: '#men' },
    { name: 'Bath & Body', href: '#bath-body' },
    { name: 'Tools & Appliances', href: '#tools' }
  ];

  const moreCategories = [
    { name: 'Mom & Baby', href: '#mom-baby' },
    { name: 'Wellness', href: '#wellness' },
    { name: 'Minis', href: '#minis' },
    { name: 'Homegrown', href: '#homegrown' },
    { name: 'Gifts', href: '#gifts' }
  ];

  const collections = [
    { name: 'Hot Sellers', href: '#hot-sellers', badge: 'HOT' },
    { name: 'Everyday', href: '#everyday' },
    { name: 'Brands', href: '#brands' },
    { name: 'TopShelf', href: '#topshelf' },
    { name: 'Gifting', href: '#gifting' }
  ];

  const customerCare = [
    { name: 'Help Centre', href: '#help' },
    { name: 'Track Order', href: '#track' },
    { name: 'Shipping Policy', href: '#shipping' },
    { name: 'Return & Refund', href: '#returns' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Size Guide', href: '#size' }
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Story', href: '#story' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Press', href: '#press' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white">
      {/* Top Banner */}
      {/* <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>Free Shipping Worldwide</span>
            </div>
            <span className="hidden sm:inline text-pink-200">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Premium Quality Guaranteed</span>
            </div>
            <span className="hidden sm:inline text-pink-200">•</span>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold">SUMMER SALE</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Newsletter Section */}
      
      

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/images/LOGO/vela logo white.png" width="160"  alt="Vela Logo" />
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Discover premium beauty products that empower you to embrace your unique glow. From skincare to makeup, we bring you luxury that transforms.
              </p>
            </div>

            {/* App Download Buttons */}
            <div className="space-y-3 mb-6">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-300">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-300">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {['F', 'I', 'T', 'Y', 'P'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10"
                >
                  <span className="text-sm font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4 sm:mb-6 text-pink-300">Shop</h4>
            <ul className="space-y-2 sm:space-y-3">
              {shopCategories.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-pink-300 transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4 sm:mb-6 text-purple-300">More</h4>
            <ul className="space-y-2 sm:space-y-3">
              {moreCategories.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 sm:mb-6 mt-8 text-indigo-300">Collections</h4>
            <ul className="space-y-2 sm:space-y-3">
              {collections.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-indigo-300 transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    {item.name}
                    {item.badge && (
                      <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-bold mb-4 sm:mb-6 text-pink-300">Customer Care</h4>
            <ul className="space-y-2 sm:space-y-3">
              {customerCare.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-pink-300 transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 sm:mb-6 text-purple-300">Company</h4>
            <ul className="space-y-2 sm:space-y-3 mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a href="tel:1800103890" className="flex items-center gap-2 text-gray-300 hover:text-pink-300 transition-colors text-sm group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>1800 103 8909</span>
              </a>
              <a href="mailto:hello@glowaura.com" className="flex items-center gap-2 text-gray-300 hover:text-pink-300 transition-colors text-sm group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="break-all">hello@glowaura.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Mon-Sat: 10am to 8pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} GlowAura - Luxury Beauty. All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#privacy" className="text-gray-300 hover:text-pink-300 text-xs sm:text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <a href="#terms" className="text-gray-300 hover:text-pink-300 text-xs sm:text-sm transition-colors duration-300">
                Terms & Conditions
              </a>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <a href="#cookies" className="text-gray-300 hover:text-pink-300 text-xs sm:text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;