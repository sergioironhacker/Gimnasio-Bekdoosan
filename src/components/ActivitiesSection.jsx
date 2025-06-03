import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Heart, Users, Star, ChevronLeft, ChevronRight, Zap, Shield, Wind } from 'lucide-react';

const activitiesData = [
  {
    name: "Musculación Pro",
    description: "Desarrolla tu fuerza y define tu cuerpo con equipamiento de vanguardia y asesoramiento experto.",
    icon: Dumbbell
  },
  {
    name: "Cardio Max",
    description: "Eleva tu resistencia y quema calorías con nuestra amplia gama de máquinas cardiovasculares.",
    icon: Heart
  },
  {
    name: "Clases Grupales TOP",
    description: "TRX, Ciclo Indoor, Yoga, Pilates y más. ¡Energía y diversión garantizadas en cada sesión!",
    icon: Users
  },
  {
    name: "Artes Marciales Élite",
    description: "Taekwondo, Jiu Jitsu, Kick Boxing. Aprende disciplina, defensa personal y supera tus límites.",
    icon: Shield
  }
];

const gallerySlides = [
  {
    id: 'gallery1',
    src: "public/imgs/1.png",
    alt: "Área de musculación con pesas y máquinas en tonos pastel",
    title: "Zona de Musculación Avanzada",
    subtitle: "Equipos de última generación para tus rutinas de fuerza."
  },
  {
    id: 'gallery2',
    src: "/imgs/2.jpg",
    alt: "Sala de cardio con cintas y bicicletas en ambiente pastel",
    title: "Espacio Cardio Total",
    subtitle: "Mejora tu resistencia y salud cardiovascular al máximo."
  },
  {
    id: 'gallery3',
    src: "/imgs/3.jpg",
    alt: "Clase de entrenamiento funcional con cuerdas",
    title: "Entrenamiento Funcional Dinámico",
    subtitle: "Desarrolla fuerza, agilidad y coordinación."
  },
  {
    id: 'gallery4',
    src: "/imgs/4.jpg",
    alt: "Practicantes de artes marciales en una clase intensa",
    title: "Dojo de Artes Marciales",
    subtitle: "Taekwondo, Jiu Jitsu, Kick Boxing. ¡Desafía tus límites!"
  },
  {
    id: 'gallery5',
    src: "/imgs/5.jpg",
    alt: "Clase de yoga en un ambiente tranquilo y luminoso con varias personas",
    title: "Estudio de Yoga y Pilates",
    subtitle: "Conecta cuerpo y mente, encuentra tu equilibrio interior."
  },
  {
    id: 'gallery6',
    src: "/imgs/6.png",
    alt: "Entrenamiento funcional con TRX en el gimnasio de forma intensa",
    title: "Zona TRX y Funcional",
    subtitle: "Fortalece todo tu cuerpo de forma integral y efectiva."
  },
  {
    id: 'gallery7',
    src: "/imgs/7.png",
    alt: "Clase de spinning con bicicletas estáticas y luces de neón",
    title: "Sala de Ciclo Indoor Épica",
    subtitle: "Pedalea al ritmo de la música y supera tus marcas."
  },
  {
    id: 'gallery8',
    src: "/imgs/8.png",
    alt: "Entrenador personal guiando a un cliente en el gimnasio",
    title: "Asesoramiento Personalizado",
    subtitle: "Nuestros expertos te ayudan a alcanzar tus metas."
  }
];

const ActivitiesSection = ({ openLightbox }) => {
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  const nextGallerySlide = () => {
    setCurrentGallerySlide((prev) => (prev + 1) % gallerySlides.length);
  };

  const prevGallerySlide = () => {
    setCurrentGallerySlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextGallerySlide();
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {activitiesData.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pastel-blue-light to-pastel-beige rounded-2xl p-6 sm:p-8 hover-lift text-center shadow-lg flex flex-col"
            >
              <div className="bg-pastel-pink/30 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <activity.icon className="text-pastel-pink" size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-pastel-gray-dark mb-2 sm:mb-3">{activity.name}</h3>
              <p className="text-pastel-gray text-xs sm:text-sm flex-grow">{activity.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-pastel-gray-dark mb-8 sm:mb-12">Galería de Momentos Bekdoosan</h3>
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[32rem] mx-auto rounded-2xl shadow-xl overflow-hidden">
            <AnimatePresence initial={false} custom={currentGallerySlide}>
              {gallerySlides.map((slide, index) => (
                index === currentGallerySlide && (
                  <motion.div
                    key={slide.id}
                    className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    onClick={() => openLightbox(slide.src)}
                  >
                    <img
                      className="w-full h-full object-contain"
                      src={slide.src}
                      alt={slide.alt}
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            <button
              onClick={prevGallerySlide}
              className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-pastel-gray-dark p-1.5 sm:p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pastel-mint"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextGallerySlide}
              className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-pastel-gray-dark p-1.5 sm:p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pastel-mint"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
              {gallerySlides.map((slide, index) => (
                <button
                  key={slide.id + '-dot'}
                  onClick={() => setCurrentGallerySlide(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-white ${
                    index === currentGallerySlide ? 'bg-white scale-125' : 'bg-gray-300/70 hover:bg-gray-200'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                  aria-current={index === currentGallerySlide}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;