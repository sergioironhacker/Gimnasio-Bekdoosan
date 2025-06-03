import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Smartphone, CalendarCheck, BarChart2, UserCheck, DownloadCloud } from 'lucide-react';

const WODBUSTER_LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a14242c5-6147-4c01-83f7-9f89e1b62041/f4b086e16f8b7205af219e04d24d29f7.png";
const PLAY_STORE_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png";
const APP_STORE_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png";

const AppSection = ({ scrollToSection }) => {
  const features = [
    { icon: CalendarCheck, text: "Reserva tus clases favoritas fácilmente." },
    { icon: BarChart2, text: "Sigue tu progreso y evolución." },
    { icon: UserCheck, text: "Gestiona tu perfil y entrenamientos personales." },
    { icon: Smartphone, text: "Accede a todo desde tu móvil, donde quieras." },
  ];

  return (
    <section id="app" className="section-padding bg-pastel-lila-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <img src={WODBUSTER_LOGO_URL} alt="WodBuster Logo" className="h-12 sm:h-16 w-auto mx-auto mb-6 object-contain" />
          <h2 className="text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-4">
            Gestiona tu Fitness con <span className="text-gradient-pastel">WodBuster</span>
          </h2>
          <p className="text-xl text-pastel-gray max-w-3xl mx-auto">
            Descarga nuestra app oficial para apuntarte a entrenamientos, reservar clases, conectar con tu entrenador personal y mucho más. ¡Tu gimnasio en tu bolsillo!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-pastel-gray-dark mb-6">Ventajas de la App:</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-pastel-pink/20 p-2 rounded-full mr-4 mt-1">
                    <feature.icon className="text-pastel-pink" size={20} />
                  </div>
                  <span className="text-pastel-gray-dark text-lg">{feature.text}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="w-full mt-8 bg-pastel-pink hover:bg-pastel-pink-dark text-white py-3 text-lg"
              onClick={() => window.open('https://wodbuster.com/', '_blank')}
            >
              <DownloadCloud className="mr-2 h-5 w-5" /> Más Información en WodBuster.com
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <img  
              className="max-w-xs md:max-w-sm rounded-lg shadow-2xl mb-8"
              alt="Smartphone mostrando la app WodBuster en Gimnasio Bekdoosan"
             src="https://images.unsplash.com/photo-1580974928074-aea918997b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60" />
            <p className="text-lg text-pastel-gray-dark font-semibold mb-4">Descárgala ahora:</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.wodbuster.app" target="_blank" rel="noopener noreferrer" aria-label="Descargar en Google Play">
                <img src={PLAY_STORE_LOGO_URL} alt="Google Play Store" className="h-12 hover:opacity-80 transition-opacity"/>
              </a>
              <a href="https://apps.apple.com/es/app/wodbuster/id1472228900" target="_blank" rel="noopener noreferrer" aria-label="Descargar en App Store">
                <img src={APP_STORE_LOGO_URL} alt="Apple App Store" className="h-12 hover:opacity-80 transition-opacity"/>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;