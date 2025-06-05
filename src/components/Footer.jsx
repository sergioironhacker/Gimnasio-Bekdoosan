import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Users, Sparkles, Shield } from 'lucide-react';

const CURRENT_LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a14242c5-6147-4c01-83f7-9f89e1b62041/bbcfd84f011fe90160e5a70ac2732acd.png";
const WODBUSTER_LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a14242c5-6147-4c01-83f7-9f89e1b62041/f4b086e16f8b7205af219e04d24d29f7.png";
const PLAY_STORE_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png";
const APP_STORE_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png";

const Footer = ({ scrollToSection }) => {
  const navLinks = [
    { name: 'Inicio', id: 'inicio', icon: Sparkles },
    { name: 'Tarifas', id: 'tarifas', icon: Users },
    { name: 'Horarios', id: 'horarios', icon: Users },
    { name: 'Actividades', id: 'actividades', icon: Shield },
    { name: 'Nuestra App', id: 'app', icon: Sparkles },
    { name: 'Comunidad', id: 'comunidad', icon: Users },
    { name: 'Ubicación', id: 'ubicacion', icon: MapPin },
    { name: 'Contacto', id: 'contacto', icon: Mail },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/gimnasio_bekdoosan', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Youtube', href: '#', icon: Youtube },
  ];

  return (
    <footer className="bg-gradient-to-br from-pastel-gray-dark to-gray-800 text-pastel-beige pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src={CURRENT_LOGO_URL} 
              alt="Gimnasio Bekdoosan Logo" 
              className="h-20 sm:h-24 w-auto mb-5 object-contain filter drop-shadow-lg" 
            />
            <p className="text-pastel-gray-light text-sm leading-relaxed mb-6">
              Transforma tu vida en el corazón de Segovia. Fitness, comunidad y superación.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.name} 
                  className="text-pastel-gray-light hover:text-pastel-pink transform hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xl font-semibold text-white mb-5 block text-center md:text-left">Enlaces Rápidos</span>
            <ul className="space-y-2.5 text-center md:text-left">
              {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center justify-center md:justify-start group text-pastel-gray-light hover:text-pastel-pink transition-colors text-sm"
                  >
                    <link.icon size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <span className="text-xl font-semibold text-white mb-5 block text-center md:text-left md:invisible">Enlaces Rápidos</span> {/* Invisible placeholder for alignment */}
            <ul className="space-y-2.5 text-center md:text-left">
              {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center justify-center md:justify-start group text-pastel-gray-light hover:text-pastel-pink transition-colors text-sm"
                  >
                     <link.icon size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <span className="text-xl font-semibold text-white mb-5 block text-center md:text-left">Descarga WodBuster</span>
             <div className="flex justify-center md:justify-start mb-4">
                <img src={WODBUSTER_LOGO_URL} alt="WodBuster Logo" className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-sm" />
             </div>
            <p className="text-pastel-gray-light text-sm mb-4 text-center md:text-left leading-relaxed">
              Reserva clases, sigue tus progresos y mantente conectado con nuestra app oficial.
            </p>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.wodbuster.app" target="_blank" rel="noopener noreferrer" aria-label="Descargar en Google Play" className="transform hover:scale-105 transition-transform">
                <img src={PLAY_STORE_LOGO_URL} alt="Google Play Store" className="h-10"/>
              </a>
              <a href="https://apps.apple.com/es/app/wodbuster/id1472228900" target="_blank" rel="noopener noreferrer" aria-label="Descargar en App Store" className="transform hover:scale-105 transition-transform">
                <img src={APP_STORE_LOGO_URL} alt="Apple App Store" className="h-10"/>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-pastel-gray/30 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center text-pastel-gray-light text-xs space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
            <div className="flex items-center"><MapPin size={12} className="mr-1.5"/> C/ Antonio Coronel 18, 40003 Segovia</div>
            <div className="hidden sm:block">|</div>
            <div className="flex items-center"><Phone size={12} className="mr-1.5"/> 921 43 01 51</div>
            <div className="hidden sm:block">|</div>
            <div className="flex items-center"><Mail size={12} className="mr-1.5"/> bekdoosan@beldoosan.com</div>
          </div>
          <p className="text-pastel-gray-light text-xs">&copy; {new Date().getFullYear()} Gimnasio Bekdoosan. Todos los derechos reservados.</p>
          <p className="mt-1.5 text-xxs text-pastel-gray/70">
            <a href="#" className="hover:text-pastel-pink transition-colors">Política de Privacidad</a> | <a href="#" className="hover:text-pastel-pink transition-colors">Términos de Servicio</a> | <a href="#" className="hover:text-pastel-pink transition-colors">Cookies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;