import Layout from '../components/Layout';
import ServicePage from '../components/ServicePage';

export function TendinitisMuneca() {
  return (
    <Layout
      title="Tendinitis de Muñeca en Medellín | Dr. Guillermo Rodríguez – Ortopedista"
      description="Tratamiento especializado para tendinitis de muñeca en Medellín. Infiltraciones y PRP. Dr. Guillermo Rodríguez Restrepo. Torre Medical, Consultorio 609."
    >
      <ServicePage
        badge="Mano y Muñeca · Medellín"
        title="Tratamiento Especializado para Tendinitis de Muñeca en Medellín"
        subtitle="Diagnóstico diferencial preciso con ecografía y tratamiento integral desde medidas conservadoras hasta infiltraciones articulares y PRP para recuperar la función de la muñeca."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento tendinitis de muñeca en Medellín – ortopedia mano"
        intro="La tendinitis de muñeca es la inflamación de los tendones de la muñeca, generalmente causada por movimientos repetitivos, sobrecarga laboral o deportiva. Puede afectar uno o varios tendones y se manifiesta con dolor, inflamación y limitación funcional. El diagnóstico diferencial con otras patologías de la muñeca como el síndrome de túnel del carpo, los gangliones o la tendinitis de Quervain es fundamental para un tratamiento efectivo."
        symptomsTitle="Síntomas y Diagnóstico Diferencial"
        symptoms={[
          'Dolor localizado en la muñeca, especialmente con el movimiento',
          'Inflamación y sensación de calor en la zona afectada',
          'Limitación del rango de movimiento de la muñeca',
          'Debilidad al agarre o sostener objetos',
          'Movimientos repetitivos en el trabajo (mecanografía, uso de mouse)',
          'Sobrecarga en actividades deportivas (tenis, golf)',
          'Dolor que aumenta con la actividad y mejora con el reposo',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Tratamiento Conservador', desc: 'Reposo, inmovilización con férula, hielo y antiinflamatorios orales como primera línea de tratamiento.' },
          { title: 'Fisioterapia', desc: 'Ejercicios de fortalecimiento y estiramiento específicos para los tendones afectados, ultrasonido terapéutico y técnicas de fisioterapia.' },
          { title: 'Infiltraciones Articulares', desc: 'Cuando el tratamiento conservador no es suficiente, las infiltraciones con corticosteroides ecoguiadas aportan alivio significativo.' },
          { title: 'PRP Tendíneo', desc: 'Para tendinitis crónicas resistentes al tratamiento convencional, el PRP estimula la regeneración del tendón afectado.' },
        ]}
        benefits={[
          'Diagnóstico diferencial preciso con ecografía',
          'Plan de tratamiento personalizado',
          'Opciones conservadoras y mínimamente invasivas',
          'Tratamiento de condiciones asociadas',
          'Educación sobre ergonomía y prevención de recaídas',
          'Seguimiento hasta recuperación funcional',
        ]}
        drApproach="El Dr. Rodríguez realiza un diagnóstico diferencial completo de las patologías de muñeca, utilizando ecografía para identificar con precisión cuál o cuáles tendones están afectados. Su tratamiento es escalonado, comenzando siempre con las opciones menos invasivas."
        faqs={[
          { q: '¿La tendinitis de muñeca desaparece sola?', a: 'En casos leves puede mejorar con reposo. Sin embargo, la tendinitis crónica requiere tratamiento activo para evitar la lesión permanente del tendón.' },
          { q: '¿Necesito dejar de trabajar?', a: 'Depende de la actividad laboral. En muchos casos se puede continuar trabajando con modificaciones ergonómicas y el tratamiento adecuado.' },
          { q: '¿Es lo mismo que el síndrome de túnel del carpo?', a: 'No. Son condiciones diferentes aunque pueden coexistir. El túnel del carpo afecta el nervio mediano y causa entumecimiento, mientras la tendinitis afecta los tendones y causa dolor localizado.' },
        ]}
        relatedLinks={[
          { href: '/sindrome-de-tunel-del-carpo', label: 'Síndrome de Túnel del Carpo' },
          { href: '/tendinitis-de-quervain', label: 'Tendinitis de Quervain' },
          { href: '/gangliones', label: 'Gangliones' },
          { href: '/dedos-en-gatillo-o-resorte', label: 'Dedos en Gatillo' },
          { href: '/plasma-rico-en-plaquetas', label: 'PRP' },
        ]}
      />
    </Layout>
  );
}

