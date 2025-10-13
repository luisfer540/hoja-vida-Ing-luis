import { NavLink } from "react-router-dom";
import { useCVModal } from "../../../Hooks/hooksCustom/Index/Header/useCVModal";

export const CvModalCivilHeader = () => {
  const { handleModalClose } = useCVModal();

  return (
    <>
      <NavLink
        to="/cv-completa"
        onClick={handleModalClose}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <button className="cv-btn-view-cv">Ver hoja de vida detallada</button>
      </NavLink>
      <div className="cv-btn-indicator">👆</div>

      <div className="cv-section">
        <h3 className="cv-section-title">
          <i className="fas fa-hard-hat"></i>
          Perfil Profesional
        </h3>
        <p className="cv-section-text">
          Tecnólogo en Obras Civiles con sólida experiencia en supervisión de
          obra, interventoría y ejecución de proyectos de infraestructura.
          Especializado en control de calidad, seguridad en obra y coordinación
          técnica en campo.
        </p>
      </div>
    </>
  );
};
