import React from 'react';
import { Users, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-electric-blue" />,
      title: 'Comunidad',
      description: 'Más de 500 alumnos forman nuestra gran familia deportiva.'
    },
    {
      icon: <Award className="h-10 w-10 text-electric-green" />,
      title: 'Experiencia',
      description: 'Más de 30 años formando campeones en artes marciales.'
    },
    {
      icon: <Heart className="h-10 w-10 text-electric-red" />,
      title: 'Pasión',
      description: 'Instructores profesionales apasionados por enseñar.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-surface dark:to-dark-card overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Sobre <span className="text-electric-blue">Bekdoosan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            En el corazón de Segovia, Bekdoosan es mucho más que un gimnasio. Somos un centro de transformación personal, donde el fitness y las artes marciales se combinan para crear una experiencia única.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-dark-card p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-electric-blue/10 to-electric-blue/30 dark:from-electric-blue/20 dark:to-electric-blue/10">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content with images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Centro Deportivo <span className="text-electric-blue">Bekdoosan</span>
            </h3>

            <motion.img
              src="/Imagen de WhatsApp 2025-08-07 a las 11.01.17_4db498ce.jpg"
              alt="Motivación en el gimnasio"
              className="rounded-2xl shadow-xl mb-10 w-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            <div className="bg-gradient-to-r from-electric-blue/10 to-transparent dark:from-electric-blue/20 dark:to-transparent p-8 rounded-xl border-l-4 border-electric-blue shadow-md">
              <p
                className="text-gray-800 dark:text-white text-xl md:text-2xl leading-relaxed italic mb-4"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                "Haz que cada entrenamiento cuente"
              </p>
              <p
                className="text-2xl md:text-3xl font-bold text-electric-blue tracking-wide"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                ¡Te esperamos!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/bekhero.jpg"
              alt="Interior del gimnasio Bekdoosan"
              className="rounded-3xl shadow-2xl w-full h-auto"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;