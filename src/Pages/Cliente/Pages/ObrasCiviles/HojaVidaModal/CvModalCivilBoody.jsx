export const CvModalCivilBoody = () => {
  return (
    <>
      <div className="cv-section">
        <h3 className="cv-section-title">
          <i className="fas fa-tools"></i>
          Competencias Técnicas
        </h3>
        <div className="cv-skills-grid">
          <div className="cv-skill-item">
            <span className="cv-skill-name">AutoCAD</span>
            <div className="cv-skill-bar">
              <div className="cv-skill-progress" style={{width: '95%'}}></div>
            </div>
          </div>
          <div className="cv-skill-item">
            <span className="cv-skill-name">Supervisión de Obras</span>
            <div className="cv-skill-bar">
              <div className="cv-skill-progress" style={{width: '90%'}}></div>
            </div>
          </div>
          <div className="cv-skill-item">
            <span className="cv-skill-name">Control de Calidad</span>
            <div className="cv-skill-bar">
              <div className="cv-skill-progress" style={{width: '88%'}}></div>
            </div>
          </div>
          <div className="cv-skill-item">
            <span className="cv-skill-name">Seguridad Industrial</span>
            <div className="cv-skill-bar">
              <div className="cv-skill-progress" style={{width: '92%'}}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">
          <i className="fas fa-briefcase"></i>
          Experiencia Destacada
        </h3>

        <div className="cv-experience-item">
          <h4 className="cv-experience-title">Supervisor de Obra</h4>
          <p className="cv-experience-company">G-Vial S.A.S | 2023 - 2024</p>
          <ul className="cv-experience-list">
            <li>Instalación y verificación de señalización vial vertical y horizontal</li>
            <li>Pruebas de espesores, reflectividad y control de calidad</li>
            <li>Gestión documental, informes técnicos y georreferenciación</li>
          </ul>
        </div>

        <div className="cv-experience-item">
          <h4 className="cv-experience-title">Encargado de Obra</h4>
          <p className="cv-experience-company">Work Construcciones S.A.S | 2021 - 2022</p>
          <ul className="cv-experience-list">
            <li>Supervisión de vaciados, excavaciones y cimentaciones</li>
            <li>Coordinación técnica y solución de imprevistos en obra</li>
            <li>Control de calidad en concreto, acero y acabados</li>
          </ul>
        </div>

        <div className="cv-experience-item">
          <h4 className="cv-experience-title">Supervisor de Obra</h4>
          <p className="cv-experience-company">Constructora Berlín S.A.S | 2016 - 2020</p>
          <ul className="cv-experience-list">
            <li>Supervisión técnica en urbanización y cimentaciones profundas</li>
            <li>Control de acabados, replanteo y pruebas de concreto</li>
            <li>Gestión de entregas y correcciones con contratistas</li>
          </ul>
        </div>

        <div className="cv-experience-item">
          <h4 className="cv-experience-title">Inspector de Interventoría</h4>
          <p className="cv-experience-company">CGR S.A.S | 2015</p>
          <ul className="cv-experience-list">
            <li>Supervisión de señalización vial en red departamental</li>
            <li>Control técnico, administrativo y ambiental del contrato</li>
          </ul>
        </div>

        <div className="cv-experience-item">
          <h4 className="cv-experience-title">Residente de Obra</h4>
          <p className="cv-experience-company">Inmag S.A.S | 2014 - 2015</p>
          <ul className="cv-experience-list">
            <li>Instalación de torres de telecomunicaciones a nivel nacional</li>
            <li>Supervisión de estructuras metálicas, cuartos técnicos y acabados</li>
          </ul>
        </div>

        <div className="cv-experience-item">
          <h4 className="cv-experience-title">Inspector de Interventoría</h4>
          <p className="cv-experience-company">GNG S.A.S | 2013</p>
          <ul className="cv-experience-list">
            <li>Construcción de puente postensado El Indio</li>
            <li>Supervisión de tesado, armado, curado y acceso estructural</li>
          </ul>
        </div>

        <div className="cv-experience-item">
          <h4 className="cv-experience-title">Encargado de Obra (Pasantía)</h4>
          <p className="cv-experience-company">SENA | 2012</p>
          <ul className="cv-experience-list">
            <li>Construcción de la Casa de la Cultura y plazoleta del café</li>
            <li>Apoyo técnico en obra civil y acabados arquitectónicos</li>
          </ul>
        </div>
      </div>
    </>
  )
}
