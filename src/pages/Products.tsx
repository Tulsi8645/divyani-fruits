import { Package, MapPin, Calendar, Box, Info } from 'lucide-react';
import { products } from '../data/products';

export const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-900 dark:to-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <Package className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Nepal's leading importer of fresh Fuji apples, pears, garlic, and red globe grapes from China
            </p>
            <div className="mt-8 inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-lg font-semibold">200+ Containers Handled Annually</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-green-100 dark:border-green-800 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                    <div className="flex items-center space-x-2 text-green-200">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{product.origin}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-green-700 dark:text-green-300 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs font-semibold text-green-800 dark:text-green-300">
                          Season
                        </span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                        {product.season}
                      </p>
                    </div>

                    <div className="p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Box className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-xs font-semibold text-green-800 dark:text-green-300">
                          Packing
                        </span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                        {product.packing}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-gray-700 rounded-lg border-l-4 border-green-600">
                    <div className="flex items-center space-x-2 mb-1">
                      <Info className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-xs font-semibold text-green-800 dark:text-green-300">
                        Specifications
                      </span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                      {product.specs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-4">
              Product Comparison
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300">
              Quick overview of our most in-demand imports
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Product</th>
                  <th className="px-6 py-4 text-left font-semibold">Origin</th>
                  <th className="px-6 py-4 text-left font-semibold">Season (Nepal)</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Specs</th>
                  <th className="px-6 py-4 text-left font-semibold">Packing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-100 dark:divide-green-800">
                {products.map((product, idx) => (
                  <tr
                    key={product.id}
                    className={`${
                      idx % 2 === 0
                        ? 'bg-green-50 dark:bg-gray-800'
                        : 'bg-white dark:bg-gray-700'
                    } hover:bg-green-100 dark:hover:bg-gray-600 transition-colors duration-200`}
                  >
                    <td className="px-6 py-4 font-semibold text-green-900 dark:text-green-100">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-green-700 dark:text-green-300">{product.origin}</td>
                    <td className="px-6 py-4 text-green-700 dark:text-green-300">{product.season}</td>
                    <td className="px-6 py-4 text-green-700 dark:text-green-300">{product.specs}</td>
                    <td className="px-6 py-4 text-green-700 dark:text-green-300">{product.packing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-900 dark:to-green-950 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Quality Promise</h2>
              <ul className="space-y-4">
                {[
                  'Direct sourcing from certified farms in China',
                  'Rigorous quality inspection before shipment',
                  'Cold chain maintained from port to delivery',
                  'Nepal customs clearance expertise',
                  'Temperature-controlled storage facilities',
                  'Freshness guarantee on all products'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="p-1 bg-green-500 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-green-50 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5025665/pexels-photo-5025665.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Quality Control"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <p className="text-green-100">Containers Annually</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-green-100">Quality Inspected</p>
                </div>
                <div className="h-48 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Cold Storage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-lg text-green-700 dark:text-green-300 mb-8">
            Contact us for wholesale pricing, custom orders, and partnership opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+9779825322850"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Call: +977-9825322850
            </a>
            <a
              href="mailto:info@divyanienterprises.com"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-green-700 dark:text-green-300 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200 dark:border-green-700"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
