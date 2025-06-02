import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const CURRENT_LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a14242c5-6147-4c01-83f7-9f89e1b62041/bbcfd84f011fe90160e5a70ac2732acd.png";
const WODBUSTER_LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a14242c5-6147-4c01-83f7-9f89e1b62041/f4b086e16f8b7205af219e04d24d29f7.png";
const PLAY_STORE_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png";
const APP_STORE_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png";


const Footer = ({ scrollToSection }) => {
  const quickLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Tarifas', id: 'tarifas' },
    { name: 'Horarios', id: 'horarios' },
    { name: 'Actividades', id: 'actividades' },
    { name: 'Nuestra App', id: 'app' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Ubicación', id: 'ubicacion' },
    { name: 'Contacto', id: 'contacto' },
  ];
  
  const contactDetails = [
    "C/ Antonio Coronel 18",
    "40003 Segovia, España",
    "Tel/WhatsApp: +34 921 430 151",
    "Email: info@gimnasiobekdoosan.com"
  ];
  const openingHours = [
    "Lunes a Viernes: 8:30 - 22:30",
    "Sábados: 10:00 - 14:30",
    "Domingos: Cerrado"
  ];

  return (
    <footer className="bg-pastel-gray-dark text-pastel-beige py-12 sm:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          <div className="flex flex-col items-center md:items-start">
            <img src={CURRENT_LOGO_URL} alt="Gimnasio Bekdoosan Logo" className="h-20 w-auto mb-4 object-contain" />
            <p className="text-pastel-gray-light text-sm text-center md:text-left">
              Tu centro de fitness y bienestar en Segovia. ¡Únete a la familia Bekdoosan!
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/gimnasio_bekdoosan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pastel-gray-light hover:text-pastel-pink transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-pastel-gray-light hover:text-pastel-pink transition-colors">
                <Facebook size={24} />
              </a>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="text-pastel-gray-light hover:text-pastel-pink transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block text-center md:text-left">Navegación</span>
            <ul className="space-y-2 text-center md:text-left">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-pastel-gray-light hover:text-pastel-pink transition-colors capitalize text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block text-center md:text-left">Contacto y Horarios</span>
            <div className="space-y-1 text-pastel-gray-light text-sm mb-4 text-center md:text-left">
              {contactDetails.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
            <div className="space-y-1 text-pastel-gray-light text-sm text-center md:text-left">
              {openingHours.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block text-center md:text-left">Nuestra App WodBuster</span>
             <div className="flex justify-center md:justify-start mb-3">
                <img src={WODBUSTER_LOGO_URL} alt="WodBuster Logo" className="h-8 sm:h-10 w-auto object-contain" />
             </div>
            <p className="text-pastel-gray-light text-sm mb-3 text-center md:text-left">
              Reserva clases, sigue tus progresos y más con nuestra app oficial.
            </p>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.wodbuster.app" target="_blank" rel="noopener noreferrer" aria-label="Descargar en Google Play">
                <img src={PLAY_STORE_LOGO_URL} alt="Google Play Store" className="h-10"/>
              </a>
              <a href="https://apps.apple.com/es/app/wodbuster/id1472228900" target="_blank" rel="noopener noreferrer" aria-label="Descargar en App Store">
                <img src={APP_STORE_LOGO_URL} alt="Apple App Store" className="h-10"/>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-pastel-gray pt-8 text-center text-pastel-gray-light text-xs">
          <p>&copy; {new Date().getFullYear()} Gimnasio Bekdoosan. Todos los derechos reservados. Diseñado con cariño.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-pastel-pink transition-colors">Política de Privacidad</a> | <a href="#" className="hover:text-pastel-pink transition-colors">Términos de Servicio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;