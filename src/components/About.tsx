import { Award, Microscope, Zap, GraduationCap, Users } from 'lucide-react';

export default function About() {
  const certifications = [
    { icon: Award, text: 'Miembro de la Sociedad Colombiana de Cirugía Ortopédica y Traumatología (SCCOT)', width: 95 },
    { icon: Microscope, text: 'Entrenamiento en Ecografía Músculo Esquelética 2025', width: 90 },
    { icon: Zap, text: 'Diplomado Internacional en Uso de Ortobiológicos ACCART 2025', width: 88 },
    { icon: GraduationCap, text: 'Magíster en Educación – Universidad de los Andes, Colombia (2013)', width: 100 },
    { icon: Users, text: 'Docente de Ortopedia – Universidad CES Colombia', width: 92 }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="sobre-el-medico" aria-labelledby="sobre-heading">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-center">
          <div className="relative opacity-0 animate-slide-left" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-gradient-to-br from-[#1a365d] to-[#2a4a7f] rounded-3xl aspect-[3/4] flex flex-col items-center justify-center gap-5 text-white/60 text-sm overflow-hidden">
              <img
                src="/Dr-Guillermo-rodriguez.jpg"
                alt="Dr. Guillermo Rodríguez Restrepo – Especialista en Ortopedia y Traumatología Medellín"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#25D366] text-white rounded-2xl px-5 py-4 text-[13px] font-bold text-center shadow-lg z-10 opacity-0 animate-spring" style={{ animationDelay: '0.7s' }}>
              <strong className="block text-[22px] font-extrabold">23</strong>
              años de experiencia
            </div>
          </div>

          <div className="opacity-0 animate-slide-right" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Tu Especialista de Confianza
            </span>
            <h2 className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-title-glow" style={{ animationDelay: '0.4s' }}>
              Dr. Guillermo Rodríguez Restrepo – Ortopedista en Medellín
            </h2>
            <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed max-w-[580px] opacity-0 animate-cascade" style={{ animationDelay: '0.5s' }}>
              Especialista en Ortopedia y Traumatología con más de 23 años de experiencia en Medellín. Miembro de la SCCOT, con entrenamiento en ecografía músculo-esquelética y diplomado internacional en ortobiológicos. Docente universitario comprometido con la ortopedia de calidad humana.
            </p>
            <ul className="list-none my-6 flex flex-col gap-3">
              {certifications.map((cert, idx) => {
                const IconComponent = cert.icon;
                return (
                <li key={idx} className="flex items-start gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-3.5 bg-gradient-to-r from-gray-50 to-white rounded-xl border-l-[3px] border-[#1a365d] opacity-0 animate-cert-stagger hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${0.6 + idx * 0.1}s` }}>
                  <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0 text-[#1a365d] mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm leading-relaxed text-gray-800 font-medium">{cert.text}</span>
                    <div className="mt-3 h-1 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#1a365d] to-[#1ebe57] opacity-0 animate-progress-bar"
                        style={{
                          '--progress-width': `${cert.width}%`,
                          animationDelay: `${0.6 + idx * 0.1 + 0.3}s`
                        } as React.CSSProperties & { '--progress-width'?: string }}
                      ></div>
                    </div>
                  </div>
                </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
