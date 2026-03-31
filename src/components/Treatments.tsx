import { Droplet, Target, Microscope, Waves, Shield, Users, Syringe, Activity, Bone } from 'lucide-react';

export default function Treatments() {
  const treatments = [
    {
      icon: Droplet,
      title: 'PRP – Plasma Rico en Plaquetas',
      desc: 'Medicina Regenerativa. Regenera tejidos dañados y reduce el dolor usando los factores de crecimiento de tu propia sangre.',
      badge: 'Medicina Regenerativa'
    },
    {
      icon: Waves,
      title: 'Viscosuplementación con Ácido Hialurónico',
      desc: 'Ortobiológico. Lubrica y protege el cartílago articular — especialmente efectivo en artrosis de rodilla, cadera y hombro.',
      badge: 'Regenerativo'
    },
    {
      icon: Target,
      title: 'Infiltraciones Articulares',
      desc: 'Alta Precisión. Alivio directo del dolor con corticoides o antiinflamatorios aplicados en la zona exacta que lo necesita.',
      badge: 'Precisión Ecoguiada'
    },
    {
      icon: Microscope,
      title: 'Células Mesenquimales',
      desc: 'Vanguardia. Terapia biológica avanzada para regenerar tejido articular en casos de mayor compromiso.',
      badge: 'Vanguardia'
    },
    {
      icon: Syringe,
      title: 'Cirugía Especializada',
      desc: 'Cuando es necesario. Fracturas, túnel del carpo, gangliones, dedos en gatillo, lesiones tendinosas — con toda la experiencia que tu caso merece.',
      badge: 'Cirugía'
    }
  ];


  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="tratamientos" aria-labelledby="tratamientos-heading">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Tratamientos Disponibles
        </span>
        <h2 className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Tratamientos Disponibles para Tu Caso
        </h2>
        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed max-w-[580px] opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
          Opciones regenerativas, biológicas y quirúrgicas — siempre priorizando lo menos invasivo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {treatments.map((treatment, idx) => {
            const IconComponent = treatment.icon;
            return (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 transition-all hover:border-[#25D366] hover:shadow-lg hover:-translate-y-1 cursor-default opacity-0 animate-scale-pop"
              style={{ animationDelay: `${0.4 + idx * 0.075}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <IconComponent className="w-6 sm:w-7 h-6 sm:h-7 text-[#25D366]" />
                <span className="bg-[rgba(37,211,102,0.10)] text-[#15803d] text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md">
                  {treatment.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#1a365d] mb-2">{treatment.title}</h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">{treatment.desc}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
