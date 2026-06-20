import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const WA_HREF =
  'https://wa.me/573244081281?text=Hola%2C%20necesito%20ayuda%20desde%20el%20sitio%20web%20del%20Dr.%20Guillermo%20Rodr%C3%ADguez.';

function ErrorShell({
  code,
  heading,
  body,
}: {
  code: string;
  heading: string;
  body: string;
}) {
  return (
    <Layout title={`${code} – Dr. Guillermo Rodríguez Restrepo`}>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f] min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="absolute -top-20 -right-24 w-[480px] h-[480px] rounded-full bg-[rgba(37,211,102,0.06)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-[rgba(37,211,102,0.04)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-lg">
          <p className="text-[96px] sm:text-[128px] font-extrabold leading-none text-white/10 select-none mb-2">
            {code}
          </p>
          <div className="-mt-10 sm:-mt-14 mb-6">
            <span className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.3)] text-[#6ee7b7] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              Error {code}
            </span>
            <h1 className="font-extrabold text-white text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
              {heading}
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {body}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white no-underline px-7 py-3.5 rounded-full text-sm font-extrabold tracking-wide uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:scale-105"
            >
              Volver al Inicio
            </Link>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white no-underline px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-white/20 hover:-translate-y-0.5"
            >
              Contactar por WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            {[
              { to: '/sobre-mi', label: 'Sobre el Dr.' },
              { to: '/contacto', label: 'Contacto' },
              { to: '/artrosis-de-rodillas', label: 'Artrosis de Rodilla' },
              { to: '/plasma-rico-en-plaquetas', label: 'PRP' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="no-underline hover:text-[#25D366] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function NotFoundPage() {
  return (
    <ErrorShell
      code="404"
      heading="Página no encontrada"
      body="La página que buscas no existe o fue movida. Usa los enlaces de abajo para regresar a la sección que necesitas."
    />
  );
}

export function ServerErrorPage() {
  return (
    <ErrorShell
      code="500"
      heading="Error interno del servidor"
      body="Algo salió mal de nuestro lado. Estamos trabajando para resolverlo. Intenta de nuevo en unos minutos o contáctanos directamente."
    />
  );
}