export function TunnelCarpPage() {
  return (
    <Layout
      title="Síndrome de Túnel del Carpo en Medellín | Dr. Guillermo Rodríguez"
      description="Diagnóstico y tratamiento del síndrome de túnel del carpo en Medellín. Opciones conservadoras y cirugía. Dr. Guillermo Rodríguez Restrepo, Ortopedista."
    >
      <ServicePage
        badge="Mano y Muñeca · Medellín"
        title="Tratamiento y Diagnóstico del Síndrome de Túnel del Carpo en Medellín"
        subtitle="Entumecimiento, hormigueo y dolor en la mano que afectan tu calidad de vida. Diagnóstico preciso y tratamiento desde opciones conservadoras hasta la cirugía mínimamente invasiva."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Diagnóstico y tratamiento síndrome túnel del carpo en Medellín – ortopedia mano"
        intro="El síndrome de túnel del carpo ocurre cuando el nervio mediano, que recorre el canal carpiano de la muñeca, se comprime generando dolor, entumecimiento y hormigueo en la mano y los dedos (pulgar, índice, medio y parte del anular). Es una de las neuropatías por compresión más frecuentes y puede afectar significativamente la vida cotidiana y laboral. El Dr. Guillermo Rodríguez Restrepo ofrece en Medellín diagnóstico con estudios de conducción nerviosa y un tratamiento adaptado a la severidad de cada caso."
        symptomsTitle="Síntomas del Túnel del Carpo"
        symptoms={[
          'Entumecimiento y hormigueo en el pulgar, índice, dedo medio y parte del anular',
          'Dolor en la muñeca y la mano, especialmente nocturno',
          'Sensación de "mano dormida" que despierta por las noches',
          'Debilidad para agarrar objetos o hacer pinza',
          'Atrofia muscular en la eminencia tenar (casos avanzados)',
          'Síntomas que empeoran con actividades que flexionan la muñeca',
          'Mayor frecuencia en mujeres y trabajadores manuales',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Tratamiento No Quirúrgico', desc: 'Férulas nocturnas, modificación de actividades, antiinflamatorios y cambios ergonómicos para reducir la presión sobre el nervio.' },
          { title: 'Infiltraciones Corticosteroides', desc: 'Inyección ecoguiada de corticosteroides en el canal carpiano para reducir la inflamación y aliviar los síntomas.' },
          { title: 'Cirugía de Liberación', desc: 'Cuando los tratamientos conservadores fallan, se realiza la liberación del túnel carpiano, procedimiento mínimamente invasivo con alta tasa de éxito.' },
          { title: 'Rehabilitación Post-quirúrgica', desc: 'Programa de fisioterapia para recuperar fuerza y sensibilidad de la mano después de la intervención.' },
        ]}
        benefits={[
          'Diagnóstico con estudios de conducción nerviosa',
          'Tratamiento escalonado según severidad',
          'Infiltraciones ecoguiadas para mayor precisión',
          'Cirugía mínimamente invasiva con alta efectividad',
          'Recuperación rápida con técnica moderna',
          'Seguimiento hasta recuperación neurológica completa',
        ]}
        drApproach="El Dr. Rodríguez evalúa el síndrome de túnel del carpo con historia clínica detallada y estudios electromiográficos. Para casos leves y moderados, los tratamientos conservadores son eficaces. La cirugía está indicada cuando existe compromiso neurológico significativo o fallo del tratamiento conservador, y se realiza con técnicas modernas de mínima invasión."
        faqs={[
          { q: '¿El túnel del carpo mejora solo?', a: 'En casos leves puede mejorar con reposo y modificación de actividades. Sin embargo, si no se trata, puede progresar hasta daño neurológico permanente.' },
          { q: '¿La cirugía es la única solución?', a: 'No. Muchos casos responden bien al tratamiento conservador. La cirugía se reserva para casos moderados a severos o cuando el tratamiento conservador falla.' },
          { q: '¿Cuánto tiempo dura la recuperación quirúrgica?', a: 'La recuperación de la cirugía de túnel carpiano suele ser rápida. La mayoría de pacientes retoma sus actividades en 2-4 semanas, con mejoría neurológica progresiva.' },
        ]}
        relatedLinks={[
          { href: '/tendinitis-de-muneca', label: 'Tendinitis de Muñeca' },
          { href: '/tendinitis-de-quervain', label: 'Tendinitis de Quervain' },
          { href: '/dedos-en-gatillo-o-resorte', label: 'Dedos en Gatillo' },
          { href: '/gangliones', label: 'Gangliones' },
        ]}
      />
    </Layout>
  );
}

