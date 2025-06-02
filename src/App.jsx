import React from 'react';
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

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    const navbar = document.querySelector('nav');
    if (navbar && sectionId !== 'inicio') {
        const navbarHeight = navbar.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    } else if (element) {
        element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <div className="min-h-screen bg-pastel-beige text-pastel-gray-dark">
      <Toaster />
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <PricesSection scrollToSection={scrollToSection} />
      <SchedulesSection />
      <ActivitiesSection />
      <AppSection scrollToSection={scrollToSection} />
      <AboutUsSection />
      <LocationSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;