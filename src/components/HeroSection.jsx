import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slidesData = [
  {
    id: 'slide1',
    title: "Bienvenido a Gimnasio Bekdoosan",
    subtitle: "Tu mejor versión te está esperando",
    description: "Entrena en el corazón de Segovia con equipos de última generación y un ambiente motivador.",
    imgSrc: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    imgAlt: "Gimnasio moderno con equipos de entrenamiento en tonos pastel"
  },
  {
    id: 'slide2',
    title: "Entrenamientos Personalizados",
    subtitle: "Alcanza tus objetivos más rápido",
    description: "Nuestros entrenadores profesionales diseñarán un plan a tu medida y te guiarán en cada paso.",
    imgSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Entrenador personal ayudando a una clienta en el gimnasio con dedicación"
  },
  {
    id: 'slide3',
    title: "Variedad de Actividades",
    subtitle: "Encuentra tu pasión fitness",
    description: "Musculación, cardio, TRX, Jiu Jitsu, Kick Boxing, Yoga, Pilates ¡y mucho más para no aburrirte!",
    imgSrc: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Clase grupal de fitness en un ambiente energético y divertido"
  },
  {
    id: 'slide4',
    title: "Comunidad y Motivación",
    subtitle: "Entrena en un ambiente positivo",
    description: "Únete a nuestra vibrante comunidad y encuentra la motivación que necesitas para superarte día a día.",
    imgSrc: "https://images.unsplash.com/photo-1574680096145-f846b5a6abc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Grupo de personas entrenando juntas y motivándose en el gimnasio"
  },
  {
    id: 'slide5',
    title: "Instalaciones de Primera",
    subtitle: "Equipamiento moderno y espacioso",
    description: "Disfruta de nuestras amplias instalaciones, vestuarios cómodos y maquinaria de última generación.",
    imgSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Interior de un gimnasio espacioso, limpio y bien equipado"
  },
  {
    id: 'slide6',
    title: "Resultados Garantizados",
    subtitle: "Transforma tu cuerpo y mente",
    description: "Con nuestro apoyo constante y tu dedicación, alcanzarás los resultados que siempre has buscado.",
    imgSrc: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    imgAlt: "Persona mostrando su progreso físico y bienestar en el gimnasio"
  },
  {
    id: 'slide7',
    title: "Salud y Bienestar Integral",
    subtitle: "Más que fitness, un estilo de vida",
    description: "Fomentamos un enfoque holístico para tu salud, combinando ejercicio, nutrición y mentalidad positiva.",
    imgSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Persona practicando yoga en un ambiente sereno y saludable"
  }
];

const HeroSection = ({ scrollToSection, openLightbox }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] sm:min-h-[700px] overflow-hidden pt-16 sm:pt-20 bg-pastel-beige">
      <div className="slider-container h-full">
        <AnimatePresence initial={false} custom={currentSlide}>
          {slidesData.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                className="slider-slide h-full absolute inset-0"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div className="relative h-full flex items-center justify-center">
                  <img
                    className="absolute inset-0 w-full h-full object-cover opacity-40 cursor-pointer hover:opacity-50 transition-opacity duration-300"
                    src={slide.imgSrc}
                    alt={slide.imgAlt}
                    onClick={() => openLightbox(slide.imgSrc)}
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-pastel-beige via-pastel-beige/70 to-transparent"></div>
                  <div className="relative z-10 text-center text-pastel-gray-dark px-4 sm:px-6 lg:px-8">
                    <motion.h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-md sm:text-lg md:text-xl mb-3 sm:mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.p
                      className="text-sm sm:text-md max-w-lg sm:max-w-xl mx-auto mb-6 sm:mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      <Button
                        size="lg"
                        className="bg-pastel-mint hover:bg-pastel-mint-dark text-pastel-gray-dark px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        onClick={() => scrollToSection('contacto')}
                      >
                        ¡Únete Ahora!
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-pastel-lila-light/60 hover:bg-pastel-lila-light text-pastel-gray-dark p-2 sm:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pastel-mint"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-pastel-lila-light/60 hover:bg-pastel-lila-light text-pastel-gray-dark p-2 sm:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pastel-mint"
        aria-label="Siguiente diapositiva"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slidesData.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-pastel-mint ${
              index === currentSlide ? 'bg-pastel-mint scale-125' : 'bg-pastel-gray-light hover:bg-pastel-gray'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;