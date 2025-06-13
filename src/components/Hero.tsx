import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/imgmain.jpg',
      /* title: 'Entrena con Nosotros', */
      /* subtitle: 'Tu mejor versión comienza aquí' */
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slider Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            <span className="text-electric-blue">BEKDOOSAN GYM</span>
          </h1>

          {/* 5 palabras debajo del título una debajo de otra */}
          <div className="flex flex-col items-center space-y-3 text-lg md:text-xl lg:text-2xl text-white font-semibold mb-6 animate-slide-up">
            <span className="bg-white/10 px-6 py-1 rounded-full">Musculación</span>
            <span className="bg-white/10 px-6 py-1 rounded-full">Fitness</span>
            <span className="bg-white/10 px-6 py-1 rounded-full">Cardio</span>
            <span className="bg-white/10 px-6 py-1 rounded-full">Ciclo Indoor</span>
            <span className="bg-white/10 px-6 py-1 rounded-full">TRX</span>
            <span className="bg-white/10 px-6 py-1 rounded-full">Entrenamiento</span>
            <span className="bg-white/10 px-6 py-1 rounded-full">Yoga</span>
            <span className="bg-white/10 px-6 py-1 rounded-full">Artes Marciales</span>
          </div>

          {/* Subtítulo dinámico */}
          {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 animate-slide-up">
            {slides[currentSlide].subtitle}
          </p> */}
        </div>
      </div>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-electric-blue' : 'bg-white/50'
              }`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default Hero;
