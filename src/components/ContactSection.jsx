import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, Facebook, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    { icon: Phone, title: "Teléfono / WhatsApp", value: "921 43 01 51", href: "tel:+34921430151", aria: "Llamar al gimnasio" },
    { icon: Mail, title: "Email", value: "bekdoosan@bekdoosan.com", href: "mailto:bekdoosan@bekdoosan.com", aria: "Enviar email al gimnasio" },
    { icon: MapPin, title: "Dirección", value: "C/ Antonio Coronel 18, 40003 Segovia, España", aria: "Ver dirección en mapa" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/gimnasio_bekdoosan", name: "Instagram", aria: "Instagram de Gimnasio Bekdoosan" },
    { icon: Facebook, href: "#", name: "Facebook", aria: "Facebook de Gimnasio Bekdoosan" },
  ];

  return (
    <section id="contacto" className="section-padding bg-pastel-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-3 sm:mb-4">
            <span className="text-gradient-pastel">Contacto</span>
          </h2>
          <p className="text-lg sm:text-xl text-pastel-gray max-w-2xl sm:max-w-3xl mx-auto">
            ¿Listo para comenzar tu transformación? Contáctanos y te ayudaremos a dar el primer paso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-pastel-gray-dark mb-6 sm:mb-8">Información de Contacto</h3>
              <div className="space-y-5 sm:space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start sm:items-center">
                    <div className="bg-pastel-pink/20 p-2.5 sm:p-3 rounded-full mr-3 sm:mr-4 mt-1 sm:mt-0">
                      <item.icon className="text-pastel-pink" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-pastel-gray-dark text-sm sm:text-base">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-pastel-mint hover:text-pastel-mint-dark transition-colors text-sm sm:text-base" aria-label={item.aria}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-pastel-gray text-sm sm:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-pastel-gray-light">
                <h4 className="font-semibold text-pastel-gray-dark mb-3 sm:mb-4 text-sm sm:text-base">Síguenos en redes sociales</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map(social => (
                     <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pastel-pink/20 p-2.5 sm:p-3 rounded-full hover:bg-pastel-pink/30 transition-colors"
                        aria-label={social.aria}
                      >
                        <social.icon className="text-pastel-pink" size={18} />
                      </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-pastel-gray-dark mb-6 sm:mb-8">Envíanos un Mensaje</h3>
              <form
                action="https://formsubmit.co/bekdoosan@bekdoosan.com"
                method="POST"
                className="space-y-5 sm:space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-pastel-gray-dark mb-1.5 sm:mb-2">Nombre Completo *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ej: Ana García López"
                    className="py-2.5 sm:py-3 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-pastel-gray-dark mb-1.5 sm:mb-2">Correo Electrónico *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu.email@ejemplo.com"
                    className="py-2.5 sm:py-3 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-pastel-gray-dark mb-1.5 sm:mb-2">Teléfono (Opcional)</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+34 123 456 789"
                    className="py-2.5 sm:py-3 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-pastel-gray-dark mb-1.5 sm:mb-2">Tu Mensaje *</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Escribe aquí tu consulta o mensaje..."
                    className="py-2.5 sm:py-3 text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pastel-mint hover:bg-pastel-mint-dark text-pastel-gray-dark font-semibold py-3 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;