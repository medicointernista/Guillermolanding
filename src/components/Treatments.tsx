import { Droplet, Target, Microscope, Waves, Shield, Users, Syringe, Activity, Bone } from 'lucide-react';

export default function Treatments() {
  const treatments = [
    {
      icon: Droplet,
      title: 'PRP – Plasma Rico en Plaquetas',
      desc: 'Medicina Regenerativa. Regenera tejidos dañados y reduce el dolor usando los factores de crecimiento de tu propia sangre.',
      badge: 'Medicina Regenerativa'
    },
    {
      icon: Waves,
      title: 'Viscosuplementación con Ácido Hialurónico',
      desc: 'Ortobiológico. Lubrica y protege el cartílago articular — especialmente efectivo en artrosis de rodilla, cadera y hombro.',
      badge: 'Regenerativo'
    },
    {
      icon: Target,
      title: 'Infiltraciones Articulares',
      desc: 'Alta Precisión. Alivio directo del dolor con corticoides o antiinflamatorios aplicados en la zona exacta que lo necesita.',
      badge: 'Precisión Ecoguiada'
    },
    {
      icon: Microscope,
      title: 'Células Mesenquimales',
      desc: 'Vanguardia. Terapia biológica avanzada para regenerar tejido articular en casos de mayor compromiso.',
      badge: 'Vanguardia'
    },
    {
      icon: Syringe,
      title: 'Cirugía Especializada',
      desc: 'Cuando es necesario. Fracturas, túnel del carpo, gangliones, dedos en gatillo, lesiones tendinosas — con toda la experiencia que tu caso merece.',
      badge: 'Cirugía'
    }
  ];

  const conditions = [
    {
      icon: Bone,
      tag: 'Clínica de Rodilla',
      title: 'Artrosis y Dolor de Rodilla',
      desc: 'Terapias innovadoras para frenar el desgaste, reducir el dolor crónico y recuperar la movilidad articular.'
    },
    {
      icon: Activity,
      tag: 'Hombro',
      title: 'Síndrome de Manguito Rotador',
      desc: 'Tratamiento especializado y guiado para que recuperes la fuerza y el rango de movimiento de tu hombro.'
    },
    {
      icon: Syringe,
      tag: 'Pie y Tobillo',
      title: 'Fascitis Plantar y Espolón',
      desc: 'Intervención directa para eliminar el dolor punzante en el talón y devolverte la confianza al caminar.'
    },
    {
      icon: Target,
      tag: 'Mano y Muñeca',
      title: 'Síndrome de Túnel del Carpo',
      desc: 'Descompresión nerviosa y terapias para eliminar el entumecimiento, hormigueo y pérdida de fuerza en las manos.'
    },
    {
      icon: Shield,
      tag: 'Traumatología',
      title: 'Esguinces y Fracturas',
      desc: 'Manejo integral para recuperar la estabilidad articular tras traumas o lesiones deportivas agudas.'
    },
    {
      icon: Users,
      tag: 'Adulto Mayor',
      title: 'Ortopedia Geriátrica',
      desc: 'Cuidado articular avanzado enfocado en mantener la independencia y reducir el dolor en el adulto mayor.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="tratamientos" aria-labelledby="tratamientos-heading">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] mb-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Tratamientos Disponibles
        </span>
        <h2 className="font-extrabold text-[#1a365d] leading-tight mb-3.5 text-2xl sm:text-3xl md:text-4xl opacity-0 animate-cascade" style={{ animationDelay: '0.2s' }}>
          Tratamientos Disponibles para Tu Caso
        </h2>
        <p className="text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed max-w-[580px] opacity-0 animate-cascade" style={{ animationDelay: '0.3s' }}>
          Opciones regenerativas, biológicas y quirúrgicas — siempre priorizando lo menos invasivo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {treatments.map((treatment, idx) => {
            const IconComponent = treatment.icon;
            return (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 transition-all hover:border-[#25D366] hover:shadow-lg hover:-translate-y-1 cursor-default opacity-0 animate-scale-pop"
              style={{ animationDelay: `${0.4 + idx * 0.075}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <IconComponent className="w-6 sm:w-7 h-6 sm:h-7 text-[#25D366]" />
                <span className="bg-[rgba(37,211,102,0.10)] text-[#15803d] text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md">
                  {treatment.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#1a365d] mb-2">{treatment.title}</h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">{treatment.desc}</p>
            </div>
            );
          })}
        </div>

        <div className="mt-12 pt-10 border-t-[1.5px] border-gray-200">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#1ebe57] opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
            Condiciones que Tratamos
          </span>
          <p className="text-[15px] text-gray-600 mt-1.5 opacity-0 animate-cascade" style={{ animationDelay: '1.3s' }}>
            Diagnóstico y tratamiento especializado para las patologías más frecuentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8">
          {conditions.map((condition, idx) => {
            const IconComponent = condition.icon;
            return (
            <div
              key={idx}
              className="bg-gray-50 border-[1.5px] border-gray-200 rounded-2xl p-5 sm:p-7 border-l-[3px] border-l-[#25D366] transition-all hover:border-gray-200 hover:shadow-md hover:-translate-y-1 opacity-0 animate-scale-pop"
              style={{ animationDelay: `${1.4 + idx * 0.075}s` }}
            >
              <div className="mb-2.5">
                <span className="inline-block bg-[rgba(37,211,102,0.10)] text-[#15803d] text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md">
                  {condition.tag}
                </span>
              </div>
              <IconComponent className="w-6 sm:w-7 h-6 sm:h-7 text-[#1a365d] mb-2" />
              <h3 className="text-sm sm:text-base font-bold text-[#1a365d] mb-2">{condition.title}</h3>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">{condition.desc}</p>
              <span className="inline-block bg-[rgba(37,211,102,0.12)] text-[#16a34a] text-[11px] font-semibold px-2.5 py-1 rounded-full mt-3">
                Especialidad
              </span>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
