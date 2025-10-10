export const CvModalSoftwareBoody = () => {
  return (
    <>
      <div className="cv-section">
        <h3 className="cv-section-title">
          <i className="fas fa-laptop-code"></i>
          Stack Tecnológico
        </h3>
        <div className="cv-tech-grid">
          <div className="cv-tech-category">
            <h4 className="cv-tech-category-title">Frontend</h4>
            <div className="cv-tech-items">
              <span className="cv-tech-item">React 18</span>
              <span className="cv-tech-item">Context API</span>
              <span className="cv-tech-item">Hooks personalizados</span>
              <span className="cv-tech-item">CSS Modules</span>
              <span className="cv-tech-item">Vite</span>
              <span className="cv-tech-item">Formik + Yup</span>
              <span className="cv-tech-item">SweetAlert2</span>
              <span className="cv-tech-item">PDFMake / XLSX</span>
            </div>
          </div>
          <div className="cv-tech-category">
            <h4 className="cv-tech-category-title">Backend</h4>
            <div className="cv-tech-items">
              <span className="cv-tech-item">Java 17 / JDK 21</span>
              <span className="cv-tech-item">Spring Boot 3</span>
              <span className="cv-tech-item">Spring Data JPA</span>
              <span className="cv-tech-item">Hibernate Validator</span>
              <span className="cv-tech-item">JWT / REST</span>
              <span className="cv-tech-item">JavaMailSender / Jakarta Mail</span>
            </div>
          </div>
          <div className="cv-tech-category">
            <h4 className="cv-tech-category-title">Base de Datos</h4>
            <div className="cv-tech-items">
              <span className="cv-tech-item">MySQL</span>
              <span className="cv-tech-item">Modelado UML (StarUML)</span>
              <span className="cv-tech-item">Normalización 3FN</span>
              <span className="cv-tech-item">Spring Data JPA</span>
            </div>
          </div>
          <div className="cv-tech-category">
            <h4 className="cv-tech-category-title">DevOps / Infraestructura</h4>
            <div className="cv-tech-items">
              <span className="cv-tech-item">Nginx</span>
              <span className="cv-tech-item">Cloudflare</span>
              <span className="cv-tech-item">OpenVPN</span>
              <span className="cv-tech-item">Mobaxterm + SSH</span>
              <span className="cv-tech-item">GitHub + Scripts</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">
          <i className="fas fa-project-diagram"></i>
          Proyecto Institucional
        </h3>
        <div className="cv-projects-grid">
          <div className="cv-project-item">
            <h4 className="cv-project-title">MiMayordomo</h4>
            <p className="cv-project-description">
              Plataforma institucional de comercio electrónico con backend en Java + Spring Boot, frontend modular en React, base de datos relacional en MySQL, aplicación de escritorio en JavaFX y despliegue automatizado con Nginx, VPN y Cloudflare. Incluye integración con Wompi, correo automático, facturación electrónica, exportación Excel y generación de PDF.
            </p>
            <div className="cv-project-tech">
              <span className="cv-project-tech-item">React</span>
              <span className="cv-project-tech-item">Spring Boot</span>
              <span className="cv-project-tech-item">JavaFX</span>
              <span className="cv-project-tech-item">MySQL</span>
              <span className="cv-project-tech-item">Nginx</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
