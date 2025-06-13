import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

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
      icon: <Clock className="h-8 w-8 text-electric-orange" />,
      title: 'Horarios',
      description: 'Amplios horarios adaptados a tu rutina diaria'
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestra Historia
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Fundado con la visión de crear un espacio donde el bienestar físico y mental 
              van de la mano, Bekdoosan ha crecido hasta convertirse en el gimnasio de 
              referencia en Segovia.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Ofrecemos una amplia variedad de disciplinas: desde entrenamientos funcionales 
              con TRX hasta artes marciales tradicionales como Taekwondo y Jiu Jitsu, 
              pasando por clases dinámicas de Ciclo Indoor y relajantes sesiones de Yoga.
            </p>
            <div className="bg-electric-blue/10 dark:bg-electric-blue/20 p-4 rounded-lg border-l-4 border-electric-blue">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                "Nuestro compromiso es ayudarte a alcanzar tu mejor versión, 
                independientemente de tu nivel o experiencia previa."
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