import { User, Target, TrendingUp, Heart, CheckCircle, Rocket } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-900 dark:to-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Divyani Enterprises</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              A Fresh Brand Built on Generations of Trust
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-6">
                Our Story: 40+ Years in the Making
              </h2>
              <div className="space-y-4 text-green-700 dark:text-green-300 leading-relaxed">
                <p>
                  At Divyani Enterprises, we honor our roots while embracing the future. Our family has been in the fresh fruit supply chain in Nepal for over four decades, proudly known for introducing Fuji apples to the Nepalese market.
                </p>
                <p>
                  Established in 2025, Divyani Enterprises is our new venture designed to meet evolving industry demands—focused on import quality, traceability, and cold chain efficiency.
                </p>
                <p>
                  Today, we handle over 200+ containers annually, serving major markets from Kathmandu to Biratnagar, maintaining the same commitment to quality that our family built its reputation on.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <div className="text-3xl font-bold text-green-700 dark:text-green-400">40+</div>
                  <div className="text-sm text-green-600 dark:text-green-500 mt-1">Years Legacy</div>
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <div className="text-3xl font-bold text-green-700 dark:text-green-400">200+</div>
                  <div className="text-sm text-green-600 dark:text-green-500 mt-1">Containers/Year</div>
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <div className="text-3xl font-bold text-green-700 dark:text-green-400">6+</div>
                  <div className="text-sm text-green-600 dark:text-green-500 mt-1">Major Markets</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fruit Business"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-semibold text-lg">
                  "We don't just move fruit—we move trust, quality, and long-term partnerships."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300 max-w-2xl mx-auto">
              Premium Fruit Imports from China to Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🍎',
                title: 'Quality Imports',
                description: 'Import of Fuji apples and seasonal fruits from China with strict quality control at every stage'
              },
              {
                icon: '📜',
                title: 'Customs Clearance',
                description: 'Nepal Customs Clearance at Kakarbhitta and Birgunj with complete documentation support'
              },
              {
                icon: '❄️',
                title: 'Cold Chain Storage',
                description: 'Temperature-controlled storage and handling to maintain freshness from port to market'
              },
              {
                icon: '🚛',
                title: 'Distribution Network',
                description: 'Distribution to major fruit markets across Nepal with reliable logistics partners'
              },
              {
                icon: '🏷️',
                title: 'Private Labeling',
                description: 'Private labeling under your brand or ours (coming soon: AIRA brand launch)'
              },
              {
                icon: '🤝',
                title: 'B2B Partnerships',
                description: 'Long-term partnerships with wholesalers, retailers, and hospitality businesses'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-green-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-green-100 dark:border-green-800"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-green-700 dark:text-green-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <img
                  src="https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Leadership"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-8 h-8 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                  Leadership
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
                Mukesh Jaiswal
              </h2>
              <p className="text-xl text-green-700 dark:text-green-400 mb-6">Managing Director</p>
              <div className="space-y-4 text-green-700 dark:text-green-300 leading-relaxed">
                <p>
                  Born into a family that helped shape Nepal's fruit trade, Mr. Mukesh Jaiswal represents the third generation of fruit entrepreneurs.
                </p>
                <p>
                  With a bold vision for the future, he launched Divyani Enterprises Pvt Ltd in 2025 to modernize trade operations and build a resilient, transparent ecosystem for Nepal's fresh produce industry.
                </p>
                <div className="mt-6 p-6 bg-green-100 dark:bg-green-900/30 rounded-xl border-l-4 border-green-600">
                  <p className="text-lg italic text-green-800 dark:text-green-200">
                    "We don't just move fruit—we move trust, quality, and long-term partnerships."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-900 dark:to-green-950 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision for the Future</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Legacy-Fueled Innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-green-100 text-center mb-12 leading-relaxed">
              Our goal is to build Nepal's most trusted, traceable, and technology-driven fruit supply system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Rocket,
                  title: 'Cold Storage Facility',
                  description: 'State-of-the-art cold storage facility in Biratnagar to enhance supply chain efficiency',
                  status: 'Coming Soon'
                },
                {
                  icon: Heart,
                  title: 'Private Label Launch',
                  description: 'Introducing AIRA brand - premium packaged fruits for the modern consumer',
                  status: 'In Development'
                },
                {
                  icon: CheckCircle,
                  title: 'Digital Documentation',
                  description: 'Digitized trade documentation for complete traceability and transparency',
                  status: '2025'
                },
                {
                  icon: TrendingUp,
                  title: 'Real-time Tracking',
                  description: 'Real-time shipment and inventory tracking system for partners',
                  status: 'Planned'
                }
              ].map((future, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <future.icon className="w-8 h-8 text-green-200" />
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      {future.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{future.title}</h3>
                  <p className="text-green-100">{future.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Quality', description: 'Premium products at every shipment' },
              { title: 'Trust', description: '40+ years of reliable partnerships' },
              { title: 'Innovation', description: 'Modern solutions for timeless trade' },
              { title: 'Integrity', description: 'Transparent and ethical business' }
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-6 text-center bg-green-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-green-100 dark:border-green-800"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-green-700 dark:text-green-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
