import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Desktop dropdown: 3 balanced columns
const desktopColumns = [
  {
    label: 'Regenerativo e Intervencionista',
    items: [
      { label: 'Viscosuplementación', href: '/viscosuplementacion' },
      { label: 'Plasma Rico en Plaquetas (PRP)', href: '/plasma-rico-en-plaquetas' },
      { label: 'Células Mesenquimales', href: '/celulas-mesenguimales' },
      { label: 'Infiltraciones Articulares', href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios' },
    ],
  },
  {
    label: 'Pie, Tobillo y Rodilla',
    items: [
      { label: 'Fascitis Plantar', href: '/fascitis-plantar' },
      { label: 'Esguinces Crónicos de Tobillo', href: '/esguinces-cronicos-de-tobillo' },
      { label: 'Fracturas de Tobillo', href: '/fracturas-de-tobillo' },
      { label: 'Hallux Valgus', href: '/hallux-valgus' },
      { label: 'Artrosis de Rodillas', href: '/artrosis-de-rodillas' },
    ],
  },
  {
    label: 'Hombro, Mano y Muñeca',
    items: [
      { label: 'Manguito Rotador', href: '/sindrome-de-manguito-rotador' },
      { label: 'Túnel del Carpo', href: '/sindrome-de-tunel-del-carpo' },
      { label: 'Tendinitis de Quervain', href: '/tendinitis-de-quervain' },
      { label: 'Tendinitis de Muñeca', href: '/tendinitis-de-muneca' },
      { label: 'Dedos en Gatillo', href: '/dedos-en-gatillo-o-resorte' },
      { label: 'Gangliones', href: '/gangliones' },
      { label: 'Fracturas de Radio Distal', href: '/fracturas-de-radio-distal' },
      { label: 'Fracturas de Antebrazo', href: '/fracturas-de-antebrazo' },
      { label: 'Ortopedia Geriátrica', href: '/ortopedia-geriatrica' },
    ],
  },
];

// Mobile: flat list grouped by area
const serviceCategories = [
  {
    label: 'Regenerativo e Intervencionista',
    items: [
      { label: 'Viscosuplementación', href: '/viscosuplementacion' },
      { label: 'Plasma Rico en Plaquetas (PRP)', href: '/plasma-rico-en-plaquetas' },
      { label: 'Células Mesenquimales', href: '/celulas-mesenguimales' },
      { label: 'Infiltraciones Articulares', href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios' },
    ],
  },
  {
    label: 'Pie, Tobillo y Rodilla',
    items: [
      { label: 'Fascitis Plantar', href: '/fascitis-plantar' },
      { label: 'Esguinces Crónicos de Tobillo', href: '/esguinces-cronicos-de-tobillo' },
      { label: 'Fracturas de Tobillo', href: '/fracturas-de-tobillo' },
      { label: 'Hallux Valgus', href: '/hallux-valgus' },
      { label: 'Artrosis de Rodillas', href: '/artrosis-de-rodillas' },
    ],
  },
  {
    label: 'Hombro, Mano y Muñeca',
    items: [
      { label: 'Manguito Rotador', href: '/sindrome-de-manguito-rotador' },
      { label: 'Túnel del Carpo', href: '/sindrome-de-tunel-del-carpo' },
      { label: 'Tendinitis de Quervain', href: '/tendinitis-de-quervain' },
      { label: 'Tendinitis de Muñeca', href: '/tendinitis-de-muneca' },
      { label: 'Dedos en Gatillo', href: '/dedos-en-gatillo-o-resorte' },
      { label: 'Gangliones', href: '/gangliones' },
      { label: 'Fracturas de Radio Distal', href: '/fracturas-de-radio-distal' },
      { label: 'Fracturas de Antebrazo', href: '/fracturas-de-antebrazo' },
      { label: 'Ortopedia Geriátrica', href: '/ortopedia-geriatrica' },
    ],
  },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const closeNav = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navLinkCls = "text-xs lg:text-[13px] font-semibold text-gray-600 no-underline px-2.5 lg:px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-[#1a365d] hover:bg-[#25D366]/10 relative group";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-[0_2px_16px_rgba(26,54,93,0.07)] transition-shadow duration-300">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-6 h-auto py-2 sm:py-2.5 md:py-3 flex items-center justify-between gap-2 sm:gap-4">
          <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0 min-w-0">
            <img
              src="/manejo-del-dolor-ortopedico-en-medellin.png"
              alt="Logo Dr. Guillermo Rodríguez – Ortopedista especialista en Medellín"
              className="h-14 sm:h-16 md:h-20 w-auto rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegación principal">
            <Link to="/" className={navLinkCls}>
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#25D366] to-transparent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/sobre-mi" className={navLinkCls}>
              Sobre Mí
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#25D366] to-transparent group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`${navLinkCls} inline-flex items-center gap-1 bg-transparent border-none cursor-pointer`}
                onClick={() => setServicesOpen(o => !o)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Servicios
                <ChevronDown size={12} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#25D366] to-transparent group-hover:w-full transition-all duration-300"></span>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white border border-gray-200 rounded-2xl shadow-[0_16px_48px_rgba(26,54,93,0.14)] z-[100] p-5 grid grid-cols-3 gap-x-6 gap-y-0 animate-scale-pop">
                  {desktopColumns.map((col) => (
                    <div key={col.label}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#1ebe57] mb-2 pb-1.5 border-b border-gray-100">{col.label}</p>
                      <ul className="list-none flex flex-col gap-0">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              className="block text-[12px] font-medium text-gray-600 no-underline py-1 px-2 rounded-lg hover:bg-[#25D366]/10 hover:text-[#1a365d] transition-all duration-150"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contacto" className={navLinkCls}>
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#25D366] to-transparent group-hover:w-full transition-all duration-300"></span>
            </Link>

            {isHome && (
              <>
                <a href="/#testimonios" className={navLinkCls}>
                  Testimonios
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#25D366] to-transparent group-hover:w-full transition-all duration-300"></span>
                </a>
              </>
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-extrabold tracking-wider uppercase transition-all duration-300 shadow-[0_3px_16px_rgba(37,211,102,0.40)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.60)] hover:scale-105 whitespace-nowrap flex-shrink-0 group"
                target="_blank"
                rel="noopener"
                aria-label="Agendar cita por WhatsApp"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-90 animate-pulse flex-shrink-0"></span>
                {WA_ICON}
                AGENDAR
              </a>
              <a
                href="tel:+573244081281"
                className="inline-flex items-center gap-2 bg-red-600 text-white no-underline px-3 py-2 md:px-4 md:py-2.5 rounded-full text-[10px] md:text-xs font-extrabold tracking-wider uppercase transition-all duration-300 shadow-[0_3px_16px_rgba(220,38,38,0.40)] hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(220,38,38,0.60)] hover:scale-105 whitespace-nowrap flex-shrink-0"
                aria-label="Llamar al Dr. Guillermo Rodríguez"
              >
                LLÁMAME AHORA
              </a>
            </div>
            <div className="md:hidden flex items-center gap-1.5">
              <a
                href="https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
                className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-white no-underline px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all duration-300 shadow-[0_3px_16px_rgba(37,211,102,0.40)] hover:bg-[#1ebe57]"
                target="_blank"
                rel="noopener"
                aria-label="Agendar cita por WhatsApp"
              >
                {WA_ICON}
              </a>
            </div>
            <button
              className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 sm:w-9 sm:h-9 bg-transparent border-none cursor-pointer p-1 sm:p-1.5 rounded-lg transition-all hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menú"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={18} className="text-[#1a365d] sm:w-5 sm:h-5" />
              ) : (
                <Menu size={18} className="text-[#1a365d] sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <nav
          className={`lg:hidden fixed top-14 sm:top-16 left-0 right-0 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] bg-white border-b border-gray-200 shadow-[0_8px_32px_rgba(26,54,93,0.12)] z-[999] px-3 sm:px-6 py-3 sm:py-4 overflow-y-auto flex-col gap-1 sm:gap-2 transition-all duration-200 ${isOpen ? 'flex' : 'hidden'}`}
          aria-label="Menú móvil"
        >
          <Link to="/" onClick={closeNav} className="text-sm sm:text-[15px] font-semibold text-gray-700 no-underline py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all hover:bg-gray-100 hover:text-[#1a365d]">Inicio</Link>
          <Link to="/sobre-mi" onClick={closeNav} className="text-sm sm:text-[15px] font-semibold text-gray-700 no-underline py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all hover:bg-gray-100 hover:text-[#1a365d]">Sobre Mí</Link>

          <button
            className="flex items-center justify-between w-full text-sm sm:text-[15px] font-semibold text-gray-700 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all hover:bg-gray-100 hover:text-[#1a365d] bg-transparent border-none cursor-pointer text-left"
            onClick={() => setMobileServicesOpen(o => !o)}
          >
            Servicios
            <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileServicesOpen && (
            <div className="pl-4 flex flex-col gap-1">
              {serviceCategories.map((cat) => (
                <div key={cat.label} className="mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#1ebe57] px-3 mb-1">{cat.label}</p>
                  {cat.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeNav}
                      className="block text-xs text-gray-600 no-underline py-1.5 px-3 rounded-lg hover:bg-[#25D366]/10 hover:text-[#1a365d] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          <Link to="/contacto" onClick={closeNav} className="text-sm sm:text-[15px] font-semibold text-gray-700 no-underline py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all hover:bg-gray-100 hover:text-[#1a365d]">Contacto</Link>

          <a
            href="https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
            className="mt-2 sm:mt-3 bg-[#25D366] text-white no-underline text-center font-semibold rounded-full py-2.5 sm:py-3 px-3 sm:px-4 transition-all hover:bg-[#1ebe57] flex items-center justify-center gap-2 text-sm sm:text-base"
            target="_blank"
            rel="noopener"
            onClick={closeNav}
          >
            {WA_ICON}
            AGENDAR CITA
          </a>
        </nav>
      </header>
    </>
  );
}
