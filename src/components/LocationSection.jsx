import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  const address = "C/ Antonio Coronel 18, 40003 Segovia, España";
  const googleMapsQuery = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  const openStreetMapEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=-4.11916,40.94725,-4.11664,40.94890&layer=mapnik&marker=40.948077,-4.117900`;


  return (
    <section id="ubicacion" className="section-padding bg-pastel-lila-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-3 sm:mb-4">
            Nuestra <span className="text-gradient-pastel">Ubicación</span>
          </h2>
          <p className="text-lg sm:text-xl text-pastel-gray max-w-2xl sm:max-w-3xl mx-auto">
            Nos encontramos en el corazón de Segovia, muy cerca del famoso acueducto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-gradient-to-br from-pastel-blue-light to-pastel-beige rounded-2xl p-6 sm:p-8 shadow-lg flex-grow flex flex-col">
              <div className="flex items-center mb-4 sm:mb-6">
                <MapPin className="text-pastel-pink mr-3 sm:mr-4 flex-shrink-0" size={28} smSize={32} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-pastel-gray-dark">Dirección</h3>
                  <p className="text-pastel-gray text-sm sm:text-base">Fácil acceso y ubicación privilegiada</p>
                </div>
              </div>

              <address className="not-italic space-y-3 sm:space-y-4 text-sm sm:text-base mb-6 sm:mb-8">
                <p className="font-semibold text-pastel-gray-dark">{address}</p>
                <p className="text-pastel-gray">A solo 500 metros del Acueducto.</p>
                <p className="text-pastel-gray">Excelente conexión con transporte público.</p>
                <p className="text-pastel-gray">Parking disponible en zonas cercanas.</p>
              </address>

              <div className="mt-auto">
                <Button
                  className="w-full bg-pastel-pink hover:bg-pastel-pink-dark text-white py-3 text-base sm:text-lg"
                  onClick={() => window.open(googleMapsQuery, '_blank')}
                  aria-label="Ver en Google Maps"
                >
                  Ver en Google Maps <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-80 sm:h-96 lg:h-full min-h-[300px]"
          >
            <iframe
              src={openStreetMapEmbed}
              width="100%"
              height="100%"
              className="rounded-2xl shadow-lg border-2 border-pastel-gray-light"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Gimnasio Bekdoosan en OpenStreetMap"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;