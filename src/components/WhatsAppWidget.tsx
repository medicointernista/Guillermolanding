import { useState, useEffect } from 'react';

const NUMERO_WHATSAPP = '573244081281';

const mensajes: Record<string, { titulo: string; detalle: string }> = {
  rodilla: {
    titulo: 'dolor de rodilla',
    detalle: 'Nuestro especialista puede ayudarte con lesiones de menisco, ligamentos, artritis de rodilla o dolor crónico, sin necesidad de cirugía.'
  },
  cadera: {
    titulo: 'dolor de cadera',
    detalle: 'Tratamos artrosis, bursitis, tendinitis y dolor crónico de cadera con terapias biológicas avanzadas.'
  },
  columna: {
    titulo: 'dolor de columna / espalda',
    detalle: 'Abordamos hernias discales, contracturas, estenosis y dolor lumbar crónico con alternativas a la cirugía.'
  },
  hombro: {
    titulo: 'dolor de hombro',
    detalle: 'Manejamos manguito rotador, tendinitis, bursitis y luxaciones con tratamientos regenerativos.'
  },
  codo: {
    titulo: 'dolor de codo',
    detalle: 'Tratamos epicondilitis (codo de tenista), bursitis y lesiones de codo con técnicas biológicas.'
  },
  muneca: {
    titulo: 'dolor de muñeca / mano',
    detalle: 'Atendemos síndrome del túnel carpiano, tendinitis, artritis y lesiones de mano sin cirugía.'
  },
  tobillo: {
    titulo: 'dolor de tobillo / pie',
    detalle: 'Tratamos esguinces, fascitis plantar, tendón de Aquiles y artritis de tobillo con medicina regenerativa.'
  },
  cuello: {
    titulo: 'dolor de cuello / cervical',
    detalle: 'Abordamos cervicalgias, tortícolis, hernia cervical y tensión muscular crónica.'
  },
  'nervio-ciatico': {
    titulo: 'dolor por nervio ciático',
    detalle: 'Tratamos la ciática, radiculopatía lumbar y dolor irradiado a piernas sin necesidad de cirugía.'
  },
  hernia: {
    titulo: 'hernia discal',
    detalle: 'Manejamos hernias lumbares y cervicales con tratamientos biológicos que evitan la operación.'
  }
};

