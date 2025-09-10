import React, { useState } from 'react';
import { Clock, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleData: Record<string, { time: string; activity: string; type: string; icon: string }[]> = {
    LUNES: [
      { time: '9:15', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '10:15', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '10:15', activity: 'YOGA', type: '', icon: '🧘🏼' },
      { time: '17:30', activity: 'TAEKWONDO', type: 'INFANTIL', icon: '🥋' },
      { time: '18:45', activity: 'TAEKWONDO', type: 'ALEVIN', icon: '🥋' },
      { time: '20:00', activity: 'TAEKWONDO', type: 'ADULTOS', icon: '🥋' },
      { time: '21:00', activity: 'JIU JITSU', type: '', icon: '🤼' }
    ],
    MARTES: [
      { time: '16:45', activity: 'YOGA', type: '', icon: '🧘🏼' },
      { time: '18:45', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '19:00', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '20:00', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '20:15', activity: 'KICK BOXING', type: '', icon: '🥊' },
      { time: '21:15', activity: 'TAEKWONDO', type: 'COMPETICION', icon: '🥋' }
    ],
    MIERCOLES: [
      { time: '9:15', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '10:15', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '10:15', activity: 'YOGA', type: '', icon: '🧘🏼' },
      { time: '17:30', activity: 'TAEKWONDO', type: 'INFANTIL', icon: '🥋' },
      { time: '18:45', activity: 'TAEKWONDO', type: 'ALEVIN', icon: '🥋' },
      { time: '20:00', activity: 'TAEKWONDO', type: 'ADULTOS', icon: '🥋' },
      { time: '21:00', activity: 'JIU JITSU', type: '', icon: '🤼' }
    ],
    JUEVES: [
      { time: '16:45', activity: 'YOGA', type: '', icon: '🧘🏼' },
      { time: '18:45', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '19:00', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '20:00', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '20:15', activity: 'KICK BOXING', type: '', icon: '🥊' },
      { time: '21:15', activity: 'TAEKWONDO', type: 'COMPETICION', icon: '🥋' }
    ],
    VIERNES: [
      { time: '9:15', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '10:15', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '17:30', activity: 'TAEKWONDO', type: 'INFANTIL', icon: '🥋' },
      { time: '18:45', activity: 'TAEKWONDO', type: 'ALEVIN', icon: '🥋' }
    ],
    SABADO: [{ time: '10:30', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' }]
  };

  const days = Object.keys(scheduleData);
  const [activeDay, setActiveDay] = useState(days[0]);

  return (
    <section id="schedule" className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-surface dark:to-dark-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Horario de <span className="text-electric-blue">Actividades</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre nuestras clases y encuentra el horario perfecto para ti.
          </p>
        </motion.div>

        {/* Tabs por día */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeDay === day
                  ? 'bg-electric-blue text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-surface'
                }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Lista de actividades */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {scheduleData[activeDay].map((activity, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-dark-card rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{activity.icon}</span>
                <span className="text-sm font-bold text-electric-green">{activity.time}</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{activity.activity}</div>
                {activity.type && (
                  <div className="text-xs text-gray-600 dark:text-gray-400">{activity.type}</div>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Horario del gimnasio */}
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-surface dark:to-dark-card rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            <Clock className="inline-block mr-2 h-6 w-6 text-electric-blue" />
            Horario del Gimnasio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg text-center">
              <h4 className="text-lg font-semibold text-electric-blue mb-2">Días Laborales</h4>
              <p className="text-xl font-bold text-gray-900 dark:text-white">08:30 - 22:30</p>
              <p className="text-gray-600 dark:text-gray-300">Lunes a Viernes</p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg text-center">
              <h4 className="text-lg font-semibold text-electric-orange mb-2">Sábados</h4>
              <p className="text-xl font-bold text-gray-900 dark:text-white">10:00 - 14:30</p>
              <p className="text-gray-600 dark:text-gray-300">Fin de semana</p>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-gray-900 dark:bg-dark-card rounded-2xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <MapPin className="h-8 w-8 text-electric-blue mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Dirección</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                C/ Antonio Coronel 16<br />40003 Segovia
              </p>
            </div>
            <div>
              <Phone className="h-8 w-8 text-electric-green mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Teléfono</h4>
              <p className="text-sm text-gray-300">921 430 151</p>
            </div>
            <div>
              <Mail className="h-8 w-8 text-electric-orange mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-sm text-gray-300">bekdoosan@bekdoosan.com</p>
            </div>
            <div>
              <div className="flex justify-center space-x-4 mb-3">
                <Instagram className="h-6 w-6 text-electric-purple hover:scale-110 transition-transform" />
                <Facebook className="h-6 w-6 text-electric-red hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-semibold mb-2">Síguenos</h4>
              <p className="text-sm text-gray-300">@bekdoosan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
