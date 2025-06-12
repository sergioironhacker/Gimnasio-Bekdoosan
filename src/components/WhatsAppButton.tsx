import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = '34921430151';
  const messages = [
    'Hola, me interesa información sobre las clases',
    'Quiero una clase de prueba gratuita',
    'Consulta sobre horarios y precios',
    'Información sobre inscripciones'
  ];

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón Principal */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Panel de Mensajes */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white dark:bg-dark-card rounded-2xl shadow-2xl p-4 w-80 animate-slide-up">
          <div className="mb-4">
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
              ¡Hola! 👋
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              ¿En qué podemos ayudarte hoy?
            </p>
          </div>
          
          <div className="space-y-2">
            {messages.map((message, index) => (
              <button
                key={index}
                onClick={() => sendWhatsAppMessage(message)}
                className="w-full text-left p-3 bg-gray-50 dark:bg-dark-bg hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors duration-200 text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                {message}
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-dark-border">
            <button
              onClick={() => sendWhatsAppMessage('Hola, tengo una consulta')}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4 text-sm font-medium transition-colors duration-200"
            >
              Escribir mensaje personalizado
            </button>
          </div>
          
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Powered by WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* Overlay para cerrar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;