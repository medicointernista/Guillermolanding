export default function AcademicBacking() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-gray-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-8 sm:mb-10">
          Respaldo Académico
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="/SCCOT.jpg"
              alt="Sociedad Colombiana de Cirugía Ortopédica y Traumatología"
              className="h-12 sm:h-14 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="/ACCART-2025.jpg"
              alt="Asociación Colombiana de Cirugía Artroscópica y Articular"
              className="h-12 sm:h-14 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="/Logo_Universidad_de_los_Andes.jpg"
              alt="Universidad de los Andes"
              className="h-12 sm:h-14 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="/Logo-Universidad-CES-Colombia-removebg-preview.png"
              alt="Universidad CES"
              className="h-12 sm:h-14 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
