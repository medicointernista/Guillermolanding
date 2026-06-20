import { ExternalLink } from 'lucide-react';

export interface MedicalSource {
  label: string;
  org: string;
  href: string;
}

interface Props {
  sources: MedicalSource[];
}

export default function MedicalSources({ sources }: Props) {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-3">
          Fuentes y Referencias Médicas
        </p>
        <p className="text-[11px] text-gray-400 mb-4 leading-relaxed max-w-2xl">
          El contenido de esta página se basa en evidencia científica y guías de práctica clínica
          publicadas por organismos médicos reconocidos. Las referencias a continuación son de
          carácter informativo.
        </p>
        <ul className="flex flex-col gap-2 list-none p-0">
          {sources.map(({ label, org, href }) => (
            <li key={href} className="flex items-start gap-2">
              <ExternalLink size={11} className="text-[#25D366] flex-shrink-0 mt-0.5" />
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-gray-500 hover:text-[#1a365d] transition-colors leading-relaxed"
              >
                <span className="font-semibold text-[#1a365d]">{org}</span> — {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
