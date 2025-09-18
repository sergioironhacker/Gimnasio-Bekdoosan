import React from 'react';
import { Zap, Users, Lock, Wifi, Coffee, ShowerHead, Check, Dumbbell, Bike, Briefcase } from 'lucide-react';
import { FaSpa } from 'react-icons/fa';
import { MdSportsMma, MdOutlineSportsMartialArts, MdFitnessCenter, MdDirectionsRun } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: 'TRX ',
      description:
        'TRX es una modalidad deportiva que consiste en realizar ejercicios en suspensión: con la ayuda de unas cintas especiales, suspendemos en el aire parte del peso de nuestro cuerpo de manera que los músculos que han de realizar el movimiento tienen en este pero una resistencia para la tonificacion efectiva.',
      features: ['Ejercicios de cuerpo completo', 'Mejora la coordinación', 'Apto para todos los niveles'],
      color: 'sky-500'
    },
    {
      icon: <MdFitnessCenter className="h-12 w-12 text-emerald-500" />,
      title: 'Entrenamiento Funcional',
      description:
        'Una de las principales ventajas del entrenamiento funcional es que se adapta a las condiciones físiscas de cada persona, por lo que resulta muy efectivo, proporcionando múltiples beneficios para nuestra salud.',
      features: [
        'Fortalece la musculatura',
        'Aumenta la flexibilidad y agilidad',
        'Optimiza el rendimiento deportivo',
        'Corrección postural',
        'mejora la salud cardiovascular',
        'Elimina la grasa corporal',
        'Mejora el autoestima'
      ],
      color: 'emerald-500'
    },
    {
      icon: <FaSpa className="h-12 w-12 text-purple-500" />,
      title: 'Yoga',
      description:
        'Encuentra el equilibrio perfecto entre mente y cuerpo mejora tu calidad de vida nunca es tarde para practicar yoga.',
      features: [
        'Reduce el estrés',
        'Ayuda a relajarse',
        'Reduce presión arterial y cardiaca',
        'Mejora la coordinacion y el equilibrio',
        'Ayuda a dormir mejor',
        'Correccion postural'
      ],
      color: 'purple-500'
    },
    {
      icon: <MdOutlineSportsMartialArts className="h-12 w-12 text-rose-500" />,
      title: 'Taekwondo',
      description:
        '¿Quieres hacer Taekwondo ? 🥋 Descubre este arte marcial de origen Coreano, donde mejoraras tu flexivilidad, coordinación, reflejos, potencia, resistencia cardiovascular, autoestima, respeto...',
      features: ['Clases infantiles', 'Alevines y adultos', 'Clases de competición'],
      color: 'rose-500'
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: 'Jiu Jitsu',
      description: 'Arte marcial brasileño centrado en técnicas de suelo, llaves y sumisiones.',
      features: ['Defensa personal efectiva', 'Mejora la flexibilidad', 'Desarrolla estrategia mental'],
      color: 'orange-500'
    },
    {
      icon: <MdSportsMma className="h-12 w-12 text-yellow-500" />,
      title: 'Kick Boxing',
      description:
        '¡Aprende kick boxing en nuestras clases! 🥊 Todos los martes y jueves a las 20:15, deporte de contacto donde se convinan técnicas de boxeo, patadas y rodilla.',
      features: ['Mejora tu condicion física', 'Mejora la coordinación', 'Fuerza y resistencia'],
      color: 'yellow-500'
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-pink-500" />,
      title: 'Sala Fitness',
      description:
        '🏋️‍♂️ El entrenamiento es fundamental no solo para mejorar el rendimiento físico, sino tambien para fomentar una vida más saludable y equilibrada 💪 ',
      features: ['Sala de musculación guiada y libre', 'Fuerza, volumen o tonificar tu cuerpo', 'Te ayudamos a conseguir tus objetivos'],
      color: 'pink-500'
    },
    {
      icon: <MdDirectionsRun className="h-12 w-12 text-green-500" />,
      title: 'Sala Cardio',
      description:
        'En nuestra Sala de Cardio, mejora tu condición ideal para este entrenamiento. Cintas de correr, bicicletas, máquina de subir escaleras, remo, elípticas. Entrena de forma segura, para prevenir lesiones con nuestros planes de entrenamiento',
      features: ['Sala cardio guiada y libre', 'Alta quema de calorías', 'Fuerza y resistencia'],
      color: 'green-500'
    },
    {
      icon: <Bike className="h-12 w-12 text-indigo-500" />,
      title: 'Ciclo indoor',
      description:
        'Preparados para disfrutar de la mejor música pedaleando??? Experimenta la sensación de rodar con nosotros !!🚴🏼Clases vibrantes, motivantes y llenas de energía',
      features: ['Motivación y energía constante', 'Alta quema de calorías', 'Reducción del extres y mejora el animo'],
      color: 'indigo-500'
    }
  ];

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
      label: 'Wellhub (Gympass)'
    }
  ];

  // Lista original restaurada de imágenes (todas las que tenías)
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
    '/imgs/IMG-20250806-WA0009.jpg'
  ];

  // Vídeos: mezcla mp4 locales y YouTube embed (añade o quita rutas según necesites)
 // Vídeos Bekdoosan

