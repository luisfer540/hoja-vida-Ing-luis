
import { CvModalSoftwareContext } from '../../../Context/index/Header/CvModalSoftwareContext';
import styles from '../../../Styles//Index/Header/CvModal/CvModalResponsiSofware/CvModalSoftwareHeader.module.css';
import { useContext } from 'react';

export const CvModalSoftwareHeader = () => {
  const{
    expanded,
    toggleExpanded
  } = useContext(CvModalSoftwareContext);

  

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <i className="fas fa-code"></i>
        Perfil Profesional
      </h3>
      <p
        className={`cv-section-text ${
          !expanded ? styles.responsiveText : ''
        }`}
      >
        Desarrollador de software backend y frontend con dominio sólido en React, Spring Boot, JavaFX y despliegue automatizado. Con trayectoria comprobada en trazabilidad, seguridad, rendimiento y compatibilidad multiplataforma. Capacidad demostrada para diseñar, desarrollar y mantener sistemas completos con arquitectura en capas, validaciones cruzadas, integración externa y métricas de alto impacto. Enfoque profesional basado en principios SOLID, patrones de diseño, documentación técnica y reproducibilidad. Trabajo con criterio técnico, apertura al aprendizaje continuo y compromiso institucional con la excelencia.
      </p>
      <button className={styles.readMoreButton} onClick={toggleExpanded}>
        {expanded ? 'Ver menos' : 'Seguir leyendo'}
      </button>
    </div>
  );
};
