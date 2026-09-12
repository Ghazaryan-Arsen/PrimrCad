import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CourseProgram } from './components/CourseProgram';
import { SoftwareSection } from './components/SoftwareSection';
import { WhyPrimecad } from './components/WhyPrimecad';
import { StudentOutcomesSection } from './components/StudentOutcomesSection';
import { InstructorSection } from './components/InstructorSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';

export const App: React.FC = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleOpenRegistration = () => {
    // Scroll directly to the bottom registration form for clear inline context
    const regSection = document.getElementById('registration');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsRegistrationModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-prime-dark text-prime-light font-sans selection:bg-prime-gold selection:text-prime-dark flex flex-col">
      {/* Intelligently Sticky Header */}
      <Header onOpenRegistration={handleOpenRegistration} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero onOpenRegistration={handleOpenRegistration} />
        <TrustBar />
        <CourseProgram onOpenRegistration={handleOpenRegistration} />
        <SoftwareSection />
        <WhyPrimecad onOpenRegistration={handleOpenRegistration} />
        <StudentOutcomesSection onOpenRegistration={handleOpenRegistration} />
        <InstructorSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <RegistrationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Conversion Bar */}
      <StickyMobileCta onOpenRegistration={handleOpenRegistration} />

      {/* Registration Modal triggered from navigation or secondary CTAs when needed */}
      {isRegistrationModalOpen && (
        <RegistrationSection
          isOpenModal={true}
          onCloseModal={() => setIsRegistrationModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
