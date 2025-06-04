
import React, { useState, useEffect, useCallback } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PricesSection from '@/components/PricesSection';
import SchedulesSection from '@/components/SchedulesSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import AppSection from '@/components/AppSection';
import CommunitySection from '@/components/CommunitySection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import Lightbox from '@/components/Lightbox';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [lightboxImage, setLightboxImage] = useState(null);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector('nav'); 
    
    if (element) {
      let topOffset = 0;
      if (navbar && sectionId !== 'inicio') { 
        topOffset = navbar.offsetHeight;
      }
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      // Actualizar activeSection inmediatamente al hacer clic para mejorar la respuesta visual del menú
      // Esto es opcional y puede tener efectos secundarios si el scroll es interrumpido.
      // Considerar si es mejor depender solo del IntersectionObserver.
      // setActiveSection(sectionId); 
    }
  }, []);

  useEffect(() => {
    const sections = ['inicio', 'tarifas', 'horarios', 'actividades', 'app', 'comunidad', 'ubicacion', 'contacto'];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px", 
      threshold: 0.01, 
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const openLightbox = (src) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <div className="min-h-screen bg-pastel-beige text-pastel-gray-dark">
      <Toaster />
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <HeroSection scrollToSection={scrollToSection} openLightbox={openLightbox} />
      <PricesSection scrollToSection={scrollToSection} />
      <SchedulesSection />
      <ActivitiesSection openLightbox={openLightbox} />
      <AppSection scrollToSection={scrollToSection} />
      <CommunitySection />
      <LocationSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
      <FloatingWhatsAppButton />
      {lightboxImage && <Lightbox src={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
};

export default App;
