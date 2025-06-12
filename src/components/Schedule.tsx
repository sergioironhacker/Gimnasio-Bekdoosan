import React from 'react';
import { Clock, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Schedule = () => {
  // Horario basado en la imagen proporcionada
  const scheduleData = {
    'LUNES': [
      { time: '9:15', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '10:15', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '10:15', activity: 'YOGA', type: '', icon: '🧘🏼' },
      { time: '17:30', activity: 'TAEKWONDO', type: 'INFANTIL', icon: '🥋' },
      { time: '18:45', activity: 'TAEKWONDO', type: 'ALEVIN', icon: '🥋' },
      { time: '20:00', activity: 'TAEKWONDO', type: 'ADULTOS', icon: '🥋' },
      { time: '21:00', activity: 'JIU JITSU', type: '', icon: '🤼' }
    ],
    'MARTES': [
      { time: '16:45', activity: 'YOGA', type: '', icon: '🧘🏼' },
      { time: '18:45', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '19:00', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '20:00', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '20:15', activity: 'KICK BOXING', type: '', icon: '🥊' },
      { time: '21:15', activity: 'TAEKWONDO', type: 'COMPETICION', icon: '🥋' }
    ],
    'MIERCOLES': [
      { time: '9:15', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '10:15', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '10:15', activity: 'YOGA', type: '', icon: '🧘🏼' },
      { time: '17:30', activity: 'TAEKWONDO', type: 'INFANTIL', icon: '🥋' },
      { time: '18:45', activity: 'TAEKWONDO', type: 'ALEVIN', icon: '🥋' },
      { time: '20:00', activity: 'TAEKWONDO', type: 'ADULTOS', icon: '🥋' },
      { time: '21:00', activity: 'JIU JITSU', type: '', icon: '🤼' }
    ],
    'JUEVES': [
      { time: '16:45', activity: 'YOGA', type: '', icon: '🧘🏼' },
      { time: '18:45', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '19:00', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '20:00', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '20:15', activity: 'KICK BOXING', type: '', icon: '🥊' },
      { time: '21:15', activity: 'TAEKWONDO', type: 'COMPETICION', icon: '🥋' }
    ],
    'VIERNES': [
      { time: '9:15', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' },
      { time: '10:15', activity: 'CICLO INDOOR', type: '', icon: '🚴🏼' },
      { time: '17:30', activity: 'TAEKWONDO', type: 'INFANTIL', icon: '🥋' },
      { time: '18:45', activity: 'TAEKWONDO', type: 'ALEVIN', icon: '🥋' }
    ],
    'SABADO': [
      { time: '10:30', activity: 'TRX', type: 'Entrenamiento funcional', icon: '🏋🏼' }
    ]
  };

  const gymHours = {
    weekdays: 'LUNES A VIERNES: 08:30 a 22:30',
    saturday: 'SÁBADOS: 10:00 a 14:30'
  };

  return (
    <section id="schedule" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Horario de <span className="text-electric-blue">Actividades</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre nuestras clases y encuentra el horario perfecto para ti
          </p>
        </div>

        {/* Horario de Actividades */}
        <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="min-w-full">
              <div className="flex overflow-x-auto gap-4 lg:grid lg:grid-cols-6">
                {Object.entries(scheduleData).map(([day, activities]) => (
                  <div key={day} className="bg-white dark:bg-dark-card rounded-xl p-4 shadow-lg">
                    <h3 className="text-lg font-bold text-center mb-4 text-electric-blue">
                      {day}
                    </h3>
                    <div className="space-y-3">
                      {activities.map((activity, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3 hover:shadow-md transition-shadow duration-200">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-2xl">{activity.icon}</span>
                            <span className="text-sm font-semibold text-electric-green">
                              {activity.time}
                            </span>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium text-gray-900 dark:text-white">
                              {activity.activity}
                            </div>
                            {activity.type && (
                              <div className="text-gray-600 dark:text-gray-400 text-xs">
                                {activity.type}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horario del Gimnasio */}
        <div className="bg-gradient-to-r from-electric-blue/10 to-electric-green/10 dark:from-electric-blue/20 dark:to-electric-green/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            <Clock className="inline-block mr-2 h-6 w-6 text-electric-blue" />
            Horario del Gimnasio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-electric-blue mb-2">Días Laborales</h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">08:30 - 22:30</p>
              <p className="text-gray-600 dark:text-gray-300">Lunes a Viernes</p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-electric-orange mb-2">Sábados</h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">10:00 - 14:30</p>
              <p className="text-gray-600 dark:text-gray-300">Fin de semana</p>
            </div>
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="bg-gray-900 dark:bg-dark-card rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-electric-blue mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Dirección</h4>
              <p className="text-sm text-gray-300">C/ Antonio Coronel 16<br />40003 Segovia</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-electric-green mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Teléfono</h4>
              <p className="text-sm text-gray-300">921 430 151</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-electric-orange mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-sm text-gray-300">bekdoosan@bekdoosan.com</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center space-x-3 mb-3">
                <Instagram className="h-6 w-6 text-electric-purple" />
                <Facebook className="h-6 w-6 text-electric-red" />
              </div>
              <h4 className="font-semibold mb-2">Redes Sociales</h4>
              <p className="text-sm text-gray-300">@bekdoosan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;