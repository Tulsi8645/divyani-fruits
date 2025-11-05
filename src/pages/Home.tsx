import { Apple, TruckIcon, Snowflake, Award, ArrowRight, Package, MapPin } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Home = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-400/5 dark:from-green-900/20 dark:to-green-800/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="text-center space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold">
                🍎 40+ Years of Legacy
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 dark:text-green-100 leading-tight">
              Nepal's Trusted
              <br />
              <span className="text-green-600 dark:text-green-400">Fresh Fruit Importer</span>
            </h1>
            <p className="text-lg md:text-xl text-green-700 dark:text-green-300 max-w-3xl mx-auto leading-relaxed">
              Welcome to Divyani Enterprises Pvt Ltd, your reliable partner in importing high-quality fresh fruits and agro commodities from China to Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => navigateTo('products')}
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-green-700 dark:text-green-300 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200 dark:border-green-700"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 text-center">
            {[
              { icon: '🍎', label: 'Fuji Apples' },
              { icon: '🍇', label: 'Red Globe Grapes' },
              { icon: '🍐', label: 'Ya Pears' },
              { icon: '🧄', label: 'Garlic' },
              { icon: '🌱', label: 'Ginger' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-medium text-green-800 dark:text-green-300">{item.label}</p>
              </div>
            ))}
          </div>
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
