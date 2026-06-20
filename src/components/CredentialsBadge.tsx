import { Award, BookOpen, GraduationCap, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const credentials = [
  {
    icon: <Stethoscope size={14} className="text-[#25D366]" />,
    label: 'Médico Cirujano',
    value: 'Universidad CES – Reg. Médico 1090470',
  },
  {
    icon: <Award size={14} className="text-[#25D366]" />,
    label: 'Especialista Ortopedia y Traumatología',
    value: 'SCCOT · Miembro activo',
  },
  {
    icon: <BookOpen size={14} className="text-[#25D366]" />,
    label: 'Diplomado Internacional Ortobiológicos',
    value: 'ACCART 2025',
  },
  {
    icon: <GraduationCap size={14} className="text-[#25D366]" />,
    label: 'Maestría en Educación',
    value: 'Universidad de los Andes · 2013',
  },
];

export default function CredentialsBadge() {
  return (
    <section className="bg-[#f8fafc] border-b border-gray-200 py-5 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#1ebe57]">
            Credenciales Verificadas
          </span>
          <span className="hidden sm:block h-px flex-1 bg-gray-200" />
          <Link
            to="/sobre-mi"
            className="text-[10px] text-[#1a365d] font-semibold no-underline hover:underline"
          >
            Ver perfil completo →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {credentials.map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-2.5 bg-white border border-gray-100 rounded-xl px-3.5 py-3 shadow-sm"
            >
              <span className="mt-0.5 flex-shrink-0">{icon}</span>
              <div>
                <p className="text-[10px] font-bold text-[#1a365d] leading-tight">{label}</p>
                <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
