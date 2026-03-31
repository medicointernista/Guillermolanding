import { Shield, Scan, CheckCircle, Heart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      icon: Shield,
      title: 'Evaluación Completa',
      desc: 'Escuchamos tu caso, examinamos tu condición y entendemos exactamente qué necesitas — sin apresurarnos.'
    },
    {
      num: 2,
      icon: Scan,
      title: 'Diagnóstico Preciso',
      desc: 'Analizamos tu evaluación clínica y todos tus estudios. Si se necesitan exámenes adicionales, te lo decimos. Sin suposiciones.'
    },
    {
      num: 3,
      icon: CheckCircle,
      title: 'Tu Plan de Tratamiento',
      desc: 'Construimos un tratamiento personalizado basado en evidencia científica. Infiltraciones, PRP, ácido hialurónico o cirugía solo cuando es necesario — siempre priorizando lo menos invasivo.'
    },
    {
      num: 4,
      icon: Heart,
      title: 'Seguimiento Continuo',
      desc: 'No te dejamos solo. Hacemos seguimiento permanente y ajustamos tu tratamiento según cómo evoluciones.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50" id="como-funciona" aria-labelledby="como-heading">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5">
          ¿Cómo Funciona?
        </span>
        <h2 id="como-heading" className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl">
          ¿Cómo es el Proceso de Consulta con tu Ortopedista en Medellín?
        </h2>
        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed max-w-[580px]">
          Del dolor al movimiento en 4 pasos. Sin listas de espera, sin adivinanzas.
        </p>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 list-none p-0">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
            <li
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-7 relative shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-base sm:text-lg font-extrabold mb-4">
                {step.num}
              </div>
              <IconComponent className="w-6 sm:w-7 h-6 sm:h-7 text-[#1a365d] mb-3" />
              <h3 className="text-sm sm:text-[15px] font-bold text-[#1a365d] mb-2">{step.title}</h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">{step.desc}</p>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
