import Layout from '../components/Layout';

const WA_HREF = "https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F";

const certs = [
  { img: '/SCCOT.jpg', alt: 'Membresía SCCOT – Asociación Colombiana de Cirugía Ortopédica', label: 'Miembro SCCOT', sub: 'Asociación Colombiana de Cirugía Ortopédica y Traumatología' },
  { img: '/ACCART-2025.jpg', alt: 'Diplomado Internacional Ortobiológicos ACCART 2025', label: 'ACCART 2025', sub: 'Diplomado Internacional en Uso de Ortobiológicos' },
  { img: '/Logo_Universidad_de_los_Andes.jpg', alt: 'Magíster en Educación Universidad de los Andes Colombia', label: 'Magíster en Educación', sub: 'Universidad de los Andes, Colombia – 2013' },
  { img: '/Logo-Universidad-CES-Colombia-removebg-preview.png', alt: 'Docente Ortopedia Universidad CES Colombia', label: 'Docente de Ortopedia', sub: 'Universidad CES, Colombia' },
];

const testimonials = [
  { name: 'María L.', text: 'El tratamiento para mi tendinitis fue claro y efectivo, siempre con un acompañamiento profesional.' },
  { name: 'Jorge R.', text: 'Recibí un manejo integral para mi lesión de hombro que mejoró notablemente mi movilidad.' },
  { name: 'Carlos M.', text: 'Gracias a la atención en ortopedia pude mejorar el dolor de rodilla y volver a mis actividades diarias con confianza.' },
];

