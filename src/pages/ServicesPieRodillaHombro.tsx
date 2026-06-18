import Layout from '../components/Layout';
import ServicePage from '../components/ServicePage';

export function FascitisPlantar() {
  return (
    <Layout
      title="Fascitis Plantar en Medellín | Diagnóstico y Tratamiento | Dr. Guillermo Rodríguez"
      description="Tratamiento especializado para fascitis plantar en Medellín. Infiltraciones, PRP y fisioterapia. Dr. Guillermo Rodríguez Restrepo, Ortopedista. +57 324 408 1281."
    >
      <ServicePage
        badge="Pie y Tobillo · Medellín"
        title="Fascitis Plantar en Medellín: Diagnóstico y Tratamiento Especializado"
        subtitle="Una de las causas más frecuentes de dolor en el talón. Tratamiento integral con opciones conservadoras, infiltraciones y PRP, adaptadas a cada paciente."
        heroImage="/Dr.-Guillermo-Rodriguez-Restrepo--Diagnostico-preciso-de-fascitis-plantar-con-ecografia-en-Medellin.jpg"
        heroImageAlt="Tratamiento de fascitis plantar en Medellín – dolor de talón – ortopedia"
        intro="La fascitis plantar es la inflamación de la fascia plantar, el tejido fibroso que conecta el hueso del talón con los dedos del pie. Es la causa más frecuente de dolor en el talón y puede afectar significativamente la calidad de vida. En el consultorio del Dr. Guillermo Rodríguez Restrepo en Medellín, ofrecemos un diagnóstico preciso con ecografía músculo-esquelética y un plan de tratamiento personalizado."
        symptomsTitle="Síntomas y Factores de Riesgo"
        symptoms={[
          'Dolor agudo en el talón, especialmente al dar los primeros pasos por la mañana',
          'Dolor que mejora con el movimiento pero empeora tras periodos de descanso',
          'Sensación de ardor o punzada en la planta del pie',
          'Personas con sobrepeso o que permanecen mucho tiempo de pie',
          'Deportistas con actividad de alto impacto',
          'Uso de calzado inadecuado o superficies duras',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Tratamiento Conservador', desc: 'Reposo, hielo, estiramientos de la fascia plantar y cambio de calzado. Plantillas ortopédicas para aliviar la presión.' },
          { title: 'Fisioterapia', desc: 'Programa de rehabilitación con ejercicios específicos para elongar y fortalecer la fascia plantar y el tendón de Aquiles.' },
          { title: 'Infiltraciones con Antiinflamatorios', desc: 'Infiltración ecoguiada con corticosteroides directamente en el área inflamada para alivio rápido y eficaz del dolor.' },
          { title: 'Plasma Rico en Plaquetas (PRP)', desc: 'Para casos refractarios, el PRP estimula la regeneración biológica de la fascia plantar con resultados duraderos.' },
        ]}
        benefitsTitle="¿Por qué Tratarse con el Dr. Rodríguez?"
        benefits={[
          'Diagnóstico preciso con ecografía músculo-esquelética',
          'Plan personalizado según severidad y estilo de vida',
          'Opciones desde conservadoras hasta intervención mínimamente invasiva',
          'Infiltraciones ecoguiadas para máxima efectividad',
          'PRP disponible para casos crónicos refractarios',
          'Seguimiento cercano del proceso de recuperación',
        ]}
        drApproach="El Dr. Guillermo Rodríguez Restrepo evalúa cada paciente con fascitis plantar de forma integral, considerando la severidad del caso, el tiempo de evolución y las actividades del paciente. Su protocolo va desde las medidas conservadoras hasta las infiltraciones ecoguiadas o el PRP, siempre priorizando el tratamiento menos invasivo que logre los mejores resultados."
        faqs={[
          { q: '¿La fascitis plantar desaparece sola?', a: 'En muchos casos puede mejorar con medidas conservadoras, pero cuando persiste más de 3 meses se requiere tratamiento especializado para evitar que se vuelva crónica.' },
          { q: '¿Cuánto tiempo tarda en sanar?', a: 'Con el tratamiento adecuado, la mayoría de pacientes mejoran en 6 a 12 semanas. Los casos crónicos pueden requerir tratamientos más intensivos como PRP.' },
          { q: '¿Necesito cirugía?', a: 'La cirugía es poco frecuente para la fascitis plantar. Se considera solo cuando todos los tratamientos conservadores han fallado tras meses de manejo adecuado.' },
        ]}
        relatedLinks={[
          { href: '/plasma-rico-en-plaquetas', label: 'PRP – Tratamiento Regenerativo' },
          { href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios', label: 'Infiltraciones Articulares' },
          { href: '/esguinces-cronicos-de-tobillo', label: 'Esguinces Crónicos' },
          { href: '/hallux-valgus', label: 'Hallux Valgus' },
        ]}
      />
    </Layout>
  );
}

export function EsguincesTobillo() {
  return (
    <Layout
      title="Esguinces Crónicos de Tobillo en Medellín | Dr. Guillermo Rodríguez"
      description="Tratamiento especializado para esguinces crónicos de tobillo en Medellín. Ortopedia y traumatología. Dr. Guillermo Rodríguez Restrepo. +57 324 408 1281."
    >
      <ServicePage
        badge="Pie y Tobillo · Medellín"
        title="Esguinces Crónicos de Tobillo en Medellín: Atención Especializada en Ortopedia"
        subtitle="Valoración experta con ecografía para diagnóstico preciso. Protocolos personalizados que incluyen infiltraciones y PRP para reducir el dolor e inflamación y prevenir recaídas."
        heroImage="/Dr.-Guillermo-Rodriguez-Restrepo--Diagnostico-y-tratamiento-especializado-para-esguinces-cronicos-de-tobillo-en-Medellin.jpg"
        heroImageAlt="Tratamiento de esguinces crónicos de tobillo en Medellín – ortopedia y traumatología"
        intro="Los esguinces crónicos de tobillo son aquellos que persisten o se repiten frecuentemente, generando inestabilidad, dolor y limitación funcional. Cuando un esguince inicial no se trata adecuadamente, puede evolucionar hacia una condición crónica que requiere valoración ortopédica especializada. El Dr. Guillermo Rodríguez Restrepo ofrece en Medellín un manejo integral que va desde las terapias conservadoras hasta las infiltraciones articulares ecoguiadas."
        symptomsTitle="Síntomas de Esguince Crónico de Tobillo"
        symptoms={[
          'Dolor persistente en el tobillo después de varios meses del trauma inicial',
          'Sensación de inestabilidad o "tobillo flojo"',
          'Dificultad para caminar en terrenos irregulares',
          'Inflamación recurrente después de actividad física',
          'Episodios repetidos de torcedura del tobillo',
          'Limitación de la movilidad articular',
        ]}
        treatmentsTitle="Protocolo de Tratamiento"
        treatments={[
          { title: 'Evaluación con Ecografía', desc: 'Diagnóstico preciso del estado de los ligamentos y la articulación del tobillo mediante ecografía músculo-esquelética.' },
          { title: 'Fisioterapia Especializada', desc: 'Programa de propiocepción y fortalecimiento muscular para recuperar la estabilidad articular y prevenir recaídas.' },
          { title: 'Infiltraciones Articulares', desc: 'Para el componente inflamatorio activo, se realizan infiltraciones ecoguiadas para reducir el dolor y la inflamación.' },
          { title: 'PRP para Regeneración Ligamentosa', desc: 'El Plasma Rico en Plaquetas estimula la cicatrización y reparación de los ligamentos lesionados, especialmente en casos crónicos.' },
        ]}
        benefitsTitle="Beneficios del Tratamiento Especializado"
        benefits={[
          'Diagnóstico preciso con ecografía músculo-esquelética',
          'Tratamiento dirigido al origen del problema',
          'Reducción de dolor e inflamación',
          'Recuperación de la estabilidad articular',
          'Prevención de recaídas y nuevos esguinces',
          'Alternativa no quirúrgica en la mayoría de casos',
        ]}
        drApproach="El Dr. Rodríguez evalúa cada esguince crónico de forma completa, identificando si existe lesión ligamentosa significativa o daño articular. Su protocolo combina la fisioterapia especializada con los tratamientos intervencionistas disponibles (infiltraciones y PRP) para lograr una recuperación funcional completa y duradera."
        faqs={[
          { q: '¿Cuándo un esguince se considera crónico?', a: 'Se considera crónico cuando el dolor y la inestabilidad persisten más de 6 semanas o cuando se repiten episodios de torcedura, indicando que los ligamentos no sanaron correctamente.' },
          { q: '¿Necesito cirugía para un esguince crónico?', a: 'En la mayoría de casos no. Con tratamiento especializado de fisioterapia e infiltraciones se puede recuperar la función. La cirugía se reserva para casos con inestabilidad severa que no responden al tratamiento conservador.' },
        ]}
        relatedLinks={[
          { href: '/fascitis-plantar', label: 'Fascitis Plantar' },
          { href: '/fracturas-de-tobillo', label: 'Fracturas de Tobillo' },
          { href: '/plasma-rico-en-plaquetas', label: 'PRP – Tratamiento Regenerativo' },
          { href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios', label: 'Infiltraciones Articulares' },
        ]}
      />
    </Layout>
  );
}

export function FracturasTobillo() {
  return (
    <Layout
      title="Fracturas de Tobillo en Medellín | Tratamiento Especializado | Dr. Guillermo Rodríguez"
      description="Tratamiento especializado para fracturas de tobillo en Medellín. Manejo conservador y quirúrgico con rehabilitación integral. Dr. Guillermo Rodríguez Restrepo."
    >
      <ServicePage
        badge="Pie y Tobillo · Traumatología"
        title="Tratamiento Especializado para Fracturas de Tobillo en Medellín"
        subtitle="Diagnóstico preciso y manejo integral para fracturas de tobillo. Desde la estabilización con yeso hasta la osteosíntesis quirúrgica cuando es necesaria, con programa de rehabilitación completo."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento fractura de tobillo en Medellín – ortopedia y traumatología"
        intro="Las fracturas de tobillo son lesiones frecuentes en traumatología y pueden ser resultado de torceduras graves, caídas, impactos deportivos o accidentes. El manejo oportuno y especializado es fundamental para garantizar una recuperación funcional completa y prevenir complicaciones como la inestabilidad crónica o la artrosis post-traumática. El Dr. Guillermo Rodríguez Restrepo ofrece en Medellín un manejo integral con la última tecnología diagnóstica y terapéutica."
        symptomsTitle="Tipos y Causas"
        symptoms={[
          'Torceduras graves con mecanismo de inversión forzada',
          'Caídas desde altura',
          'Impactos directos en accidentes deportivos',
          'Traumatismos en accidentes de tránsito',
          'Fracturas maleolares (maléolo externo, interno o ambos)',
          'Fracturas bimaleolares o trimaleolares',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Tratamiento Conservador', desc: 'Estabilización con yeso o bota ortopédica. Indicado para fracturas estables sin desplazamiento significativo.' },
          { title: 'Osteosíntesis Quirúrgica', desc: 'Cuando el yeso no es suficiente para mantener la fractura estable, se realiza fijación interna con placas y tornillos para garantizar la correcta alineación.' },
          { title: 'Programa de Rehabilitación', desc: 'Protocolo de fisioterapia para recuperar movilidad, fuerza y propiocepción del tobillo tras el período de inmovilización.' },
          { title: 'Monitoreo Post-tratamiento', desc: 'Seguimiento radiológico y clínico para verificar la consolidación de la fractura y prevenir complicaciones.' },
        ]}
        benefits={[
          'Diagnóstico imagenológico preciso',
          'Decisión terapéutica basada en el tipo y estabilidad de la fractura',
          'Técnica quirúrgica de mínima invasión cuando es necesaria',
          'Programa de rehabilitación integral',
          'Seguimiento hasta recuperación funcional completa',
          'Prevención de inestabilidad crónica y artrosis',
        ]}
        drApproach="El Dr. Rodríguez evalúa cada fractura de tobillo con estudios de imagen completos para determinar el tratamiento más apropiado. Su objetivo es lograr la consolidación perfecta de la fractura con la mínima intervención necesaria, garantizando la recuperación funcional completa del tobillo."
        faqs={[
          { q: '¿Cómo sé si mi tobillo está fracturado?', a: 'Los síntomas incluyen dolor intenso, inflamación, equimosis y dificultad para apoyar el pie. Es fundamental consultar al especialista para el diagnóstico con radiografía.' },
          { q: '¿Cuánto tiempo dura la recuperación?', a: 'Las fracturas simples consolidan en 6-8 semanas. Las más complejas que requieren cirugía pueden necesitar 3-4 meses para la recuperación funcional completa.' },
          { q: '¿Necesito cirugía siempre?', a: 'No. Muchas fracturas de tobillo se tratan con yeso. La cirugía se indica cuando la fractura es inestable o está desplazada y no puede mantenerse con inmovilización.' },
        ]}
        relatedLinks={[
          { href: '/esguinces-cronicos-de-tobillo', label: 'Esguinces Crónicos de Tobillo' },
          { href: '/fascitis-plantar', label: 'Fascitis Plantar' },
          { href: '/fracturas-de-radio-distal', label: 'Fracturas de Radio Distal' },
          { href: '/fracturas-de-antebrazo', label: 'Fracturas de Antebrazo' },
        ]}
      />
    </Layout>
  );
}

export function HalluxValgusPage() {
  return (
    <Layout
      title="Hallux Valgus (Juanete) en Medellín | Tratamiento | Dr. Guillermo Rodríguez"
      description="Tratamiento especializado para Hallux Valgus (juanete) en Medellín. Opciones conservadoras y quirúrgicas. Dr. Guillermo Rodríguez Restrepo, Ortopedista."
    >
      <ServicePage
        badge="Pie y Tobillo · Medellín"
        title="Tratamiento Especializado para Hallux Valgus en Medellín, Antioquia"
        subtitle="Deformidad progresiva del dedo gordo del pie que causa dolor e incapacidad. Ofrecemos opciones no quirúrgicas y quirúrgicas según la severidad de cada caso."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento Hallux Valgus juanete en Medellín – ortopedia pie"
        intro="El Hallux Valgus, comúnmente conocido como juanete, es una deformidad progresiva del dedo gordo del pie donde la articulación metatarsofalángica se desvía hacia afuera, causando una prominencia ósea dolorosa en el lado interno del pie. Es más frecuente en mujeres y puede agravarse con el uso de calzado ajustado. El Dr. Guillermo Rodríguez Restrepo ofrece en Medellín diagnóstico diferencial preciso y un plan de tratamiento adaptado a la severidad de la deformidad."
        symptomsTitle="Síntomas del Hallux Valgus"
        symptoms={[
          'Prominencia ósea dolorosa en la base del dedo gordo',
          'Dolor e inflamación en la articulación metatarsofalángica',
          'Dificultad para encontrar calzado cómodo',
          'Enrojecimiento e irritación de la piel sobre el juanete',
          'Desviación del dedo gordo hacia los demás dedos',
          'Formación de callosidades en la planta del pie',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Tratamiento Conservador', desc: 'Cambio de calzado, separadores de dedos, plantillas ortopédicas y ejercicios para mejorar la alineación y reducir el dolor.' },
          { title: 'Infiltraciones Antiinflamatorias', desc: 'Para alivio del dolor e inflamación en casos sin indicación quirúrgica inmediata o como preparación para la cirugía.' },
          { title: 'Cirugía del Hallux Valgus', desc: 'Indicada cuando los tratamientos conservadores no son suficientes. Procedimiento para corregir la deformidad ósea y recuperar la función del pie.' },
          { title: 'Ortopedia Geriátrica', desc: 'En adultos mayores, se consideran las condiciones generales y la capacidad de recuperación para definir el tratamiento más adecuado.' },
        ]}
        benefits={[
          'Diagnóstico diferencial con otras causas de dolor en el antepié',
          'Plan de tratamiento escalonado y personalizado',
          'Opciones no quirúrgicas efectivas para casos leves y moderados',
          'Técnica quirúrgica moderna para casos avanzados',
          'Atención especial en pacientes de la tercera edad',
          'Seguimiento hasta recuperación funcional completa',
        ]}
        drApproach="El Dr. Rodríguez evalúa el Hallux Valgus con estudios radiológicos y análisis funcional del pie. Su filosofía es agotar las opciones conservadoras antes de indicar cirugía, especialmente en pacientes de la tercera edad donde la recuperación post-quirúrgica puede ser más exigente."
        faqs={[
          { q: '¿El Hallux Valgus empeora con el tiempo?', a: 'Sí, es una deformidad progresiva. El tratamiento temprano, aunque no la cura, puede ralentizar su progresión y controlar el dolor.' },
          { q: '¿La cirugía es definitiva?', a: 'La cirugía corrige la deformidad y en la mayoría de casos es definitiva con buenos resultados a largo plazo, especialmente si se mantienen buenos hábitos de calzado.' },
          { q: '¿Necesito operar si no duele mucho?', a: 'No necesariamente. Si el dolor es manejable con tratamiento conservador, se puede evitar o retrasar la cirugía. El Dr. Rodríguez evaluará la mejor opción para tu caso.' },
        ]}
        relatedLinks={[
          { href: '/fascitis-plantar', label: 'Fascitis Plantar' },
          { href: '/ortopedia-geriatrica', label: 'Ortopedia Geriátrica' },
          { href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios', label: 'Infiltraciones Articulares' },
          { href: '/artrosis-de-rodillas', label: 'Artrosis de Rodillas' },
        ]}
      />
    </Layout>
  );
}

export function ArtrosisRodillas() {
  return (
    <Layout
      title="Artrosis de Rodillas en Medellín | Tratamiento Especializado | Dr. Guillermo Rodríguez"
      description="Tratamiento integral para artrosis de rodillas en Medellín: PRP, viscosuplementación, células mesenquimales e infiltraciones. Dr. Guillermo Rodríguez Restrepo."
    >
      <ServicePage
        badge="Rodilla · Ortopedia Medellín"
        title="Artrosis de Rodillas en Medellín: Tratamiento Especializado en Ortopedia y Traumatología"
        subtitle="La artrosis de rodilla es la condición más tratada en ortopedia. Ofrecemos el espectro completo de tratamientos regenerativos e intervencionistas para reducir el dolor y mejorar la función articular sin cirugía."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento artrosis de rodillas en Medellín – viscosuplementación PRP ortopedia"
        intro="La artrosis de rodilla (gonartritis) es la degeneración progresiva del cartílago articular de la rodilla, generando dolor, rigidez, inflamación y limitación funcional. Es la patología más frecuente en el consultorio de ortopedia, especialmente en mayores de 50 años. El Dr. Guillermo Rodríguez Restrepo ofrece en Medellín el espectro completo de tratamientos modernos: desde los regenerativos como el PRP y la viscosuplementación, hasta las infiltraciones antiinflamatorias ecoguiadas, siempre con el objetivo de reducir el dolor y mejorar la calidad de vida."
        symptomsTitle="Síntomas y Grados de Artrosis"
        symptoms={[
          'Dolor en la rodilla que aumenta con la actividad',
          'Rigidez matutina que mejora con el movimiento',
          'Inflamación y derrame articular (líquido en la rodilla)',
          'Crepitación (crujidos) al mover la rodilla',
          'Pérdida progresiva de la movilidad',
          'Dificultad para subir y bajar escaleras',
          'Deformidad progresiva en varo o valgo',
          'Limitación para actividades cotidianas',
        ]}
        treatmentsTitle="Tratamientos Disponibles"
        treatments={[
          { title: 'Viscosuplementación', desc: 'Infiltración de ácido hialurónico intraarticular para lubricar y amortiguar la rodilla. Especialmente efectivo en artrosis leve a moderada.' },
          { title: 'Plasma Rico en Plaquetas (PRP)', desc: 'Factores de crecimiento del propio paciente que estimulan la regeneración del cartílago articular y reducen la inflamación.' },
          { title: 'Células Mesenquimales', desc: 'Tratamiento regenerativo avanzado para artrosis moderada a severa que busca una alternativa real a la cirugía de reemplazo.' },
          { title: 'Infiltraciones Antiinflamatorias', desc: 'Corticosteroides ecoguiados para el control rápido del dolor y la inflamación en episodios agudos.' },
        ]}
        benefitsTitle="Ventajas del Manejo No Quirúrgico"
        benefits={[
          'Tratamiento ambulatorio sin hospitalización',
          'Opciones para todos los grados de artrosis',
          'Combinación de tratamientos para mejor resultado',
          'Retraso o evitación de la cirugía de reemplazo',
          'Mejora de la movilidad y función articular',
          'Reducción significativa del dolor',
          'Opciones especializadas para adultos mayores',
          'Enfoque integral con rehabilitación y educación',
        ]}
        drApproach="El Dr. Guillermo Rodríguez Restrepo evalúa cada caso de artrosis de rodilla con estudios clínicos e imagenológicos (radiografía y ecografía) para determinar el grado de la enfermedad y el tratamiento más adecuado. Su filosofía es ofrecer la opción regenerativa y menos invasiva que mejor se adapte al paciente, considerando su edad, grado de artrosis y objetivos funcionales."
        faqs={[
          { q: '¿La artrosis de rodilla tiene cura?', a: 'No existe cura definitiva para la artrosis, pero los tratamientos modernos disponibles pueden controlar efectivamente el dolor y mejorar la función articular, muchas veces evitando la cirugía por años.' },
          { q: '¿Cuál es el mejor tratamiento para mi artrosis?', a: 'Depende del grado de la artrosis, la edad, el estilo de vida y otros factores. El Dr. Rodríguez realizará una evaluación completa para recomendarte el tratamiento más apropiado.' },
          { q: '¿PRP o viscosuplementación para artrosis?', a: 'Ambos son efectivos. En muchos casos se combinan para potenciar los resultados. El Dr. Rodríguez determinará cuál o cuáles son más indicados para tu caso específico.' },
          { q: '¿Puedo evitar la prótesis de rodilla?', a: 'En muchos casos sí, especialmente con los tratamientos regenerativos modernos. El objetivo es retrasar o evitar la cirugía el mayor tiempo posible manteniendo buena calidad de vida.' },
        ]}
        relatedLinks={[
          { href: '/viscosuplementacion', label: 'Viscosuplementación' },
          { href: '/plasma-rico-en-plaquetas', label: 'PRP – Plasma Rico en Plaquetas' },
          { href: '/celulas-mesenguimales', label: 'Células Mesenquimales' },
          { href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios', label: 'Infiltraciones Articulares' },
          { href: '/ortopedia-geriatrica', label: 'Ortopedia Geriátrica' },
        ]}
      />
    </Layout>
  );
}

export function ManguitoRotador() {
  return (
    <Layout
      title="Síndrome de Manguito Rotador en Medellín | Dr. Guillermo Rodríguez"
      description="Tratamiento para síndrome de manguito rotador en Medellín. Infiltraciones ecoguiadas y PRP. Dr. Guillermo Rodríguez Restrepo, Ortopedista. +57 324 408 1281."
    >
      <ServicePage
        badge="Hombro · Ortopedia Medellín"
        title="Tratamiento para el Síndrome de Manguito Rotador en Medellín"
        subtitle="Diagnóstico preciso con ecografía músculo-esquelética y tratamiento integral que incluye infiltraciones ecoguiadas y PRP para acelerar la cicatrización y recuperar la movilidad del hombro."
        heroImage="/Evaluacion-medica-especializada.jpg"
        heroImageAlt="Tratamiento síndrome manguito rotador hombro en Medellín – ortopedia"
        intro="El síndrome de manguito rotador se refiere a las lesiones que afectan al grupo de músculos y tendones que rodean la articulación del hombro, permitiendo el movimiento y la estabilización de la cabeza humeral. Las lesiones del manguito rotador son causa frecuente de dolor, debilidad y limitación de movimiento del hombro. El Dr. Guillermo Rodríguez Restrepo utiliza ecografía músculo-esquelética para un diagnóstico preciso y ofrece tratamientos mínimamente invasivos efectivos."
        symptomsTitle="Síntomas del Manguito Rotador"
        symptoms={[
          'Dolor en el hombro que aumenta al elevar el brazo',
          'Dolor nocturno que interfiere con el sueño',
          'Debilidad al levantar o rotar el brazo',
          'Dificultad para alcanzar objetos en altura',
          'Crepitación o sonidos al mover el hombro',
          'Limitación progresiva del rango de movimiento',
          'Dolor irradiado hacia el cuello o el brazo',
        ]}
        treatmentsTitle="Opciones de Tratamiento"
        treatments={[
          { title: 'Diagnóstico con Ecografía', desc: 'La ecografía músculo-esquelética permite visualizar con precisión el estado de los tendones del manguito, identificando roturas parciales o totales.' },
          { title: 'Infiltraciones Ecoguiadas', desc: 'Infiltraciones articulares o subacromialescon corticosteroides bajo guía ecográfica para alivio del dolor e inflamación.' },
          { title: 'PRP para Tendones', desc: 'Plasma Rico en Plaquetas para estimular la cicatrización y regeneración de los tendones afectados, reduciendo el tiempo de recuperación.' },
          { title: 'Fisioterapia', desc: 'Programa de rehabilitación para recuperar fuerza, movilidad y estabilidad del hombro, complementando los tratamientos intervencionistas.' },
        ]}
        benefitsTitle="Ventajas del Tratamiento"
        benefits={[
          'Diagnóstico preciso con ecografía en el mismo consultorio',
          'Tratamiento ecoguiado para máxima efectividad',
          'PRP para regeneración real de los tendones',
          'Alternativa no quirúrgica en lesiones parciales',
          'Recuperación más rápida con protocolos modernos',
          'Seguimiento personalizado del proceso de recuperación',
        ]}
        drApproach="Con entrenamiento específico en Ecografía Músculo Esquelética 2025, el Dr. Rodríguez ofrece diagnóstico y tratamiento integrado del manguito rotador en su consultorio. Evalúa cada caso para determinar si la lesión puede manejarse de forma conservadora con PRP e infiltraciones, o si requiere manejo quirúrgico."
        faqs={[
          { q: '¿Toda lesión de manguito rotador requiere cirugía?', a: 'No. Las roturas parciales y muchas roturas completas en pacientes mayores responden bien al tratamiento conservador con fisioterapia, infiltraciones y PRP.' },
          { q: '¿El PRP repara los tendones del manguito?', a: 'El PRP estimula la cicatrización y regeneración del tejido tendinoso, siendo especialmente útil en lesiones parciales y tendinopatías crónicas.' },
          { q: '¿Cuánto tiempo de recuperación necesito?', a: 'Depende de la severidad de la lesión. Las tendinopatías pueden mejorar en 6-12 semanas con tratamiento. Las roturas más significativas requieren más tiempo.' },
        ]}
        relatedLinks={[
          { href: '/plasma-rico-en-plaquetas', label: 'PRP – Tratamiento Regenerativo' },
          { href: '/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios', label: 'Infiltraciones Articulares' },
          { href: '/tendinitis-de-muneca', label: 'Tendinitis de Muñeca' },
        ]}
      />
    </Layout>
  );
}

export function OrtopediaGeriatrica() {
  return (
    <Layout
      title="Ortopedia Geriátrica en Medellín | Dr. Guillermo Rodríguez"
      description="Atención ortopédica especializada para adultos mayores en Medellín. Artrosis, fracturas, dolor articular. Dr. Guillermo Rodríguez Restrepo. +57 324 408 1281."
    >
      <ServicePage
        badge="Ortopedia Especial · Adulto Mayor"
        title="Ortopedia Geriátrica en Medellín: Especialistas en el Cuidado de su Salud Ósea y Articular"
        subtitle="Atención especializada en padecimientos degenerativos del adulto mayor con un enfoque humano, compasivo y adaptado a las necesidades específicas de este grupo de pacientes."
        heroImage="/Dr-Guillermo-rodriguez.jpg"
        heroImageAlt="Ortopedia geriátrica atención adulto mayor Medellín – Dr. Guillermo Rodríguez"
        intro="La ortopedia geriátrica es la rama de la ortopedia que se especializa en la atención de las condiciones musculoesqueléticas del adulto mayor. Los pacientes mayores presentan características especiales que requieren un enfoque diferenciado: mayor prevalencia de artrosis, osteoporosis, fragilidad ósea y comorbilidades que condicionan las decisiones terapéuticas. El Dr. Guillermo Rodríguez Restrepo ofrece en Medellín una atención integral y humana para este grupo de pacientes, con el objetivo de mantenerlos activos, independientes y con la menor cantidad de dolor posible."
        symptomsTitle="Condiciones más Frecuentes en el Adulto Mayor"
        symptoms={[
          'Artrosis de rodillas (una de las causas más frecuentes de consulta)',
          'Hallux Valgus (juanetes) con limitación funcional',
          'Fracturas por osteoporosis (especialmente cadera y muñeca)',
          'Dolor crónico articular de múltiples articulaciones',
          'Dificultad para caminar y riesgo de caídas',
          'Tendinopatías y bursitis',
          'Síndrome de túnel del carpo',
          'Dedos en gatillo',
        ]}
        treatmentsTitle="Enfoque Terapéutico en Ortopedia Geriátrica"
        treatments={[
          { title: 'Evaluación Integral', desc: 'Valoración completa que considera la condición médica general del paciente, medicamentos, movilidad funcional y objetivos de tratamiento.' },
          { title: 'Tratamientos Conservadores', desc: 'Prioridad a las medidas menos invasivas: fisioterapia, ayudas ortopédicas, modificación de actividades y educación al paciente y familia.' },
          { title: 'Tratamientos Regenerativos', desc: 'PRP, viscosuplementación y células mesenquimales para la artrosis, con protocolos adaptados al paciente mayor.' },
          { title: 'Intervenciones Mínimamente Invasivas', desc: 'Infiltraciones ecoguiadas para control del dolor con riesgo mínimo, considerando los condicionantes del adulto mayor.' },
        ]}
        benefitsTitle="El Objetivo: Vejez Activa e Independiente"
        benefits={[
          'Mantener la independencia funcional del adulto mayor',
          'Reducir el dolor crónico articular',
          'Prevenir caídas y fracturas',
          'Mejorar la calidad de vida',
          'Adaptación de tratamientos según condición general',
          'Atención coordinada con familia y cuidadores',
          'Trato humano, paciente y empático',
          'Opciones no quirúrgicas para pacientes con mayor riesgo',
        ]}
        drApproach="El Dr. Guillermo Rodríguez Restrepo brinda especial atención al adulto mayor, comprendiendo las particularidades de este grupo de pacientes. Su objetivo es mantener al máximo la independencia funcional y calidad de vida, adaptando los tratamientos a las condiciones generales de cada paciente y priorizando siempre la seguridad y el bienestar."
        faqs={[
          { q: '¿A partir de qué edad es recomendable la ortopedia geriátrica?', a: 'Generalmente a partir de los 65 años, aunque las necesidades individuales varían. Lo importante es la valoración integral del paciente, no solo la edad cronológica.' },
          { q: '¿Los tratamientos regenerativos son seguros para adultos mayores?', a: 'Sí. El PRP y la viscosuplementación son especialmente seguros para adultos mayores, sin contraindicaciones por edad y con excelentes resultados en artrosis.' },
          { q: '¿Mi familiar puede recibir atención en silla de ruedas?', a: 'Sí. La Torre Medical cuenta con accesibilidad para pacientes con movilidad reducida. Contáctenos para coordinar la cita.' },
        ]}
        relatedLinks={[
          { href: '/artrosis-de-rodillas', label: 'Artrosis de Rodillas' },
          { href: '/hallux-valgus', label: 'Hallux Valgus' },
          { href: '/viscosuplementacion', label: 'Viscosuplementación' },
          { href: '/plasma-rico-en-plaquetas', label: 'PRP' },
          { href: '/celulas-mesenguimales', label: 'Células Mesenquimales' },
        ]}
      />
    </Layout>
  );
}
