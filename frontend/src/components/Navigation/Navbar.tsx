import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isMenuPage = location.pathname === '/menu';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled || isMenuPage 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm py-4 border-stone-200/50' 
          : 'bg-gradient-to-b from-stone-900/60 to-transparent py-6 border-white/10'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className={`overflow-hidden rounded-full bg-white flex items-center justify-center p-0.5 transition-all ${scrolled || isMenuPage ? 'h-10 w-10' : 'h-14 w-14 shadow-lg shadow-black/20'}`}>
            <img src="/logo.png" alt="Deelectaa Logo" className="h-full w-full object-contain rounded-full transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tighter leading-none transition-colors ${scrolled || isMenuPage ? 'text-stone-900' : 'text-white group-hover:text-primary'}`}>
              DEELECTAA
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary">OUTLET & CAFE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : (scrolled || isMenuPage ? 'text-stone-700' : 'text-stone-200')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-900 transition-colors shadow-lg shadow-primary/20"
          >
            Book Table
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-amber-600' : 'text-stone-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setIsOpen(false)}
              className="bg-amber-800 text-white px-6 py-3 rounded-xl text-center font-medium"
            >
              Book Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
