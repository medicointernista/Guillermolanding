export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f]"
      id="inicio"
      aria-label="Presentación del especialista en ortopedia"
    >
      <div className="absolute -top-16 -right-20 w-[500px] h-[500px] rounded-full bg-[rgba(37,211,102,0.07)] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-[rgba(255,255,255,0.04)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center relative z-10">
        <div>
          <p className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.3)] text-[#6ee7b7] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Atención Integral en Ortopedia y Traumatología · Torre Medical
          </p>
          <h1 className="font-extrabold text-white leading-tight mb-5 text-xl sm:text-2xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
            Deja de buscar. Aquí encuentras el apoyo integral que tu familia y tú necesitan para recuperar la salud de sus articulaciones.
          </h1>
          <p className="font-bold text-white/95 leading-tight mb-4 text-lg sm:text-xl md:text-2xl opacity-0 animate-cascade" style={{ animationDelay: '0.35s' }}>
            Desde la primera visita: evaluación completa de tus necesidades, revisión de todos tus estudios y un plan de tratamiento personalizado — basado en ciencia y construido <span className="text-[#25D366]">contigo, no para ti</span>.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 opacity-0 animate-spring" style={{ animationDelay: '0.7s' }}>
              <a
                href="#widget"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white no-underline px-5 py-2.5 rounded-full text-sm font-extrabold tracking-wide uppercase transition-all shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(37,211,102,0.5)] self-start"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                QUIERO MI DIAGNÓSTICO HOY
              </a>
            </div>
            <div className="flex flex-wrap gap-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/[0.18] text-white/90 px-3.5 py-1.5 rounded-full text-[13px] font-medium opacity-0 animate-scale-pop" style={{ animationDelay: '1s' }}>
                Sin largas esperas de EPS
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/[0.18] text-white/90 px-3.5 py-1.5 rounded-full text-[13px] font-medium opacity-0 animate-scale-pop" style={{ animationDelay: '1.05s' }}>
                Valoración personalizada
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/[0.18] text-white/90 px-3.5 py-1.5 rounded-full text-[13px] font-medium opacity-0 animate-scale-pop" style={{ animationDelay: '1.1s' }}>
                Alternativas sin cirugía
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.08] border border-white/15 rounded-2xl sm:rounded-3xl backdrop-blur-lg overflow-hidden relative h-full opacity-0 animate-slide-right" style={{ animationDelay: '0.4s' }}>
          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              src="/Evaluacion-medica-especializada.jpg"
              alt="Dr. Guillermo Rodríguez Restrepo realizando diagnóstico ecográfico especializado"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 bg-white/95 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-[#f59e0b] text-base">★★★★★</div>
            <div className="flex-1">
              <strong className="block text-sm font-bold text-[#1a365d]">48+ reseñas · 4.8★</strong>
              <span className="text-xs text-gray-600">Doctoralia verificado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
