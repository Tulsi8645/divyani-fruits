import { Apple, TruckIcon, Snowflake, Award, ArrowRight, Package, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useState, useEffect } from 'react';

export const Home = () => {
  const { navigateTo } = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1610397962076-02407a169a5b?w=1600&q=80',
      title: 'Premium Fresh Fruits',
      subtitle: 'Directly from China to Nepal with Cold Chain Excellence',
      cta: 'Explore Products'
    },
    {
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80',
      title: '40+ Years of Legacy',
      subtitle: 'Nepal\'s First Fuji Apple Importer - A Family Tradition',
      cta: 'Our Story'
    },
    {
      image: 'https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?w=1600&q=80',
      title: '200+ Containers Annually',
      subtitle: 'Nationwide Distribution Across Major Nepal Markets',
      cta: 'Contact Us'
    }
  ];

 useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Hero Slider Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Slide Content */}
            <div className="absolute inset-0 z-20 flex items-end">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 w-full">
                <div className="max-w-3xl space-y-6 animate-fadeIn">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={() => navigateTo(index === 0 ? 'products' : index === 1 ? 'about' : 'contact')}
                    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 opacity-50 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300 max-w-2xl mx-auto">
              Over 200+ containers handled annually with cold chain excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Legacy Brand',
                description: '40+ years in Nepal\'s fresh produce industry with proven track record'
              },
              {
                icon: Snowflake,
                title: 'Cold Chain',
                description: 'Temperature-controlled storage and handling ensuring freshness'
              },
              {
                icon: TruckIcon,
                title: 'Wide Distribution',
                description: 'Serving Kathmandu, Pokhara, Bhairahawa, and major markets'
              },
              {
                icon: Package,
                title: '200+ Containers',
                description: 'Annual import volume with customs clearance expertise'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-green-50 dark:bg-gray-700 rounded-xl hover:bg-green-100 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="p-3 bg-green-600 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-green-700 dark:text-green-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-900 dark:to-green-950 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Family Introduced Fuji Apples to Nepal
              </h2>
              <p className="text-green-50 text-lg leading-relaxed mb-6">
                Divyani Enterprises carries forward a 40-year legacy with a modern approach. We handle over 200+ containers annually, bringing premium quality fruits from China to markets across Nepal.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="p-1 bg-green-500 rounded-full mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-green-50">End-to-end import and distribution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="p-1 bg-green-500 rounded-full mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-green-50">Nepal customs clearance at Kakarbhitta & Birgunj</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="p-1 bg-green-500 rounded-full mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-green-50">Cold storage facility coming to Biratnagar</span>
                </li>
              </ul>
              <button
                onClick={() => navigateTo('about')}
                className="mt-8 px-8 py-4 bg-white text-green-700 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-50"
              >
                Learn More About Us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Fresh Apples"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Warehouse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Fresh Produce"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Delivery Truck"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
              Markets We Serve
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300">
              Nationwide distribution across Nepal's key regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: 'Kathmandu', market: 'Kalimati Fruit Market', icon: '🏙️' },
              { city: 'Biratnagar', market: 'Regional Hub', icon: '🏢' },
              { city: 'Pokhara', market: 'Retail & Hospitality', icon: '🏔️' },
              { city: 'Bhairahawa', market: 'Border Trade Zone', icon: '🚛' },
              { city: 'Itahari', market: 'Eastern Distribution', icon: '📦' },
              { city: 'Narayanghat', market: 'Central Trade Hub', icon: '🌾' }
            ].map((location, idx) => (
              <div
                key={idx}
                className="p-6 bg-green-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-green-100 dark:border-green-800"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{location.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-1 flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>{location.city}</span>
                    </h3>
                    <p className="text-green-700 dark:text-green-300">{location.market}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-green-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Apple className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-green-700 dark:text-green-300 mb-8">
            Join Nepal's leading fruit importer and ensure quality produce for your business
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
