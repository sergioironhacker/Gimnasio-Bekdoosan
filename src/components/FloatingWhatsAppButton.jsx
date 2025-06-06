import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png";

const FloatingWhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/616968219"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp bg-pastel-whatsapp-green hover:bg-pastel-whatsapp-green-dark text-white p-3.5 rounded-full shadow-lg transition-colors flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar por WhatsApp"
      style={{ width: '56px', height: '56px' }} 
    >
      <img src={WHATSAPP_LOGO_URL} alt="WhatsApp Logo" className="w-7 h-7" />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;