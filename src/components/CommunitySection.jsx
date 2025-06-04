import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, MessageSquare, Award, Sparkles, TrendingUp } from 'lucide-react';

const communityFeatures = [
  {
    icon: Users,
    title: "Familia Bekdoosan",
    description: "Más que un gimnasio, somos una comunidad que se apoya y motiva mutuamente para alcanzar metas.",
    color: "text-pastel-pink"
  },
  {
    icon: Heart,
    title: "Ambiente Positivo",
    description: "Entrena en un espacio acogedor, respetuoso y lleno de energía positiva donde te sentirás como en casa.",
    color: "text-pastel-mint"
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Conjunto",
    description: "Celebramos cada logro, grande o pequeño. ¡Juntos somos imparables y crecemos cada día!",
    color: "text-pastel-blue-light-dark"
  },
  {
    icon: Award,
    title: "Eventos y Retos",
    description: "Participa en nuestros eventos especiales, retos motivadores y actividades para fortalecer lazos.",
    color: "text-yellow-500"
  }
];

const testimonials = [
  {
    id: 'testimonial1',
    quote: "Desde que me uní a Bekdoosan, no solo he transformado mi físico, ¡sino también mi mentalidad! El ambiente es increíble.",
    name: "Laura G.",
    role: "Miembro Activa",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60"
  },
  {
    id: 'testimonial2',
    quote: "Los entrenadores son súper profesionales y la comunidad te hace sentir parte de algo grande. ¡Recomendado 100%!",
    name: "Carlos S.",
    role: "Entusiasta del Fitness",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60"
  },
  {
    id: 'testimonial3',
    quote: "Nunca pensé que disfrutaría tanto ir al gimnasio. Bekdoosan cambió mi perspectiva. ¡Gracias!",
    name: "Ana P.",
    role: "Amante del Bienestar",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NVx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60"
  }
];

const CommunitySection = () => {
  return (
    <section id="comunidad" className="section-padding bg-pastel-beige overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-3 sm:mb-4">
            Únete a Nuestra <span className="text-gradient-pastel">Comunidad</span>
          </h2>
          <p className="text-lg sm:text-xl text-pastel-gray max-w-2xl sm:max-w-3xl mx-auto">
            Descubre por qué Bekdoosan es más que un gimnasio: es un lugar para crecer, conectar y superarte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift flex items-start space-x-4"
            >
              <div className={`p-3 rounded-full bg-opacity-20 ${feature.color.replace('text-', 'bg-')}`}>
                <feature.icon size={28} className={feature.color} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-pastel-gray-dark mb-2">{feature.title}</h3>
                <p className="text-pastel-gray text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-pastel-gray-dark mb-8 sm:mb-12">
            Lo que <span className="text-gradient-pastel">Dicen Nuestros Miembros</span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pastel-lila-light/50 to-pastel-blue-light/30 rounded-2xl p-6 sm:p-8 shadow-xl relative"
              >
                <MessageSquare size={36} className="absolute top-4 right-4 text-pastel-pink opacity-20" />
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4 ring-2 ring-pastel-pink/70 p-0.5"
                    src={testimonial.avatar}
                    alt={`Avatar de ${testimonial.name}`}
                  />
                  <div>
                    <h4 className="text-md sm:text-lg font-bold text-pastel-gray-dark">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-pastel-mint-dark font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-pastel-gray text-sm sm:text-base italic leading-relaxed">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 text-center"
        >
            <img
                src="https://images.unsplash.com/photo-1574680096145-f846b5a6abc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Grupo de personas sonriendo y entrenando juntas en Gimnasio Bekdoosan"
                className="w-full max-w-3xl mx-auto h-auto rounded-2xl shadow-2xl object-cover"
            />
            <p className="mt-6 text-lg sm:text-xl text-pastel-gray-dark font-semibold">
                ¡Forma parte de algo más grande, forma parte de Bekdoosan! <Sparkles size={22} className="inline text-yellow-400 ml-1" />
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CommunitySection;