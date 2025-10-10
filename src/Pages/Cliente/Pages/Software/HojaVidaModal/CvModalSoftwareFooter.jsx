export const CvModalSoftwareFooter = () => {
  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <i className="fas fa-chart-line"></i>
        Competencias
      </h3>
      <div className="cv-skills-grid">
        <div className="cv-skill-item">
          <span className="cv-skill-name">Arquitectura Institucional</span>
          <div className="cv-skill-bar">
            <div className="cv-skill-progress" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="cv-skill-item">
          <span className="cv-skill-name">Integración Backend-Frontend</span>
          <div className="cv-skill-bar">
            <div className="cv-skill-progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="cv-skill-item">
          <span className="cv-skill-name">Validación y Seguridad</span>
          <div className="cv-skill-bar">
            <div className="cv-skill-progress" style={{ width: '88%' }}></div>
          </div>
        </div>
        <div className="cv-skill-item">
          <span className="cv-skill-name">Despliegue Automatizado</span>
          <div className="cv-skill-bar">
            <div className="cv-skill-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="cv-skill-item">
          <span className="cv-skill-name">Autonomía y Documentación</span>
          <div className="cv-skill-bar">
            <div className="cv-skill-progress" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