export function TendinitisQuervain() {
  return (
    <Layout
      title="Tendinitis de Quervain en Medellín | Dr. Guillermo Rodríguez – Ortopedista"
      description="Tratamiento especializado para tendinitis de Quervain en Medellín. Infiltraciones y PRP. Dr. Guillermo Rodríguez Restrepo, Ortopedista. +57 324 408 1281."
    >
      <ServicePage
        badge="Mano y Muñeca · Medellín"
        title="Tratamiento Especializado para Tendinitis de Quervain en Medellín"
        subtitle="Condición dolorosa que afecta los tendones del pulgar en la muñeca. Tratamiento efectivo con infiltraciones, fisioterapia y PRP para recuperar la función sin cirugía."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento tendinitis de Quervain pulgar muñeca en Medellín"
        intro="La tendinitis de Quervain es una inflamación de los tendones del pulgar (abductor largo y extensor corto del pulgar) en su paso por el proceso estiloides radial. Es una condición dolorosa frecuente en personas que realizan movimientos repetitivos de pinza o agarre, nuevas madres (por la forma en que sostienen a sus bebés) y personas que usan intensamente el teléfono móvil. El diagnóstico es clínico y se confirma con la maniobra de Finkelstein positiva y ecografía."
        symptomsTitle="Síntomas y Factores de Riesgo"
        symptoms={[
          'Dolor en la base del pulgar y el lado radial de la muñeca',
          'Inflamación y sensibilidad sobre el proceso estiloides radial',
          'Maniobra de Finkelstein positiva (prueba diagnóstica específica)',
          'Dolor al agarrar objetos o girar la muñeca',
          'Frecuente en mujeres y nuevas madres',
          'Asociada a actividades de pinza repetitiva',
          'Puede confundirse con artritis del pulgar',
        ]}
        treatmentsTitle="Plan de Tratamiento"
        treatments={[
          { title: 'Inmovilización', desc: 'Férula de pulgar para disminuir la inflamación en la fase aguda, combinada con hielo y antiinflamatorios.' },
          { title: 'Fisioterapia', desc: 'Ejercicios de estiramiento y fortalecimiento, ultrasonido terapéutico y técnicas de terapia manual.' },
          { title: 'Infiltración con Antiinflamatorios', desc: 'Infiltración ecoguiada de corticosteroides en la vaina tendinosa, con alta efectividad y rápido alivio del dolor.' },
          { title: 'PRP como Complemento', desc: 'En casos crónicos o recurrentes, el PRP estimula la regeneración del tendón y previene recaídas.' },
        ]}
        benefits={[
          'Tratamiento efectivo en la mayoría de casos sin cirugía',
          'Infiltraciones ecoguiadas para máxima precisión',
          'Recuperación rápida con protocolo adecuado',
          'PRP disponible para casos refractarios',
          'Educación sobre ergonomía y prevención',
          'Seguimiento personalizado',
        ]}
        drApproach="El Dr. Rodríguez diagnóstica la tendinitis de Quervain clínicamente y confirma con ecografía. Su protocolo de tratamiento es progresivo: inmovilización e infiltración ecoguiada primero, y PRP o cirugía solo cuando es necesario. El objetivo es la recuperación funcional completa del pulgar y la muñeca."
        faqs={[
          { q: '¿La tendinitis de Quervain desaparece con reposo?', a: 'En casos leves puede mejorar, pero generalmente requiere tratamiento activo. Sin manejo adecuado tiende a cronificarse.' },
          { q: '¿La infiltración es muy dolorosa?', a: 'Se realiza con anestesia local. La mayoría de pacientes reporta solo una molestia mínima y un alivio significativo en los días siguientes.' },
          { q: '¿Necesito cirugía?', a: 'La cirugía se reserva para casos crónicos que no responden al tratamiento conservador. La mayoría de pacientes mejora con infiltraciones y fisioterapia.' },
        ]}
        relatedLinks={[
          { href: '/tendinitis-de-muneca', label: 'Tendinitis de Muñeca' },
          { href: '/sindrome-de-tunel-del-carpo', label: 'Síndrome de Túnel del Carpo' },
          { href: '/dedos-en-gatillo-o-resorte', label: 'Dedos en Gatillo' },
          { href: '/plasma-rico-en-plaquetas', label: 'PRP' },
        ]}
      />
    </Layout>
  );
}

