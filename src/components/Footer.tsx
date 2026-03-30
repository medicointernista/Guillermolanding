export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white/65 py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 md:gap-10 mb-8 md:mb-10">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <a href="#inicio" className="inline-block mb-3">
              <img
                src="/manejo-del-dolor-ortopedico-en-medellin.png"
                alt="Dr. Guillermo Rodríguez Restrepo – Ortopedia con Calidad Humana"
                className="h-[50px] sm:h-[60px] w-auto rounded-lg opacity-90 transition-opacity hover:opacity-100"
              />
            </a>
            <p className="text-xs sm:text-[13px] leading-relaxed max-w-[280px]">
              Especialista en Ortopedia y Traumatología. Ortopedia con calidad humana en Torre Medical, Medellín.
            </p>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white/90 mb-3">Contacto</div>
            <ul className="list-none flex flex-col gap-2 sm:gap-3">
              <li>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 mb-1">Dirección</div>
                <span className="text-xs sm:text-[13px] text-white/75">Torre Medical, Calle 7 # 39-107, Consultorio 609, Medellín</span>
              </li>
              <li>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50 mb-1">Horarios</div>
                <div className="text-xs sm:text-[13px] text-white/75">
                  <div>Lunes a Viernes: 07:30 – 18:00</div>
                  <div>Sábados: 07:30 – 13:00</div>
                </div>
              </li>
              <li>
                <a href="mailto:agendasortopediaguillermorodmd@gmail.com" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white flex items-center gap-1 break-all">
                  <span>agendasortopediaguillermorodmd@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/573244081281" target="_blank" rel="noopener" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white flex items-center gap-1">
                  <span>+57 324 408 1281</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white/90 mb-3">Legal</div>
            <ul className="list-none flex flex-col gap-2">
              <li>
                <a href="#" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white">
                  Términos del Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <span className="text-[11px] sm:text-xs">
            © 2026 Dr. Guillermo Rodríguez Restrepo. Todos los derechos reservados.
          </span>
          <a
            href="https://localrank.com.co"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-white/40 no-underline transition-colors hover:text-white/80 whitespace-normal sm:whitespace-nowrap"
          >
            Hecho por <strong className="font-bold text-white/55">LocalRank.com.co</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
