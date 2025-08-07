import React from 'react';
import { Zap } from 'lucide-react';

const Pricing = () => {
  const plan = {
    name: 'Mensual',
    price: '40,00',
    period: 'mes',
    description: 'Perfecto para probar nuestros servicios',
    features: [
      'Acceso completo al gimnasio',
      'Todas las clases grupales',
      'Uso de todas las instalaciones',
      'Asesoramiento inicial gratuito'
    ],
    color: 'electric-blue',
    icon: <Zap className="h-6 w-6" />,
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestras <span className="text-electric-blue">Tarifas</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus objetivos y presupuesto. 
            Todos incluyen acceso completo a nuestras instalaciones y clases.
          </p>
        </div>

        {/* Solo una tarjeta */}
        <div className="max-w-sm mx-auto">
          <div className={`relative bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-${plan.color}/10 dark:bg-${plan.color}/20 rounded-full mb-4`}>
                <div className={`text-${plan.color}`}>
                  {plan.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-2">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {plan.price}€
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">
                  / {plan.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {plan.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <svg
                    className={`h-5 w-5 text-${plan.color} mr-3 mt-0.5 flex-shrink-0`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`w-full bg-${plan.color} hover:bg-${plan.color}/80 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}
            >
              Elegir Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
