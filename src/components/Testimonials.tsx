export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Excelente atención. Nos sentimos muy tranquilos durante toda la consulta. El doctor explicó el diagnóstico con claridad, resolvió nuestras dudas con paciencia y transmitió seguridad en el manejo del tratamiento.',
      author: 'Sara Ramírez',
      initials: 'SR',
      service: 'Consulta de Ortopedia',
      date: '20 Feb 2026'
    },
    {
      quote: 'Excelente especialista, calidad humana y dedicación. Lo recomiendo ampliamente para cualquier problema ortopédico.',
      author: 'Alejandra',
      initials: 'AL',
      service: 'Consulta Presencial – Torre Medical',
      date: '18 Mar 2026'
    },
    {
      quote: 'Mi experiencia fue excelente. Un profesional demasiado íntegro. Súper recomendado. Atención de primer nivel con un trato completamente humano.',
      author: 'Valentina',
      initials: 'VA',
      service: 'Consulta de Ortopedia',
      date: '24 Oct 2025'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="testimonios" aria-labelledby="testimonios-heading">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Testimonios Verificados
        </span>
        <h2 id="testimonios-heading" className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Testimonios Reales: Pacientes del Dr. Guillermo Rodríguez en Medellín
        </h2>
        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed max-w-[580px] opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
          Personas reales. Dolor real. Resultados verificados. Más de 48 reseñas en Doctoralia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border-[1.5px] border-gray-200 rounded-2xl p-5 sm:p-7 relative transition-all hover:shadow-md hover:-translate-y-1 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.4 + idx * 0.13}s` }}
            >
              <p className="font-serif italic text-sm sm:text-[15px] leading-relaxed text-gray-800 mb-5">
                "{testi.quote}"
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 sm:w-[38px] h-8 sm:h-[38px] rounded-full bg-[#1a365d] text-white flex items-center justify-center text-[13px] sm:text-[15px] font-bold flex-shrink-0">
                    {testi.initials}
                  </div>
                  <div>
                    <div className="text-xs sm:text-[13px] font-bold text-[#1a365d]">{testi.author}</div>
                    <div className="text-[10px] sm:text-[11px] text-gray-400">{testi.service}</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#f59e0b] text-sm">★★★★★</div>
                  <div className="text-[10px] font-semibold text-[#1ebe57] bg-[rgba(37,211,102,0.10)] border border-[rgba(37,211,102,0.2)] px-2 py-0.5 rounded-full mt-1">
                    {testi.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                <img src="/Logo-Doctoralia.jpg" alt="Doctoralia" className="h-5 sm:h-6 object-contain" />
                <span className="text-[10px] sm:text-[11px] text-gray-400">Reseña verificada</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
