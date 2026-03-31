import { Heart } from 'lucide-react';

export default function FamilyCare() {
  const stages = [
    { label: 'Recién nacidos', range: '0–12m' },
    { label: 'Niños', range: '1–12 años' },
    { label: 'Adolescentes', range: '13–17 años' },
    { label: 'Adultos', range: '18–59 años' },
    { label: 'Tercera edad', range: '60+' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="atencin-familiar" aria-labelledby="family-heading">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2.5 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <Heart className="w-5 h-5 text-[#25D366]" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#1ebe57]">
            Atención para Toda la Familia
          </span>
        </div>

        <h2 className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Un solo especialista. Cinco etapas de la vida. Una atención integral.
        </h2>

        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed max-w-[680px] opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
          Desde el primer día de vida hasta la tercera edad, cada paciente recibe un diagnóstico y tratamiento adaptado a su edad, su cuerpo y sus necesidades.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#f0fdf4] to-[#e0fdf4] border border-[#bbf7d0] rounded-2xl p-4 sm:p-5 text-center opacity-0 animate-scale-pop transition-all hover:shadow-md hover:-translate-y-1"
              style={{ animationDelay: `${0.4 + idx * 0.08}s` }}
            >
              <div className="text-sm sm:text-base font-bold text-[#1a365d] mb-1">{stage.label}</div>
              <div className="text-xs sm:text-[13px] text-[#15803d] font-medium">{stage.range}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
