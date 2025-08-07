import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 text-center">
          {/* Logo y Descripción */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/bekdoosan_logo_transparente.png"
                alt="Bekdoosan Logo"
                className="h-18 w-12 mr-2 filter brightness-0 invert"
              />
              <span className="font-bold text-2xl">Bekdoosan</span>
            </div>
            <p className="text-gray-300 max-w-xl mb-6 leading-relaxed">
              Tu centro de fitness y artes marciales en Segovia.
              Más de 30 años formando campeones y transformando vidas.
            </p>
            <div className="flex justify-center space-x-4">
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

          {/* Información de Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-orange">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex justify-center items-start space-x-2">
                <MapPin className="h-4 w-4 text-electric-orange mt-1" />
                <p>
                  C/ Antonio Coronel 16<br />
                  40003 Segovia
                </p>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <Phone className="h-4 w-4 text-electric-orange" />
                <p>921 430 151</p>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <Mail className="h-4 w-4 text-electric-orange" />
                <p>bekdoosan@bekdoosan.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 dark:border-dark-border mt-12 pt-8 text-center">
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