const videos = [
  { type: 'youtube', src: 'https://www.youtube.com/embed/N4tieyG1h4o' },
    { type: 'youtube', src: 'https://www.youtube.com/embed/qDmy-5UnfQg' }, 
];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-10">
            Nuestros <span className="text-sky-500">Servicios</span>
          </h2>

          {/* AMENITIES */}
          <div className="flex justify-center flex-wrap gap-6 sm:gap-10 mb-8 sm:mb-12">
            {amenities.map((amenity, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform">
                <div className="bg-white dark:bg-zinc-900 p-3 rounded-full shadow-md">
                  {amenity.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm">{amenity.label}</span>
              </div>
            ))}
          </div>

          {/* EMPRESAS BLOQUE */}
          <div className="animate-fade-in flex justify-center px-2 sm:px-6 lg:px-8 mb-12 sm:mb-16">
            <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl border border-sky-500/20 p-5 sm:p-8 md:p-10 text-center">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-10 w-10 text-sky-500" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-sky-500 mb-6 sm:mb-8">Empresas</h3>

              <div className="space-y-8 sm:space-y-10 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">Bienestar corporativo que transforma resultados</h4>
                  <p className="mb-2">
                    Impulsa la productividad de tu empresa cuidando lo más importante: tu equipo. Ofrecemos a tus empleados la oportunidad de desconectar, recargar energías y mejorar su salud en todos los niveles.
                  </p>
                  <p>
                    Horarios flexibles, instalaciones adaptadas y un enfoque integral del bienestar. Porque una plantilla activa y motivada es sinónimo de grandes resultados.
                  </p>
                </div>

                <div>
                  <h4 className="text-md sm:text-lg font-semibold text-sky-500 mb-2">¿Sabías que no invertir en salud puede salir caro?</h4>
                  <div className="space-y-1 text-gray-700 dark:text-gray-300">
                    <p>Menos energía</p>
                    <p>Menor concentración</p>
                    <p>Más bajas y rotación</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-md sm:text-lg font-semibold text-sky-500 mb-1">Los números hablan:</h4>
                  <p>
                    Estudios del Ministerio de Deportes confirman que la actividad física regular puede
                    <strong> aumentar el rendimiento laboral hasta un 10%</strong>, reduciendo el estrés y mejorando el enfoque y la moral del equipo.
                  </p>
                </div>

                <div className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl border border-sky-500/10 shadow-md mt-4">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Invierte en bienestar, gana en resultados</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">Haz que tu empresa destaque por su cultura saludable y atractiva.</p>
                  <p className="mt-3 text-sky-500 font-semibold text-sm sm:text-base">Contáctanos y da el primer paso hacia un equipo más sano, motivado y productivo.</p>

                  <div className="mt-4 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-10 w-10 text-sky-500 animate-spin opacity-80"
                      style={{ animationDuration: '6s' }}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6v3m12-3v3M6 15v3m12-3v3M3 9h3v6H3V9zm15 0h3v6h-3V9zM9 12h6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* INSTALACIONES */}
          <div className="my-8 sm:my-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Nuestras <span className="text-sky-500">Instalaciones</span></h3>
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
                1024: { slidesPerView: 3 }
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
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Videos <span className="text-sky-500">Bekdoosan</span></h3>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 }
              }}
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
                    {video.type === 'mp4' ? (
                      <video
                        src={video.src}
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                      />
                    ) : (
                      <iframe
                        src={video.src}
                        title={`Video ${index + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ACTIVIDADES */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">Nuestras <span className="text-sky-500">Actividades</span></h2>
        </div>

        <div className="my-8 sm:my-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <article
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[420px]"
                  style={{ animationDelay: `${index * 0.06}s` }}
                  aria-labelledby={`service-title-${index}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gray-50 dark:bg-dark-bg rounded-full">
                      {service.icon}
                    </div>
                    <h3 id={`service-title-${index}`} className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{service.description}</p>

                    <ul className="space-y-2 w-full">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                          <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-sky-500/10 to-emerald-500/10 dark:from-sky-500/20 dark:to-emerald-500/20 rounded-2xl p-6 sm:p-8 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">¿Listo para empezar?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">Únete a nuestra comunidad y descubre todo lo que puedes lograr.💙</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition-transform duration-200"
                aria-label="Contactar"
              >
                Contáctanos
              </button>
              <button
                onClick={() => document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200"
                aria-label="Ver horarios"
              >
                Ver Horarios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