export function GanglionesMuneca() {
  return (
    <Layout
      title="Gangliones de Muñeca en Medellín | Dr. Guillermo Rodríguez – Ortopedista"
      description="Tratamiento de gangliones (quistes) de muñeca en Medellín. Aspiración, infiltración y PRP. Dr. Guillermo Rodríguez Restrepo, Ortopedista."
    >
      <ServicePage
        badge="Mano y Muñeca · Medellín"
        title="Tratamiento de Gangliones en Medellín: Soluciones Especializadas"
        subtitle="Los gangliones son quistes llenos de líquido en articulaciones o tendones de la muñeca. Diagnóstico con ecografía y tratamiento desde aspiración hasta PRP según el caso."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento ganglión quiste muñeca mano en Medellín – ortopedia"
        intro="Los gangliones son quistes benignos que se desarrollan sobre articulaciones o vainas tendinosas, más frecuentemente en la muñeca. Están llenos de líquido sinovial espeso y varían en tamaño. Aunque son benignos, pueden causar dolor, limitación funcional y preocupación estética. El Dr. Guillermo Rodríguez Restrepo ofrece diagnóstico preciso con ecografía y tratamiento personalizado según las características de cada ganglión."
        symptomsTitle="Características y Síntomas"
        symptoms={[
          'Masa o protuberancia palpable en la muñeca o el dorso de la mano',
          'Dolor o sensibilidad al presionar el ganglión',
          'Limitación del movimiento de la muñeca en casos grandes',
          'El tamaño puede variar con la actividad',
          'Pueden ser asintomáticos (hallazgo incidental)',
          'Principalmente en adultos jóvenes y de mediana edad',
          'Mayor frecuencia en el dorso de la muñeca',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Observación', desc: 'Muchos gangliones pueden ser monitoreados sin tratamiento activo, especialmente si son asintomáticos y pequeños.' },
          { title: 'Aspiración Ecoguiada', desc: 'Drenaje del contenido del quiste con aguja fina bajo guía ecográfica, procedimiento ambulatorio con alivio inmediato.' },
          { title: 'Infiltración con Antiinflamatorios', desc: 'Combinación de aspiración con inyección de corticosteroides para reducir la probabilidad de recurrencia.' },
          { title: 'PRP y Células Mesenquimales', desc: 'Para casos con inflamación articular subyacente, los tratamientos biológicos pueden complementar el manejo del ganglión.' },
          { title: 'Cirugía', desc: 'Para gangliones recurrentes sintomáticos o que no responden a tratamiento conservador, la cirugía es una opción definitiva.' },
        ]}
        benefits={[
          'Diagnóstico definitivo con ecografía',
          'Procedimiento de aspiración ambulatorio y rápido',
          'Tratamiento escalonado según síntomas',
          'Mínima incomodidad con técnica ecoguiada',
          'Seguimiento para detectar recurrencia',
          'Cirugía solo cuando realmente es necesaria',
        ]}
        drApproach="El Dr. Rodríguez utiliza la ecografía para caracterizar el ganglión con precisión —su tamaño, localización y relación con estructuras vecinas— y decidir el mejor tratamiento. Su enfoque prioriza los procedimientos mínimamente invasivos, reservando la cirugía para casos recurrentes o con limitación funcional significativa."
        faqs={[
          { q: '¿Los gangliones son peligrosos?', a: 'No. Son quistes benignos sin riesgo de malignización. Sin embargo, si causan dolor o limitación funcional, es recomendable tratarlos.' },
          { q: '¿El ganglión puede desaparecer solo?', a: 'Sí, algunos gangliones pueden reabsorberse espontáneamente. Si esto no ocurre o si es sintomático, se pueden tratar con los procedimientos descritos.' },
          { q: '¿La aspiración es definitiva?', a: 'La aspiración alivia el síntoma, pero los gangliones pueden recurrir. El Dr. Rodríguez seguirá el caso para detectar y tratar posibles recurrencias.' },
        ]}
        relatedLinks={[
          { href: '/tendinitis-de-muneca', label: 'Tendinitis de Muñeca' },
          { href: '/sindrome-de-tunel-del-carpo', label: 'Túnel del Carpo' },
          { href: '/tendinitis-de-quervain', label: 'Tendinitis de Quervain' },
          { href: '/dedos-en-gatillo-o-resorte', label: 'Dedos en Gatillo' },
        ]}
      />
    </Layout>
  );
}

