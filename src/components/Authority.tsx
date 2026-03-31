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
    <section className="bg-white border-b border-gray-200 py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-label="Tu especialista de confianza">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Tu Especialista de Confianza
        </span>

        <h2 className="font-extrabold text-[#1a365d] leading-tight mb-2 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Dr. Guillermo Rodríguez Restrepo
        </h2>

        <p className="text-[13px] sm:text-[15px] text-[#25D366] font-semibold mb-4 opacity-0 animate-cascade" style={{ animationDelay: '0.25s' }}>
          Ortopedista y Traumatólogo · 30+ años de experiencia
        </p>

        <p className="text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed max-w-[780px] mb-6 opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
          Especialista con más de 20 años dedicados a la ortopedia y traumatología en Medellín. Maneja patologías de mediana y alta complejidad con respaldo académico, científico y clínico — docente universitario, investigador y referente en medicina regenerativa ortopédica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Consulta</h3>
            <p className="text-sm text-gray-700 leading-relaxed">Presencial en Torre Medical, El Poblado · Telemedicina para pacientes fuera de Medellín o en el exterior</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Idiomas</h3>
            <p className="text-sm text-gray-700 leading-relaxed">Atención bilingüe: Español · English</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Experiencia</h3>
            <p className="text-sm text-gray-700 leading-relaxed">Docente universitario · Investigador · Especialista en medicina regenerativa</p>
          </div>
        </div>

        <div className="mb-8 opacity-0 animate-cascade" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Certificaciones y Membresías</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-1">✓</span>
              <span>Miembro de la Asociación Colombiana de Cirugía Ortopédica y Traumatología (SCCOT)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-1">✓</span>
              <span>Entrenamiento en Ecografía Músculo Esquelética 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-1">✓</span>
              <span>Diplomado Internacional en Uso de Ortobiológicos ACCART 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-1">✓</span>
              <span>Magister en Educación – Universidad de los Andes, Colombia (2013)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-1">✓</span>
              <span>PhD en Educación y Sociedad en Universidad de Barcelona España 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#25D366] mt-1">✓</span>
              <span>Docente de Ortopedia – Universidad CES Colombia</span>
            </li>
          </ul>
        </div>

        <div className="pt-10 border-t border-gray-200">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Respaldo Académico y Científico</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 place-items-center">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm transition-all hover:shadow-lg opacity-0 animate-scale-pop w-full"
                style={{ animationDelay: `${0.6 + index * 0.08}s` }}
              >
                <img
                  src={cred.src}
                  alt={cred.alt}
                  className="h-12 sm:h-16 md:h-20 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] object-contain grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
