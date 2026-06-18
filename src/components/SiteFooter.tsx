import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white/70 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-base font-bold text-white mb-1">Dr. Guillermo Rodríguez Restrepo</p>
            <p className="text-xs text-[#25D366] font-semibold mb-3">Ortopedista y Traumatólogo · Medellín</p>
            <p className="text-xs sm:text-[13px] leading-relaxed text-white/60">
              Torre Medical · Calle 7 #39-107 · Consultorio 609<br/>
              Medellín, Antioquia, Colombia<br/>
              "Ortopedia con Calidad Humana"
            </p>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Contacto</p>
            <ul className="list-none flex flex-col gap-3 text-xs sm:text-[13px] text-white/60">
              <li className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-white/50">Dirección</div>
                <span>Calle 7 # 39-107<br/>Consultorio 609, Medellín</span>
              </li>
              <li>
                <div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">WhatsApp / Teléfono</div>
                <a href="https://wa.me/573244081281" className="hover:text-white transition-colors block">
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
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Horarios</p>
            <ul className="list-none flex flex-col gap-2 text-xs sm:text-[13px] text-white/60">
              <li>
                <div className="font-semibold text-white/80">Lunes a Viernes</div>
                <span>07:30 – 18:00</span>
              </li>
              <li>
                <div className="font-semibold text-white/80">Sábados</div>
                <span>07:30 – 13:00</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-3">Navegación</p>
              <ul className="list-none flex flex-col gap-1.5">
                <li><Link to="/" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Inicio</Link></li>
                <li><Link to="/sobre-mi" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Sobre Mí</Link></li>
                <li><Link to="/contacto" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Legal</p>
            <ul className="list-none flex flex-col gap-2">
              <li>
                <Link to="/aviso-de-privacidad" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/descargo-de-responsabilidad" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white">
                  Descargo de Responsabilidad
                </Link>
              </li>
              <li>
                <Link to="/compromiso-de-etica" className="text-xs sm:text-[13px] text-white/60 no-underline transition-colors hover:text-white">
                  Compromiso de Ética
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-[10px] sm:text-xs text-white/50 text-center">
            <p className="mb-2">
              © 2026 Dr. Guillermo Rodríguez Restrepo. Todos los derechos reservados.<br/>
              <span className="text-[9px]">Política de Tratamiento de Datos Personales · Términos y Condiciones del Servicio</span>
            </p>
            <p className="text-white/40 text-[9px] mb-3">
              Optimizado por <a href="https://doctorweb.agency" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors">DoctorWeb Agency</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
