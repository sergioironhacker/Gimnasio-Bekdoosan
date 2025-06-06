import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { Dumbbell, Heart, Users, Shield, ChevronLeft, ChevronRight, Zap, Wind, Bone, Sparkles as ActivitySparkles } from 'lucide-react';

const activitiesData = [
  {
    name: "Musculación & Fitness",
    description: "Desarrolla tu fuerza y define tu cuerpo con equipamiento de vanguardia y asesoramiento experto.",
    icon: Dumbbell,
    color: "text-pastel-blue-light-dark",
    bgColor: "bg-pastel-blue-light/20"
  },
  {
    name: "Cardio Total",
    description: "Eleva tu resistencia y quema calorías con nuestra amplia gama de máquinas cardiovasculares.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    name: "Clases Grupales",
    description: "TRX, Ciclo Indoor, Yoga, Pilates. ¡Energía y diversión garantizadas en cada sesión!",
    icon: Users,
    color: "text-pastel-mint-dark",
    bgColor: "bg-pastel-mint/20"
  },
  {
    name: "Artes Marciales",
    description: "Taekwondo, Jiu Jitsu, Kick Boxing. Aprende disciplina, defensa personal y supera tus límites.",
    icon: Shield,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  },
  {
    name: "Entrenamiento Funcional",
    description: "TRX y circuitos para mejorar agilidad, fuerza y coordinación de forma integral.",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    name: "Yoga y Bienestar",
    description: "Conecta cuerpo y mente, mejora flexibilidad y encuentra tu paz interior con nuestras clases.",
    icon: Wind, 
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    name: "Ciclo Indoor",
    description: "Pedalea al ritmo de la música, quema calorías y desafía tu resistencia en nuestras clases.",
    icon: ActivitySparkles, 
    color: "text-pastel-pink-dark",
    bgColor: "bg-pastel-pink/20"
  },
  {
    name: "Jiu Jitsu & Defensa",
    description: "Domina técnicas de defensa personal y sumérgete en el arte suave del Jiu Jitsu.",
    icon: Bone, 
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/10"
  }
];

const gallerySlides = [
  {
    id: 'gallery1',
    src: "/imgs/img-gallery-1.jpg",
    alt: "Área de musculación con pesas y máquinas",
    title: "Zona de Musculación Avanzada",
    subtitle: "Equipos de última generación para tus rutinas de fuerza."
  },
  {
    id: 'gallery2',
    src: "/imgs/slide-2-footer.jpg",
    alt: "Sala de cardio",
    title: "Espacio Cardio Total",
    subtitle: "Mejora tu resistencia y salud cardiovascular al máximo."
  },
  {
    id: 'gallery2',
    src: "/imgs/slide-footer-3.png",
    alt: "Sala de cardio",
    title: "Espacio Cardio Total",
    subtitle: "Mejora tu resistencia y salud cardiovascular al máximo."
  },
  {
    id: 'gallery2',
    src: "/imgs/slide-footer-6.png",
    alt: "Sala de cardio",
    title: "Espacio Cardio Total",
    subtitle: "Mejora tu resistencia y salud cardiovascular al máximo."
  },
  {
    id: 'gallery2',
    src: "/imgs/slide-footer-7.png",
    alt: "Sala de cardio",
    title: "Espacio Cardio Total",
    subtitle: "Mejora tu resistencia y salud cardiovascular al máximo."
  },
  {
    id: 'gallery2',
    src: "/imgs/slide-footer-8.png",
    alt: "Sala de cardio",
    title: "Espacio Cardio Total",
    subtitle: "Mejora tu resistencia y salud cardiovascular al máximo."
  },
  {
    id: 'gallery3',
    src: "/imgs/slide-footer-5.png",
    alt: "Entrenamiento funcional con cuerdas",
    title: "Entrenamiento Funcional Dinámico",
    subtitle: "Desarrolla fuerza, agilidad y coordinación."
  }
  // Puedes añadir más fotos aquí //////////////////////////////////////////////////////////////////////////////
];

