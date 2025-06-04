
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarDays, Sparkles, Zap, Shield, Users, Sun, Moon, Coffee, Wind, HeartPulse, Bone } from 'lucide-react';

const generalSchedule = [
  { day: "Lunes a Viernes", hours: "8:30 - 22:30" },
  { day: "Sábados", hours: "10:00 - 14:30" },
  { day: "Domingos", hours: "Cerrado" }
];

const classScheduleData = {
  Lunes: [
    { time: "9:15", name: "TRX Entrenamiento funcional", icon: Zap, color: "text-pastel-blue-light-dark" },
    { time: "10:15", name: "Ciclo Indoor", icon: Sun, color: "text-pastel-pink-dark" },
    { time: "10:15", name: "Yoga", icon: Users, color: "text-pastel-mint-dark" },
    { time: "17:30", name: "Taekwondo Infantil", icon: Shield, color: "text-red-500" },
    { time: "18:45", name: "Taekwondo Alevín", icon: Shield, color: "text-red-600" },
    { time: "20:00", name: "Taekwondo Adultos", icon: Shield, color: "text-red-700" },
    { time: "21:00", name: "Jiu Jitsu", icon: Bone, color: "text-purple-600" },
  ],
  Martes: [
    { time: "16:45", name: "Yoga", icon: Users, color: "text-pastel-mint-dark" },
    { time: "19:00", name: "TRX Entrenamiento funcional", icon: Zap, color: "text-pastel-blue-light-dark" },
    { time: "18:45", name: "Ciclo Indoor", icon: Sun, color: "text-pastel-pink-dark" },
    { time: "20:00", name: "Ciclo Indoor", icon: Sun, color: "text-pastel-pink-dark" },
    { time: "20:15", name: "Kick Boxing", icon: HeartPulse, color: "text-orange-500" },
    { time: "21:15", name: "Taekwondo Competición", icon: Shield, color: "text-red-700" },
  ],
  Miércoles: [
    { time: "9:15", name: "TRX Entrenamiento funcional", icon: Zap, color: "text-pastel-blue-light-dark" },
    { time: "10:15", name: "Ciclo Indoor", icon: Sun, color: "text-pastel-pink-dark" },
    { time: "10:15", name: "Yoga", icon: Users, color: "text-pastel-mint-dark" },
    { time: "17:30", name: "Taekwondo Infantil", icon: Shield, color: "text-red-500" },
    { time: "18:45", name: "Taekwondo Alevín", icon: Shield, color: "text-red-600" },
    { time: "20:00", name: "Taekwondo Adultos", icon: Shield, color: "text-red-700" },
    { time: "21:00", name: "Jiu Jitsu", icon: Bone, color: "text-purple-600" },
  ],
  Jueves: [
    { time: "16:45", name: "Yoga", icon: Users, color: "text-pastel-mint-dark" },
    { time: "19:00", name: "TRX Entrenamiento funcional", icon: Zap, color: "text-pastel-blue-light-dark" },
    { time: "18:45", name: "Ciclo Indoor", icon: Sun, color: "text-pastel-pink-dark" },
    { time: "20:00", name: "Ciclo Indoor", icon: Sun, color: "text-pastel-pink-dark" },
    { time: "20:15", name: "Kick Boxing", icon: HeartPulse, color: "text-orange-500" },
    { time: "21:15", name: "Taekwondo Competición", icon: Shield, color: "text-red-700" },
  ],
  Viernes: [
    { time: "9:15", name: "TRX Entrenamiento funcional", icon: Zap, color: "text-pastel-blue-light-dark" },
    { time: "10:15", name: "Ciclo Indoor", icon: Sun, color: "text-pastel-pink-dark" },
    { time: "17:30", name: "Taekwondo Infantil", icon: Shield, color: "text-red-500" },
    { time: "18:45", name: "Taekwondo Alevín", icon: Shield, color: "text-red-600" },
  ],
  Sábado: [
     { time: "10:30", name: "TRX Entrenamiento funcional", icon: Zap, color: "text-pastel-blue-light-dark" },
  ],
};

const DayColumn = ({ day, classes }) => (
  <div className="flex flex-col min-w-[280px] sm:min-w-[200px] md:min-w-0">
    <div className="text-center py-3 bg-pastel-mint/60 rounded-t-lg">
      <h4 className="font-semibold text-base sm:text-lg text-pastel-gray-dark">{day}</h4>
    </div>
    <div className="flex-grow p-2 sm:p-3 bg-white/70 space-y-2 rounded-b-lg min-h-[200px]">
      {classes.length > 0 ? classes.map((cls, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          className={`p-2 sm:p-2.5 rounded-md shadow-sm hover:shadow-md transition-shadow ${cls.color.replace('text-', 'bg-').replace('-dark','/20').replace('-light','/20')}`}
        >
          <div className="flex items-center">
            <cls.icon size={16} className={`mr-1.5 sm:mr-2 ${cls.color}`} />
            <span className={`font-medium text-sm ${cls.color}`}>{cls.time}</span>
          </div>
          <p className="text-sm text-pastel-gray-dark ml-0.5 mt-0.5 leading-tight">{cls.name}</p>
        </motion.div>
      )) : (
        <div className="text-center py-10 flex flex-col items-center justify-center h-full">
          <Coffee size={20} className="mx-auto text-pastel-gray/70" />
          <p className="text-sm text-pastel-gray/80 mt-1">Descanso</p>
        </div>
      )}
    </div>
  </div>
);

const SchedulesSection = () => {
  const daysOrder = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  return (
    <section id="horarios" className="section-padding bg-pastel-lila-light/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-gray-dark mb-3 sm:mb-4">
            Nuestros <span className="text-gradient-pastel">Horarios</span>
          </h2>
          <p className="text-lg sm:text-xl text-pastel-gray max-w-2xl sm:max-w-3xl mx-auto">
            Encuentra el momento perfecto para entrenar y unirte a nuestras clases. ¡Te esperamos!
          </p>
        </motion.div>

        <div className="mb-12 sm:mb-16 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Clock className="text-pastel-pink mr-2 sm:mr-3" size={28} />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-pastel-gray-dark text-center">
              Horario General del Gimnasio
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            {generalSchedule.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-pastel-lila-light/50 p-3 sm:p-4 rounded-lg hover-lift"
              >
                <p className="font-semibold text-md sm:text-lg text-pastel-gray-dark">{item.day}</p>
                <p className="text-pastel-mint-dark text-lg sm:text-xl font-bold">{item.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pastel-blue-light/70 via-pastel-beige to-pastel-pink/30 rounded-3xl shadow-2xl p-3 sm:p-5 md:p-6"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 shadow-inner">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left mb-6 sm:mb-8">
              <CalendarDays className="text-pastel-pink-dark mr-0 sm:mr-3 mb-2 sm:mb-0" size={32} />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pastel-gray-dark">
                Clases Dirigidas Semanales
              </h3>
              <Sparkles className="text-pastel-pink-dark ml-0 sm:ml-2 mt-1 sm:mt-0" size={24} />
            </div>
            
            <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
              <div className="inline-flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {daysOrder.map(day => (
                  <DayColumn key={day} day={day} classes={classScheduleData[day] || []} />
                ))}
              </div>
            </div>

            <p className="text-center mt-8 sm:mt-10 text-sm sm:text-base text-pastel-gray font-medium">
              Horario sujeto a cambios. Para la info más actualizada, consulta nuestra App <strong className="text-pastel-pink-dark hover:underline cursor-pointer">WodBuster</strong> o pregunta en recepción.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchedulesSection;