import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [flipped, setFlipped] = useState(false);

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/5 via-transparent to-electric-green/10 animate-pulse-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16">
        {/* Logo + descripción */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo dentro de círculo */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-electric-blue to-electric-green p-[2px] shadow-lg shadow-electric-blue/30 mb-6">
            <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
              <img
                src="/bekdoosan_logo_transparente.png"
                alt="Bekdoosan Logo"
                className="max-h-16 object-contain"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-wide mb-2">
            Bekdoosan
          </h2>
          <p className="text-gray-300 max-w-md text-sm leading-relaxed mb-6">
            Tu centro de <span className="text-electric-green">fitness</span> y{" "}
            <span className="text-electric-purple">artes marciales</span> en
            Segovia.  
            Más de <strong className="text-electric-blue">30 años</strong>{" "}
            formando campeones y transformando vidas.
          </p>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-4">
            {[
              { icon: Instagram, color: "electric-blue" },
              { icon: Facebook, color: "electric-red" },
              { icon: Globe, color: "electric-green" },
            ].map(({ icon: Icon, color }, idx) => (
              <motion.a
                key={idx}
                href="#"
                className={`relative p-3 rounded-full bg-${color}/20 hover:bg-${color}/30 transition-all duration-300`}
                whileHover={{ scale: 1.15 }}
              >
                <Icon className={`h-5 w-5 text-${color}`} />
                <span
                  className={`absolute inset-0 rounded-full border border-${color}/40 animate-ping-slow`}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contacto */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-electric-orange uppercase tracking-wider">
            Contacto
          </h3>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex justify-center items-start space-x-2">
              <MapPin className="h-4 w-4 text-electric-orange mt-1" />
              <p>
                C/ Antonio Coronel 16 <br /> 40003 Segovia
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
        </motion.div>

        {/* Flip Card campeonato */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center leading-snug">
           Disfruta de nuestro campeonato de{" "}
            <span className="text-electric-blue">futbolín</span>  
          <br /> <br />
            <span className="text-electric-purple">⚽</span>
          </h3>

          <div
            className="w-full max-w-xs h-64 perspective cursor-pointer"
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Frente */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl border border-electric-blue/30">
                <img
                  src="/Imagen de WhatsApp 2025-09-09 a las 12.29.24_56d82865.jpg"
                  alt="Campeonato Futbolín Frente"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Reverso */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-xl border border-electric-green/30">
                <img
                  src="/Imagen de WhatsApp 2025-09-09 a las 12.29.24_baaea69f.jpg"
                  alt="Campeonato Futbolín Reverso"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-3">
            Toca la tarjeta para girarla
          </p>
        </motion.div>

        {/* Separador final */}
        <motion.div
          className="mt-12 pt-8 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-electric-blue via-electric-green to-electric-purple opacity-70" />
          <p className="text-gray-400 text-sm mt-4">
            © {currentYear} Bekdoosan Gimnasio. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Diseñado con ❤️ para la comunidad fitness de Segovia
          </p>
        </motion.div>
      </div>

      {/* Estilos extra */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .animate-pulse-slow {
          animation: pulse 6s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
