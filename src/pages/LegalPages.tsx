import Layout from '../components/Layout';
import { ReactNode } from 'react';

interface LegalPageProps {
  title: string;
  metaTitle: string;
  metaDesc: string;
  children: ReactNode;
}

export function LegalPage({ title, metaTitle, metaDesc, children }: LegalPageProps) {
  return (
    <Layout title={metaTitle} description={metaDesc}>
      <section className="bg-gradient-to-br from-[#0f2340] via-[#1a365d] to-[#2a4a7f] py-12 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-extrabold text-white text-2xl sm:text-3xl opacity-0 animate-cascade" style={{ animationDelay: '0.1s' }}>{title}</h1>
          <p className="text-white/60 text-xs mt-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>Dr. Guillermo Rodríguez Restrepo · Medellín, Colombia</p>
        </div>
      </section>
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-[800px] mx-auto prose prose-sm prose-headings:text-[#1a365d] prose-headings:font-bold prose-a:text-[#25D366] max-w-none">
          {children}
        </div>
      </section>
    </Layout>
  );
}

export function AvisoPrivacidadPage() {
  return (
    <LegalPage
      title="Aviso de Privacidad"
      metaTitle="Aviso de Privacidad – Dr. Guillermo Rodríguez Restrepo"
      metaDesc="Política de tratamiento de datos personales del consultorio del Dr. Guillermo Rodríguez Restrepo, Ortopedista en Medellín."
    >
      <h2>Política de Tratamiento de Datos Personales</h2>
      <p>En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia, el consultorio del <strong>Dr. Guillermo Rodríguez Restrepo</strong>, identificado con los datos de contacto indicados en este sitio web, en calidad de Responsable del Tratamiento, informa a los titulares de datos personales sobre el tratamiento que dará a su información.</p>

      <h3>1. Datos del Responsable</h3>
      <p><strong>Dr. Guillermo Rodríguez Restrepo</strong><br/>Especialista en Ortopedia y Traumatología<br/>Torre Medical, Calle 7 #39-107, Consultorio 609<br/>Medellín, Antioquia, Colombia<br/>Correo: agendasortopediaguillermorodmd@gmail.com<br/>Teléfono: +57 324 408 1281</p>

      <h3>2. Datos Recolectados</h3>
      <p>Recolectamos los siguientes datos personales: nombre, número telefónico, correo electrónico, motivo de consulta y datos relacionados con el estado de salud del paciente que sean necesarios para la prestación del servicio médico.</p>

      <h3>3. Finalidades del Tratamiento</h3>
      <ul>
        <li>Agendar y gestionar citas médicas</li>
        <li>Prestar la atención médica solicitada</li>
        <li>Realizar seguimiento a tratamientos ortopédicos</li>
        <li>Enviar información relacionada con los servicios del consultorio</li>
        <li>Cumplir obligaciones legales y regulatorias en materia de salud</li>
      </ul>

      <h3>4. Derechos del Titular</h3>
      <p>Como titular de sus datos personales, usted tiene derecho a: conocer, actualizar, rectificar y suprimir sus datos; presentar quejas ante la Superintendencia de Industria y Comercio; revocar su autorización para el tratamiento de datos; y acceder gratuitamente a la información tratada.</p>

      <h3>5. Seguridad y Confidencialidad</h3>
      <p>Adoptamos las medidas técnicas, humanas y administrativas necesarias para proteger la seguridad de los datos personales y garantizar su confidencialidad, conforme a la legislación colombiana aplicable.</p>

      <h3>6. Transferencias</h3>
      <p>Los datos personales no serán compartidos con terceros, salvo autorización expresa del titular o por obligación legal.</p>

      <h3>7. Vigencia</h3>
      <p>Esta política rige a partir de la fecha de publicación y se mantendrá vigente mientras el consultorio esté en operación.</p>
    </LegalPage>
  );
}

export function TerminosCondicionesPage() {
  return (
    <LegalPage
      title="Términos y Condiciones"
      metaTitle="Términos y Condiciones – Dr. Guillermo Rodríguez Restrepo"
      metaDesc="Términos y condiciones de uso del sitio web del Dr. Guillermo Rodríguez Restrepo, Ortopedista en Medellín."
    >
      <h2>Términos y Condiciones de Uso</h2>
      <p>El presente documento establece los términos y condiciones aplicables al uso del sitio web del <strong>Dr. Guillermo Rodríguez Restrepo</strong>, Especialista en Ortopedia y Traumatología, con sede en Medellín, Colombia.</p>

      <h3>1. Aceptación de Términos</h3>
      <p>Al acceder y utilizar este sitio web, usted acepta quedar vinculado por los presentes términos. Si no está de acuerdo, le pedimos que no utilice este sitio.</p>

      <h3>2. Naturaleza del Contenido</h3>
      <p>La información publicada en este sitio web tiene carácter informativo y educativo. No constituye diagnóstico médico, prescripción ni recomendación de tratamiento. Para recibir atención médica, comuníquese directamente con el consultorio.</p>

      <h3>3. Servicios Ofrecidos</h3>
      <p>Este sitio presenta información sobre los servicios de ortopedia y traumatología disponibles en el consultorio. Los tratamientos indicados están sujetos a evaluación médica previa y se aplican según criterio clínico del especialista.</p>

      <h3>4. Propiedad Intelectual</h3>
      <p>Todo el contenido de este sitio —textos, imágenes, logotipos y diseño— es propiedad del Dr. Guillermo Rodríguez Restrepo o de sus proveedores de contenido, y está protegido por las leyes de propiedad intelectual de Colombia.</p>

      <h3>5. Responsabilidad</h3>
      <p>El consultorio no se hace responsable por el uso indebido de la información publicada en este sitio, ni por decisiones médicas tomadas sin la debida consulta profesional.</p>

      <h3>6. Modificaciones</h3>
      <p>Nos reservamos el derecho de modificar los presentes términos en cualquier momento. Se recomienda revisar periódicamente este documento.</p>

      <h3>7. Legislación Aplicable</h3>
      <p>Los presentes términos se rigen por la legislación de la República de Colombia.</p>
    </LegalPage>
  );
}

export function DescargoPágina() {
  return (
    <LegalPage
      title="Descargo de Responsabilidad"
      metaTitle="Descargo de Responsabilidad – Dr. Guillermo Rodríguez Restrepo"
      metaDesc="Descargo de responsabilidad del sitio web del Dr. Guillermo Rodríguez Restrepo, Ortopedista en Medellín."
    >
      <h2>Descargo de Responsabilidad Médica</h2>
      <p>El sitio web del <strong>Dr. Guillermo Rodríguez Restrepo</strong> tiene como único propósito brindar información general de carácter educativo sobre ortopedia, traumatología y condiciones musculoesqueléticas. El contenido publicado no constituye ni reemplaza una consulta médica profesional.</p>

      <h3>1. Información Educativa</h3>
      <p>Los artículos, descripciones de condiciones y tratamientos publicados en este sitio son de naturaleza informativa y están dirigidos a orientar al paciente para que comprenda mejor su condición. No deben interpretarse como diagnóstico, pronóstico ni recomendación terapéutica.</p>

      <h3>2. Necesidad de Consulta Médica</h3>
      <p>Toda decisión relacionada con su salud debe tomarse en consulta directa con un médico especialista calificado. Le instamos a comunicarse con el Dr. Rodríguez para recibir una evaluación personalizada antes de iniciar cualquier tratamiento.</p>

      <h3>3. Resultados Variables</h3>
      <p>Los resultados de los tratamientos mencionados en este sitio pueden variar según las características individuales de cada paciente: estado de salud general, severidad de la condición, edad, y adherencia al plan de tratamiento.</p>

      <h3>4. Emergencias Médicas</h3>
      <p>En caso de emergencia médica, acuda al servicio de urgencias más cercano o contacte a los servicios de emergencia de su localidad. El WhatsApp indicado en este sitio es para agendamiento de citas, no para atención de emergencias.</p>

      <h3>5. Exactitud de la Información</h3>
      <p>Hacemos nuestro mejor esfuerzo para mantener la información actualizada y precisa, pero no garantizamos que toda la información publicada esté libre de errores o sea aplicable a cada caso particular.</p>
    </LegalPage>
  );
}

export function CompromisoEticaPage() {
  return (
    <LegalPage
      title="Compromiso de Ética Médica"
      metaTitle="Compromiso de Ética – Dr. Guillermo Rodríguez Restrepo"
      metaDesc="Compromiso ético y código de conducta del Dr. Guillermo Rodríguez Restrepo, Ortopedista en Medellín."
    >
      <h2>Compromiso de Ética Médica</h2>
      <p>El <strong>Dr. Guillermo Rodríguez Restrepo</strong> ejerce la ortopedia y traumatología con pleno respeto a los principios éticos que rigen la práctica médica en Colombia, en especial los establecidos por la Ley 23 de 1981 (Código de Ética Médica) y sus decretos reglamentarios.</p>

      <h3>1. Principios Fundamentales</h3>
      <ul>
        <li><strong>Beneficencia:</strong> Actuamos siempre en el mejor interés del paciente.</li>
        <li><strong>No maleficencia:</strong> Evitamos causar daño y priorizamos tratamientos seguros.</li>
        <li><strong>Autonomía:</strong> Respetamos el derecho del paciente a tomar decisiones informadas.</li>
        <li><strong>Justicia:</strong> Ofrecemos atención equitativa y sin discriminación.</li>
      </ul>

      <h3>2. Consentimiento Informado</h3>
      <p>Antes de cualquier procedimiento, el Dr. Rodríguez explica detalladamente al paciente el diagnóstico, las opciones de tratamiento, los riesgos y beneficios de cada una, y obtiene el consentimiento informado del paciente o su representante legal.</p>

      <h3>3. Confidencialidad</h3>
      <p>La información médica del paciente es estrictamente confidencial. Solo se comparte con terceros en los casos previstos por la ley o con autorización expresa del paciente.</p>

      <h3>4. Actualización Profesional</h3>
      <p>El Dr. Rodríguez mantiene una actualización permanente en ortopedia y traumatología, participando en cursos, congresos y programas de formación continua para garantizar la mejor atención a sus pacientes.</p>

      <h3>5. Relación Médico-Paciente</h3>
      <p>La relación médico-paciente se basa en la confianza, el respeto mutuo y la comunicación honesta. Nos comprometemos a escuchar activamente al paciente, resolver sus dudas y acompañarlo en todo su proceso de recuperación.</p>

      <h3>6. Membresía y Supervisión Gremial</h3>
      <p>El Dr. Rodríguez es miembro activo de la Sociedad Colombiana de Cirugía Ortopédica y Traumatología (SCCOT), que regula y supervisa el ejercicio ético de la especialidad en Colombia.</p>
    </LegalPage>
  );
}
