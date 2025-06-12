import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/8.png',
      alt: 'Entrenamiento TRX',
      category: 'TRX'
    },
    {
      src: '/edu.png',
      alt: 'Clase de Taekwondo',
      category: 'Taekwondo'
    },
    {
      src: '/11.png',
      alt: 'Sesión de Yoga',
      category: 'Yoga'
    },
    {
      src: '/sliderf3.png',
      alt: 'Gimnasio principal',
      category: 'Instalaciones'
    },
    {
      src: '/6.png',
      alt: 'Ciclo Indoor',
      category: 'Ciclo'
    },
    {
      src: '/7.png',
      alt: 'Kick Boxing',
      category: 'Kick Boxing'
    },
    {
      src: '/8.png',
      alt: 'Entrenamiento grupal',
      category: 'Grupo'
    },
    {
      src: '/slider-footer-9.jpg',
      alt: 'Área de cardio',
      category: 'Cardio'
    },
    {
      src: '/slider-footer-10.jpg',
      alt: 'Jiu Jitsu',
      category: 'Jiu Jitsu'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-electric-blue px-3 py-1 rounded-full text-sm font-medium">
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
          <div className="relative max-w-4xl max-h-full">
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