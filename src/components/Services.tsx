import React from 'react';
import { Zap, Users, Lock, Wifi, Coffee, ShowerHead, Dumbbell, Bike } from 'lucide-react';
import { FaSpa } from 'react-icons/fa';
import { MdSportsMma, MdOutlineSportsMartialArts, MdFitnessCenter, MdDirectionsRun } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Services: React.FC = () => {
  const amenities = [
    { icon: <ShowerHead className="h-8 w-8 text-sky-500" />, label: 'Duchas' },
    { icon: <Lock className="h-8 w-8 text-emerald-500" />, label: 'Taquillas' },
    { icon: <img src="/sauna.png" alt="Sauna" className="h-8 w-8 rounded-full object-cover" />, label: 'Sauna' },
    { icon: <Wifi className="h-8 w-8 text-rose-500" />, label: 'Wifi gratis' },
    { icon: <Coffee className="h-8 w-8 text-orange-500" />, label: 'Máquinas Vending' },
    {
      icon: (
        <div className="bg-gray-100 dark:bg-dark-bg p-1 rounded-full shadow-md">
          <img src="/wellhub-logo.png" alt="Wellhub" className="h-9 w-9 object-contain rounded-full" />
        </div>
      ),
      label: 'Wellhub (Gympass)',
    },
  ];

  const instalaciones = [
    '/imgs/IMG-20250806-WA0017.jpg',
    '/Imagen de WhatsApp 2025-09-18 a las 10.53.15_6c50a073.jpg',
    '/imgs/IMG-20250806-WA0018.jpg',
    '/Imagen de WhatsApp 2025-09-18 a las 10.53.15_10fb8f7a.jpg',
    '/Imagen de WhatsApp 2025-09-18 a las 12.43.46_6c74a27a.jpg',
    '/imgs/IMG-20250806-WA0008.jpg',
    '/imgs/IMG-20250806-WA0007.jpg',
    '/imgs/IMG-20250806-WA0006.jpg',
    '/imgs/IMG-20250806-WA0016.jpg',
    '/imgs/IMG-20250806-WA0015.jpg',
    '/imgs/IMG-20250806-WA0014.jpg',
    '/imgs/IMG-20250806-WA0013.jpg',
    '/imgs/IMG-20250806-WA0012.jpg',
    '/imgs/IMG-20250806-WA0011.jpg',
    '/imgs/IMG-20250806-WA0010.jpg',
    '/imgs/IMG-20250806-WA0009.jpg',
  ];

  // 🎬 Vídeos Bekdoosan
  const videos = [
    { src: '/Video de WhatsApp 2025-10-24 a las 21.24.12_365ca291.mp4' },
    { src: '/Video de WhatsApp 2025-10-08 a las 13.24.15_091cd3fe.mp4' },
    { src: '/Video de WhatsApp 2025-10-24 a las 21.24.12_24492c8b.mp4' },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-10">
            Nuestros <span className="text-sky-500">Servicios</span>
          </h2>

          {/* AMENITIES */}
          <div className="flex justify-center flex-wrap gap-6 sm:gap-10 mb-8 sm:mb-12">
            {amenities.map((amenity, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform">
                <div className="bg-white dark:bg-zinc-900 p-3 rounded-full shadow-md">{amenity.icon}</div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm">{amenity.label}</span>
              </div>
            ))}
          </div>

          {/* INSTALACIONES */}
          <div className="my-8 sm:my-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Nuestras <span className="text-sky-500">Instalaciones</span>
            </h3>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={18}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {instalaciones.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Instalación ${index + 1}`}
                    className="w-full h-64 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
                    loading="lazy"
                    decoding="async"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* VIDEOS BEKDOOSAN */}
          <div className="my-8 sm:my-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Videos <span className="text-sky-500">Bekdoosan</span>
            </h3>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              loop
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                    {video.src.includes('youtube.com') ? (
                      <iframe
                        src={video.src}
                        title={`Video ${index + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                        poster="/video-poster.jpg" // Opcional: miniatura previa
                      >
                        <source src={video.src} type="video/mp4" />
                        Tu navegador no soporta la reproducción de video.
                      </video>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ACTIVIDADES */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
            Nuestras <span className="text-sky-500">Actividades</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