export function DedosGatillo() {
  return (
    <Layout
      title="Dedos en Gatillo o Resorte en Medellín | Dr. Guillermo Rodríguez"
      description="Tratamiento para dedos en gatillo o resorte en Medellín. Infiltraciones y cirugía mínimamente invasiva. Dr. Guillermo Rodríguez Restrepo, Ortopedista."
    >
      <ServicePage
        badge="Mano y Muñeca · Medellín"
        title="Dedos en Gatillo o Resorte en Medellín | Ortopedia y Traumatología"
        subtitle="Condición que causa que un dedo quede atrapado en posición doblada. Tratamiento integral con terapias personalizadas, infiltraciones y cirugía mínimamente invasiva cuando es necesaria."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento dedos en gatillo o resorte mano en Medellín – ortopedia"
        intro="El dedo en gatillo o tenosinovitis estenosante ocurre cuando el tendón flexor del dedo se inflama y engrosamiento dificulta el deslizamiento fluido a través de la polea tendinosa, causando que el dedo se quede trabado en posición de flexión y luego salte con un movimiento brusco similar al accionar de un gatillo. Es más frecuente en el pulgar, el dedo anular y el medio, y puede ser muy limitante para las actividades de la vida diaria."
        symptomsTitle="Síntomas del Dedo en Gatillo"
        symptoms={[
          'Sensación de resalto o chasquido al mover el dedo',
          'Dedo que queda bloqueado en posición flexionada',
          'Dolor en la palma de la mano a nivel de la polea',
          'Rigidez matutina que mejora con el movimiento',
          'Nódulo palpable en la palma de la mano',
          'Limitación para extender completamente el dedo',
          'Mayor frecuencia en diabéticos y personas con actividades de agarre repetitivo',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Tratamiento Conservador', desc: 'Reposo, splint nocturno y modificación de actividades para reducir la inflamación del tendón.' },
          { title: 'Infiltración con Corticosteroides', desc: 'Inyección ecoguiada en la vaina del tendón afectado. Opción muy efectiva, especialmente en pacientes con tendinitis de muñeca asociada.' },
          { title: 'Cirugía Mínimamente Invasiva', desc: 'Liberación percutánea o abierta de la polea A1 cuando el tratamiento conservador no es suficiente. Procedimiento de corta duración con alta tasa de éxito.' },
          { title: 'Fisioterapia Post-procedimiento', desc: 'Programa de rehabilitación para recuperar la movilidad completa del dedo tras la infiltración o cirugía.' },
        ]}
        benefits={[
          'Diagnóstico preciso con ecografía',
          'Infiltraciones ecoguiadas de alta efectividad',
          'Cirugía mínimamente invasiva ambulatoria',
          'Recuperación rápida de la función del dedo',
          'Tratamiento para condiciones asociadas (tendinitis)',
          'Seguimiento personalizado',
        ]}
        drApproach="El Dr. Rodríguez valora integralmente el dedo en gatillo considerando condiciones asociadas como la tendinitis de muñeca o la diabetes. Su protocolo inicia con la infiltración ecoguiada, que tiene una tasa de éxito elevada, y reserva la cirugía para los casos recurrentes o que no responden al tratamiento."
        faqs={[
          { q: '¿La infiltración cura el dedo en gatillo?', a: 'La infiltración con corticosteroides resuelve el problema en un alto porcentaje de casos (70-80%). Si recurre, puede necesitarse una segunda infiltración o cirugía.' },
          { q: '¿La cirugía para el dedo en gatillo es compleja?', a: 'No. Es un procedimiento sencillo que se realiza de forma ambulatoria con anestesia local, con una recuperación rápida y alta tasa de éxito.' },
          { q: '¿Puedo prevenir el dedo en gatillo?', a: 'Evitar movimientos repetitivos de agarre y tratar a tiempo la tendinitis de muñeca puede prevenir o retrasar su aparición.' },
        ]}
        relatedLinks={[
          { href: '/tendinitis-de-muneca', label: 'Tendinitis de Muñeca' },
          { href: '/sindrome-de-tunel-del-carpo', label: 'Túnel del Carpo' },
          { href: '/tendinitis-de-quervain', label: 'Tendinitis de Quervain' },
          { href: '/gangliones', label: 'Gangliones' },
        ]}
      />
    </Layout>
  );
}

