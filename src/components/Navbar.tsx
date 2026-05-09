import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reservations', href: '#reservations' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-[8px] md:top-[16px] left-[8px] md:left-[16px] right-[8px] md:right-[16px] z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1C15]/95 backdrop-blur-md shadow-lg border-b border-[#E5DACE]/10 py-6'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-serif text-2xl md:text-3xl font-black uppercase tracking-widest text-[#E5DACE]"
        >
          CURRY <span className="font-light italic tracking-normal lowercase ml-1">Garden</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans font-medium transition-colors ${
                link.name === 'Reservations'
                  ? 'text-[#D4AF37] hover:text-white'
                  : 'text-[#E5DACE]/80 hover:text-[#D4AF37]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservations"
            className="bg-[#D4AF37] text-[#0B1C15] px-6 py-3 font-sans font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors"
          >
            Book Table
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu
            className="text-[#E5DACE]"
            size={28}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0B1C15] text-[#E5DACE] flex flex-col items-center justify-center border-[8px] md:border-[16px] border-[#162A21]"
          >
            <button
              className="absolute top-8 right-8 text-[#E5DACE]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl hover:text-[#D4AF37] transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
