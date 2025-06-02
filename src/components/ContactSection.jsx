import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
      className: "bg-pastel-mint text-pastel-gray-dark"
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, title: "Teléfono / WhatsApp", value: "+34 921 430 151", href: "tel:+34921430151" },
    { icon: Mail, title: "Email", value: "info@gimnasiobekdoosan.com", note: "(Espacio para añadir tu email)" },
    { icon: Instagram, title: "Instagram", value: "@gimnasio_bekdoosan", href: "https://instagram.com/gimnasio_bekdoosan" },
    { icon: MapPin, title: "Dirección", value: "C/ Antonio Coronel 18, 40003 Segovia, España" }
  ];

  return (
    <section id="contacto" className="section-padding bg-pastel-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-4">
            <span className="text-gradient-pastel">Contacto</span>
          </h2>
          <p className="text-xl text-pastel-gray max-w-3xl mx-auto">
            ¿Listo para comenzar tu transformación? Contáctanos y te ayudaremos a dar el primer paso
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-pastel-gray-dark mb-8">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-pastel-pink/20 p-3 rounded-full mr-4">
                      <item.icon className="text-pastel-pink" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-pastel-gray-dark">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-pastel-mint hover:text-pastel-mint-dark transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-pastel-gray">{item.value}</p>
                      )}
                      {item.note && <p className="text-sm text-pastel-gray-light-dark">{item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-pastel-gray-light">
                <h4 className="font-semibold text-pastel-gray-dark mb-4">Síguenos en redes sociales</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/gimnasio_bekdoosan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pastel-pink/20 p-3 rounded-full hover:bg-pastel-pink/30 transition-colors"
                    aria-label="Instagram de Gimnasio Bekdoosan"
                  >
                    <Instagram className="text-pastel-pink" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-pastel-gray-dark mb-8">Envíanos un Mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-pastel-gray-dark mb-2">Nombre *</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-pastel-gray-light rounded-lg focus:ring-2 focus:ring-pastel-mint focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-pastel-gray-dark mb-2">Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-pastel-gray-light rounded-lg focus:ring-2 focus:ring-pastel-mint focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-pastel-gray-dark mb-2">Teléfono</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-pastel-gray-light rounded-lg focus:ring-2 focus:ring-pastel-mint focus:border-transparent transition-colors"
                    placeholder="+34 123 456 789"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-pastel-gray-dark mb-2">Mensaje *</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-pastel-gray-light rounded-lg focus:ring-2 focus:ring-pastel-mint focus:border-transparent transition-colors resize-none"
                    placeholder="Cuéntanos sobre tus objetivos fitness..."
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-pastel-mint hover:bg-pastel-mint-dark text-pastel-gray-dark py-3"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;