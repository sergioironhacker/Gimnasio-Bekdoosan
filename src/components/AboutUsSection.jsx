import React from 'react';
import { motion } from 'framer-motion';

const teamData = [
  {
    id: 'trainer1',
    imgSrc: "/imgs/1554542899025.jpg",
    alt: "Entrenador personal sonriente en el gimnasio",
    name: "Edu Baeza",
    role: "Experto en biceps",
    description: "Con más de 15 años de experiencia, Edu te guiará para superar tus límites y alcanzar tus metas de fuerza y condición física."
  },
  {
    id: 'trainer2',
    imgSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    alt: "Instructora de yoga y pilates en pose",
    name: "Rosa",
    role: "Instructora de Bienestar",
    description: "Experta en Yoga, Pilates y TRX. Sofía te ayudará a encontrar el equilibrio entre cuerpo y mente con clases dinámicas y revitalizantes."
  },
  {
    id: 'trainer3',
    imgSrc: "/imgs/images.jpg",
    alt: "Especialista en artes marciales y nutrición",
    name: "Eutimio",
    role: "Artes Marciales y Nutrición",
    description: "Cinturón negro en Taekwondo y Jiu Jitsu, Eutimio combina su pasión por las artes marciales con conocimientos en nutrición deportiva."
  }
];

const AboutUsSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-pastel-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-3 sm:mb-4">
            Sobre <span className="text-gradient-pastel">Nosotros</span>
          </h2>
          <p className="text-lg sm:text-xl text-pastel-gray max-w-2xl sm:max-w-3xl mx-auto">
            Conoce nuestra filosofía y al equipo que te ayudará a alcanzar tus objetivos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-pastel-gray-dark mb-4 sm:mb-6">Nuestra Filosofía</h3>
            <p className="text-md sm:text-lg text-pastel-gray mb-4 sm:mb-6">
              En Gimnasio Bekdoosan creemos que el fitness es más que ejercicio: es un estilo de vida.
              Ubicados en el corazón de Segovia, a solo 500 metros del histórico acueducto, ofrecemos
              un ambiente motivador y profesional donde cada persona puede alcanzar su máximo potencial.
            </p>
            <p className="text-md sm:text-lg text-pastel-gray mb-6 sm:mb-8">
              Nuestro compromiso es proporcionarte las mejores instalaciones, equipos de última generación
              y un equipo de profesionales altamente cualificados que te acompañarán en cada paso de tu
              transformación física y mental.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:justify-around space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pastel-mint">500+</div>
                <div className="text-pastel-gray text-sm sm:text-base">Miembros Activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pastel-mint">+ de 30</div>
                <div className="text-pastel-gray text-sm sm:text-base">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pastel-mint">Top</div>
                <div className="text-pastel-gray text-sm sm:text-base">Apoyo y Motivación</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <img  
              className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-xl"
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Interior del Gimnasio Bekdoosan con ambiente energético" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-pastel-gray-dark mb-8 sm:mb-12">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover-lift"
              >
                <img  
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-6 object-cover ring-2 ring-pastel-pink/50 p-0.5"
                  src={member.imgSrc}
                  alt={member.alt} />
                <h4 className="text-lg sm:text-xl font-bold text-pastel-gray-dark mb-1 sm:mb-2">{member.name}</h4>
                <p className="text-pastel-pink font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                <p className="text-pastel-gray text-xs sm:text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;