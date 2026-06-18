import { Link } from 'react-router-dom';
import { Droplet, Target, Microscope, Waves, Bone, Activity, Hand, Footprints, ArrowRight, Users } from 'lucide-react';

interface Treatment {
  icon: React.ElementType;
  title: string;
  desc: string;
  badge: string;
  href: string;
  color: string;
}

interface TreatmentCategory {
  category: string;
  treatments: Treatment[];
}

const categories: TreatmentCategory[] = [
  {
    category: 'Medicina Regenerativa',
    treatments: [
      {
        icon: Droplet,
        title: 'PRP – Plasma Rico en Plaquetas',
        desc: 'Regenera tejidos dañados usando los factores de crecimiento de tu propia sangre. Sin cirugía.',
        badge: 'Regenerativo',
        href: '/plasma-rico-en-plaquetas',
        color: 'from-emerald-500/10 to-green-400/5',
      },
      {
        icon: Waves,
        title: 'Viscosuplementación con Ácido Hialurónico',
        desc: 'Lubrica y protege el cartílago articular. Especialmente efectivo en artrosis de rodilla y cadera.',
        badge: 'Ortobiológico',
        href: '/viscosuplementacion',
        color: 'from-teal-500/10 to-cyan-400/5',
      },
      {
        icon: Microscope,
        title: 'Células Mesenquimales',
        desc: 'Terapia biológica avanzada para regenerar tejido articular en casos de mayor compromiso.',
        badge: 'Vanguardia',
        href: '/celulas-mesenguimales',
        color: 'from-blue-500/10 to-sky-400/5',
      },
      {
        icon: Target,
        title: 'Infiltraciones Articulares',
        desc: 'Alivio directo y preciso del dolor con corticoides o antiinflamatorios guiados por ecografía.',
        badge: 'Precisión Ecoguiada',
        href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios',
        color: 'from-violet-500/10 to-purple-400/5',
      },
    ],
  },
  {
    category: 'Pie, Tobillo y Rodilla',
    treatments: [
      {
        icon: Footprints,
        title: 'Fascitis Plantar',
        desc: 'Tratamiento del dolor en el talón y la planta del pie con opciones regenerativas y quirúrgicas.',
        badge: 'Pie y Tobillo',
        href: '/fascitis-plantar',
        color: 'from-amber-500/10 to-yellow-400/5',
      },
      {
        icon: Activity,
        title: 'Esguinces Crónicos de Tobillo',
        desc: 'Estabilización y rehabilitación de tobillos con inestabilidad recurrente o lesión ligamentaria.',
        badge: 'Tobillo',
        href: '/esguinces-cronicos-de-tobillo',
        color: 'from-orange-500/10 to-amber-400/5',
      },
      {
        icon: Bone,
        title: 'Fracturas de Tobillo',
        desc: 'Manejo ortopédico y quirúrgico de fracturas del tobillo, con seguimiento integral hasta tu recuperación.',
        badge: 'Traumatología',
        href: '/fracturas-de-tobillo',
        color: 'from-red-500/10 to-orange-400/5',
      },
      {
        icon: Bone,
        title: 'Hallux Valgus (Juanete)',
        desc: 'Corrección del juanete con técnicas mínimamente invasivas o cirugía cuando es necesario.',
        badge: 'Pie',
        href: '/hallux-valgus',
        color: 'from-pink-500/10 to-rose-400/5',
      },
      {
        icon: Activity,
        title: 'Artrosis de Rodillas',
        desc: 'Control del desgaste articular con tratamientos regenerativos, infiltraciones y manejo del dolor.',
        badge: 'Rodilla',
        href: '/artrosis-de-rodillas',
        color: 'from-indigo-500/10 to-blue-400/5',
      },
    ],
  },
  {
    category: 'Hombro, Mano y Muñeca',
    treatments: [
      {
        icon: Activity,
        title: 'Síndrome de Manguito Rotador',
        desc: 'Diagnóstico y tratamiento del dolor de hombro por lesiones del manguito — desde PRP hasta cirugía.',
        badge: 'Hombro',
        href: '/sindrome-de-manguito-rotador',
        color: 'from-cyan-500/10 to-teal-400/5',
      },
      {
        icon: Hand,
        title: 'Síndrome de Túnel del Carpo',
        desc: 'Alivio del hormigueo y adormecimiento de la mano con cirugía ambulatoria de recuperación rápida.',
        badge: 'Mano y Muñeca',
        href: '/sindrome-de-tunel-del-carpo',
        color: 'from-lime-500/10 to-green-400/5',
      },
      {
        icon: Hand,
        title: 'Dedos en Gatillo o Resorte',
        desc: 'Liberación del dedo que traba o chasquea — procedimiento rápido con anestesia local.',
        badge: 'Mano',
        href: '/dedos-en-gatillo-o-resorte',
        color: 'from-emerald-500/10 to-teal-400/5',
      },
      {
        icon: Hand,
        title: 'Tendinitis de Quervain',
        desc: 'Tratamiento del dolor en la base del pulgar y la muñeca con infiltraciones o cirugía.',
        badge: 'Muñeca',
        href: '/tendinitis-de-quervain',
        color: 'from-sky-500/10 to-blue-400/5',
      },
      {
        icon: Hand,
        title: 'Gangliones de Muñeca',
        desc: 'Extirpación de quistes ganglionares con técnicas de baja morbilidad y recuperación acelerada.',
        badge: 'Muñeca',
        href: '/gangliones',
        color: 'from-violet-500/10 to-indigo-400/5',
      },
      {
        icon: Bone,
        title: 'Fracturas de Radio Distal y Antebrazo',
        desc: 'Manejo de fracturas de muñeca y antebrazo con fijación quirúrgica cuando se requiere.',
        badge: 'Traumatología',
        href: '/fracturas-de-radio-distal',
        color: 'from-rose-500/10 to-red-400/5',
      },
      {
        icon: Users,
        title: 'Ortopedia Geriátrica',
        desc: 'Atención especializada para adultos mayores — fracturas de cadera, artrosis avanzada y rehabilitación.',
        badge: 'Especialidad',
        href: '/ortopedia-geriatrica',
        color: 'from-amber-500/10 to-orange-400/5',
      },
    ],
  },
];

