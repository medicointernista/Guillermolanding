import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FamilyCare from '../components/FamilyCare';
import BilingualCare from '../components/BilingualCare';
import HowItWorks from '../components/HowItWorks';
import Treatments from '../components/Treatments';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Location from '../components/Location';
import Closer from '../components/Closer';

export default function HomePage() {
  return (
    <Layout
      title="Dr. Guillermo Rodríguez Restrepo – Ortopedista en Medellín | Ortopedia con Calidad Humana"
      description="Especialista en Ortopedia y Traumatología en Medellín. Tratamientos regenerativos, PRP, viscosuplementación, infiltraciones y más. Torre Medical, Consultorio 609."
    >
      <Hero />
      <FamilyCare />
      <BilingualCare />
      <HowItWorks />
      <Treatments />
      <ContactForm />
      <Testimonials />
      <FAQ />
      <Location />
      <Closer />
    </Layout>
  );
}
