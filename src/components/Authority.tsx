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
    <section className="bg-gray-50 border-b border-gray-200 py-8 sm:py-10 md:py-7 px-4 sm:px-6" aria-label="Certificaciones y autoridad médica">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[12px] sm:text-[13px] md:text-[11px] font-bold uppercase tracking-widest text-gray-400 text-center mb-6 md:mb-6">
          Respaldo & Certificaciones
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 place-items-center">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all hover:shadow-lg opacity-0 animate-scale-pop w-full"
              style={{ animationDelay: cred.delay }}
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
    </section>
  );
}
