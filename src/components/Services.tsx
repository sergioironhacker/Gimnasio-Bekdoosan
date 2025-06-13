import React from 'react';
import { Zap, Target, Heart, Sword, Users, Award, Droplet, Lock, Wifi, Coffee, HeartHandshake, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-electric-blue" />,
      title: 'TRX Entrenamiento Funcional',
      description: 'Fortalece todo tu cuerpo con ejercicios de suspensión que mejoran tu fuerza, equilibrio y flexibilidad.',
      features: ['Ejercicios de cuerpo completo', 'Mejora la coordinación', 'Apto para todos los niveles'],
      color: 'electric-blue'
    },
    {
      icon: <Target className="h-12 w-12 text-electric-green" />,
      title: 'Ciclo Indoor',
      description: 'Quema calorías y mejora tu resistencia cardiovascular con nuestras intensas clases de spinning.',
      features: ['Alta quema de calorías', 'Música motivadora', 'Instructor especializado'],
      color: 'electric-green'
    },
    {
      icon: <Heart className="h-12 w-12 text-electric-purple" />,
      title: 'Yoga',
      description: 'Encuentra el equilibrio perfecto entre mente y cuerpo con nuestras clases de yoga.',
      features: ['Reduce el estrés', 'Mejora la flexibilidad', 'Fortalece el core'],
      color: 'electric-purple'
    },
    {
      icon: <Sword className="h-12 w-12 text-electric-red" />,
      title: 'Taekwondo',
      description: 'Arte marcial tradicional coreano que desarrolla disciplina, respeto y autodefensa.',
      features: ['Clases para todas las edades', 'Competición y recreativo', 'Cinturones oficiales'],
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
      icon: <Award className="h-12 w-12 text-electric-yellow" />,
      title: 'Kick Boxing',
      description: 'Combina técnicas de boxeo y patadas para un entrenamiento completo y liberador.',
      features: ['Entrenamiento de alta intensidad', 'Mejora la coordinación', 'Libera el estrés'],
      color: 'electric-yellow'
    }
  ];

  // Nuevo array para las instalaciones extra
  const amenities = [
    { icon: <Droplet className="h-8 w-8 text-electric-blue" />, label: 'Duchas' },
    { icon: <Lock className="h-8 w-8 text-electric-green" />, label: 'Taquillas' },
    { icon: <HeartHandshake className="h-8 w-8 text-electric-purple" />, label: 'Sauna' },
    { icon: <Wifi className="h-8 w-8 text-electric-red" />, label: 'Wifi gratis' },
    { icon: <Coffee className="h-8 w-8 text-electric-orange" />, label: 'Máquinas Vending' },
    { icon: <Activity className="h-8 w-8 text-electric-yellow" />, label: 'Wellhub (Gympass)' },
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

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestras <span className="text-electric-blue">Actividades</span>
          </h2>

          {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre todas las disciplinas que ofrecemos para ayudarte a alcanzar tus objetivos
          </p> */}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3 flex-shrink-0`} />
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete a nuestra comunidad y descubre todo lo que puedes lograr. 
              Ofrecemos clases de prueba gratuitas para que encuentres tu disciplina ideal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-electric-blue hover:bg-electric-blue/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Clase de Prueba Gratis
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
