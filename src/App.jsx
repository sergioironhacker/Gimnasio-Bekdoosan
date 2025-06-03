
import React, { useState, useEffect, useCallback } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PricesSection from '@/components/PricesSection';
import SchedulesSection from '@/components/SchedulesSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import AppSection from '@/components/AppSection';
import AboutUsSection from '@/components/AboutUsSection';
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
    const navbar = document.querySelector('nav'); // Select the nav element
    
    if (element) {
      let topOffset = 0;
      if (navbar && sectionId !== 'inicio') { // Only offset if not scrolling to 'inicio' and navbar exists
        topOffset = navbar.offsetHeight;
      }
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const sections = ['inicio', 'tarifas', 'horarios', 'actividades', 'app', 'nosotros', 'ubicacion', 'contacto'];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px", 
      threshold: 0.01, // Use a small threshold to ensure intersection is detected
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
      <AboutUsSection />
      <LocationSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
      <FloatingWhatsAppButton />
      {lightboxImage && <Lightbox src={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
};

export default App;
