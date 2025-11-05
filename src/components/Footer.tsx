import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Footer = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-green-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-300">Divyani Enterprises</h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              Third-generation fruit trading company bringing premium quality fruits from China to Nepal since 1985.
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="p-2 bg-green-800/50 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-green-800/50 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-green-800/50 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="text-green-100/80 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-green-100/80 hover:text-white transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('products')}
                  className="text-green-100/80 hover:text-white transition-colors duration-300"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-green-100/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Our Products</h4>
            <ul className="space-y-2 text-sm text-green-100/80">
              <li>Fuji Apples</li>
              <li>Red Globe Grapes</li>
              <li>Ya Pears</li>
              <li>Premium Garlic</li>
              <li>Fresh Ginger</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                <span className="text-green-100/80">Main Road, Biratnagar-7, Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-green-400" />
                <span className="text-green-100/80">+977-9825322850</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-green-400" />
                <span className="text-green-100/80">info@divyanienterprises.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                <span className="text-green-100/80">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800/50 mt-8 pt-8 text-center text-sm text-green-100/60">
          <p>&copy; {new Date().getFullYear()} Divyani Enterprises Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
