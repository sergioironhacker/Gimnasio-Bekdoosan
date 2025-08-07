import React from 'react';
import { Users, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-electric-blue" />,
      title: 'Comunidad',
      description: 'Más de 500 alumnos forman nuestra gran familia deportiva'
    },
    {
      icon: <Award className="h-8 w-8 text-electric-green" />,
      title: 'Experiencia',
      description: 'Más de 30 años formando campeones en artes marciales'
    },
    {
      icon: <Heart className="h-8 w-8 text-electric-red" />,
      title: 'Pasión',
      description: 'Instructores profesionales apasionados por enseñar'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre <span className="text-electric-blue">Bekdoosan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            En el corazón de Segovia, Bekdoosan es mucho más que un gimnasio. 
            Somos tu centro de transformación personal, donde el fitness y las artes marciales 
            se combinan para crear una experiencia única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
                Centro Deportivo <span className="text-electric-blue">Bekdoosan</span>
              </h3>
            </div>

            <img
              src="/Imagen de WhatsApp 2025-08-07 a las 11.01.17_4db498ce.jpg"
              alt="Motivación en el gimnasio"
              className="rounded-lg shadow-lg mb-6 w-full object-cover"
            />

            <div className="bg-white dark:bg-dark-card p-6 rounded-xl border-2 border-electric-blue text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <p
                className="text-gray-800 dark:text-white text-xl md:text-3xl leading-snug italic"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                "Haz que cada entrenamiento cuente"
              </p>
              <p
                className="mt-4 text-2xl md:text-4xl font-bold text-electric-blue tracking-wide italic"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                ¡Te esperamos!
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <img
              src="/bekhero.jpg"
              alt="Interior del gimnasio Bekdoosan"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
