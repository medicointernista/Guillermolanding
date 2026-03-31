import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cuándo debo consultar a un ortopedista?',
      a: 'Cuando tienes dolor persistente en una articulación, limitación de movimiento, dificultad para caminar, o después de cualquier trauma — deportivo o del día a día. No esperes a que empeore.'
    },
    {
      q: '¿Qué tratamientos ofrece la ortopedia?',
      a: 'Desde infiltraciones y terapias biológicas hasta cirugía — siempre buscando primero la opción menos invasiva. El objetivo es recuperar tu movilidad y calidad de vida.'
    },
    {
      q: '¿La ortopedia es solo para fracturas?',
      a: 'No. También tratamos artrosis, lesiones deportivas, dolor crónico, enfermedades articulares y mucho más. Las fracturas son solo una parte de lo que hacemos.'
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
        <h2 className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Preguntas Frecuentes sobre Ortopedia en Medellín
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
              >
                {faq.q}
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
