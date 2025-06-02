import React from 'react';
import { motion } from 'framer-motion';

const teamData = [
  {
    imgSrc: "https://images.unsplash.com/photo-1657607545811-0aceb37aee1d",
    alt: "Entrenador personal especializado en musculación, estilo pastel",
    name: "Carlos Martínez",
    role: "Entrenador Personal",
    description: "Especialista en musculación y preparación física con más de 8 años de experiencia."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1682530675887-4b16a42e4e1e",
    alt: "Instructora de clases grupales sonriendo, ambiente pastel",
    name: "Ana García",
    role: "Instructora de Clases Grupales",
    description: "Experta en zumba, pilates y actividades grupales. Certificada en múltiples disciplinas."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1691917996877-7a56427c4642",
    alt: "Nutricionista deportivo profesional, entorno pastel",
    name: "Miguel Rodríguez",
    role: "Asesor Nutricional",
    description: "Nutricionista deportivo especializado en planes alimentarios para objetivos fitness."
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-4">
            Sobre <span className="text-gradient-pastel">Nosotros</span>
          </h2>
          <p className="text-xl text-pastel-gray max-w-3xl mx-auto">
            Conoce nuestra filosofía y al equipo que te ayudará a alcanzar tus objetivos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-pastel-gray-dark mb-6">Nuestra Filosofía</h3>
            <p className="text-lg text-pastel-gray mb-6">
              En Gimnasio Bekdoosan creemos que el fitness es más que ejercicio: es un estilo de vida.
              Ubicados en el corazón de Segovia, a solo 500 metros del histórico acueducto, ofrecemos
              un ambiente motivador y profesional donde cada persona puede alcanzar su máximo potencial.
            </p>
            <p className="text-lg text-pastel-gray mb-6">
              Nuestro compromiso es proporcionarte las mejores instalaciones, equipos de última generación
              y un equipo de profesionales altamente cualificados que te acompañarán en cada paso de tu
              transformación física y mental.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pastel-mint">500+</div>
                <div className="text-pastel-gray">Miembros Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pastel-mint">5+</div>
                <div className="text-pastel-gray">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pastel-mint">24/7</div>
                <div className="text-pastel-gray">Apoyo y Motivación</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img  
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
              src="https://images.unsplash.com/photo-1635863962988-25f3a34ea63a"
              alt="Equipo de entrenadores profesionales del gimnasio en tonos pastel" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-pastel-gray-dark mb-12">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover-lift"
              >
                <img  
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  src={member.imgSrc}
                  alt={member.alt} />
                <h4 className="text-xl font-bold text-pastel-gray-dark mb-2">{member.name}</h4>
                <p className="text-pastel-pink font-semibold mb-4">{member.role}</p>
                <p className="text-pastel-gray">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;