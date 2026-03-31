import { MessageCircle, Phone } from 'lucide-react';

export default function Closer() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f]"
      id="closer"
      aria-label="Llamada a la acción final"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[rgba(37,211,102,0.05)] pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[rgba(255,255,255,0.03)] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="font-extrabold text-white leading-tight mb-8 text-2xl sm:text-3xl md:text-5xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          No permitas que el <span className="text-[#25D366]">dolor</span> decida por ti. Tu nueva vida comienza con un <span className="text-[#25D366]">mensaje.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://wa.me/573001234567"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white no-underline px-8 py-5 rounded-full text-base sm:text-lg font-extrabold tracking-wide uppercase transition-all shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-1 hover:shadow-[0_8px_36px_rgba(37,211,102,0.5)]"
          >
            <MessageCircle size={24} />
            Escríbeme por WhatsApp
          </a>
          <a
            href="tel:+573001234567"
            className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/30 text-white no-underline px-8 py-5 rounded-full text-base sm:text-lg font-extrabold tracking-wide uppercase transition-all hover:bg-white/20 hover:-translate-y-1 hover:border-white/50"
          >
            <Phone size={24} />
            Llamame Ahora
          </a>
        </div>

        <p className="text-sm sm:text-base text-white/60 mt-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          Torre Medical, El Poblado - Medellín · Respuesta en menos de 2 horas · Sin compromiso
        </p>
      </div>
    </section>
  );
}
