import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const CURRENT_LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a14242c5-6147-4c01-83f7-9f89e1b62041/bbcfd84f011fe90160e5a70ac2732acd.png";
const WODBUSTER_LOGO_URL = "/imgs/images.png";
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
      <div className="container-custom max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 text-center lg:text-left">

          {/* Logo + redes */}
          <div className="flex flex-col items-center lg:items-start">
            <img src={CURRENT_LOGO_URL} alt="Logo Gimnasio Bekdoosan" className="h-20 w-auto mb-4 object-contain" />
            <p className="text-pastel-gray-light text-sm max-w-sm">
              Tu centro de fitness y bienestar en Segovia. ¡Únete a la familia Bekdoosan!
            </p>
            <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
              <a href="https://instagram.com/gimnasio_bekdoosan" target="_blank" rel="noopener noreferrer">
                <Instagram className="hover:text-pastel-pink transition-colors" size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="hover:text-pastel-pink transition-colors" size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Youtube className="hover:text-pastel-pink transition-colors" size={24} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm hover:text-pastel-pink transition-colors capitalize"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto y Horarios</h3>
            <div className="space-y-1 text-sm mb-4">
              {contactDetails.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
            <div className="space-y-1 text-sm">
              {openingHours.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          {/* App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nuestra App WodBuster</h3>
            <div className="flex justify-center lg:justify-start mb-3">
              <img src={WODBUSTER_LOGO_URL} alt="Logo WodBuster" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm mb-3">
              Reserva clases, entrena con nuestro entrenador personal y sigue tu progreso desde tu móvil.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 items-center lg:items-start">
              <a href="https://play.google.com/store/apps/details?id=com.wodbuster.app" target="_blank" rel="noopener noreferrer">
                <img src={PLAY_STORE_LOGO_URL} alt="Google Play" className="h-10" />
              </a>
              <a href="https://apps.apple.com/es/app/wodbuster/id1472228900" target="_blank" rel="noopener noreferrer">
                <img src={APP_STORE_LOGO_URL} alt="App Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pastel-gray pt-6 text-center text-xs text-pastel-gray-light">
          <p>&copy; {new Date().getFullYear()} Gimnasio Bekdoosan. Todos los derechos reservados.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-pastel-pink transition-colors">Política de Privacidad</a> | <a href="#" className="hover:text-pastel-pink transition-colors">Términos de Servicio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
