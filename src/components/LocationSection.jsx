import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section id="ubicacion" className="section-padding bg-pastel-lila-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-4">
            Nuestra <span className="text-gradient-pastel">Ubicación</span>
          </h2>
          <p className="text-xl text-pastel-gray max-w-3xl mx-auto">
            Nos encontramos en el corazón de Segovia, muy cerca del famoso acueducto
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-pastel-blue-light to-pastel-beige rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="text-pastel-pink mr-4" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-pastel-gray-dark">Dirección</h3>
                  <p className="text-pastel-gray">Fácil acceso y ubicación privilegiada</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { title: "C/ Antonio Coronel 18", subtitle: "40003 Segovia, España" },
                  { title: "A solo 500 metros del Acueducto", subtitle: "Ubicación histórica y céntrica" },
                  { title: "Transporte público", subtitle: "Excelente conexión con toda la ciudad" },
                  { title: "Parking disponible", subtitle: "Zona de aparcamiento cercana" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-4"></div>
                    <div>
                      <p className="font-semibold text-pastel-gray-dark">{item.title}</p>
                      <p className="text-pastel-gray">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  className="w-full bg-pastel-pink hover:bg-pastel-pink-dark text-white"
                  onClick={() => window.open('https://maps.google.com/?q=C/+Antonio+Coronel+18,+Segovia,+España', '_blank')}
                >
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-pastel-gray-light rounded-2xl h-96 flex items-center justify-center">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.1234%2C40.9456%2C-4.1134%2C40.9556&layer=mapnik&marker=40.9506%2C-4.1184"
                width="100%"
                height="100%"
                className="rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Gimnasio Bekdoosan"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;