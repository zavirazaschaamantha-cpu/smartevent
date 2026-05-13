import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, User, LayoutDashboard, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Fitur', href: '#features' },
    { name: 'Harga', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${
        scrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div className={`glass rounded-full px-6 py-3 flex items-center justify-between soft-shadow transition-all duration-300 ${
        scrolled ? 'px-4 py-2' : 'px-6 py-3'
      }`}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-brand-purple to-brand-orange shadow-lg shadow-brand-purple/20 rounded-xl flex items-center justify-center text-white group-hover:rotate-6 transition-transform">
            <Calendar size={22} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-gray-900 group-hover:text-brand-purple transition-colors">
            SmartEvent<span className="text-brand-purple">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link 
            to="/login"
            className="px-5 py-2 text-sm font-semibold text-gray-700 hover:text-brand-purple transition-colors"
          >
            Masuk
          </Link>
          <Link 
            to="/register"
            className="bg-brand-purple text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-purple/90 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Mulai Sekarang
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 glass rounded-2xl p-6 soft-shadow"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <Link 
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-lg font-medium text-gray-700"
              >
                Masuk <ChevronRight size={20} />
              </Link>
              <Link 
                to="/register"
                onClick={() => setIsOpen(false)}
                className="bg-brand-purple text-white px-6 py-3 rounded-xl text-center font-bold"
              >
                Mulai Sekarang
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
