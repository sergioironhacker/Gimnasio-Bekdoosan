import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarDays } from 'lucide-react';

const generalSchedule = [
  { day: "Lunes a Viernes", hours: "8:30 - 22:30" },
  { day: "Sábados", hours: "10:00 - 14:30" },
  { day: "Domingos", hours: "Cerrado" }
];

const summerSchedule = [
    { day: "Lunes", time: "08:30 - 14:00", activity: "Fitness" },
    { day: "Lunes", time: "09:15 - 10:00", activity: "TRX Entrenamiento Funcional" },
    { day: "Lunes", time: "10:15 - 11:00", activity: "Ciclo Indoor" },
    { day: "Lunes", time: "17:00 - 22:30", activity: "Fitness" },
    { day: "Lunes", time: "20:30 - 21:15", activity: "Jiu Jitsu" },

    { day: "Martes", time: "08:30 - 14:00", activity: "Fitness" },
    { day: "Martes", time: "09:15 - 10:00", activity: "TRX Entrenamiento Funcional" },
    { day: "Martes", time: "17:00 - 22:30", activity: "Fitness" },
    { day: "Martes", time: "19:00 - 19:45", activity: "TRX Entrenamiento Funcional" },
    { day: "Martes", time: "20:00 - 20:45", activity: "Ciclo Indoor" },
    { day: "Martes", time: "20:45 - 21:30", activity: "Kick Boxing" },

    { day: "Miércoles", time: "08:30 - 14:00", activity: "Fitness" },
    { day: "Miércoles", time: "09:15 - 10:00", activity: "TRX Entrenamiento Funcional" },
    { day: "Miércoles", time: "10:15 - 11:00", activity: "Ciclo Indoor" },
    { day: "Miércoles", time: "17:00 - 22:30", activity: "Fitness" },
    { day: "Miércoles", time: "20:30 - 21:15", activity: "Jiu Jitsu" },

    { day: "Jueves", time: "08:30 - 14:00", activity: "Fitness" },
    { day: "Jueves", time: "09:15 - 10:00", activity: "TRX Entrenamiento Funcional" },
    { day: "Jueves", time: "17:00 - 22:30", activity: "Fitness" },
    { day: "Jueves", time: "19:00 - 19:45", activity: "TRX Entrenamiento Funcional" },
    { day: "Jueves", time: "20:00 - 20:45", activity: "Ciclo Indoor" },
    { day: "Jueves", time: "20:45 - 21:30", activity: "Kick Boxing" },
    
    { day: "Viernes", time: "08:30 - 14:00", activity: "Fitness" },
    { day: "Viernes", time: "09:15 - 10:00", activity: "TRX Entrenamiento Funcional" },
    { day: "Viernes", time: "10:15 - 11:00", activity: "Ciclo Indoor" },
    { day: "Viernes", time: "17:00 - 22:30", activity: "Fitness" },
    
    { day: "Sábado", time: "10:00 - 14:30", activity: "Fitness" },
    { day: "Sábado", time: "10:30 - 11:15", activity: "TRX Entrenamiento Funcional" },

    { day: "Domingo", time: "", activity: "Cerrado" },
];


const SchedulesSection = () => {
  return (
    <section id="horarios" className="section-padding bg-pastel-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-4">
            Nuestros <span className="text-gradient-pastel">Horarios</span>
          </h2>
          <p className="text-xl text-pastel-gray max-w-3xl mx-auto">
            Encuentra el momento perfecto para entrenar. ¡Te esperamos!
          </p>
        </motion.div>

        <div className="mb-12 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center mb-6">
                 <Clock className="text-pastel-pink mr-3" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold text-pastel-gray-dark text-center">Horario General del Gimnasio</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {generalSchedule.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-pastel-lila-light/50 p-4 rounded-lg"
                    >
                        <p className="font-semibold text-lg text-pastel-gray-dark">{item.day}</p>
                        <p className="text-pastel-mint text-xl font-bold">{item.hours}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center mb-10">
                <CalendarDays className="text-pastel-pink mr-3" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold text-pastel-gray-dark text-center">Horario de Verano - Clases Dirigidas</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-max text-left border-collapse">
                    <thead>
                        <tr className="bg-pastel-lila-light/50">
                            <th className="p-3 text-sm font-semibold text-pastel-gray-dark border-b border-pastel-gray-light">Día</th>
                            <th className="p-3 text-sm font-semibold text-pastel-gray-dark border-b border-pastel-gray-light">Hora</th>
                            <th className="p-3 text-sm font-semibold text-pastel-gray-dark border-b border-pastel-gray-light">Actividad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {summerSchedule.map((item, index) => (
                            <motion.tr 
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                viewport={{ once: true }}
                                className="hover:bg-pastel-lila-light/20 transition-colors"
                            >
                                <td className="p-3 text-pastel-gray border-b border-pastel-gray-light">{item.day}</td>
                                <td className="p-3 text-pastel-gray border-b border-pastel-gray-light">{item.time}</td>
                                <td className="p-3 text-pastel-gray border-b border-pastel-gray-light">{item.activity}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulesSection;