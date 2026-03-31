import { MapPin, Clock, MessageCircle, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="ubicacion" aria-labelledby="ubicacion-heading">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Ubicación
        </span>
        <h2 className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Consultorio de Ortopedia en Torre Medical, Medellín
        </h2>
        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed max-w-[580px] opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
          Fácil acceso en El Poblado. Estacionamiento disponible. Atención sin largas colas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 items-stretch mt-8 sm:mt-10">
          <div className="rounded-2xl overflow-hidden shadow-md border-[1.5px] border-gray-200 h-full min-h-[360px] animate-slide-left" style={{ animationDelay: '0.4s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3966.433895715107!2d-75.5701125!3d6.2063571!3m2!1i1024!2i768!4f13.1!2m1!1sortopedista%20y%20traumat%C3%B3logo%20en%20medellin%20dr%20guillermo%20rodriguez!5e0!3m2!1ses-419!2sco!4v1773845881650!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Dr. Guillermo Rodríguez"
              className="block w-full h-full"
            ></iframe>
          </div>

          <div className="flex flex-col gap-2 h-full opacity-0 animate-slide-right" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gray-50 border-[1.5px] border-gray-200 rounded-xl p-3 sm:p-3.5 flex items-center gap-2 sm:gap-3 flex-1 opacity-0 animate-scale-pop" style={{ animationDelay: '0.6s' }}>
              <div className="w-8 sm:w-[38px] h-8 sm:h-[38px] rounded-lg bg-[#1a365d] text-white flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Dirección</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
                  Torre Medical, Calle 7 # 39-107<br />Consultorio 609, Medellín
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-[1.5px] border-gray-200 rounded-xl p-3 sm:p-3.5 flex items-center gap-2 sm:gap-3 flex-1 opacity-0 animate-scale-pop" style={{ animationDelay: '0.65s' }}>
              <div className="w-8 sm:w-[38px] h-8 sm:h-[38px] rounded-lg bg-[#1a365d] text-white flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Horarios de Atención</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed space-y-0.5">
                  <div>Mar y Jue: 14:00 – 18:30</div>
                  <div>Mié y Vie: 07:30 – 18:30</div>
                  <div>Sábados: 07:30 – 13:00</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-[1.5px] border-gray-200 rounded-xl p-3 sm:p-3.5 flex items-center gap-2 sm:gap-3 flex-1 opacity-0 animate-scale-pop" style={{ animationDelay: '0.7s' }}>
              <div className="w-8 sm:w-[38px] h-8 sm:h-[38px] rounded-lg bg-[#1a365d] text-white flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">WhatsApp</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed space-y-0.5">
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-gray-500 font-medium">Agendar:</div>
                    <a
                      href="https://wa.me/573244081281?text=Hola%20Dr.%20Guillermo%20Rodr%C3%ADguez,%20quiero%20agendar%20una%20valoraci%C3%B3n%20para%20recuperar%20mi%20movilidad.%20Vengo%20desde%20la%20p%C3%A1gina%20web."
                      className="text-[#1a365d] no-underline hover:underline break-all"
                      target="_blank"
                      rel="noopener"
                    >
                      +57 324 408 1281
                    </a>
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-red-600 font-medium">Urgencia:</div>
                    <a
                      href="https://wa.me/573244340199?text=Tengo%20una%20urgencia%20m%C3%A9dica.%20Vengo%20desde%20la%20p%C3%A1gina%20web."
                      className="text-red-600 no-underline hover:underline break-all"
                      target="_blank"
                      rel="noopener"
                    >
                      +57 324 434 0199
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-[1.5px] border-gray-200 rounded-xl p-3 sm:p-3.5 flex items-center gap-2 sm:gap-3 flex-1 opacity-0 animate-scale-pop" style={{ animationDelay: '0.75s' }}>
              <div className="w-8 sm:w-[38px] h-8 sm:h-[38px] rounded-lg bg-[#1a365d] text-white flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Email</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
                  <a
                    href="mailto:agendasortopediaguillermorodmd@gmail.com"
                    className="text-[#1a365d] no-underline hover:underline break-all"
                  >
                    agendasortopediaguillermorodmd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/573244081281?text=Hola%20Dr.%20Guillermo%20Rodr%C3%ADguez,%20quiero%20agendar%20una%20valoraci%C3%B3n%20para%20recuperar%20mi%20movilidad.%20Vengo%20desde%20la%20p%C3%A1gina%20web."
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white no-underline px-6 sm:px-7 py-3 sm:py-4 rounded-full text-sm sm:text-[15px] font-extrabold tracking-wide uppercase transition-all shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(37,211,102,0.5)] w-full justify-center mt-0.5 opacity-0 animate-spring"
              style={{ animationDelay: '0.8s' }}
            >
              AGENDAR MI CONSULTA
            </a>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 bg-white border-[1.5px] border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 shadow-sm opacity-0 animate-fade-up" style={{ animationDelay: '0.85s' }}>
              <div className="flex gap-0.5 flex-shrink-0">
                <span className="text-[#f59e0b] text-sm sm:text-[15px]">★</span>
                <span className="text-[#f59e0b] text-sm sm:text-[15px]">★</span>
                <span className="text-[#f59e0b] text-sm sm:text-[15px]">★</span>
                <span className="text-[#f59e0b] text-sm sm:text-[15px]">★</span>
                <span className="text-[#f59e0b] text-sm sm:text-[15px]">★</span>
              </div>
              <div className="text-xs sm:text-[13px] font-semibold text-gray-800 flex-1">
                <strong>4.8 / 5</strong> — 48+ reseñas verificadas
              </div>
              <span className="text-[10px] sm:text-[11px] text-gray-400 sm:border-l sm:border-gray-200 sm:pl-2.5 flex-shrink-0">
                Doctoralia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
