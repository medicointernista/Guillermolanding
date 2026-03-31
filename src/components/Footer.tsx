export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/70 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-base font-bold text-white mb-1">Dr. Guillermo Rodríguez Restrepo</h3>
            <p className="text-xs text-[#25D366] font-semibold mb-3">Ortopedista y Traumatólogo · 30+ años</p>
            <p className="text-xs sm:text-[13px] leading-relaxed text-white/60">
              Torre Medical · El Poblado · Medellín<br/>
              4.8/5 · Doctoralia verificado
            </p>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Contacto</div>
            <ul className="list-none flex flex-col gap-3 text-xs sm:text-[13px] text-white/60">
              <li className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-white/50">Dirección</div>
                <span>Calle 7 # 39-107<br/>Consultorio 609, Medellín</span>
              </li>
              <li>
                <a href="tel:+573244081281" className="hover:text-white transition-colors">
                  +57 324 408 1281
                </a>
              </li>
              <li>
                <a href="mailto:agendasortopediaguillermorodmd@gmail.com" className="hover:text-white transition-colors break-all">
                  agendasortopediaguillermorodmd@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Horarios</div>
            <ul className="list-none flex flex-col gap-2 text-xs sm:text-[13px] text-white/60">
              <li>
                <div className="font-semibold text-white/80">Mar y Jue</div>
                <span>2:00 pm – 6:30 pm</span>
              </li>
              <li>
                <div className="font-semibold text-white/80">Mié y Vie</div>
                <span>7:30 am – 6:30 pm</span>
              </li>
              <li>
                <div className="font-semibold text-white/80">Sábados</div>
                <span>7:30 am – 1:00 pm</span>
              </li>
            </ul>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Legal</div>
            <ul className="list-none flex flex-col gap-2">
              <li>
                <a href="#privacidad" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#terminos" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white">
                  Términos del Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-[10px] sm:text-xs text-white/50 text-center sm:text-left">
            <p className="mb-2">
              © 2026 Dr. Guillermo Rodríguez Restrepo. Todos los derechos reservados.<br/>
              <span className="text-[9px]">Política de Tratamiento de Datos Personales · Términos y Condiciones del Servicio</span>
            </p>
            <p className="text-white/40 text-[9px]">
              Hecho por <a href="https://localrank.com.co" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors">LocalRank.com.co</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
