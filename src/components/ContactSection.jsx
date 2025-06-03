import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, Facebook, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, completa todos los campos obligatorios (*) antes de enviar.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    // En una aplicación real, aquí se haría la llamada a un backend (Supabase, Firebase, etc.)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simular delay de red
      // console.log("Formulario enviado:", formData); // Para depuración
      
      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.",
        className: "bg-pastel-mint text-pastel-gray-dark",
        duration: 5000,
      });
      setFormData({ name: '', email: '', phone: '', message: '' }); // Resetear formulario
    } catch (error) {
      // console.error("Error al enviar formulario:", error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Teléfono / WhatsApp", value: "+34 921 430 151", href: "tel:+34921430151", aria: "Llamar al gimnasio" },
    { icon: Mail, title: "Email", value: "info@gimnasiobekdoosan.com", href: "mailto:info@gimnasiobekdoosan.com", aria: "Enviar email al gimnasio" },
    { icon: MapPin, title: "Dirección", value: "C/ Antonio Coronel 18, 40003 Segovia, España", aria: "Ver dirección en mapa" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/gimnasio_bekdoosan", name: "Instagram", aria: "Instagram de Gimnasio Bekdoosan" },
    { icon: Facebook, href: "#", name: "Facebook", aria: "Facebook de Gimnasio Bekdoosan" }, // Añadir enlace real de Facebook cuando esté disponible
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
                      <item.icon className="text-pastel-pink" size={20} smSize={24} />
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
                        <social.icon className="text-pastel-pink" size={18} smSize={20} />
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
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-pastel-gray-dark mb-1.5 sm:mb-2">Nombre Completo *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Ana García López"
                    required
                    aria-required="true"
                    className="py-2.5 sm:py-3 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-pastel-gray-dark mb-1.5 sm:mb-2">Correo Electrónico *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu.email@ejemplo.com"
                    required
                    aria-required="true"
                    className="py-2.5 sm:py-3 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-pastel-gray-dark mb-1.5 sm:mb-2">Teléfono (Opcional)</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 123 456 789"
                    className="py-2.5 sm:py-3 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-pastel-gray-dark mb-1.5 sm:mb-2">Tu Mensaje *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Escribe aquí tu consulta o mensaje..."
                    required
                    aria-required="true"
                    className="py-2.5 sm:py-3 text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-pastel-mint hover:bg-pastel-mint-dark text-pastel-gray-dark py-3 text-base sm:text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-pastel-gray-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                     <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Enviar Mensaje
                    </span>
                  )}
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