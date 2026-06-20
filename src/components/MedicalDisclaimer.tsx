import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function MedicalDisclaimer() {
  return (
    <section className="bg-amber-50 border-y border-amber-200 py-4 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex items-start gap-3">
        <ShieldCheck size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-[11px] sm:text-xs text-amber-800 leading-relaxed">
          <span className="font-bold">Aviso Médico:</span> La información de este sitio tiene carácter exclusivamente informativo y educativo. No reemplaza la consulta, el diagnóstico ni el tratamiento de un médico especialista. Ante cualquier síntoma, consulte a un profesional de salud.{' '}
          <Link
            to="/descargo-de-responsabilidad"
            className="font-semibold underline hover:text-amber-900 transition-colors"
          >
            Ver descargo completo
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