export default function SobreMiPage() {
  return (
    <Layout
      title="Sobre el Dr. Guillermo Rodríguez Restrepo – Ortopedista Medellín"
      description="Conozca el perfil profesional, certificaciones y trayectoria del Dr. Guillermo Rodríguez Restrepo, Especialista en Ortopedia y Traumatología en Medellín."
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f] py-14 sm:py-20 px-4 sm:px-6">
        <div className="absolute -top-16 -right-20 w-[500px] h-[500px] rounded-full bg-[rgba(37,211,102,0.07)] pointer-events-none animate-rotate-glow"></div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
          <div>
            <p className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.3)] text-[#6ee7b7] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Ortopedia con calidad humana en Medellín
            </p>
            <h1 className="font-extrabold text-white leading-tight mb-2 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
              Dr. Guillermo Rodríguez Restrepo
            </h1>
            <p className="text-[#25D366] font-semibold text-base sm:text-lg mb-5 opacity-0 animate-cascade" style={{ animationDelay: '0.25s' }}>
              Ortopedista y Traumatólogo · 30+ años de experiencia
            </p>
            <p className="text-white/85 leading-relaxed text-sm sm:text-base mb-6 opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
              Manejo integral de lesiones musculoesqueléticas y enfermedades articulares, con diagnósticos ecográficos precisos y tratamientos ortopédicos avanzados enfocados en recuperar tu movilidad y calidad de vida.
            </p>
            <div className="flex gap-3 opacity-0 animate-spring" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://wa.me/573244081281?text=Hola%2C%20Dr.%20Guillermo.%20Vi%20su%20perfil%20en%20el%20sitio%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20usted.%20%C2%BFCu%C3%A1les%20son%20los%20horarios%20disponibles%3F"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-6 py-3 rounded-full text-sm font-extrabold tracking-wide uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:scale-105"
              >
                AGENDAR CITA POR WHATSAPP
              </a>
            </div>
          </div>
          <div className="bg-white/[0.08] border border-white/15 rounded-3xl overflow-hidden opacity-0 animate-slide-right" style={{ animationDelay: '0.4s' }}>
            <img
              src="/Dr-Guillermo-rodriguez.jpg"
              alt="Dr. Guillermo Rodríguez Restrepo – Ortopedista y Traumatólogo en Medellín, Antioquia"
              className="w-full h-72 sm:h-96 object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Authority – Tu Especialista de Confianza */}
      <section className="bg-white border-b border-gray-200 py-12 sm:py-16 md:py-20 px-4 sm:px-6" id="especialista" aria-label="Tu especialista de confianza">
        <div className="max-w-[1200px] mx-auto">
          <div>
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5">
                Tu Especialista de Confianza
              </span>

              <h2 className="font-extrabold text-[#1a365d] leading-tight mb-1 text-2xl sm:text-3xl md:text-4xl">
                Dr. Guillermo Rodríguez Restrepo – Ortopedista Torre Medical
              </h2>

              <p className="text-[14px] sm:text-[16px] text-[#25D366] font-semibold mb-5">
                Ortopedista y Traumatólogo · 30+ años de experiencia
              </p>

              <p className="text-sm sm:text-base md:text-[17px] text-gray-700 leading-relaxed mb-6">
                Especialista en ortopedia y traumatología con más de 30 años de experiencia. Atiende en Torre Medical, El Poblado, Medellín con diagnóstico ecográfico. Maneja patologías de mediana y alta complejidad con respaldo académico, científico y clínico — docente universitario, investigador y referente en medicina regenerativa ortopédica.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-[#f0fdf4] to-[#e0fdf4] border border-[#bbf7d0] rounded-2xl p-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#15803d] mb-2">Modalidades</h3>
                  <p className="text-sm text-gray-700">Presencial · Telemedicina</p>
                </div>
                <div className="bg-gradient-to-br from-[#f0fdf4] to-[#e0fdf4] border border-[#bbf7d0] rounded-2xl p-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#15803d] mb-2">Idiomas</h3>
                  <p className="text-sm text-gray-700">Español · English</p>
                </div>
              </div>

              <div className="mb-8 opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Certificaciones y Membresías</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {[
                    'Miembro de la Asociación Colombiana de Cirugía Ortopédica y Traumatología (SCCOT)',
                    'Entrenamiento en Ecografía Músculo Esquelética 2025',
                    'Diplomado Internacional en Uso de Ortobiológicos ACCART 2025',
                    'Magister en Educación – Universidad de los Andes, Colombia (2013)',
                    'PhD en Educación y Sociedad – Universidad de Barcelona, España 2026',
                    'Docente de Ortopedia – Universidad CES Colombia',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#25D366] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.05s' }}>Formación y Certificaciones</span>
          <h2 className="font-extrabold text-[#1a365d] text-2xl sm:text-3xl mb-8 opacity-0 animate-cascade" style={{ animationDelay: '0.1s' }}>Avales Académicos y Profesionales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center text-center gap-3 opacity-0 animate-scale-pop hover:border-[#25D366] hover:shadow-[0_8px_32px_rgba(37,211,102,0.12)] hover:-translate-y-1 transition-all" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
                <img src={c.img} alt={c.alt} className="h-14 w-auto object-contain" loading="lazy" />
                <div>
                  <p className="font-bold text-[#1a365d] text-sm">{c.label}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Text */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-extrabold text-[#1a365d] text-2xl sm:text-3xl md:text-4xl mb-5 opacity-0 animate-cascade" style={{ animationDelay: '0.15s' }}>
            Experto en Ortopedia y Traumatología en Medellín
          </h2>
          <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
            <p>
              El Dr. Guillermo Rodríguez Restrepo es un especialista en Ortopedia y Traumatología con amplia trayectoria en el manejo de lesiones musculoesqueléticas, enfermedades articulares y tratamientos ortopédicos de vanguardia enfocados en la recuperación funcional de sus pacientes.
            </p>
            <p>
              Su enfoque se caracteriza por ofrecer <strong className="text-[#1a365d]">atención personalizada, humana y basada en evidencia</strong>, priorizando siempre las opciones menos invasivas antes de considerar intervenciones quirúrgicas. Utiliza tecnología de ecografía músculo-esquelética para diagnósticos precisos y procedimientos guiados.
            </p>
            <p>
              Con formación académica de alto nivel —incluyendo un Magíster en Educación de la Universidad de los Andes y la docencia en la Universidad CES— el Dr. Rodríguez combina conocimiento científico actualizado con una comunicación clara y empática con el paciente.
            </p>
            <p>
              Atiende en la Torre Medical de Medellín, un entorno especializado donde ofrece toda la gama de tratamientos: desde los regenerativos como el PRP y la viscosuplementación, hasta las infiltraciones ecoguiadas y la cirugía de mínima invasión cuando es necesaria.
            </p>
          </div>
        </div>
      </section>

      {/* Doctoralia */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex justify-center">
          <a
            href="https://www.doctoralia.co/guillermo-fernando-rodriguez-restrepo/ortopedista-y-traumatologo/medellin#address-id=69445&is-online-only=false&filters%5Bspecializations%5D%5B%5D=48"
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center gap-3 no-underline hover:opacity-90 transition-opacity group text-center"
          >
            <img src="/Logo-Doctoralia.jpg" alt="Dr. Guillermo Rodríguez en Doctoralia – plataforma médica verificada" className="h-12 w-auto object-contain" loading="lazy" />
            <div>
              <p className="text-sm font-semibold text-[#1a365d] mb-1 group-hover:underline">Verificado en Doctoralia</p>
              <p className="text-xs text-gray-500">Perfil médico activo con reseñas reales de pacientes. Reputación 4.8/5 estrellas.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-extrabold text-white text-2xl sm:text-3xl mb-8 text-center opacity-0 animate-cascade" style={{ animationDelay: '0.1s' }}>
            Lo que Dicen Nuestros Pacientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-5 opacity-0 animate-scale-pop" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <div className="text-[#f59e0b] text-sm mb-3">★★★★★</div>
                <p className="font-serif italic text-white/90 text-sm leading-relaxed mb-3">"{t.text}"</p>
                <p className="font-bold text-[#25D366] text-xs">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-extrabold text-[#1a365d] text-xl sm:text-2xl mb-4">¿Listo para recuperar tu movilidad?</h2>
          <a href={WA_HREF} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-8 py-4 rounded-full text-sm font-extrabold tracking-wide uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:-translate-y-1 hover:scale-105">
            AGENDA TU CITA AHORA
          </a>
        </div>
      </section>
    </Layout>
  );
}