export default function WhatsAppWidget() {
  const [patologia, setPatologia] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [otroTexto, setOtroTexto] = useState('');
  const [preview, setPreview] = useState('Completa los campos para ver el mensaje...');

  const buildMessage = () => {
    if (!patologia) return null;
    const saludo = nombre ? `Hola, soy *${nombre}*` : 'Hola';
    const telStr = telefono ? ` Mi teléfono es ${telefono}.` : '';

    if (patologia === 'otro') {
      const desc = otroTexto ? `\n\n${otroTexto}` : '';
      return `${saludo} y me comunico para consultar sobre un caso clínico. Me gustaría agendar una valoración personalizada.${telStr}${desc}\n\nAgradezco me contacten para confirmar mi cita.`;
    }

    const m = mensajes[patologia];
    return `${saludo} y me comunico porque tengo ${m.titulo}. Me gustaría agendar una valoración personalizada.${telStr}\n\n${m.detalle}\n\nAgradezco me contacten para confirmar mi cita.`;
  };

  useEffect(() => {
    const msg = buildMessage();
    setPreview(msg || 'Completa los campos para ver el mensaje...');
  }, [patologia, nombre, telefono, otroTexto]);

  const enviarWhatsApp = () => {
    if (!patologia) {
      alert('Por favor selecciona el área afectada.');
      return;
    }
    if (!nombre) {
      alert('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!telefono) {
      alert('Por favor ingresa tu teléfono de contacto.');
      return;
    }
    if (patologia === 'otro' && !otroTexto) {
      alert('Por favor describe brevemente tu caso.');
      return;
    }

    const msg = buildMessage();
    if (!msg) return;
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gray-50" id="widget">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5">
              Consulta Personalizada
            </span>
            <h2 className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-3xl md:text-4xl">
              Cuéntanos Dónde te Duele — Te Respondemos Hoy
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed max-w-[580px]">
              Sin formularios largos. Sin esperar semanas. Solo describe tu caso y recibe atención directa del especialista.
            </p>
            <ul className="list-none mt-6 flex flex-col gap-3.5">
              <li className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">⚡</span>
                <span className="text-[15px] text-gray-600">Respuesta en menos de 2 horas en horario de atención.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">🔒</span>
                <span className="text-[15px] text-gray-600">Tus datos están protegidos conforme a la ley colombiana de datos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">👨‍⚕️</span>
                <span className="text-[15px] text-gray-600">Atención directa por el especialista, sin intermediarios.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">📅</span>
                <span className="text-[15px] text-gray-600">Citas disponibles de lunes a sábado.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border-[1.5px] border-gray-200">
            <p className="text-[22px] font-extrabold text-gray-900 mb-1">¿Dónde te Duele?</p>
            <p className="text-sm text-gray-600 mb-6">Selecciona el área y genera tu mensaje en segundos.</p>

            <label className="block text-[11px] font-semibold tracking-wider uppercase text-gray-600 mb-1.5">
              Área afectada
            </label>
            <select
              value={patologia}
              onChange={(e) => setPatologia(e.target.value)}
              className="block w-full px-3.5 py-2.5 border-[1.5px] border-gray-300 rounded-lg text-sm bg-white text-gray-900 outline-none mb-2.5 transition-all focus:border-[#1a365d] focus:shadow-[0_0_0_3px_rgba(26,54,93,0.12)]"
            >
              <option value="">Selecciona donde te duele...</option>
              <option value="rodilla">Rodilla</option>
              <option value="cadera">Cadera</option>
              <option value="columna">Columna / Espalda</option>
              <option value="hombro">Hombro</option>
              <option value="codo">Codo</option>
              <option value="muneca">Muñeca / Mano</option>
              <option value="tobillo">Tobillo / Pie</option>
              <option value="cuello">Cuello / Cervical</option>
              <option value="nervio-ciatico">Nervio Ciático</option>
              <option value="hernia">Hernia Discal</option>
              <option value="otro">Otro</option>
            </select>

            {patologia === 'otro' && (
              <textarea
                value={otroTexto}
                onChange={(e) => setOtroTexto(e.target.value)}
                placeholder="Cuéntanos brevemente tu caso..."
                rows={3}
                className="block w-full px-3.5 py-2.5 border-[1.5px] border-gray-300 rounded-lg text-sm bg-white text-gray-900 outline-none resize-vertical transition-all mb-2.5 focus:border-[#1a365d] focus:shadow-[0_0_0_3px_rgba(26,54,93,0.12)]"
              />
            )}

            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu Nombre Completo"
              className="block w-full px-3.5 py-2.5 border-[1.5px] border-gray-300 rounded-lg text-sm bg-white text-gray-900 outline-none mb-2.5 transition-all focus:border-[#1a365d] focus:shadow-[0_0_0_3px_rgba(26,54,93,0.12)]"
            />

            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Teléfono de Contacto"
              className="block w-full px-3.5 py-2.5 border-[1.5px] border-gray-300 rounded-lg text-sm bg-white text-gray-900 outline-none mb-2.5 transition-all focus:border-[#1a365d] focus:shadow-[0_0_0_3px_rgba(26,54,93,0.12)]"
            />

            <div className="my-2.5 bg-gray-50 border border-gray-300 rounded-lg px-3.5 py-3 text-[13px] leading-relaxed">
              <strong className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Vista previa del mensaje
              </strong>
              <span className={`text-gray-800 whitespace-pre-wrap ${!buildMessage() ? 'text-gray-400' : ''}`}>
                {preview}
              </span>
            </div>

            <button
              onClick={enviarWhatsApp}
              className="flex items-center justify-center gap-2.5 w-full px-4 py-3.5 rounded-full border-none bg-[#25D366] text-white text-sm font-extrabold tracking-wide cursor-pointer mt-2 transition-all shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:bg-[#1ebe57] hover:scale-[1.01] active:scale-[0.98]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CONSULTAR MI CASO CLÍNICO →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
