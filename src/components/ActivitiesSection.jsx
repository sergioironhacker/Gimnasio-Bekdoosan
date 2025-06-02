import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Heart, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const activitiesData = [
  {
    name: "Musculación",
    description: "Equipos de última generación para desarrollar tu fuerza y masa muscular.",
    icon: Dumbbell
  },
  {
    name: "Cardio",
    description: "Mejora tu resistencia cardiovascular con nuestras máquinas especializadas.",
    icon: Heart
  },
  {
    name: "Clases Dirigidas",
    description: "TRX, Ciclo Indoor, Yoga y más. ¡Encuentra tu favorita!",
    icon: Users
  },
  {
    name: "Artes Marciales",
    description: "Taekwondo, Jiu Jitsu, Kick Boxing. Disciplina y superación.",
    icon: Star
  }
];

const gallerySlides = [
  {
    src: "https://images.unsplash.com/photo-1595235384607-1b28167f8d2f",
    alt: "Área de musculación con pesas y máquinas en tonos pastel",
    title: "Zona de Musculación",
    subtitle: "Equipos de última generación para tus rutinas."
  },
  {
    src: "https://images.unsplash.com/photo-1660921033451-ff4c849bfc99",
    alt: "Sala de cardio con cintas y bicicletas en ambiente pastel",
    title: "Zona Cardio",
    subtitle: "Mejora tu resistencia y salud cardiovascular."
  },
  {
    src: "https://images.unsplash.com/photo-1679500502523-b40fb6f0563d",
    alt: "Clase grupal de zumba con instructor en entorno pastel",
    title: "Clases Grupales",
    subtitle: "TRX, Ciclo Indoor, Yoga y más. ¡Energía y diversión!"
  },
  {
    src: "https://images.unsplash.com/photo-1552674605-db6ffd5ca5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Practicantes de artes marciales en una clase",
    title: "Artes Marciales",
    subtitle: "Taekwondo, Jiu Jitsu, Kick Boxing. ¡Desafía tus límites!"
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Clase de yoga en un ambiente tranquilo y luminoso",
    title: "Yoga y Bienestar",
    subtitle: "Conecta cuerpo y mente, encuentra tu equilibrio."
  },
  {
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Entrenamiento funcional con TRX en el gimnasio",
    title: "Entrenamiento Funcional",
    subtitle: "TRX para fortalecer todo tu cuerpo de forma integral."
  }
];

const ActivitiesSection = () => {
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
    }, 4000);
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-4">
            Nuestras <span className="text-gradient-pastel">Actividades</span>
          </h2>
          <p className="text-xl text-pastel-gray max-w-3xl mx-auto">
            Descubre la variedad de entrenamientos y clases que tenemos para ti.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activitiesData.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pastel-blue-light to-pastel-beige rounded-2xl p-8 hover-lift text-center shadow-lg"
            >
              <div className="bg-pastel-pink/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <activity.icon className="text-pastel-pink" size={32} />
              </div>
              <h3 className="text-xl font-bold text-pastel-gray-dark mb-4">{activity.name}</h3>
              <p className="text-pastel-gray text-sm">{activity.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-pastel-gray-dark mb-12">Galería de Actividades</h3>
          <div className="relative slider-container h-80 md:h-96 rounded-2xl shadow-xl">
            <div
              className="slider-track h-full"
              style={{ transform: `translateX(-${currentGallerySlide * 100}%)` }}
            >
              {gallerySlides.map((slide, index) => (
                <div key={index} className="slider-slide h-full">
                  <img  
                    className="w-full h-full object-cover"
                    src={slide.src}
                    alt={slide.alt} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white">{slide.title}</h4>
                    <p className="text-sm text-gray-200">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
             <button
                onClick={prevGallerySlide}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-pastel-gray-dark p-2 rounded-full transition-colors shadow-md"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextGallerySlide}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-pastel-gray-dark p-2 rounded-full transition-colors shadow-md"
                aria-label="Siguiente"
            >
                <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {gallerySlides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentGallerySlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                    index === currentGallerySlide ? 'bg-white scale-125' : 'bg-gray-300/70 hover:bg-gray-200'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
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