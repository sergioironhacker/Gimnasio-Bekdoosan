
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "/imgs/logo-main.png";

const Navbar = ({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'tarifas', label: 'Tarifas' },
    { id: 'horarios', label: 'Horarios' },
    { id: 'actividades', label: 'Actividades' },
    { id: 'app', label: 'Nuestra App' },
    { id: 'comunidad', label: 'Comunidad' },
    { id: 'ubicacion', label: 'Ubicación' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = (itemId) => 
    `relative font-medium transition-colors capitalize text-xs lg:text-sm px-2 py-1 rounded-md 
     ${activeSection === itemId 
       ? 'text-pastel-pink font-bold' 
       : 'text-pastel-gray-dark hover:text-pastel-mint'
     }`;

  const activeIndicator = (itemId) =>
    activeSection === itemId && (
      <motion.div
        layoutId="activeIndicatorNavbar"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-pastel-pink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    );
  
  const handleMobileLinkClick = (sectionId) => {
    setIsMenuOpen(false); // Close menu first
    // Timeout to allow menu to close before scrolling, prevents visual glitches
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100); 
  };

  return (
    <nav className={`fixed top-0 w-full bg-pastel-beige/95 backdrop-blur-md z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => {
              // For logo click, ensure menu closes if open, then scroll
              if (isMenuOpen) {
                handleMobileLinkClick('inicio');
              } else {
                scrollToSection('inicio');
              }
            }}
          >
            <img src={LOGO_URL} alt="Gimnasio Bekdoosan Logo" className="h-12 sm:h-16 w-auto mr-2 object-contain" />
            <span className="text-lg sm:text-xl font-bold text-pastel-gray-dark hidden xs:block">
              Gimnasio Bekdoosan
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={navLinkClasses(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
                {activeIndicator(item.id)}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-pastel-gray-dark p-2 -mr-2 z-10" // Ensure button is clickable
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-pastel-beige border-t border-pastel-gray-light shadow-md overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileLinkClick(item.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-md transition-colors capitalize text-sm
                    ${activeSection === item.id 
                      ? 'bg-pastel-lila-light/70 text-pastel-pink font-semibold' 
                      : 'text-pastel-gray-dark hover:text-pastel-mint hover:bg-pastel-lila-light/30'
                    }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
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
