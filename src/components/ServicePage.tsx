import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const WA_HREF = "https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F";

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface FAQ {
  q: string;
  a: string;
}

interface RelatedLink {
  href: string;
  label: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  symptomsTitle?: string;
  symptoms?: string[];
  treatmentsTitle?: string;
  treatments?: { title: string; desc: string }[];
  benefitsTitle?: string;
  benefits?: string[];
  drApproach?: string;
  faqs?: FAQ[];
  relatedLinks?: RelatedLink[];
  extraContent?: ReactNode;
}

function FAQItem({ q, a }: FAQ) {
  return (
    <details className="border border-gray-200 rounded-2xl overflow-hidden group">
      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none font-semibold text-[#1a365d] text-sm sm:text-base list-none gap-3 hover:bg-gray-50 transition-colors">
        {q}
        <ChevronRight size={16} className="flex-shrink-0 text-[#25D366] group-open:rotate-90 transition-transform duration-200" />
      </summary>
      <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
        {a}
      </div>
    </details>
  );
}

export default function ServicePage({
  badge,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  intro,
  symptomsTitle = 'Síntomas e Indicaciones',
  symptoms,
  treatmentsTitle = 'Opciones de Tratamiento',
  treatments,
  benefitsTitle = 'Beneficios',
  benefits,
  drApproach,
  faqs,
  relatedLinks,
  extraContent,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="absolute -top-16 -right-20 w-[500px] h-[500px] rounded-full bg-[rgba(37,211,102,0.07)] pointer-events-none animate-rotate-glow"></div>
        <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-[rgba(255,255,255,0.04)] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center relative z-10">
          <div>
            <p className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.3)] text-[#6ee7b7] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {badge}
            </p>
            <h1 className="font-extrabold text-white leading-tight mb-5 text-xl sm:text-2xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
              {title}
            </h1>
            <p className="text-white/85 leading-relaxed mb-6 text-sm sm:text-base md:text-lg opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 opacity-0 animate-spring" style={{ animationDelay: '0.5s' }}>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white no-underline px-6 py-3 rounded-full text-sm font-extrabold tracking-wide uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] hover:scale-105"
              >
                {WA_ICON}
                AGENDAR CITA
              </a>
              <a
                href="tel:+573244081281"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white no-underline px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:bg-white/20 hover:border-white/50"
              >
                +57 324 408 1281
              </a>
            </div>
          </div>

          <div className="bg-white/[0.08] border border-white/15 rounded-2xl sm:rounded-3xl backdrop-blur-lg overflow-hidden relative opacity-0 animate-slide-right group hover:border-white/30 hover:bg-white/[0.12] transition-all" style={{ animationDelay: '0.4s' }}>
            <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="hover:text-[#1a365d] transition-colors no-underline">Inicio</Link>
          <ChevronRight size={12} />
          <Link to="/contacto" className="hover:text-[#1a365d] transition-colors no-underline">Servicios</Link>
          <ChevronRight size={12} />
          <span className="text-[#1a365d] font-medium">{badge}</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Dr. Guillermo Rodríguez Restrepo · Medellín
            </span>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
              {intro}
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      {symptoms && symptoms.length > 0 && (
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#f0fdf4]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-extrabold text-[#1a365d] text-2xl sm:text-3xl mb-6 opacity-0 animate-cascade" style={{ animationDelay: '0.1s' }}>
              {symptomsTitle}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0">
              {symptoms.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl p-4 opacity-0 animate-scale-pop transition-all hover:border-[#25D366] hover:shadow-[0_4px_16px_rgba(37,211,102,0.12)] hover:-translate-y-1"
                  style={{ animationDelay: `${0.15 + i * 0.06}s` }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm text-gray-700 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Treatments */}
      {treatments && treatments.length > 0 && (
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-extrabold text-[#1a365d] text-2xl sm:text-3xl mb-6 opacity-0 animate-cascade" style={{ animationDelay: '0.1s' }}>
              {treatmentsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {treatments.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-[#25D366] hover:shadow-[0_12px_40px_rgba(37,211,102,0.12)] hover:-translate-y-1 opacity-0 animate-scale-pop group relative overflow-hidden"
                  style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25D366] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="font-bold text-[#1a365d] mb-2 text-sm sm:text-base group-hover:text-[#25D366] transition-colors">{t.title}</h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-extrabold text-white text-2xl sm:text-3xl mb-6 opacity-0 animate-cascade" style={{ animationDelay: '0.1s' }}>
              {benefitsTitle}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white/10 border border-white/15 rounded-2xl p-4 text-white/90 text-sm opacity-0 animate-scale-pop hover:bg-white/15 transition-all"
                  style={{ animationDelay: `${0.15 + i * 0.06}s` }}
                >
                  <span className="w-5 h-5 rounded-full bg-[#25D366] flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Extra content slot */}
      {extraContent}

      {/* Dr approach */}
      {drApproach && (
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#f0fdf4] border border-[rgba(37,211,102,0.25)] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <img
                src="/Dr-Guillermo-rodriguez.jpg"
                alt="Dr. Guillermo Rodríguez Restrepo, Ortopedista en Medellín"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top flex-shrink-0 border-4 border-white shadow-lg"
              />
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2 block">Enfoque del Especialista</span>
                <h2 className="font-extrabold text-[#1a365d] text-xl sm:text-2xl mb-3">Dr. Guillermo Rodríguez Restrepo</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{drApproach}</p>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-5 py-2.5 rounded-full text-sm font-extrabold tracking-wide uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)]"
                >
                  {WA_ICON}
                  AGENDAR MI CITA
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-[800px] mx-auto">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Preguntas Frecuentes
            </span>
            <h2 className="font-extrabold text-[#1a365d] text-2xl sm:text-3xl mb-6 opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
              Resolvemos tus dudas
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div key={i} className="opacity-0 animate-fade-up" style={{ animationDelay: `${0.25 + i * 0.06}s` }}>
                  <FAQItem q={faq.q} a={faq.a} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0f2340]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-extrabold text-white text-2xl sm:text-3xl mb-3 opacity-0 animate-cascade" style={{ animationDelay: '0.1s' }}>
            ¿Tienes síntomas o dolor?<br/>Agenda tu valoración hoy
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Torre Medical · Calle 7 #39-107 Consultorio 609 · Medellín, Antioquia<br/>
            Martes a Viernes 07:30–18:30 · Sábados 07:30–13:00
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center opacity-0 animate-spring" style={{ animationDelay: '0.3s' }}>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-7 py-3.5 rounded-full text-sm font-extrabold tracking-wide uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] hover:scale-105"
            >
              {WA_ICON}
              AGENDAR POR WHATSAPP
            </a>
            <a
              href="tel:+573244081281"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white no-underline px-7 py-3.5 rounded-full text-sm font-bold uppercase transition-all duration-300 hover:bg-white/20"
            >
              +57 324 408 1281
            </a>
          </div>
        </div>
      </section>

      {/* Related links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Servicios Relacionados</p>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="inline-flex items-center gap-1.5 text-xs text-[#1a365d] bg-[#f0fdf4] border border-[rgba(37,211,102,0.25)] no-underline px-3.5 py-1.5 rounded-full font-semibold hover:bg-[rgba(37,211,102,0.15)] transition-all"
                >
                  <ChevronRight size={11} className="text-[#25D366]" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
