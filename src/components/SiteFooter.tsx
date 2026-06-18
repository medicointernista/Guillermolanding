import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white/70 py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-base font-bold text-white mb-1">Dr. Guillermo Rodríguez Restrepo</p>
            <p className="text-xs text-[#25D366] font-semibold mb-3">Ortopedista y Traumatólogo · Medellín</p>
            <p className="text-xs sm:text-[13px] leading-relaxed text-white/60">
              Torre Medical · Calle 7 #39-107 · Consultorio 609<br/>
              Medellín, Antioquia, Colombia<br/>
              "Ortopedia con Calidad Humana"
            </p>
            <div className="mt-3 flex flex-col gap-1.5">
              <a
                href="https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#1ebe57] self-start"
              >
                Agendar por WhatsApp
              </a>
              <a
                href="tel:+573244081281"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white no-underline px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:bg-white/20 self-start"
              >
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Contact + Hours */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Contacto</p>
            <ul className="list-none flex flex-col gap-2 text-xs sm:text-[13px] text-white/60 mb-4">
              <li className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-white/50">Dirección</div>
                <span>Calle 7 # 39-107<br/>Consultorio 609, Medellín</span>
              </li>
              <li>
                <div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Teléfono / WhatsApp</div>
                <a href="tel:+573244081281" className="hover:text-white transition-colors block">
                  +57 324 408 1281
                </a>
              </li>
              <li>
                <a href="mailto:agendasortopediaguillermorodmd@gmail.com" className="hover:text-white transition-colors break-all">
                  agendasortopediaguillermorodmd@gmail.com
                </a>
              </li>
            </ul>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-3">Horarios</p>
            <ul className="list-none flex flex-col gap-2 text-xs sm:text-[13px] text-white/60">
              <li><div className="font-semibold text-white/80">Mar a Viernes</div><span>07:30 – 18:30</span></li>
              <li><div className="font-semibold text-white/80">Sábados</div><span>07:30 – 13:00</span></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-4">Navegación</p>
            <ul className="list-none flex flex-col gap-1.5 mb-3">
              <li><Link to="/sobre-mi" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Sobre Mí</Link></li>
              <li><Link to="/contacto" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Contacto</Link></li>
            </ul>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-2">Tratamientos Regenerativos</p>
            <ul className="list-none flex flex-col gap-1 mb-3">
              <li><Link to="/plasma-rico-en-plaquetas" className="text-xs text-white/60 no-underline hover:text-white transition-colors">PRP – Plasma Rico en Plaquetas</Link></li>
              <li><Link to="/viscosuplementacion" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Viscosuplementación</Link></li>
              <li><Link to="/celulas-mesenguimales" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Células Mesenquimales</Link></li>
              <li><Link to="/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Infiltraciones Articulares</Link></li>
            </ul>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-2">Pie, Tobillo y Rodilla</p>
            <ul className="list-none flex flex-col gap-1">
              <li><Link to="/fascitis-plantar" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Fascitis Plantar</Link></li>
              <li><Link to="/esguinces-cronicos-de-tobillo" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Esguinces Crónicos de Tobillo</Link></li>
              <li><Link to="/fracturas-de-tobillo" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Fracturas de Tobillo</Link></li>
              <li><Link to="/hallux-valgus" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Hallux Valgus</Link></li>
              <li><Link to="/artrosis-de-rodillas" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Artrosis de Rodillas</Link></li>
            </ul>
          </div>

          {/* Services + Legal */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-2">Hombro, Mano y Muñeca</p>
            <ul className="list-none flex flex-col gap-1 mb-3">
              <li><Link to="/sindrome-de-manguito-rotador" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Manguito Rotador</Link></li>
              <li><Link to="/sindrome-de-tunel-del-carpo" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Túnel del Carpo</Link></li>
              <li><Link to="/tendinitis-de-quervain" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Tendinitis de Quervain</Link></li>
              <li><Link to="/tendinitis-de-muneca" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Tendinitis de Muñeca</Link></li>
              <li><Link to="/dedos-en-gatillo-o-resorte" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Dedos en Gatillo</Link></li>
              <li><Link to="/gangliones" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Gangliones</Link></li>
              <li><Link to="/fracturas-de-radio-distal" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Fracturas de Radio Distal</Link></li>
              <li><Link to="/fracturas-de-antebrazo" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Fracturas de Antebrazo</Link></li>
              <li><Link to="/ortopedia-geriatrica" className="text-xs text-white/60 no-underline hover:text-white transition-colors">Ortopedia Geriátrica</Link></li>
            </ul>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-2">Legal</p>
            <ul className="list-none flex flex-col gap-1">
              <li><Link to="/aviso-de-privacidad" className="text-xs text-white/60 no-underline transition-colors hover:text-white">Aviso de Privacidad</Link></li>
              <li><Link to="/terminos-y-condiciones" className="text-xs text-white/60 no-underline transition-colors hover:text-white">Términos y Condiciones</Link></li>
              <li><Link to="/descargo-de-responsabilidad" className="text-xs text-white/60 no-underline transition-colors hover:text-white">Descargo de Responsabilidad</Link></li>
              <li><Link to="/compromiso-de-etica" className="text-xs text-white/60 no-underline transition-colors hover:text-white">Compromiso de Ética</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-[10px] text-white/50 text-center">
            <p className="mb-1">
              © 2026 Dr. Guillermo Rodríguez Restrepo. Todos los derechos reservados. · <span className="text-[9px]">Política de Tratamiento de Datos · Términos y Condiciones</span>
            </p>
            <p className="text-white/40 text-[9px]">
              Optimizado por <a href="https://doctorweb.agency" target="_blank" rel="noopener" className="hover:text-white/60 transition-colors">DoctorWeb Agency</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

