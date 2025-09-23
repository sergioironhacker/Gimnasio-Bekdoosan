import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
     { src: '/Imagen de WhatsApp 2025-09-23 a las 21.59.49_967f871e.jpg', alt: 'Área de cardio' },
    { src: '/Imagen de WhatsApp 2025-09-23 a las 11.09.59_23a097e2.jpg', alt: 'Área de cardio' },
    { src: '/IMG-20250923-WA0003.jpg', alt: 'Área de cardio' },
    { src: '/IMG-20250923-WA0005.jpg', alt: 'Área de cardio' },
    { src: '/IMG-20250923-WA0004.jpg', alt: 'Área de cardio' },
    { src: '/IMG-20250904-WA0003.jpg', alt: 'Área de cardio' },
    




    { src: '/Imagen de WhatsApp 2025-09-08 a las 08.31.29_efea2ef4.jpg', alt: 'Área de cardio' },
    { src: '/Imagen de WhatsApp 2025-09-08 a las 11.08.40_8d681856.jpg', alt: 'Área de cardio' },
    { src: '/Imagen de WhatsApp 2025-09-03 a las 10.29.44_08b734a3.jpg', alt: 'Entrenamiento TRX' },
    { src: '/8.png', alt: 'Entrenamiento TRX' },
    { src: '/kick.png', alt: 'Clase de Taekwondo' },
    { src: '/11.png', alt: 'Sesión de Yoga' },
    { src: '/sliderfff.jpg', alt: 'Gimnasio principal' },
    { src: '/6.png', alt: 'Ciclo Indoor' },
    { src: '/7.png', alt: 'Kick Boxing' },
    { src: '/taek.png', alt: 'Entrenamiento grupal' },
    { src: '/slider-footer-9.jpg', alt: 'Área de cardio' },
    { src: '/ggg.jpg', alt: 'Área de cardio' },
    { src: '/ff.jpg', alt: 'Área de cardio' },
    { src: '/gymmodeon.jpg', alt: 'Área de cardio' },
    { src: '/gallery.jpg', alt: 'Área de cardio' },
    { src: '/a1.jpg', alt: 'Área de cardio' },
    { src: '/a2.jpg', alt: 'Área de cardio' },
    { src: '/Imagen de WhatsApp 2025-09-08 a las 08.31.53_4189a797.jpg', alt: 'Área de cardio' },
    { src: '/Imagen de WhatsApp 2025-09-08 a las 08.31.53_41544b4f.jpg', alt: 'Área de cardio' },
    { src: '/a4.jpg', alt: 'Área de cardio' },
    { src: '/july.jpg', alt: 'Área de cardio' },
    { src: '/IMG-20250806-WA0001.jpg', alt: 'Área de cardio' },
    { src: '/IMG-20250806-WA0003.jpg', alt: 'Área de cardio' },
    { src: '/IMG-20250728-WA0002.jpg', alt: 'Área de cardio' },
    { src: '/Imagen de WhatsApp 2025-08-07 a las 11.01.18_2facc32c.jpg', alt: 'Área de cardio' },
    { src: '/Imagen de WhatsApp 2025-08-07 a las 11.01.17_4db498ce.jpg', alt: 'Área de cardio' },
    { src: '/imgs/IMG-20250806-WA0004.jpg', alt: 'Área de cardio' },
    { src: '/slider-footer-10.jpg', alt: 'Jiu Jitsu' }
  ];

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  const nextImage = () =>
    selectedImage !== null && setSelectedImage((selectedImage + 1) % images.length);
  const prevImage = () =>
    selectedImage !== null && setSelectedImage((selectedImage - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-electric-blue" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Nuestra Galería <span className="text-electric-blue">Momentos Bekdoosan</span>
            </h2>
            <Heart className="w-8 h-8 text-electric-blue" fill="currentColor" />
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre nuestras instalaciones, clases y la energía que se vive en Bekdoosan
          </p>
        </div>

        {/* Miniaturas en fila horizontal scrollable */}
        <div className="overflow-x-auto whitespace-nowrap flex gap-4 py-4 px-1 scrollbar-thin scrollbar-thumb-electric-blue/70 scrollbar-track-transparent">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="inline-block relative cursor-pointer min-w-[200px] sm:min-w-[250px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-44 sm:h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-full">
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-electric-blue transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Botón anterior */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-electric-blue transition-colors duration-200 z-10"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            {/* Botón siguiente */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-electric-blue transition-colors duration-200 z-10"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Imagen seleccionada */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Texto bajo la imagen */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <span className="bg-electric-blue/90 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {images[selectedImage].alt}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
