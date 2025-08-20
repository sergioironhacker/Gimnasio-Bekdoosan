import React, { useState, useEffect } from 'react';
import { DollarSign, Maximize2, X } from 'lucide-react';

const Pricing = () => {
  const [open, setOpen] = useState(false);

  const plan = {
    color: 'electric-blue',
    icon: <DollarSign className="h-6 w-6" />,
  };

  const tarifas = [
    ["Fitness (todos los días)", "41 € / mes"],
    ["Ciclo Indoor", "40 € / mes"],
    ["Yoga", "40 € / mes"],
    ["TRX – Entrenamiento Funcional", "40 € / mes"],
    ["Todo incluido (sin artes marciales)", "49,50 € / mes"],
    ["Taekwondo infantil (4 a 8 años)", "41 € / mes"],
    ["Taekwondo alevín (9 a 13 años)", "44 € / mes"],
    ["Taekwondo adultos (14 años en adelante)", "48 € / mes"],
    ["Jiu Jitsu", "48 € / mes"],
    ["Kick Boxing", "48 € / mes"],
    ["Todo incluido (con un Arte Marcial)", "56 € / mes"],
    ["Todo incluido (Todas las actividades)", "59 € / mes"],
    ["Bono 10 pases (Caducidad 3 meses)", "45 €"],
    ["Pase de un día", "8 €"],
  ];

  const descuentos = [
    ["Mayores de 65 años", "10%"],
    ["Descuento familiar (3 o más personas)", "10%"],
    ["Pago Trimestral", "5%"],
    ["Pago Semestral", "10%"],
    ["Pago Anual", "20%"],
  ];

  // 👉 Cerrar modal con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

        {/* Card principal */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-electric-blue to-electric-blue/60 shadow-lg hover:shadow-electric-blue/30 transition-all duration-300 hover:-translate-y-2">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-6">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-center flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-electric-blue/10 dark:bg-electric-blue/20 rounded-full mb-4">
                    <div className="text-electric-blue">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Tarifas Gimnasio Bekdoosan
                  </h3>
                </div>
                <button 
                  onClick={() => setOpen(true)} 
                  className="p-2 text-electric-blue hover:bg-electric-blue/10 rounded-full transition"
                >
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>

              {/* Tabla de tarifas */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300 border-collapse">
                  <tbody>
                    {tarifas.map(([actividad, precio], i) => (
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

              {/* Descuentos mejorados (una sola línea) */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Descuentos (no acumulables):</h4>
                <div className="space-y-2">
                  {descuentos.map(([titulo, valor], i) => (
                    <div 
                      key={i} 
                      className="flex justify-between text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-1"
                    >
                      <span>{titulo}</span>
                      <span className="font-semibold text-electric-blue">{valor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloque destacado */}
              <div className="bg-gradient-to-r from-electric-blue to-electric-blue/70 text-white font-semibold text-center p-4 rounded-lg shadow-md">
                <p>Sauna incluida todos los días</p>
                <p>Uso obligatorio de toalla en todas las salas</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Modal de tabla ampliada */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)} // 👉 cerrar clicando fuera
        >
          <div 
            className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl w-full max-w-4xl p-6 relative"
            onClick={(e) => e.stopPropagation()} // 👉 evitar cierre al hacer clic dentro
          >
            <button 
              onClick={() => setOpen(false)} 
              className="absolute top-4 right-4 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Tarifas Gimnasio Bekdoosan (Vista ampliada)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-base text-left text-gray-600 dark:text-gray-300 border-collapse">
                <tbody>
                  {tarifas.map(([actividad, precio], i) => (
                    <tr 
                      key={i} 
                      className={`${i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''} border-b border-gray-200 dark:border-gray-700`}
                    >
                      <td className="py-3 pr-6">{actividad}</td>
                      <td className="py-3 font-semibold text-electric-blue">{precio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