export function FracturasRadioDistal() {
  return (
    <Layout
      title="Fracturas de Radio Distal en Medellín | Dr. Guillermo Rodríguez – Ortopedista"
      description="Tratamiento especializado para fracturas de radio distal en Medellín. Manejo conservador y quirúrgico. Dr. Guillermo Rodríguez Restrepo, Ortopedista."
    >
      <ServicePage
        badge="Mano y Muñeca · Traumatología"
        title="Fracturas de Radio Distal en Medellín: Atención Especializada en Ortopedia"
        subtitle="Valoración oportuna y especializada de las fracturas de radio distal, frecuentemente relacionadas con fracturas de antebrazo. Tratamiento conservador o quirúrgico según el tipo de fractura."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento fracturas radio distal muñeca en Medellín – traumatología ortopedia"
        intro="Las fracturas de radio distal son las fracturas más frecuentes del extremo inferior del radio, el hueso principal del antebrazo. Ocurren típicamente por caídas sobre la mano extendida y son especialmente frecuentes en mujeres posmenopáusicas con osteoporosis y en jóvenes deportistas. La fractura de Colles y la de Smith son los tipos más comunes. El manejo precoz y correcto es fundamental para recuperar la función completa de la muñeca."
        symptomsTitle="Causas y Tipos"
        symptoms={[
          'Caída sobre la mano extendida (mecanismo más frecuente)',
          'Accidentes deportivos de alta energía',
          'Traumatismos en accidentes de tránsito',
          'Osteoporosis en adultos mayores (fracturas por fragilidad)',
          'Fractura de Colles: desplazamiento dorsal del fragmento distal',
          'Fractura de Smith: desplazamiento volar (menos frecuente)',
          'Fracturas intraarticulares que involucran la superficie articular',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Tratamiento Conservador', desc: 'Reducción cerrada e inmovilización con yeso. Indicado para fracturas estables sin desplazamiento significativo.' },
          { title: 'Cirugía con Placa Volar', desc: 'Fijación interna con placa volar de bajo perfil cuando la fractura es inestable, desplazada o intraarticular. Permite movilización temprana.' },
          { title: 'Programa de Rehabilitación', desc: 'Fisioterapia para recuperar movilidad, fuerza de agarre y función de la muñeca tras el período de inmovilización o cirugía.' },
          { title: 'Control de Osteoporosis', desc: 'En adultos mayores, se evalúa y maneja la osteoporosis para prevenir futuras fracturas.' },
        ]}
        benefits={[
          'Diagnóstico con radiografía y tomografía si es necesario',
          'Decisión terapéutica según tipo y estabilidad de la fractura',
          'Cirugía moderna con placa volar cuando es necesaria',
          'Movilización temprana para prevenir rigidez',
          'Programa de rehabilitación integral',
          'Evaluación de densidad ósea en casos apropiados',
        ]}
        drApproach="El Dr. Rodríguez evalúa cada fractura de radio distal considerando el tipo de fractura, el grado de desplazamiento, la condición ósea del paciente y sus demandas funcionales. Su objetivo es lograr una reducción anatómica que permita recuperar la función completa de la muñeca con el menor tiempo de inmovilización posible."
        faqs={[
          { q: '¿Cuánto tiempo llevo yeso?', a: 'El período de inmovilización suele ser de 4-6 semanas para fracturas tratadas conservadoramente. Con cirugía, se puede iniciar la movilización más tempranamente.' },
          { q: '¿Recuperaré la función completa de la muñeca?', a: 'En la mayoría de casos sí, con el tratamiento adecuado y la fisioterapia posterior. La recuperación completa puede tomar de 3 a 6 meses.' },
          { q: '¿La placa de osteosíntesis hay que retirarla?', a: 'No necesariamente. Las placas modernas de titanio son biocompatibles y generalmente no requieren retiro, salvo que causen molestias.' },
        ]}
        relatedLinks={[
          { href: '/fracturas-de-antebrazo', label: 'Fracturas de Antebrazo' },
          { href: '/fracturas-de-tobillo', label: 'Fracturas de Tobillo' },
          { href: '/tendinitis-de-muneca', label: 'Tendinitis de Muñeca' },
          { href: '/ortopedia-geriatrica', label: 'Ortopedia Geriátrica' },
        ]}
      />
    </Layout>
  );
}

