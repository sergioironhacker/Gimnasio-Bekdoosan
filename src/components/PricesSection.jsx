import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';

const pricesData = [
  {
    type: "Plan Mensual",
    price: "48€",
    priceSuffix: "/mes",
    features: [
      "Acceso ilimitado a Fitness",
      "Clases dirigidas (Ciclo, TRX, Yoga)",
      "Acceso a App WodBuster",
      "Asesoramiento básico",
    ],
    popular: false,
  },
  {
    type: "Plan Trimestral",
    price: "135€",
    priceSuffix: "/trimestre",
    originalPrice: "144€",
    features: [
      "Todo lo del Plan Mensual",
      "Descuento especial",
      "Evaluación física inicial",
      "Plan de entrenamiento personalizado",
    ],
    popular: true,
  },
  {
    type: "Plan Anual",
    price: "460€",
    priceSuffix: "/año",
    originalPrice: "576€",
    features: [
      "Todo lo del Plan Trimestral",
      "Mayor ahorro anual",
      "2 sesiones de entrenador personal",
      "Seguimiento nutricional básico",
    ],
    popular: false,
  }
];

const PricesSection = ({ scrollToSection }) => {
  return (
    <section id="tarifas" className="section-padding bg-pastel-lila-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-4">
            Nuestras <span className="text-gradient-pastel">Tarifas</span>
          </h2>
          <p className="text-xl text-pastel-gray max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus metas y empieza tu transformación hoy mismo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricesData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col bg-white rounded-2xl shadow-xl p-8 hover-lift ${
                plan.popular ? 'ring-4 ring-pastel-pink scale-105' : 'ring-1 ring-pastel-gray-light'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pastel-pink text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <Star className="inline-block mr-1 h-4 w-4" /> Más Popular
                </div>
              )}

              <div className="text-center mb-8 flex-grow">
                <h3 className="text-2xl font-bold text-pastel-gray-dark mb-2">{plan.type}</h3>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold text-pastel-mint">{plan.price}</span>
                  <span className="text-md text-pastel-gray">{plan.priceSuffix}</span>
                </div>
                {plan.originalPrice && (
                    <p className="text-sm text-pastel-gray line-through mt-1">Precio original: {plan.originalPrice}</p>
                )}
                
                <ul className="space-y-3 my-6 text-left text-md">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="text-pastel-mint w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-pastel-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button
                className={`w-full mt-auto py-3 text-lg font-semibold ${
                  plan.popular
                    ? 'bg-pastel-pink hover:bg-pastel-pink-dark text-white shadow-md'
                    : 'bg-pastel-blue-light hover:bg-pastel-blue-light-dark text-pastel-gray-dark'
                }`}
                onClick={() => scrollToSection('contacto')}
              >
                Elegir Plan
              </Button>
            </motion.div>
          ))}
        </div>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-pastel-gray text-sm"
        >
            * Consulta en recepción por tarifas especiales para actividades específicas (Jiu Jitsu, Taekwondo, etc.) y bonos.
        </motion.p>
      </div>
    </section>
  );
};

export default PricesSection;