import { Globe } from 'lucide-react';

export default function BilingualCare() {
  const languages = [
    { name: 'Español', flag: '🇨🇴' },
    { name: 'English', flag: '🇬🇧' }
  ];

  const services = [
    { label: 'Presencial', location: 'Torre Medical, Medellín' },
    { label: 'Telemedicina', location: 'Desde cualquier país' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50" id="atencion-bilingue" aria-labelledby="bilingual-heading">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2.5 mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <Globe className="w-5 h-5 text-[#25D366]" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#1ebe57]">
            Bilingual Care · Atención Bilingüe
          </span>
        </div>

        <h2 id="bilingual-heading" className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Atención Bilingüe en Ortopedia: Español e Inglés
        </h2>

        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed max-w-[680px] opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
          El Dr. Rodríguez atiende en Español e Inglés — presencialmente en Torre Medical o por telemedicina desde cualquier país. Sin barreras de idioma, sin intermediarios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-[#1a365d] mb-4 text-lg">Idiomas</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-4 py-2"
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-semibold text-[#1a365d]">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-[#1a365d] mb-4 text-lg">Modalidades</h3>
            <div className="flex flex-col gap-3">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="border-l-3 border-[#25D366] pl-3 py-2"
                >
                  <div className="font-semibold text-[#1a365d] text-sm">{service.label}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{service.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
