import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slidesData = [
  {
    title: "Bienvenido a Gimnasio Bekdoosan",
    subtitle: "Tu mejor versión te está esperando",
    description: "Entrena en el corazón de Segovia con equipos de última generación.",
    imgSrc: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
    imgAlt: "Gimnasio moderno con equipos de entrenamiento en tonos pastel"
  },
  {
    title: "Entrenamientos Personalizados",
    subtitle: "Alcanza tus objetivos más rápido",
    description: "Nuestros entrenadores profesionales te guiarán en cada paso.",
    imgSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Entrenador personal ayudando a una clienta en el gimnasio"
  },
  {
    title: "Variedad de Actividades",
    subtitle: "Encuentra tu pasión fitness",
    description: "Musculación, cardio, TRX, Jiu Jitsu, Kick Boxing y mucho más.",
    imgSrc: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Clase grupal de fitness en un ambiente energético"
  },
  {
    title: "Comunidad y Motivación",
    subtitle: "Entrena en un ambiente positivo",
    description: "Únete a nuestra comunidad y encuentra la motivación que necesitas.",
    imgSrc: "/imgs/Norte.webp",
    imgAlt: "Grupo de personas entrenando juntas en el gimnasio"
  },
  {
    title: "Instalaciones de Primera",
    subtitle: "Equipamiento moderno y espacioso",
    description: "Disfruta de nuestras amplias instalaciones y maquinaria de última generación.",
    imgSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Interior de un gimnasio espacioso y bien equipado"
  },
  {
    title: "Resultados Garantizados",
    subtitle: "Transforma tu cuerpo y mente",
    description: "Con nuestro apoyo y tu dedicación, alcanzarás los resultados que buscas.",
    imgSrc: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    imgAlt: "Persona mostrando su progreso físico en el gimnasio"
  }
];

const HeroSection = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <section id="inicio" className="relative h-screen overflow-hidden pt-20">
      <div className="slider-container h-full">
        <div
          className="slider-track h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slidesData.map((slide, index) => (
            <div key={index} className="slider-slide h-full">
              <div className="relative h-full flex items-center justify-center">
                <img  
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  src={slide.imgSrc}
                  alt={slide.imgAlt} />
                <div className="absolute inset-0 bg-gradient-to-t from-pastel-beige via-pastel-beige/50 to-transparent"></div>
                <div className="relative z-10 text-center text-pastel-gray-dark px-4">
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.p
                    className="text-md mb-8 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Button
                      size="lg"
                      className="bg-pastel-mint hover:bg-pastel-mint-dark text-pastel-gray-dark px-8 py-4 text-lg shadow-lg"
                      onClick={() => scrollToSection('contacto')}
                    >
                      ¡Únete Ahora!
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pastel-lila-light/70 hover:bg-pastel-lila-light text-pastel-gray-dark p-3 rounded-full transition-colors shadow-md"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pastel-lila-light/70 hover:bg-pastel-lila-light text-pastel-gray-dark p-3 rounded-full transition-colors shadow-md"
        aria-label="Siguiente diapositiva"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
              index === currentSlide ? 'bg-pastel-mint scale-125' : 'bg-pastel-gray-light hover:bg-pastel-gray'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;