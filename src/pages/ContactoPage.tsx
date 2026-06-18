import { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const WA_HREF = "https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', motivo: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hola, me comunico desde el sitio web del Dr. Guillermo Rodríguez. Mi nombre es ${form.nombre}${form.motivo ? ', motivo de consulta: ' + form.motivo : ''}. Mi teléfono de contacto es ${form.telefono}. Quedo atento a su respuesta.`);
    window.open(`https://wa.me/573244081281?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <Layout
      title="Contacto – Dr. Guillermo Rodríguez Restrepo | Ortopedista Medellín"
      description="Contáctenos para agendar su cita con el Dr. Guillermo Rodríguez Restrepo, Ortopedista en Medellín. Torre Medical, Consultorio 609. WhatsApp +57 324 408 1281."
    >
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f] py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute -top-16 -right-20 w-[500px] h-[500px] rounded-full bg-[rgba(37,211,102,0.07)] pointer-events-none animate-rotate-glow"></div>
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <p className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.3)] text-[#6ee7b7] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Medellín, Antioquia · Colombia
          </p>
          <h1 className="font-extrabold text-white text-2xl sm:text-3xl md:text-4xl mb-4 opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
            Agenda tu Cita con el Dr. Guillermo Rodríguez
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
            Ortopedia con Calidad Humana · Torre Medical · Consultorio 609
          </p>
        </div>
      </section>

      {/* Map hero */}
      <section className="w-full">
        <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.433895715107!2d-75.57230398524658!3d6.206357129595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f693dcefff%3A0xaf14d3a4e8017e38!2sTorre%20Medical!5e0!3m2!1ses-419!2sco!4v1718700000000!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Dr. Guillermo Rodríguez – Torre Medical Medellín"
          />
          {/* Overlay badge */}
          <a
            href="https://maps.google.com/maps?q=Torre+Medical+Calle+7+39-107+Medellin"
            target="_blank"
            rel="noopener"
            className="absolute bottom-4 left-4 flex items-center gap-3 bg-white rounded-xl shadow-lg px-4 py-3 no-underline hover:shadow-xl transition-shadow"
          >
            <div className="w-9 h-9 bg-[#1a365d] rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#1ebe57] leading-none mb-0.5">Torre Medical</p>
              <p className="text-xs font-semibold text-gray-700">Calle 7 #39-107, Cons. 609 · Medellín</p>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Form */}
          <div>
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-3">Formulario de Contacto</span>
            <h2 className="font-extrabold text-[#1a365d] text-2xl sm:text-3xl mb-6">Escríbenos y te contactamos</h2>

            {sent ? (
              <div className="bg-[#f0fdf4] border border-[rgba(37,211,102,0.3)] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 12l6 6 10-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-bold text-[#1a365d] text-lg mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600 text-sm">Hemos abierto WhatsApp con tu mensaje. El Dr. Rodríguez responderá pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      value={form.nombre}
                      onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                      placeholder="Tu nombre"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Teléfono *</label>
                    <input
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                      placeholder="+57 300 000 0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Correo electrónico</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="tucorreo@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Motivo de consulta</label>
                  <textarea
                    rows={4}
                    value={form.motivo}
                    onChange={e => setForm(f => ({ ...f, motivo: e.target.value }))}
                    placeholder="Describe brevemente tu síntoma o motivo de consulta..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-full font-extrabold uppercase tracking-wide text-sm transition-all duration-300 shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:bg-[#1ebe57] hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  ENVIAR POR WHATSAPP
                </button>
                <p className="text-xs text-gray-400 text-center">Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar al Dr. Rodríguez.</p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#f0fdf4] border border-[rgba(37,211,102,0.25)] rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1ebe57] mb-4">Información de Contacto</p>
              <ul className="list-none flex flex-col gap-4">
                {[
                  { icon: MapPin, label: 'Dirección', value: 'Torre Medical Calle 7 #39-107\nConsultorio 609, Medellín, Antioquia' },
                  { icon: Phone, label: 'Teléfono / WhatsApp', value: '+57 324 408 1281' },
                  { icon: Mail, label: 'Correo', value: 'agendasortopediaguillermorodmd@gmail.com' },
                  { icon: Clock, label: 'Horario', value: 'Mar y Jue: 14:00 – 18:30\nMié y Vie: 07:30 – 18:30\nSáb: 07:30 – 13:00' },
                ].map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[rgba(37,211,102,0.12)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white no-underline py-4 rounded-2xl font-extrabold uppercase tracking-wide text-sm transition-all duration-300 shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:bg-[#1ebe57] hover:-translate-y-0.5"
            >
              AGENDAR POR WHATSAPP
            </a>

            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
              <div className="flex gap-0.5 flex-shrink-0">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#f59e0b] text-sm">★</span>)}
              </div>
              <div className="text-xs font-semibold text-gray-800 flex-1"><strong>4.8 / 5</strong> — 48+ reseñas verificadas</div>
              <span className="text-[10px] text-gray-400 border-l border-gray-200 pl-2.5 flex-shrink-0">Doctoralia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación detallada */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 border-t border-gray-100" id="ubicacion">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5">Cómo llegar</span>
          <h2 className="font-extrabold text-[#1a365d] text-2xl sm:text-3xl mb-2">Torre Medical, El Poblado – Medellín</h2>
          <p className="text-sm text-gray-500 mb-8">Fácil acceso, estacionamiento disponible. Sin largas colas.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, title: 'Dirección', body: 'Torre Medical\nCalle 7 #39-107, Cons. 609\nMedellín, Antioquia' },
              { icon: Clock, title: 'Horarios', body: 'Mar y Jue: 14:00 – 18:30\nMié y Vie: 07:30 – 18:30\nSáb: 07:30 – 13:00' },
              { icon: MessageCircle, title: 'WhatsApp', body: '+57 324 408 1281\nRespuesta en menos\nde 2 horas' },
              { icon: Mail, title: 'Correo', body: 'agendasortopediaguillermorodmd\n@gmail.com' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#1a365d] rounded-xl flex items-center justify-center">
                  <Icon size={18} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{title}</p>
                  <p className="text-sm font-semibold text-gray-800 whitespace-pre-line leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}