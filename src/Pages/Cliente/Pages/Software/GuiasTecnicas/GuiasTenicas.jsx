
import styles from './StylesGuiatecnica/GuiasTecnicas.module.css';


const guiasTecnicas = [
  {
    titulo: 'Frontend React + Backend Spring Boot',
    descripcion: 'Guía institucional con arquitectura híbrida, componentes, hooks y APIs REST. Incluye mapas visuales, flujos y documentación reproducible.',
    pdfUrl: '/GuiasTecnicas/reactCompleto.pdf',
    portada: '/GuiasTecnicas/react+sprintBoot.png'
  },
  {
    titulo: 'Gestión de Estado + Validación UI',
    descripcion: 'Flujos Redux Toolkit, validaciones Yup y esquemas Formik institucionales. Documentación línea por línea con portadas explicativas.',
    pdfUrl: '/GuiasTecnicas/MiGuiaReduxReactToolkitPDF.pdf',
    portada: '/GuiasTecnicas/reduxToolkit+Formik+Yup.png'
  }
];


export const GuiasTecnicas = () => {
  return (
    <section id="repositorio-tecnico" className={styles.section}>
      <div className={styles.container}>
        {/* Header del contenedor */}
        <header className={styles.header}>
          <h2 className={styles.title}> Repositorio Técnico Institucional</h2>
          <p className={styles.subtitle}>
            Documentación pedagógica y reproducible sobre React, Spring Boot, Redux Toolkit, Formik y Yup. Cada guía es parte del legado técnico institucional.
          </p>
        </header>

        {/* Cuerpo con tarjetas */}
        <div className={styles.body}>
          <div className={styles.grid}>
            {guiasTecnicas.map((guia, index) => (
              <div key={index} className={styles.card}>
                {/* Header de la tarjeta */}
                <div className={styles.cardHeader}>
                  <img src={guia.portada} alt={`Portada ${guia.titulo}`} className={styles.image} />
                </div>

                {/* Body de la tarjeta */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{guia.titulo}</h3>
                  <p className={styles.cardText}>{guia.descripcion}</p>
                </div>

                {/* Footer de la tarjeta */}
                <div className={styles.cardFooter}>
                  <a
                    href={guia.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    Descargar PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer del contenedor */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>© Luis Fernando Agudelo Gutierrez — Documentación institucional 2025</p>
        </footer>
      </div>
    </section>
  );
};

