import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cuándo debo consultar a un ortopedista en Medellín?',
      a: 'Consulta cuando tienes dolor persistente en articulaciones, limitación de movimiento o después de trauma deportivo. No esperes a que empeore. En Torre Medical atendemos urgencias y casos crónicos.'
    },
    {
      q: '¿Qué tratamientos ofrece la medicina regenerativa ortopédica?',
      a: 'PRP (plasma rico en plaquetas), ácido hialurónico, células mesenquimales. Opciones biológicas menos invasivas que la cirugía. Ideales para artrosis, lesiones deportivas y degeneración articular.'
    },
    {
      q: '¿La ortopedia es solo para fracturas?',
      a: 'No. Tratamos artrosis, lesiones deportivas, dolor crónico, manguito rotador, síndrome del túnel del carpo, lesiones tendinosas y enfermedades articulares. Las fracturas son solo una parte.'
    },
    {
      q: '¿Cuál es el costo de una consulta de ortopedia con diagnóstico ecográfico?',
      a: 'Nuestra consulta incluye evaluación completa, examen físico y diagnóstico en tiempo real, todo en una sola cita. Para conocer la tarifa vigente contáctanos por WhatsApp — te respondemos en menos de 2 horas.'
    },
    {
      q: '¿Cuánto cuesta un tratamiento de PRP en Medellín?',
      a: 'El costo del PRP varía según la articulación y el protocolo que tu caso requiere — no todos los tratamientos son iguales. Para darte una información precisa y honesta, escríbenos por WhatsApp.'
    },
    {
      q: '¿Qué diferencia hay entre PRP y ácido hialurónico?',
      a: 'PRP regenera tejido usando tus propios factores de crecimiento. Ácido hialurónico lubrica y protege el cartílago. PRP es más efectivo en lesiones tempranas; hialurónico en artrosis moderada.'
    },
    {
      q: '¿Cuánto tiempo tarda en verse resultado con medicina regenerativa?',
      a: 'Primeras mejoras en 2-4 semanas. Máximo efecto a los 3-6 meses. El seguimiento continuo asegura adaptación del tratamiento según tu evolución.'
    },
    {
      q: '¿Necesito referencia de mi médico general para consultar ortopedia?',
      a: 'No es obligatorio. Puedes agendar directamente al +573244081281 o por WhatsApp. Traer estudios previos acelera el diagnóstico en tu primera cita.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50" id="preguntas" aria-labelledby="faq-heading">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Preguntas Frecuentes
        </span>
        <h2 id="faq-heading" className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Preguntas Frecuentes sobre Ortopedia y Traumatología
        </h2>

        <div className="mt-8 sm:mt-10 flex flex-col gap-3 max-w-[740px]">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border-[1.5px] border-gray-200 overflow-hidden transition-all opacity-0 animate-indent-reveal ${
                openIndex === idx ? 'open' : ''
              }`}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <button
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-transparent border-none text-left text-sm sm:text-[15px] font-bold text-[#1a365d] cursor-pointer flex items-center justify-between gap-2 sm:gap-3"
                onClick={() => toggleFaq(idx)}
                aria-expanded={openIndex === idx}
              >
                <h3 className="font-bold text-[#1a365d] text-sm sm:text-[15px] m-0">{faq.q}</h3>
                <ChevronDown
                  className={`w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 text-gray-400 transition-transform ${
                    openIndex === idx ? 'rotate-180 text-[#1a365d]' : ''
                  }`}
                />
              </button>
              <div
                className={`px-4 sm:px-5 text-xs sm:text-sm text-gray-600 leading-relaxed transition-all ${
                  openIndex === idx ? 'max-h-[200px] pb-4' : 'max-h-0'
                } overflow-hidden`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
