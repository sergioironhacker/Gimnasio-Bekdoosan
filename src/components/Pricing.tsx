import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
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
      popular: false
    },
    {
      name: 'Trimestral',
      price: '114,00',
      period: '3 meses',
      description: 'Ideal para establecer una rutina',
      features: [
        'Acceso completo al gimnasio',
        'Todas las clases grupales',
        'Uso de todas las instalaciones',
        'Seguimiento personalizado',
        'Descuento del 5%'
      ],
      color: 'electric-green',
      icon: <Star className="h-6 w-6" />,
      popular: true,
      savings: 'Ahorra 6€'
    },
    {
      name: 'Semestral',
      price: '216,00',
      period: '6 meses',
      description: 'Compromiso serio con tu salud',
      features: [
        'Acceso completo al gimnasio',
        'Todas las clases grupales',
        'Uso de todas las instalaciones',
        'Plan de entrenamiento personalizado',
        'Descuento del 10%',
        'Evaluación física gratuita'
      ],
      color: 'electric-orange',
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      savings: 'Ahorra 24€'
    },
    {
      name: 'Anual',
      price: '384,00',
      period: '1 año',
      description: 'La mejor inversión en tu bienestar',
      features: [
        'Acceso completo al gimnasio',
        'Todas las clases grupales',
        'Uso de todas las instalaciones',
        'Entrenador personal (2 sesiones/mes)',
        'Descuento del 20%',
        'Evaluación física trimestral',
        'Acceso prioritario a eventos'
      ],
      color: 'electric-purple',
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      savings: 'Ahorra 96€'
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up ${
                plan.popular ? 'ring-2 ring-electric-green scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-electric-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              {plan.savings && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-electric-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {plan.savings}
                  </span>
                </div>
              )}

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
                    <Check className={`h-5 w-5 text-${plan.color} mr-3 mt-0.5 flex-shrink-0`} />
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
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-green/10 dark:from-electric-blue/20 dark:to-electric-green/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Tienes dudas sobre qué plan elegir?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Todos nuestros planes incluyen una clase de prueba gratuita. 
              Ven a conocer nuestras instalaciones y encuentra el plan perfecto para ti.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-electric-blue hover:bg-electric-blue/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Clase de Prueba Gratis
              </button>
              <button
                onClick={() => {
                  const phoneNumber = '34921430151';
                  const message = encodeURIComponent('Hola, me gustaría información sobre las tarifas del gimnasio');
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                className="border-2 border-electric-green text-electric-green hover:bg-electric-green hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;