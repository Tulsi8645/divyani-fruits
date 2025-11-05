import { Menu, X, Apple } from 'lucide-react';
import { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ThemeToggle } from './ThemeToggle';
import type { NavLink } from '../types';

const navLinks: NavLink[] = [
  { name: 'Home', path: 'home' },
  { name: 'About', path: 'about' },
  { name: 'Products', path: 'products' },
  { name: 'Contact', path: 'contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPage, navigateTo } = useNavigation();

  const handleNavClick = (path: string) => {
    navigateTo(path as 'home' | 'about' | 'products' | 'contact');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800/40 transition-all duration-300">
              <Apple className="w-6 h-6 md:w-8 md:h-8 text-green-700 dark:text-green-400" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-green-800 dark:text-green-300">
                Divyani Enterprises
              </h1>
              <p className="text-xs text-green-600 dark:text-green-500 hidden sm:block">
                Nepal's Trusted Fruit Importer
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === link.path
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === link.path
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
