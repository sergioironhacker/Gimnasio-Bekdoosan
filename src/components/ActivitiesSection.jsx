
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
    src: "https://images.unsplash.com/photo-1595235384607-1b28167f8d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Área de musculación con pesas y máquinas en tonos pastel",
    title: "Zona de Musculación Avanzada",
    subtitle: "Equipos de última generación para tus rutinas de fuerza."
  },
  {
    id: 'gallery2',
    src: "https://images.unsplash.com/photo-1660921033451-ff4c849bfc99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Sala de cardio con cintas y bicicletas en ambiente pastel",
    title: "Espacio Cardio Total",
    subtitle: "Mejora tu resistencia y salud cardiovascular al máximo."
  },
  {
    id: 'gallery3',
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Clase de entrenamiento funcional con cuerdas",
    title: "Entrenamiento Funcional Dinámico",
    subtitle: "Desarrolla fuerza, agilidad y coordinación."
  },
  {
    id: 'gallery4',
    src: "https://images.unsplash.com/photo-1552674605-db6ffd5ca5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Practicantes de artes marciales en una clase intensa",
    title: "Dojo de Artes Marciales",
    subtitle: "Taekwondo, Jiu Jitsu, Kick Boxing. ¡Desafía tus límites!"
  },
  {
    id: 'gallery5',
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Clase de yoga en un ambiente tranquilo y luminoso con varias personas",
    title: "Estudio de Yoga y Pilates",
    subtitle: "Conecta cuerpo y mente, encuentra tu equilibrio interior."
  },
  {
    id: 'gallery6',
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Entrenamiento funcional con TRX en el gimnasio de forma intensa",
    title: "Zona TRX y Funcional",
    subtitle: "Fortalece todo tu cuerpo de forma integral y efectiva."
  },
  {
    id: 'gallery7',
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Clase de spinning con bicicletas estáticas y luces de neón",
    title: "Sala de Ciclo Indoor Épica",
    subtitle: "Pedalea al ritmo de la música y supera tus marcas."
  },
  {
    id: 'gallery8',
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Entrenador personal guiando a un cliente en el gimnasio",
    title: "Asesoramiento Personalizado",
    subtitle: "Nuestros expertos te ayudan a alcanzar tus metas."
  }
];

const DRAG_BUFFER_GALLERY = 40;

const ActivitiesSection = ({ openLightbox }) => {
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
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

  const handleGalleryDotClick = (index) => {
    stopGalleryAutoplay();
    setCurrentGallerySlide(index);
    startGalleryAutoplay();
  };

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
                    onClick={(e) => { e.stopPropagation(); openLightbox(slide.src); }}
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
           {/*  <button
                onClick={(e) => { e.stopPropagation(); prevGallerySlide(); }}
                className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-pastel-gray-dark p-1.5 sm:p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pastel-mint z-20"
                aria-label="Anterior"
                style={{ marginTop: '-1.5rem' }} 
            >
                <ChevronLeft size={20} />
            </button> */}
           {/*  <button
                onClick={(e) => { e.stopPropagation(); nextGallerySlide(); }}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-pastel-gray-dark p-1.5 sm:p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pastel-mint z-20"
                aria-label="Siguiente"
                style={{ marginTop: '-1.5rem' }}
            >
                <ChevronRight size={20} />
            </button> */}
           
          
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;




/*  <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20" style={{ marginTop: 'calc( ( (72px * 4) + (80px * 4) + (96px * 4) ) / 12 - 1rem)'}}> {/* Adjust margin for dots to be below slider }
                {gallerySlides.map((slide, index) => (
                <button
                    key={slide.id + '-dot'}
                    onClick={(e) => { e.stopPropagation(); handleGalleryDotClick(index);}}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-white ${
                    index === currentGallerySlide ? 'bg-white scale-125' : 'bg-gray-300/70 hover:bg-gray-200'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                    aria-current={index === currentGallerySlide}
                />
                ))}
            </div>  */