export default function Treatments() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="tratamientos" aria-labelledby="tratamientos-heading">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Tratamientos Disponibles
        </span>
        <h2 id="tratamientos-heading" className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Tratamientos de Ortopedia en Medellín:<br className="hidden sm:block" /> Regenerativos y Quirúrgicos
        </h2>
        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
          Opciones regenerativas, biológicas y quirúrgicas — siempre priorizando lo menos invasivo.
        </p>

        <div className="mt-10 sm:mt-12 space-y-12">
          {categories.map((group, gIdx) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-5 opacity-0 animate-fade-up" style={{ animationDelay: `${0.35 + gIdx * 0.1}s` }}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1ebe57] bg-[#1ebe57]/10 px-3 py-1 rounded-full">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#25D366]/20 to-transparent"></div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-none p-0">
                {group.treatments.map((t, idx) => {
                  const Icon = t.icon;
                  const delay = 0.4 + gIdx * 0.1 + idx * 0.07;
                  return (
                    <li key={t.href} className="opacity-0 animate-scale-pop" style={{ animationDelay: `${delay}s` }}>
                      <Link
                        to={t.href}
                        className={`group flex flex-col h-full bg-gradient-to-br ${t.color} bg-white border border-gray-200 rounded-2xl p-5 no-underline transition-all duration-300 hover:border-[#25D366] hover:shadow-[0_12px_40px_rgba(37,211,102,0.15)] hover:-translate-y-1.5 relative overflow-hidden`}
                      >
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#25D366] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="flex items-start justify-between mb-3">
                          <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#25D366]/20 group-hover:scale-110">
                            <Icon className="w-4.5 h-4.5 text-[#25D366] w-[18px] h-[18px]" />
                          </div>
                          <span className="bg-white/70 text-[#15803d] text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border border-[#25D366]/20 transition-all duration-300 group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/40">
                            {t.badge}
                          </span>
                        </div>

                        <h3 className="text-[13px] sm:text-sm font-bold text-[#1a365d] mb-2 leading-snug transition-colors duration-300 group-hover:text-[#1ebe57] flex-1">
                          {t.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mb-3 transition-colors duration-300 group-hover:text-gray-600">
                          {t.desc}
                        </p>

                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#25D366] uppercase tracking-wide mt-auto transition-all duration-300 group-hover:gap-2">
                          Ver más
                          <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center p-6 sm:p-8 bg-gradient-to-r from-[#0f2340] to-[#1a365d] rounded-2xl opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-base sm:text-lg">¿No encuentras tu condición?</p>
            <p className="text-white/60 text-sm mt-0.5">El Dr. Rodríguez evalúa cualquier condición musculoesquelética — agenda una valoración.</p>
          </div>
          <a
            href="https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
            target="_blank"
            rel="noopener"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)] whitespace-nowrap"
          >
            Agendar Valoración
          </a>
        </div>
      </div>
    </section>
  );
}
