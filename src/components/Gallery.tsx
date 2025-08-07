import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/8.png', alt: 'Entrenamiento TRX', /* category: 'TRX' */ },
    { src: '/kick.png', alt: 'Clase de Taekwondo', /* category: 'Taekwondo' */ },
    { src: '/11.png', alt: 'Sesión de Yoga', /* category: 'Yoga' */ },
    { src: '/sliderfff.jpg', alt: 'Gimnasio principal', /* category: 'Instalaciones' */ },
    { src: '/6.png', alt: 'Ciclo Indoor', /* category: 'Ciclo' */ },
    { src: '/7.png', alt: 'Kick Boxing', /* category: 'Kick Boxing' */ },
    { src: '/taek.png', alt: 'Entrenamiento grupal', /* category: 'Grupo' */ },
    { src: '/slider-footer-9.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
    { src: '/ggg.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
    { src: '/ff.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
     { src: '/gymmodeon.jpg', alt: 'Área de cardio',/*  category: 'Cardio' */ },
      { src: '/gallery.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
      { src: '/a1.jpg', alt: 'Área de cardio',/*  category: 'Cardio' */ },
      { src: '/a2.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
      { src: '/a3.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
      { src: '/a4.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
      { src: '/july.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
       { src: '/IMG-20250806-WA0001.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
        { src: '/IMG-20250806-WA0002.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
         { src: '/IMG-20250806-WA0003.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
          { src: '/IMG-20250728-WA0002.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
           { src: '/Imagen de WhatsApp 2025-08-07 a las 11.01.18_2facc32c.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
            { src: '/Imagen de WhatsApp 2025-08-07 a las 11.01.17_4db498ce.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
       { src: '/imgs/IMG-20250806-WA0004.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
        { src: '/imgs/IMG-20250806-WA0005.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
         { src: '/imgs/IMG-20250806-WA0006.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
          { src: '/imgs/IMG-20250806-WA0007.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
           { src: '/imgs/IMG-20250806-WA0008.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
            { src: '/imgs/IMG-20250806-WA0009.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
             { src: '/imgs/IMG-20250806-WA0010.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
              { src: '/imgs/IMG-20250806-WA0011.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
               { src: '/imgs/IMG-20250806-WA0012.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
                { src: '/imgs/IMG-20250806-WA0013.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
                 { src: '/imgs/IMG-20250806-WA0014.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
                 { src: '/imgs/IMG-20250806-WA0015.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
                 { src: '/imgs/IMG-20250806-WA0016.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
                 { src: '/imgs/IMG-20250806-WA0017.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
                 { src: '/imgs/IMG-20250806-WA0018.jpg', alt: 'Área de cardio', /* category: 'Cardio' */ },
    { src: '/slider-footer-10.jpg', alt: 'Jiu Jitsu', /* category: 'Jiu Jitsu' */ }
  ];

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => selectedImage !== null && setSelectedImage((selectedImage + 1) % images.length);
  const prevImage = () => selectedImage !== null && setSelectedImage((selectedImage - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestra Galería <span className="text-electric-blue">Momentos Bekdoosan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre nuestras instalaciones, clases y la energía que se vive en Bekdoosan
          </p>
        </div>

        {/* Miniaturas (una sola fila desplazable horizontalmente) */}
        <div className="overflow-x-auto whitespace-nowrap flex gap-4 py-4 px-1">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="inline-block relative cursor-pointer min-w-[200px] max-w-xs rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="bg-electric-blue px-2 py-1 rounded-full text-xs font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-electric-blue transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-electric-blue transition-colors duration-200 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-electric-blue transition-colors duration-200 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <span className="bg-electric-blue px-4 py-2 rounded-full text-sm font-medium">
                {images[selectedImage].category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
