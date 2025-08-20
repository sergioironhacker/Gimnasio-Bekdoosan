import React from 'react';
import { Smartphone, Users, Star, Zap, Shield } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Apps = () => {
  const appFeatures = [
    {
      icon: <Zap className="h-6 w-6 text-electric-blue" />,
      title: 'Reserva de Clases',
      description: 'Reserva tu plaza en las clases con un solo toque',
    },
    {
      icon: <Users className="h-6 w-6 text-electric-green" />,
      title: 'Seguimiento Personal',
      description: 'Monitorea tu progreso y objetivos fitness',
    },
    {
      icon: <Star className="h-6 w-6 text-electric-yellow" />,
      title: 'Horarios Actualizados',
      description: 'Consulta horarios y cambios en tiempo real',
    },
    {
      icon: <Shield className="h-6 w-6 text-electric-purple" />,
      title: 'App de acceso al club',
      description: 'Contenido exclusivo y ofertas especiales',
    },
  ];

  const partnerApps = [
    {
      name: 'Wellhub',
      description: 'Accede a Bekdoosan a través de los beneficios corporativos de Wellhub',
      logoImg: '/Wellhub.png',
      benefits: ['Variedad de clases', 'Pagos flexibles', 'App móvil'],
    },
    {
      name: 'WodBuster',
      description: 'Red europea de fitness con acceso a múltiples gimnasios',
      logoImg: '/wodbuster.png',
      benefits: ['Organiza tu rutina y actividades', 'Reserva tus clases', 'App móvil'],
    },
  ];

  return (
    <section id="apps" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestra <span className="text-electric-blue">App</span> & <span className="text-electric-green">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gestiona tu entrenamiento desde tu móvil y descubre nuestras apps asociadas
          </p>
        </div>

        {/* App Bekdoosan */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-purple/10 dark:from-electric-blue/20 dark:to-electric-purple/20 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-electric-blue rounded-2xl p-3 mr-4">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">App Bekdoosan</h3>
                    <p className="text-electric-blue font-medium">Tu gimnasio en el bolsillo</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  Descarga nuestra app oficial y disfruta de una experiencia completa.
                  Gestiona tus clases, consulta horarios, realiza pagos y mantente
                  conectado con la comunidad Bekdoosan.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {appFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  {/* App Store */}
                  <a
                    href="https://apps.apple.com/app/wodbuster/id1496140006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-200"
                  >
                    <FaApple className="h-5 w-5" />
                    <span>App Store</span>
                  </a>
                  {/* Google Play */}
                  <a
                    href="https://play.google.com/store/apps/details?id=santi.wodbuster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-200"
                  >
                    <FaGooglePlay className="h-5 w-5" />
                    <span>Google Play</span>
                  </a>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex justify-center">
                <div className="relative w-66 h-99 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/movil-app.jpg"
                    alt="App móvil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-black/50 flex flex-col justify-end p-4 text-white">
                    <h4 className="text-xl font-bold">Bekdoosan</h4>
                    <p className="text-sm opacity-80">Tu gimnasio en el bolsillo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Asociadas */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Apps <span className="text-electric-green">Asociadas</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerApps.map((app, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src={app.logoImg}
                      alt={app.name}
                      className="h-12 mx-auto object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{app.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">{app.description}</p>

                  <div className="space-y-2">
                    {app.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center justify-center text-sm">
                        <div className="w-2 h-2 bg-electric-green rounded-full mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-blue to-electric-green rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Tu empresa tiene convenio?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Consulta si tu empresa está asociada con alguna de nuestras apps partners
              y disfruta de descuentos especiales en Bekdoosan.
            </p>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-white text-electric-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Consulta Aquí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
