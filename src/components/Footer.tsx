import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Horarios', href: '#schedule' },
    { name: 'Servicios', href: '#services' },
    { name: 'Tarifas', href: '#pricing' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' }
  ];

  const services = [
    'TRX Entrenamiento Funcional',
    'Ciclo Indoor',
    'Yoga',
    'Taekwondo',
    'Jiu Jitsu',
    'Kick Boxing'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/bekdoosan_logo_transparente.png" 
                alt="Bekdoosan Logo" 
                className="h-18 w-12 mr-2 filter brightness-0 invert"
              />
              <span className="font-bold text-2xl">Bekdoosan</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tu centro de fitness y artes marciales en Segovia. 
              Más de 30 años formando campeones y transformando vidas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-electric-blue/20 hover:bg-electric-blue/30 p-2 rounded-lg transition-colors duration-200">
                <Instagram className="h-5 w-5 text-electric-blue" />
              </a>
              <a href="#" className="bg-electric-red/20 hover:bg-electric-red/30 p-2 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5 text-electric-red" />
              </a>
              <a href="https://www.bekdoosan.com" className="bg-electric-green/20 hover:bg-electric-green/30 p-2 rounded-lg transition-colors duration-200">
                <Globe className="h-5 w-5 text-electric-green" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-blue">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-electric-blue transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-green">Nuestros Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-orange">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-electric-orange mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  C/ Antonio Coronel 16<br />
                  40003 Segovia
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-electric-orange" />
                <p className="text-gray-300 text-sm">921 430 151</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-electric-orange" />
                <p className="text-gray-300 text-sm">bekdoosan@bekdoosan.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horarios */}
        <div className="border-t border-gray-800 dark:border-dark-border mt-12 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 dark:bg-dark-surface rounded-lg p-4">
              <h4 className="font-semibold text-electric-blue mb-2">Horarios del Gimnasio</h4>
              <p className="text-gray-300 text-sm mb-1">Lunes a Viernes: 08:30 - 22:30</p>
              <p className="text-gray-300 text-sm">Sábados: 10:00 - 14:30</p>
            </div>
           {/*  <div className="bg-gray-800 dark:bg-dark-surface rounded-lg p-4">
              <h4 className="font-semibold text-electric-green mb-2">Clase de Prueba Gratis</h4>
              <p className="text-gray-300 text-sm">
                Ven a conocer nuestras instalaciones y prueba cualquier disciplina sin compromiso.
              </p>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-dark-border pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Bekdoosan Gimnasio. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Diseñado con ❤️ para la comunidad fitness de Segovia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;