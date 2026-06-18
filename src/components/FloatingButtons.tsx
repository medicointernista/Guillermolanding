export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="hidden md:flex fixed bottom-6 right-6 z-[999] flex-col gap-3">
        <a
          href="tel:+573244081281"
          className="w-[60px] h-[60px] rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_4px_24px_rgba(220,38,38,0.5)] no-underline transition-transform hover:scale-110 hover:shadow-[0_6px_32px_rgba(220,38,38,0.6)]"
          aria-label="Llamar ahora al Dr. Guillermo Rodríguez"
          title="Llámame Ahora"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
        <a
          href="https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
          className="w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] no-underline transition-transform hover:scale-110 hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] animate-breathe"
          target="_blank"
          rel="noopener"
          aria-label="Agendar cita por WhatsApp"
          title="Agendar"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999] px-4 py-2.5 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.10)] flex gap-2.5 opacity-0 animate-lift" style={{ animationDelay: '0.2s' }}>
        <a
          href="tel:+573244081281"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-[13px] font-bold no-underline text-center bg-[#1a365d] text-white transition-all hover:shadow-md"
        >
          Llamar
        </a>
        <a
          href="https://wa.me/573244081281?text=Hola%2C%20gracias%20por%20escribirnos%20desde%20nuestro%20sitio%20web.%20El%20Dr.%20Guillermo%20Rodr%C3%ADguez%20y%20su%20equipo%20est%C3%A1n%20para%20ayudarte%2C%20%C2%BFen%20qu%C3%A9%20podemos%20colaborarte%20hoy%3F"
          target="_blank"
          rel="noopener"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-[13px] font-bold no-underline text-center bg-[#25D366] text-white transition-all hover:shadow-md"
        >
          Agendar
        </a>
        <a
          href="https://www.doctoralia.co/guillermo-fernando-rodriguez-restrepo/ortopedista-y-traumatologo/medellin#address-id=69445&is-online-only=false&filters%5Bspecializations%5D%5B%5D=48"
          target="_blank"
          rel="noopener"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-[13px] font-bold no-underline text-center bg-[#00A0B0] text-white transition-all hover:shadow-md"
        >
          Doctoralia
        </a>
      </div>
    </>
  );
}
