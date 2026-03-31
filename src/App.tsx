import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FamilyCare from './components/FamilyCare';
import BilingualCare from './components/BilingualCare';
import Authority from './components/Authority';
import HowItWorks from './components/HowItWorks';
import Treatments from './components/Treatments';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Closer from './components/Closer';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  useEffect(() => {
    document.documentElement.lang = 'es';
    document.documentElement.style.scrollBehavior = 'smooth';

    const metaUpdated = document.createElement('meta');
    metaUpdated.name = 'datePublished';
    metaUpdated.content = '2026-03-31';
    document.head.appendChild(metaUpdated);

    const metaModified = document.createElement('meta');
    metaModified.name = 'dateModified';
    metaModified.content = '2026-03-31';
    document.head.appendChild(metaModified);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FamilyCare />
      <BilingualCare />
      <Authority />
      <HowItWorks />
      <Treatments />
      <ContactForm />
      <Testimonials />
      <FAQ />
      <Location />
      <Closer />
      <Footer />
      <FloatingButtons />
      <div className="fixed bottom-20 right-4 sm:right-6 text-[10px] text-gray-400 pointer-events-none">
        Actualizado Marzo 2026
      </div>
    </div>
  );
}

export default App;
