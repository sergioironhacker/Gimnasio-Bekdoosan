import React from 'react';
import { Zap, /* Target, */ /* Heart, */ /* Sword, */ Users, /* Award, */ Lock, Wifi, Coffee, ShowerHead, Check, Dumbbell/* Activity, *//* Hand */ } from 'lucide-react';
import { /* FaFistRaised */ FaSpa,   } from 'react-icons/fa';
import { MdSportsMma } from 'react-icons/md';
/* import { GiKarateGi } from 'react-icons/gi'; */
import { MdOutlineSportsMartialArts } from 'react-icons/md';
import { MdFitnessCenter } from 'react-icons/md';
import { Bike } from 'lucide-react';
import { MdDirectionsRun } from "react-icons/md";



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Services = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-electric-blue" />,
      title: 'TRX ',
      description: 'TRX es una modalidad deportiva que consiste en realizar ejercicios en suspensión: con la ayuda de unas cintas especiales, suspendemos en el aire parte del peso de nuestro cuerpo de manera que los músculos que han de realizar el movimiento tienen en este pero una resistencia para la tonificacion efectiva.',
      features: ['Ejercicios de cuerpo completo', 'Mejora la coordinación', 'Apto para todos los niveles'],
      color: 'electric-blue'
    },
    {
      icon: <MdFitnessCenter className="h-12 w-12 text-electric-green" />,
      title: 'Entrenamiento Funcional',
      description: 'Una de las principales ventajas del entrenamiento funcional es que se adapta a las condiciones físiscas de cada persona, por lo que resulta muy efectivo, proporcionando múltiples beneficios para nuestra salud.',
      features: ['Fortalece la musculatura', 'Aumenta la flexibilidad y agilidad', 'Optimiza el rendimiento deportivo', 'Corrección postural', 'mejora la salud cardiovascular', 'Elimina la grasa corporal', 'Mejora el autoestima'],
      color: 'electric-green'
    },
    {
      icon: <FaSpa className="h-12 w-12 text-electric-purple" />,
      title: 'Yoga',
      description: 'Encuentra el equilibrio perfecto entre mente y cuerpo mejora tu calidad de vida nunca es tarde para practicar yoga.',
      features: ['Reduce el estrés', 'Ayuda a relajarse','Reduce presión arterial y cardiaca', 'Mejora la coordinacion y el equilibrio', 'Ayuda a dormir mejor', 'Correccion postural'],
      color: 'electric-purple'
    },
    {
      icon: <MdOutlineSportsMartialArts className="h-12 w-12 text-electric-red" />,
      title: 'Taekwondo',
      description: '¿Quieres hacer Taekwondo ? 🥋 Descubre este arte marcial de origen Coreano, donde mejoraras tu flexivilidad, coordinación, reflejos, potencia, resistencia cardiovascular, autoestima, respeto...',
      features: ['Clases infantiles', 'Alevines y adultos', 'Clases de competición'],
      color: 'electric-red'
    },
    {
      icon: <Users className="h-12 w-12 text-electric-orange" />,
      title: 'Jiu Jitsu',
      description: 'Arte marcial brasileño centrado en técnicas de suelo, llaves y sumisiones.',
      features: ['Defensa personal efectiva', 'Mejora la flexibilidad', 'Desarrolla estrategia mental'],
      color: 'electric-orange'
    },
    {
      icon: <MdSportsMma className="h-12 w-12 text-electric-yellow" />,
      title: 'Kick Boxing',
      description: '¡Aprende kick boxing en nuestras clases! 🥊 Todos los martes y jueves a las 20:15, deporte de contacto donde se convinan técnicas de boxeo, patadas y rodilla.',
      features: ['Mejora tu condicion física', 'Mejora la coordinación', 'Fuerza y resistencia'],
      color: 'electric-yellow'
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-electric-pink" />,
      title: 'Sala Fitness',
      description: '🏋️‍♂️ El entrenamiento es fundamental no solo para mejorar el rendimiento físico, sino tambien para fomentar una vida más saludable y equilibrada 💪 ',
      features: ['Sala de musculación guiada y libre', 'Fuerza, volumen o tonificar tu cuerpo', 'Te ayudamos a conseguir tus objetivos'],
      color: 'electric-yellow'
    },
    {
      icon: <MdDirectionsRun className="h-12 w-12 text-electric-green" />,
      title: 'Sala Cardio',
      description: 'En nuestra Sala de Cardio, mejora tu condición ideal para este entrenamiento. Cintas de correr, bicicletas, máquina de subir escaleras, remo, elípticas. Entrena de forma segura, para prevenir lesiones con nuestros planes de entrenamiento',
      features: ['Sala cardio guiada y libre', 'Alta quema de calorías', 'Fuerza y resistencia'],
      color: 'electric-yellow'
    },
    {
      icon: <Bike className="h-12 w-12 text-electric-indigo" />,
      title: 'Ciclo indoor',
      description: 'Preparados para disfrutar de la mejor música pedaleando??? Experimenta la sensación de rodar con nosotros !!🚴🏼Clases vibrantes, motivantes y llenas de energía',
      features: ['Motivación y energía constante', 'Alta quema de calorías', 'Reducción del extres y mejora el animo'],
      color: 'electric-yellow'
    }
  ];

  const amenities = [
    { icon: <ShowerHead className="h-8 w-8 text-electric-blue" />, label: 'Duchas' },
    { icon: <Lock className="h-8 w-8 text-electric-green" />, label: 'Taquillas' },
    { icon: <img src="/sauna.png" alt="Sauna" className="h-8 w-8 rounded-full object-cover" />, label: 'Sauna' },
    { icon: <Wifi className="h-8 w-8 text-electric-red" />, label: 'Wifi gratis' },
    { icon: <Coffee className="h-8 w-8 text-electric-orange" />, label: 'Máquinas Vending' },
    {
      icon: (
        <div className="bg-gray-50 dark:bg-dark-bg p-1 rounded-full shadow-md">
          <img src="/wellhub-logo.png" alt="Wellhub" className="h-9 w-9 object-contain rounded-full" />
        </div>
      ),
      label: 'Wellhub (Gympass)'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Nuestros <span className="text-electric-blue">Servicios</span>
          </h2>

          {/* BLOQUE NUEVO DE AMENITIES */}
          <div className="flex justify-center flex-wrap gap-10 mb-8">
            {amenities.map((amenity, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="bg-gray-50 dark:bg-dark-bg p-3 rounded-full shadow-md">
                  {amenity.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">{amenity.label}</span>
              </div>
            ))}
          </div>

<div className="my-12">
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
    Nuestras <span className="text-electric-blue">Instalaciones</span>
  </h3>
  <Swiper
    modules={[Navigation, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    autoplay={{ delay: 3000 }}
    loop
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
  >
    {['/imgs/IMG-20250806-WA0017.jpg', '/imgs/IMG-20250806-WA0018.jpg','/imgs/IMG-20250806-WA0008.jpg','/imgs/IMG-20250806-WA0007.jpg','/imgs/IMG-20250806-WA0006.jpg','/imgs/IMG-20250806-WA0005.jpg', '/imgs/IMG-20250806-WA0016.jpg','/imgs/IMG-20250806-WA0015.jpg','/imgs/IMG-20250806-WA0014.jpg','/imgs/IMG-20250806-WA0013.jpg','/imgs/IMG-20250806-WA0012.jpg','/imgs/IMG-20250806-WA0011.jpg','/imgs/IMG-20250806-WA0010.jpg','/imgs/IMG-20250806-WA0009.jpg'].map((src, index) => (
      <SwiperSlide key={index}>
        <img
          src={src}
          alt={`Instalación ${index + 1}`}
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>




          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestras <span className="text-electric-blue">Actividades</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-50 dark:bg-dark-bg rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-green/10 dark:from-electric-blue/20 dark:to-electric-green/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¿Listo para empezar?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete a nuestra comunidad y descubre todo lo que puedes lograr.💙
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-electric-blue hover:bg-electric-blue/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contáctanos
              </button>
              <button
                onClick={() => document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
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