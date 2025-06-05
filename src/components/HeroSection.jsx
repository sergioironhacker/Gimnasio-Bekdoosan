import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slidesData = [
  {
    id: 'slide1',
    title: "Bienvenido a Gimnasio Bekdoosan",
    subtitle: "Tu mejor versión te está esperando",
    description: "Entrena en el corazón de Segovia con equipos de última generación y un ambiente motivador.",
    imgSrc: "/imgs/ima-main1.jpg",
    imgAlt: "Gimnasio moderno con equipos de entrenamiento en tonos pastel"
  },
  {
    id: 'slide2',
    title: "Entrenamientos Personalizados",
    subtitle: "Alcanza tus objetivos más rápido",
    description: "Nuestros entrenadores profesionales diseñarán un plan a tu medida y te guiarán en cada paso.",
    imgSrc: "/imgs/img-22222main2.jpg",
    imgAlt: "Entrenador personal ayudando a una clienta en el gimnasio con dedicación"
  },
  {
    id: 'slide3',
    title: "Variedad de Actividades",
    subtitle: "Encuentra tu pasión fitness",
    description: "Musculación, cardio, TRX, Jiu Jitsu, Kick Boxing, Yoga, Pilates ¡y mucho más para no aburrirte!",
    imgSrc: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Clase grupal de fitness en un ambiente energético y divertido"
  },
  {
    id: 'slide4',
    title: "Comunidad y Motivación",
    subtitle: "Entrena en un ambiente positivo",
    description: "Únete a nuestra vibrante comunidad y encuentra la motivación que necesitas para superarte día a día.",
    imgSrc: "https://images.unsplash.com/photo-1574680096145-f846b5a6abc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Grupo de personas entrenando juntas y motivándose en el gimnasio"
  },
  {
    id: 'slide5',
    title: "Instalaciones de Primera",
    subtitle: "Equipamiento moderno y espacioso",
    description: "Disfruta de nuestras amplias instalaciones, vestuarios cómodos y maquinaria de última generación.",
    imgSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Interior de un gimnasio espacioso, limpio y bien equipado"
  },
  {
    id: 'slide6',
    title: "Resultados Garantizados",
    subtitle: "Transforma tu cuerpo y mente",
    description: "Con nuestro apoyo constante y tu dedicación, alcanzarás los resultados que siempre has buscado.",
    imgSrc: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80",
    imgAlt: "Persona mostrando su progreso físico y bienestar en el gimnasio"
  },
  {
    id: 'slide7',
    title: "Salud y Bienestar Integral",
    subtitle: "Más que fitness, un estilo de vida",
    description: "Fomentamos un enfoque holístico para tu salud, combinando ejercicio, nutrición y mentalidad positiva.",
    imgSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    imgAlt: "Persona practicando yoga en un ambiente sereno y saludable"
  }
];

const DRAG_BUFFER = 50;

const HeroSection = ({ scrollToSection, openLightbox }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dragX = useMotionValue(0);
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const nextSlide = () => {
    stopAutoplay();
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    startAutoplay();
  };

  const prevSlide = () => {
    stopAutoplay();
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    startAutoplay();
  };

  const onDragEnd = () => {
    stopAutoplay();
    const x = dragX.get();
    if (x < -DRAG_BUFFER) {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    } else if (x > DRAG_BUFFER) {
      setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    }
    startAutoplay();
  };

  const handleDotClick = (index) => {
    stopAutoplay();
    setCurrentSlide(index);
    startAutoplay();
  };

  return (
    // IMPORTS IGUALES

<section id="inicio" className="relative h-screen min-h-[600px] sm:min-h-[700px] overflow-hidden pt-16 sm:pt-20 bg-pastel-beige">
  <motion.div
    className="slider-container h-full relative cursor-grab"
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    style={{ x: dragX }}
    onDragStart={stopAutoplay}
    onDragEnd={onDragEnd}
  >
    <AnimatePresence initial={false} custom={currentSlide}>
      {slidesData.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`slider-slide h-full w-full absolute inset-0 ${index === currentSlide ? '' : 'hidden'}`}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
            <img
              src={slide.imgSrc}
              alt={slide.imgAlt}
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-cover pointer-events-none"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pastel-beige/50 via-pastel-beige/30 to-transparent"></div>

            <div className="relative z-10 text-center text-pastel-gray-dark px-4 sm:px-6 lg:px-8 max-w-screen-md">
              <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
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
                className="text-sm sm:text-base max-w-lg mx-auto mb-6 sm:mb-8"
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
                  onClick={(e) => { e.stopPropagation(); scrollToSection('contacto'); }}
                >
                  ¡Únete Ahora!
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>

  {/* BOTONES NAVEGACIÓN */}
  <button
    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-pastel-lila-light/60 hover:bg-pastel-lila-light text-pastel-gray-dark p-2 sm:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg z-20"
    aria-label="Anterior"
  >
    <ChevronLeft size={24} />
  </button>
  <button
    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-pastel-lila-light/60 hover:bg-pastel-lila-light text-pastel-gray-dark p-2 sm:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg z-20"
    aria-label="Siguiente"
  >
    <ChevronRight size={24} />
  </button>

  {/* PUNTOS */}
  <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
    {slidesData.map((_, index) => (
      <button
        key={index}
        onClick={(e) => { e.stopPropagation(); handleDotClick(index); }}
        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none ${
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
