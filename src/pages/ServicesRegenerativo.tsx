import Layout from '../components/Layout';
import ServicePage from '../components/ServicePage';

// Tratamientos Regenerativos

export function ViscosuplementacionPage() {
  return (
    <Layout
      title="Viscosuplementación en Medellín | Dr. Guillermo Rodríguez – Ortopedista"
      description="Viscosuplementación con ácido hialurónico para artrosis de rodilla en Medellín. Dr. Guillermo Rodríguez Restrepo, Ortopedista. Torre Medical, Consultorio 609."
    >
      <ServicePage
        badge="Tratamientos Regenerativos · Medellín"
        title="Viscosuplementación en Medellín, Antioquia: Alivio para tus Articulaciones"
        subtitle="Tratamiento de vanguardia con ácido hialurónico para pacientes con artrosis de rodilla leve a moderada que buscan recuperar movilidad y reducir el dolor sin cirugía."
        heroImage="/Medico-especialista-realizando-consulta-de-viscosuplementacion-con-acido-hialuronico-para-aliviar-el-dolor-y-mejorar-la-movilidad-en-pacientes-con-artrosis-de-rodilla-en-Medellin.jpg"
        heroImageAlt="Viscosuplementación con ácido hialurónico para artrosis de rodilla en Medellín"
        intro="La viscosuplementación es un procedimiento ortopédico mínimamente invasivo que consiste en la infiltración intraarticular de ácido hialurónico en la articulación afectada. El ácido hialurónico actúa como lubricante y amortiguador natural, restaurando las propiedades del líquido sinovial y aliviando el dolor causado por la artrosis. En el consultorio del Dr. Guillermo Rodríguez Restrepo en Medellín, este tratamiento se realiza de forma ecoguiada, garantizando precisión y seguridad."
        symptomsTitle="¿Quién es Candidato a Viscosuplementación?"
        symptoms={[
          'Diagnóstico de artrosis de rodilla grado leve a moderado',
          'Dolor articular que no responde a analgésicos convencionales',
          'Limitación de movimiento por artrosis',
          'Pacientes que no han respondido a terapia física',
          'Personas que desean retrasar o evitar la cirugía',
          'Adultos mayores con artrosis degenerativa',
        ]}
        treatmentsTitle="¿Cómo Funciona el Tratamiento?"
        treatments={[
          { title: 'Evaluación y Diagnóstico', desc: 'El Dr. Rodríguez realiza una evaluación clínica completa con ecografía músculo-esquelética para confirmar el diagnóstico y planificar el tratamiento.' },
          { title: 'Infiltración Intraarticular', desc: 'Se inyecta ácido hialurónico directamente en la cavidad articular bajo guía ecográfica, asegurando máxima precisión y mínima incomodidad.' },
          { title: 'Seguimiento y Rehabilitación', desc: 'Programa de seguimiento post-procedimiento con indicaciones de actividad física y fisioterapia para maximizar los resultados.' },
          { title: 'Combinación con PRP', desc: 'En casos seleccionados, se puede combinar la viscosuplementación con Plasma Rico en Plaquetas para potenciar los efectos regenerativos.' },
        ]}
        benefitsTitle="Beneficios de la Viscosuplementación"
        benefits={[
          'Procedimiento ambulatorio de corta duración',
          'Sin necesidad de hospitalización',
          'Reducción significativa del dolor articular',
          'Mejora de la movilidad y función articular',
          'Efecto prolongado de varios meses',
          'Alternativa a la cirugía de reemplazo articular',
          'Mínimos efectos secundarios',
          'Compatible con otros tratamientos regenerativos',
        ]}
        drApproach="Como especialista en ortopedia regenerativa, el Dr. Guillermo Rodríguez Restrepo utiliza la ecografía músculo-esquelética para guiar cada infiltración, garantizando que el ácido hialurónico llegue exactamente donde se necesita. Su enfoque personalizado evalúa cada paciente de forma integral para determinar si la viscosuplementación es la mejor opción, considerando el grado de artrosis, el estilo de vida y los objetivos funcionales del paciente."
        faqs={[
          { q: '¿Cuántas sesiones de viscosuplementación necesito?', a: 'Generalmente se aplica en una sola sesión o en ciclos de 3 infiltraciones semanales, dependiendo del producto utilizado y la respuesta del paciente. El Dr. Rodríguez determinará el protocolo más adecuado para tu caso.' },
          { q: '¿Duele la infiltración?', a: 'El procedimiento es bien tolerado. Se aplica anestesia local para minimizar el discomfort. La mayoría de pacientes lo describen como una molestia leve y transitoria.' },
          { q: '¿Cuánto dura el efecto?', a: 'El efecto puede durar entre 6 y 12 meses, y en algunos casos hasta 18 meses. Los resultados varían según el grado de artrosis y la respuesta individual de cada paciente.' },
          { q: '¿Puedo combinarla con otros tratamientos?', a: 'Sí. La viscosuplementación se puede combinar con PRP y células mesenquimales para potenciar el efecto regenerativo, especialmente en artrosis de mayor grado.' },
          { q: '¿Qué debo hacer después del procedimiento?', a: 'Se recomienda reposo relativo las primeras 24-48 horas, evitar actividades de alto impacto y seguir las indicaciones específicas del Dr. Rodríguez para maximizar los resultados.' },
        ]}
        relatedLinks={[
          { href: '/plasma-rico-en-plaquetas', label: 'Plasma Rico en Plaquetas (PRP)' },
          { href: '/celulas-mesenguimales', label: 'Células Mesenquimales' },
          { href: '/artrosis-de-rodillas', label: 'Artrosis de Rodillas' },
          { href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios', label: 'Infiltraciones Articulares' },
        ]}
      />
    </Layout>
  );
}

export function PRPPage() {
  return (
    <Layout
      title="Plasma Rico en Plaquetas (PRP) en Medellín | Dr. Guillermo Rodríguez"
      description="Tratamiento regenerativo con PRP en Medellín para artrosis, manguito rotador, fascitis plantar y más. Dr. Guillermo Rodríguez Restrepo, Ortopedista. +57 324 408 1281."
    >
      <ServicePage
        badge="Tratamientos Regenerativos · Medellín"
        title="Plasma Rico en Plaquetas (PRP) en Medellín: Tratamiento Regenerativo en Ortopedia"
        subtitle="Terapia biológica de vanguardia que utiliza los factores de crecimiento de tu propia sangre para estimular la regeneración de tejidos dañados, sin riesgo de rechazo."
        heroImage="/Plasma-Rico-en-Plaquetas-(PRP)-en-Medellin-para-regeneracion-de-tejidos-y-recuperacion-ortopedica.jpg"
        heroImageAlt="Tratamiento con Plasma Rico en Plaquetas PRP en Medellín – ortopedia regenerativa"
        intro="El Plasma Rico en Plaquetas (PRP) es una terapia biológica avanzada que consiste en obtener una muestra de sangre del propio paciente, concentrarla mediante centrifugación para obtener un plasma con alta concentración de plaquetas y factores de crecimiento, e inyectarlo en la zona lesionada. Al utilizar componentes del propio organismo, el PRP es completamente seguro, no genera rechazo y estimula la regeneración natural de tejidos articulares, tendinosos y ligamentosos."
        symptomsTitle="Indicaciones del PRP en Ortopedia"
        symptoms={[
          'Artrosis de rodillas (leve a moderada)',
          'Síndrome de manguito rotador',
          'Esguinces crónicos de tobillo',
          'Tendinitis de muñeca',
          'Fascitis plantar refractaria',
          'Tendinitis de Quervain',
          'Gangliones de muñeca',
          'Lesiones tendinosas crónicas',
        ]}
        treatmentsTitle="Protocolo del Tratamiento con PRP"
        treatments={[
          { title: 'Extracción de Sangre', desc: 'Se obtiene una pequeña muestra de sangre del paciente (similar a un análisis de laboratorio estándar).' },
          { title: 'Centrifugación y Preparación', desc: 'La muestra se centrifuga para separar y concentrar las plaquetas y factores de crecimiento, obteniendo el plasma rico en plaquetas.' },
          { title: 'Infiltración Guiada', desc: 'El PRP se inyecta en la zona lesionada bajo guía ecográfica para máxima precisión y efectividad.' },
          { title: 'Protocolo de Recuperación', desc: 'Se establece un plan de rehabilitación personalizado para potenciar los efectos regenerativos del PRP.' },
        ]}
        benefitsTitle="Ventajas del PRP sobre otros Tratamientos"
        benefits={[
          'Procedimiento ambulatorio en una sola sesión',
          'Sin riesgo de rechazo (usa componentes propios del paciente)',
          'Promueve curación biológica real del tejido',
          'A diferencia de los corticoides, no deteriora el cartílago',
          'Reducción del dolor y mejora funcional',
          'Compatible con viscosuplementación y células mesenquimales',
          'Mínimo tiempo de recuperación',
          'Respaldo científico en múltiples indicaciones ortopédicas',
        ]}
        drApproach="El Dr. Guillermo Rodríguez Restrepo, con formación en el Diplomado Internacional de Ortobiológicos ACCART 2025, aplica el PRP con protocolos actualizados y ecoguiados. Su enfoque regenerativo busca tratar la causa de la lesión, no solo aliviar el síntoma, para obtener resultados duraderos y mejorar la calidad de vida del paciente."
        faqs={[
          { q: '¿El PRP es doloroso?', a: 'La extracción de sangre es idéntica a un análisis de laboratorio. La infiltración puede generar una molestia breve que se maneja con anestesia local.' },
          { q: '¿Cuántas sesiones de PRP necesito?', a: 'Depende de la condición tratada. Generalmente se realizan 1 a 3 sesiones con intervalos de 4 a 6 semanas. El Dr. Rodríguez diseñará el protocolo según tu caso.' },
          { q: '¿Cuándo veré resultados?', a: 'Los efectos regenerativos del PRP son progresivos. Muchos pacientes notan mejoría a las 2-4 semanas, con resultados óptimos entre 3 y 6 meses.' },
          { q: '¿Puedo combinar PRP con viscosuplementación?', a: 'Sí, es una combinación muy efectiva, especialmente en artrosis. El Dr. Rodríguez evaluará si esta combinación es apropiada para tu caso.' },
        ]}
        relatedLinks={[
          { href: '/viscosuplementacion', label: 'Viscosuplementación' },
          { href: '/celulas-mesenguimales', label: 'Células Mesenquimales' },
          { href: '/artrosis-de-rodillas', label: 'Artrosis de Rodillas' },
          { href: '/sindrome-de-manguito-rotador', label: 'Manguito Rotador' },
          { href: '/fascitis-plantar', label: 'Fascitis Plantar' },
        ]}
      />
    </Layout>
  );
}

export function CelulasMesenquimalesPage() {
  return (
    <Layout
      title="Células Mesenquimales en Medellín | Ortopedia Regenerativa | Dr. Guillermo Rodríguez"
      description="Tratamiento innovador con células mesenquimales para artrosis de rodilla en Medellín. Alternativa regenerativa no quirúrgica. Dr. Guillermo Rodríguez Restrepo."
    >
      <ServicePage
        badge="Tratamientos Regenerativos · Vanguardia"
        title="Células Mesenquimales en Medellín: Tratamiento Innovador en Ortopedia"
        subtitle="Opción regenerativa no quirúrgica de vanguardia para el tratamiento de la artrosis de rodilla. Reduce el dolor, mejora la función articular y favorece la movilidad."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento con células mesenquimales para artrosis de rodilla en Medellín"
        intro="Las células mesenquimales (también llamadas células madre mesenquimales) representan la frontera más avanzada de la medicina regenerativa en ortopedia. Estas células tienen la capacidad de diferenciarse en tejido cartilaginoso y liberar factores antiinflamatorios y regenerativos que favorecen la reparación del tejido articular dañado. En el consultorio del Dr. Guillermo Rodríguez Restrepo en Medellín, este tratamiento se ofrece como alternativa no quirúrgica especialmente para pacientes con artrosis de rodilla que no han respondido a otros tratamientos conservadores."
        symptomsTitle="Indicaciones para Células Mesenquimales"
        symptoms={[
          'Artrosis de rodilla moderada a avanzada',
          'Pacientes que buscan alternativa no quirúrgica',
          'Casos donde el PRP o viscosuplementación no fueron suficientes',
          'Adultos con enfermedades articulares degenerativas',
          'Pacientes no candidatos a cirugía por condición general',
          'Búsqueda de tratamiento regenerativo integral',
        ]}
        treatmentsTitle="Proceso del Tratamiento"
        treatments={[
          { title: 'Evaluación Integral', desc: 'Estudio clínico e imagenológico completo para determinar si el paciente es candidato al tratamiento con células mesenquimales.' },
          { title: 'Procedimiento Ecoguiado', desc: 'La aplicación se realiza bajo guía ecográfica para garantizar la precisión en la zona articular objetivo.' },
          { title: 'Protocolo Combinado', desc: 'Frecuentemente se combina con PRP para potenciar el efecto regenerativo y antiinflamatorio.' },
          { title: 'Seguimiento a Largo Plazo', desc: 'Monitoreo de la evolución del paciente con controles periódicos para evaluar la respuesta al tratamiento.' },
        ]}
        benefitsTitle="Beneficios del Tratamiento"
        benefits={[
          'Alternativa no quirúrgica para artrosis avanzada',
          'Disminución significativa del dolor articular',
          'Mejora de la función y movilidad articular',
          'Favorece la movilidad en adultos con enfermedades degenerativas',
          'Efecto antiinflamatorio natural',
          'Tratamiento ambulatorio sin hospitalización',
          'Opción para pacientes que no quieren o no pueden operarse',
          'Potencial para regenerar el tejido cartilaginoso',
        ]}
        drApproach="El Dr. Guillermo Rodríguez Restrepo integra las células mesenquimales dentro de un enfoque ortobiológico completo, apoyado en su Diplomado Internacional ACCART 2025. Evalúa cada caso individualmente para determinar si este tratamiento es el más adecuado, combinándolo frecuentemente con PRP para maximizar los resultados regenerativos."
        faqs={[
          { q: '¿Las células mesenquimales se obtienen del propio paciente?', a: 'Existen diferentes fuentes. El Dr. Rodríguez evaluará el protocolo más adecuado para tu caso, utilizando fuentes seguras y validadas clínicamente.' },
          { q: '¿Cuánto tarda en notarse el efecto?', a: 'Los efectos son progresivos y se observan generalmente entre 4 y 12 semanas después del tratamiento, con mejora continua durante varios meses.' },
          { q: '¿Es un tratamiento definitivo?', a: 'Aunque no cura la artrosis, puede proporcionar alivio significativo y retrasar considerablemente la necesidad de cirugía. Los resultados varían según el grado de la lesión.' },
        ]}
        relatedLinks={[
          { href: '/plasma-rico-en-plaquetas', label: 'Plasma Rico en Plaquetas (PRP)' },
          { href: '/viscosuplementacion', label: 'Viscosuplementación' },
          { href: '/artrosis-de-rodillas', label: 'Artrosis de Rodillas' },
          { href: '/ortopedia-geriatrica', label: 'Ortopedia Geriátrica' },
        ]}
      />
    </Layout>
  );
}

export function InfiltracionesPage() {
  return (
    <Layout
      title="Infiltraciones Articulares con Antiinflamatorios en Medellín | Dr. Guillermo Rodríguez"
      description="Infiltraciones articulares ecoguiadas en Medellín para artrosis, manguito rotador, fascitis plantar y más. Dr. Guillermo Rodríguez Restrepo, Ortopedista."
    >
      <ServicePage
        badge="Procedimientos Intervencionistas · Ecoguiado"
        title="Infiltraciones Articulares con Antiinflamatorios en Medellín: Alivio del Dolor"
        subtitle="Procedimiento terapéutico mínimamente invasivo que inyecta antiinflamatorios directamente en la articulación o tejido blando afectado, guiado por ecografía para máxima precisión y seguridad."
        heroImage="/manejo-del-dolor-ortopedico-en-medellin.png"
        heroImageAlt="Infiltración articular ecoguiada para dolor ortopédico en Medellín"
        intro="Las infiltraciones articulares o de tejidos blandos con antiinflamatorios son procedimientos terapéuticos mínimamente invasivos ampliamente utilizados en ortopedia para el control del dolor articular e inflamación. Consisten en la inyección directa de corticosteroides u otros antiinflamatorios en la articulación, bursa o tejido blando afectado. Bajo la guía ecográfica que utiliza el Dr. Guillermo Rodríguez Restrepo, se logra una precisión óptima que maximiza el efecto terapéutico y minimiza los riesgos."
        symptomsTitle="Condiciones Tratadas con Infiltraciones"
        symptoms={[
          'Artrosis de rodillas con proceso inflamatorio activo',
          'Síndrome de manguito rotador',
          'Fascitis plantar refractaria',
          'Tendinitis de Quervain',
          'Esguinces crónicos de tobillo',
          'Síndrome de túnel del carpo',
          'Gangliones inflamados',
          'Dedos en gatillo o resorte',
          'Hallux Valgus con inflamación',
          'Fracturas con inflamación residual',
        ]}
        treatmentsTitle="Proceso del Procedimiento"
        treatments={[
          { title: 'Evaluación Diagnóstica', desc: 'El Dr. Rodríguez evalúa la condición con ecografía músculo-esquelética para confirmar la patología y planificar la infiltración.' },
          { title: 'Preparación Estéril', desc: 'El procedimiento se realiza bajo estrictas medidas de asepsia y antisepsia para garantizar la seguridad del paciente.' },
          { title: 'Infiltración Ecoguiada', desc: 'Bajo guía ecográfica en tiempo real, se introduce la aguja en la zona exacta requerida y se deposita el medicamento con máxima precisión.' },
          { title: 'Recuperación y Seguimiento', desc: 'Se indica reposo relativo 24-48 horas tras el procedimiento. El alivio del dolor suele notarse en los primeros días.' },
        ]}
        benefitsTitle="Ventajas de las Infiltraciones Ecoguiadas"
        benefits={[
          'Procedimiento ambulatorio, sin hospitalización',
          'Alivio rápido del dolor articular',
          'Mayor precisión gracias a la guía ecográfica',
          'Menor riesgo de complicaciones',
          'Recuperación rápida (24-48 horas de reposo relativo)',
          'Tratamiento para múltiples condiciones ortopédicas',
          'Compatible con tratamientos rehabilitadores',
          'Técnica establecida con amplio respaldo científico',
        ]}
        drApproach="El Dr. Guillermo Rodríguez Restrepo, certificado en Ecografía Músculo-Esquelética 2025, realiza todas las infiltraciones bajo guía ecográfica en tiempo real. Esta técnica le permite visualizar directamente la estructura objetivo y depositar el medicamento con precisión milimétrica, diferenciándose significativamente de las infiltraciones a ciegas y reduciendo los riesgos al mínimo."
        faqs={[
          { q: '¿Cuántas infiltraciones puedo recibir?', a: 'El número de infiltraciones está limitado para evitar efectos secundarios. Generalmente se realizan máximo 3-4 por año en la misma articulación. El Dr. Rodríguez establecerá el protocolo más seguro para tu caso.' },
          { q: '¿Cuánto dura el efecto antiinflamatorio?', a: 'El alivio puede durar semanas o meses dependiendo de la condición tratada y la respuesta individual. Las infiltraciones forman parte de un plan terapéutico integral.' },
          { q: '¿Duele el procedimiento?', a: 'Se aplica anestesia local previamente. La mayoría de pacientes experimenta solo una molestia mínima y transitoria durante el procedimiento.' },
          { q: '¿Puedo hacer actividad normal después?', a: 'Se recomienda reposo relativo las primeras 24-48 horas. Posteriormente se puede retomar la actividad normal gradualmente según indicación del Dr. Rodríguez.' },
        ]}
        relatedLinks={[
          { href: '/plasma-rico-en-plaquetas', label: 'PRP – Alternativa Biológica' },
          { href: '/viscosuplementacion', label: 'Viscosuplementación' },
          { href: '/artrosis-de-rodillas', label: 'Artrosis de Rodillas' },
          { href: '/fascitis-plantar', label: 'Fascitis Plantar' },
          { href: '/sindrome-de-manguito-rotador', label: 'Manguito Rotador' },
        ]}
      />
    </Layout>
  );
}
