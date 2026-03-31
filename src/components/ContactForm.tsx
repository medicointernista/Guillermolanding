import { useState } from 'react';
import { Send, Clock, Lock, User } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola Dr. Rodríguez, mi nombre es ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/573244081281?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white" id="contacto" aria-labelledby="contact-heading">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[680px] opacity-0 animate-cascade" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5">
            Cuéntanos Tu Caso
          </span>
          <h2 className="font-extrabold text-[#1a365d] leading-tight mb-3 text-2xl sm:text-3xl md:text-4xl">
            Cuéntanos Tu Caso — Te Respondemos Hoy
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed">
            Sin formularios largos. Sin esperar semanas. Solo describe lo que sientes y recibe atención directa del especialista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mt-10 sm:mt-12">
          <form onSubmit={handleSubmit} className="opacity-0 animate-slide-left" style={{ animationDelay: '0.2s' }}>
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-semibold text-[#1a365d] mb-2">
                Tu Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                placeholder="Juan Pérez"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className="block text-sm font-semibold text-[#1a365d] mb-2">
                Teléfono de Contacto
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                placeholder="+57 300 123 4567"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-[#1a365d] mb-2">
                ¿Qué te está pasando?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[15px] text-gray-900 placeholder-gray-500 resize-none transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                placeholder="Describe tu condición, los síntomas que presentas y desde cuándo..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-lg text-[15px] font-bold uppercase tracking-wide transition-all hover:bg-[#1ebe57] hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              Consultar Mi Caso Clínico
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center text-sm text-green-800">
                ¡Gracias! Tu mensaje se enviará por WhatsApp.
              </div>
            )}
          </form>

          <div className="flex flex-col gap-4 opacity-0 animate-slide-right" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1a365d] text-sm mb-1">Respuesta Rápida</h3>
                  <p className="text-xs text-gray-600">Respuesta en menos de 2 horas en horario de atención</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1a365d] text-sm mb-1">Tus Datos Protegidos</h3>
                  <p className="text-xs text-gray-600">Tus datos están protegidos conforme a la ley colombiana</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1a365d] text-sm mb-1">Atención Directa</h3>
                  <p className="text-xs text-gray-600">Atención directa por el especialista, sin intermediarios</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-1 flex items-center justify-center text-sm font-bold">📅</span>
                <div>
                  <h3 className="font-semibold text-[#1a365d] text-sm mb-1">Citas Disponibles</h3>
                  <p className="text-xs text-gray-600">Citas disponibles de lunes a sábado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