const DRAG_BUFFER_GALLERY = 40;

const ActivitiesSection = ({ openLightbox }) => {
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const galleryDragX = useMotionValue(0);
  const galleryIntervalRef = useRef(null);

  const startGalleryAutoplay = () => {
    stopGalleryAutoplay();
    galleryIntervalRef.current = setInterval(() => {
      setCurrentGallerySlide((prev) => (prev + 1) % gallerySlides.length);
    }, 4500);
  };

  const stopGalleryAutoplay = () => {
    if (galleryIntervalRef.current) {
      clearInterval(galleryIntervalRef.current);
    }
  };
  
  useEffect(() => {
    startGalleryAutoplay();
    return () => stopGalleryAutoplay();
  }, []);

  const nextGallerySlide = () => {
    stopGalleryAutoplay();
    setCurrentGallerySlide((prev) => (prev + 1) % gallerySlides.length);
    startGalleryAutoplay();
  };

  const prevGallerySlide = () => {
    stopGalleryAutoplay();
    setCurrentGallerySlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
    startGalleryAutoplay();
  };

  const onGalleryDragEnd = () => {
    stopGalleryAutoplay();
    const x = galleryDragX.get();
    if (x < -DRAG_BUFFER_GALLERY) {
      setCurrentGallerySlide((prev) => (prev + 1) % gallerySlides.length);
    } else if (x > DRAG_BUFFER_GALLERY) {
      setCurrentGallerySlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
    }
    startGalleryAutoplay();
  };

  return (
    <>
      <section id="actividades" className="section-padding bg-pastel-lila-light/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-3 sm:mb-4">
              Nuestras <span className="text-gradient-pastel">Actividades TOP</span>
            </h2>
            <p className="text-lg sm:text-xl text-pastel-gray max-w-2xl sm:max-w-3xl mx-auto">
              Descubre la variedad de entrenamientos y clases premium que tenemos para ti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {activitiesData.map((activity, index) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 sm:p-6 hover-lift text-center shadow-lg flex flex-col items-center"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 ${activity.bgColor}`}>
                  <activity.icon className={activity.color} size={28} strokeWidth={2.2} />
                </div>
                <h3 className="text-md sm:text-lg font-bold text-pastel-gray-dark mb-2 sm:mb-2.5">{activity.name}</h3>
                <p className="text-pastel-gray text-xs sm:text-sm flex-grow leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-pastel-gray-dark mb-8 sm:mb-12">Galería de Momentos Bekdoosan</h3>
            
            <motion.div 
              className="relative slider-container h-72 sm:h-80 md:h-96 rounded-2xl shadow-xl overflow-hidden cursor-grab"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: galleryDragX }}
              onDragStart={stopGalleryAutoplay}
              onDragEnd={onGalleryDragEnd}
            >
              <AnimatePresence initial={false} custom={currentGallerySlide}>
                {gallerySlides.map((slide, index) => (
                  index === currentGallerySlide && (
                    <motion.div
                      key={slide.id}
                      className="slider-slide h-full absolute inset-0 group"
                      initial={{ opacity: 0, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -200 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      custom={currentGallerySlide}
                      onClick={(e) => { e.stopPropagation(); }}
                    >
                      <img
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        src={slide.src}
                        alt={slide.alt} 
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                        <h4 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">{slide.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">{slide.subtitle}</p>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Botón Ver más */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowGallery(true)}
                className="bg-pastel-blue-light hover:bg-pastel-blue-dark text-white font-bold py-2 px-6 rounded-full transition duration-300"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      </section>
 
      {/* Galería modal */}    
      {showGallery && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-5xl w-full rounded-xl overflow-y-auto max-h-[90vh] relative shadow-2xl">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
              {gallerySlides.map((slide) => (
                <div key={slide.id} className="group overflow-hidden rounded-lg shadow-md">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-2">
                    <h4 className="font-bold text-sm text-gray-800">{slide.title}</h4>
                    <p className="text-xs text-gray-500">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivitiesSection;