export function FracturasAntebrazo() {
  return (
    <Layout
      title="Fracturas de Antebrazo en Medellín | Dr. Guillermo Rodríguez – Ortopedista"
      description="Tratamiento especializado para fracturas de antebrazo en Medellín. Manejo conservador y quirúrgico. Dr. Guillermo Rodríguez Restrepo, Ortopedista."
    >
      <ServicePage
        badge="Mano y Muñeca · Traumatología"
        title="Fracturas de Antebrazo en Medellín: Atención Especializada en Ortopedia"
        subtitle="Manejo integral de fracturas del radio y/o cúbito, desde el diagnóstico preciso hasta la rehabilitación completa para recuperar la función rotatoria del antebrazo."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento fracturas antebrazo radio cúbito en Medellín – traumatología"
        intro="Las fracturas de antebrazo implican la lesión del radio, el cúbito o ambos huesos. Son frecuentes en niños y en adultos que sufren traumatismos de alta energía. El tratamiento adecuado es crucial ya que la función rotatoria del antebrazo (pronosupinación) depende de la correcta alineación de ambos huesos. El Dr. Guillermo Rodríguez Restrepo ofrece en Medellín un manejo integral con evaluación completa y protocolos modernos de tratamiento."
        symptomsTitle="Causas y Características"
        symptoms={[
          'Traumatismos directos sobre el antebrazo',
          'Caídas con apoyo de mano extendida (niños especialmente)',
          'Accidentes deportivos y de tránsito',
          'Fracturas aisladas de radio o cúbito',
          'Fracturas de ambos huesos del antebrazo',
          'Fracturas-luxaciones (Monteggia, Galeazzi)',
          'Mayor frecuencia en niños en crecimiento',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Tratamiento Conservador', desc: 'Yeso braquiopalmar para fracturas estables. Más frecuente en niños donde el potencial de remodelación ósea permite aceptar cierto grado de angulación.' },
          { title: 'Cirugía con Placa y Tornillos', desc: 'Para adultos con fracturas inestables o desplazadas, la fijación interna con placas de compresión garantiza la correcta alineación y permite la movilización temprana.' },
          { title: 'Clavos Intramedulares', desc: 'En niños mayores, los clavos flexibles son una alternativa quirúrgica que combina estabilización con mínima cicatriz.' },
          { title: 'Rehabilitación', desc: 'Protocolo de fisioterapia para recuperar la movilidad del codo, la muñeca y especialmente la pronosupinación del antebrazo.' },
        ]}
        benefits={[
          'Diagnóstico con radiografía en dos planos',
          'Tratamiento adaptado a la edad y tipo de fractura',
          'Fijación interna estable para movilización temprana',
          'Programa de rehabilitación especializado',
          'Seguimiento radiológico hasta consolidación completa',
          'Prevención de complicaciones (sinostosis, pseudoartrosis)',
        ]}
        drApproach="El Dr. Rodríguez evalúa cada fractura de antebrazo con estudios imagenológicos completos. Su manejo se orienta hacia la fijación anatómica que permita la recuperación de la pronosupinación completa, fundamental para las actividades de la vida diaria y el trabajo."
        faqs={[
          { q: '¿Las fracturas de antebrazo en niños necesitan cirugía?', a: 'En niños, muchas fracturas se pueden tratar con yeso gracias al potencial de remodelación. Sin embargo, fracturas inestables o con angulación significativa pueden requerir cirugía.' },
          { q: '¿Cuánto tiempo para volver a trabajar?', a: 'Depende del trabajo. Actividades de escritorio: 4-6 semanas. Trabajos manuales intensos: 3-4 meses. La fisioterapia es fundamental para acelerar la recuperación.' },
        ]}
        relatedLinks={[
          { href: '/fracturas-de-radio-distal', label: 'Fracturas de Radio Distal' },
          { href: '/fracturas-de-tobillo', label: 'Fracturas de Tobillo' },
          { href: '/tendinitis-de-muneca', label: 'Tendinitis de Muñeca' },
        ]}
      />
    </Layout>
  );
}
