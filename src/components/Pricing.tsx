import React from 'react';
import { DollarSign } from 'lucide-react';

const Pricing = () => {
  const plan = {
    color: 'electric-blue',
    icon: <DollarSign className="h-6 w-6" />,
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

        {/* Card completa con estilo mejorado */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-electric-blue to-electric-blue/60 shadow-lg hover:shadow-electric-blue/30 transition-all duration-300 hover:-translate-y-2">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-6">
              
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-electric-blue/10 dark:bg-electric-blue/20 rounded-full mb-4">
                  <div className="text-electric-blue">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Tarifas Gimnasio Bekdoosan
                </h3>
              </div>

              {/* Tabla de precios con efecto zebra */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300 border-collapse">
                  <tbody>
                    {[
                      ["Fitness (todos los días)", "41 € / mes"],
                      ["Ciclo Indoor", "40 € / mes"],
                      ["Yoga", "40 € / mes"],
                      ["TRX – Entrenamiento Funcional", "40 € / mes"],
                      ["Taekwondo Infantil (4 a 8 años)", "41 € / mes"],
                      ["Taekwondo (9 a 13 años)", "44 € / mes"],
                      ["Taekwondo (14 años en adelante)", "48 € / mes"],
                      ["Kick Boxing", "48 € / mes"],
                      ["Jiu Jitsu", "48 € / mes"],
                      ["Todo incluido", "49,50 € / mes"],
                      ["Todo incluido (con 1 Arte Marcial)", "56 € / mes"],
                      ["Todo incluido (todas las actividades)", "59 € / mes"],
                      ["Bono 10 pases (3 meses)", "45 €"],
                      ["Pase de un día", "8 €"]
                    ].map(([actividad, precio], i) => (
                      <tr 
                        key={i} 
                        className={`${i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''} border-b border-gray-200 dark:border-gray-700`}
                      >
                        <td className="py-2 pr-4">{actividad}</td>
                        <td className="py-2 font-semibold text-electric-blue">{precio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Descuentos */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Descuentos (no acumulables):</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Mayores de 65 años → 10%</li>
                  <li>Descuento familiar (3 o más personas) → 10%</li>
                  <li>Pago Trimestral → 5%</li>
                  <li>Pago Semestral → 10%</li>
                  <li>Pago Anual → 20%</li>
                </ul>
              </div>

              {/* Bloque destacado con degradado */}
              <div className="bg-gradient-to-r from-electric-blue to-electric-blue/70 text-white font-semibold text-center p-4 rounded-lg shadow-md">
                <p>Sauna incluida todos los días</p>
                <p>Uso obligatorio de toalla en todas las salas</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
