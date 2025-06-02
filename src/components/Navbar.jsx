import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "/imgs/logo-main.png";

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['inicio', 'tarifas', 'horarios', 'actividades', 'app', 'nosotros', 'ubicacion', 'contacto'];

  return (
    <nav className="fixed top-0 w-full bg-pastel-beige/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <img src={LOGO_URL} alt="Logo Bekdoosan" className="h-12 sm:h-16 w-auto mr-2 sm:mr-4 object-contain" />
            <span className="text-lg sm:text-2xl font-bold text-pastel-gray-dark hidden sm:block">
              Gimnasio Bekdoosan
            </span>
          </motion.div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-pastel-gray-dark hover:text-pastel-mint font-medium transition-colors capitalize text-sm"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-pastel-gray-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-pastel-beige border-t border-pastel-gray-light"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-pastel-gray-dark hover:text-pastel-mint hover:bg-pastel-lila-light/50 rounded-md transition-all capitalize text-base"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
