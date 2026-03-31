export default function Authority() {
  const credentials = [
    {
      src: "/SCCOT.jpg",
      alt: "SCCOT – Sociedad Colombiana de Cirugía Ortopédica y Traumatología",
      delay: '0.1s'
    },
    {
      src: "/ACCART-2025.jpg",
      alt: "ACCART 2025 – Diplomado Internacional en Ortobiológicos",
      delay: '0.15s'
    },
    {
      src: "/Logo_Universidad_de_los_Andes.jpg",
      alt: "Universidad de los Andes Colombia – Magíster en Educación",
      delay: '0.2s'
    },
    {
      src: "/Logo-Universidad-CES-Colombia-removebg-preview.png",
      alt: "Universidad CES Colombia – Docente de Ortopedia",
      delay: '0.25s'
    }
  ];

  return (
    <section className="bg-white border-b border-gray-200 py-12 sm:py-16 md:py-20 px-4 sm:px-6" id="especialista" aria-label="Tu especialista de confianza">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <div className="relative opacity-0 animate-slide-left" style={{ animationDelay: '0.1s' }}>
            <div className="relative bg-gradient-to-br from-[#1a365d] to-[#2a4a7f] rounded-3xl aspect-[3/4] flex flex-col items-center justify-center overflow-hidden shadow-lg">
              <img
                src="/Dr-Guillermo-rodriguez.jpg"
                alt="Dr. Guillermo Rodríguez Restrepo – Especialista en Ortopedia y Traumatología"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#25D366] text-white rounded-2xl px-5 py-4 text-[13px] font-bold text-center shadow-lg z-10 opacity-0 animate-spring" style={{ animationDelay: '0.6s' }}>
              <strong className="block text-[24px] font-extrabold">30+</strong>
              años de experiencia
            </div>
          </div>

          <div className="opacity-0 animate-slide-right" style={{ animationDelay: '0.15s' }}>
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5">
              Tu Especialista de Confianza
            </span>

            <h2 id="especialista-heading" className="font-extrabold text-[#1a365d] leading-tight mb-1 text-2xl sm:text-3xl md:text-4xl">
              Dr. Guillermo Rodríguez Restrepo – Ortopedista en Medellín
            </h2>

            <p className="text-[14px] sm:text-[16px] text-[#25D366] font-semibold mb-5">
              Ortopedista y Traumatólogo · 30+ años de experiencia
            </p>

            <p className="text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed mb-6">
              Especialista con más de 20 años dedicados a la ortopedia y traumatología en Medellín. Maneja patologías de mediana y alta complejidad con respaldo académico, científico y clínico — docente universitario, investigador y referente en medicina regenerativa ortopédica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#f0fdf4] to-[#e0fdf4] border border-[#bbf7d0] rounded-2xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#15803d] mb-2">Modalidades</h3>
                <p className="text-sm text-gray-700">Presencial · Telemedicina</p>
              </div>
              <div className="bg-gradient-to-br from-[#f0fdf4] to-[#e0fdf4] border border-[#bbf7d0] rounded-2xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#15803d] mb-2">Idiomas</h3>
                <p className="text-sm text-gray-700">Español · English</p>
              </div>
            </div>

            <div className="mb-8 opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Certificaciones y Membresías</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#25D366] font-bold mt-0.5">•</span>
                  <span>Miembro de la Asociación Colombiana de Cirugía Ortopédica y Traumatología (SCCOT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25D366] font-bold mt-0.5">•</span>
                  <span>Entrenamiento en Ecografía Músculo Esquelética 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25D366] font-bold mt-0.5">•</span>
                  <span>Diplomado Internacional en Uso de Ortobiológicos ACCART 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25D366] font-bold mt-0.5">•</span>
                  <span>Magister en Educación – Universidad de los Andes, Colombia (2013)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25D366] font-bold mt-0.5">•</span>
                  <span>PhD en Educación y Sociedad – Universidad de Barcelona, España 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25D366] font-bold mt-0.5">•</span>
                  <span>Docente de Ortopedia – Universidad CES Colombia</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-gray-200 opacity-0 animate-cascade" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Respaldo Académico</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 place-items-center">
                {credentials.map((cred, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-3 bg-gray-50 border border-gray-200 rounded-lg transition-all hover:shadow-md opacity-0 animate-scale-pop w-full"
                    style={{ animationDelay: `${0.5 + index * 0.08}s` }}
                  >
                    <img
                      src={cred.src}
                      alt={cred.alt}
                      className="h-10 sm:h-14 w-auto max-w-[100px] object-contain grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
