// Importa los estilos CSS específicos para el componente CVModal
import "../../../Styles/Index/Header/CvModal/cvModal.css";

// Importa el hook personalizado que gestiona la lógica del modal de CV
import { useCVModal } from "../../../Hooks/hooksCustom/Index/Header/useCVModal";

// Importa la librería html2pdf.js para convertir contenido HTML en un archivo PDF
import html2pdf from "html2pdf.js";

// Importa el hook useState de React para manejar estados dentro del componente
import { useState } from "react";

// Define y exporta el componente funcional CVModal
export const CVModal = () => {
  // Desestructura las propiedades y funciones que devuelve el hook useCVModal
  const {
    modalRef, // Referencia al contenedor principal del modal
    backdropRef, // Referencia al fondo oscuro detrás del modal
    contentRef, // Referencia al contenido del modal
    headerRef, // Referencia al encabezado del modal
    bodyRef, // Referencia al cuerpo del modal
    handleModalClose, // Función para cerrar el modal
    isOpen, // Estado que indica si el modal está abierto
    handleBackdropClick, // Función que maneja clics en el fondo para cerrar el modal
    type, // Tipo de contenido que se mostrará en el modal
    title, // Título del modal
    subtitle, // Subtítulo del modal
    getContentComponent, // Función que devuelve el componente de contenido dinámico
  } = useCVModal();

  // Obtiene el componente de contenido dinámico que se mostrará dentro del modal
  const ContentComponent = getContentComponent();

  // Estado que indica si se está realizando una operación de carga (por ejemplo, exportar PDF)
  const [isLoading, setIsLoading] = useState(false);

  // Estado que controla si se debe mostrar el contenido que se va a exportar
  const [showExportContent, setShowExportContent] = useState(false);

  // Renderiza el componente CVModal
  return (
    // Contenedor principal del modal con clases dinámicas según si está abierto
    <div
      className={`cv-modal ${isOpen ? "show" : ""}`} // Aplica clase 'show' si el modal está abierto
      ref={modalRef} // Referencia al modal para manipulación directa
      role="dialog" // Define el rol de accesibilidad como diálogo
      aria-modal="true" // Indica que es un modal accesible
      aria-labelledby="modal-title" // Asocia el título del modal para accesibilidad
      aria-describedby="modal-description" // Asocia la descripción del modal para accesibilidad
    >
      {/* Fondo oscuro detrás del modal que permite cerrar al hacer clic */}
      <div
        className="cv-modal-backdrop" // Clase para el fondo del modal
        ref={backdropRef} // Referencia al fondo para manipulación
        onClick={handleBackdropClick} // Cierra el modal al hacer clic en el fondo
      />

      {/* Contenedor del contenido del modal */}
      <div className="cv-modal-container">
        {/* Contenido del modal con clase dinámica según el tipo */}
        <div className={`cv-modal-content cv-modal-${type}`} ref={contentRef}>
          {/* Encabezado del modal */}
          <div className="cv-modal-header" ref={headerRef}>
            <div className="cv-modal-title-section">
              {/* Título del modal */}
              <h2 id="modal-title" className="cv-modal-title">
                {title}
              </h2>
              {/* Subtítulo del modal */}
              <p className="cv-modal-subtitle">{subtitle}</p>
            </div>

            {/* Botón para cerrar el modal */}
            <button
              type="button"
              className="cv-modal-close btn-close" // Clase para estilo del botón de cierre
              onClick={handleModalClose} // Llama a la función para cerrar el modal
              aria-label="Cerrar modal" // Etiqueta accesible para lectores de pantalla
            >
              <span aria-hidden="true">&times;</span>{" "}
              {/* Ícono de "X" para cerrar */}
            </button>
          </div>

          {/* Cuerpo del modal donde se renderiza el contenido dinámico */}
          <div className="cv-modal-body" ref={bodyRef}>
            {/* Renderiza el componente de contenido si existe */}
            {ContentComponent && <ContentComponent />}
          </div>

          {/* Contenido temporal para exportar */}
          {showExportContent && (
            <div
              id="cv-ats-content"
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "40px",
                fontFamily: "Arial, sans-serif",
                fontSize: "12pt",
                lineHeight: "1.6",
                maxWidth: "800px",
                margin: "0 auto",
                boxSizing: "border-box",
              }}
            >
              <h1
                style={{
                  fontSize: "20pt",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Luis Fernando Agudelo Gutiérrez
              </h1>
              <p style={{ marginBottom: "20px" }}>
                Tecnólogo en Obras Civiles Teléfono: +57 304 249 4772 Correo:
                luifer540@gmail.com Ubicación: Suba, Ciudadela Cafam Etapa 3,
                Torre 16, Apto 461, Bogotá, Colombia
              </p>

              <h2
                style={{
                  fontSize: "14pt",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                Perfil Profesional
              </h2>
              <p style={{ marginBottom: "30px" }}>
                Tecnólogo en Obras Civiles con más de 10 años de experiencia en
                supervisión técnica, interventoría y ejecución de proyectos de
                infraestructura, urbanismo, señalización vial y
                telecomunicaciones. Especializado en control de calidad,
                coordinación de equipos en campo y optimización de procesos
                constructivos. Alta capacidad de análisis técnico y
                administrativo, con enfoque en soluciones funcionales y
                comprobadas. Actualmente en etapa productiva como Tecnólogo en
                Análisis y Desarrollo de Software.
              </p>

              <h2
                style={{
                  fontSize: "14pt",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                Experiencia Laboral
              </h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "30px" }}>
                <li>
                  <strong>G-Vial S.A.S</strong> – Supervisor de Obra (2023 -
                  2024)
                </li>
                <li>
                  <strong>Work Construcciones S.A.S</strong> – Encargado de Obra
                  (2021 - 2022)
                </li>
                <li>
                  <strong>Constructora Berlín S.A.S</strong> – Supervisor de
                  Obra (2016 - 2020)
                </li>
                <li>
                  <strong>CGR S.A.S</strong> – Inspector de Interventoría (2015)
                </li>
                <li>
                  <strong>Inmag S.A.S</strong> – Residente de Obra (2014 - 2015)
                </li>
                <li>
                  <strong>GNG S.A.S</strong> – Inspector de Interventoría (2013)
                </li>
                <li>
                  <strong>SENA</strong> – Encargado de Obra (Pasantía, 2012)
                </li>
              </ul>

              <h2
                style={{
                  fontSize: "14pt",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                Formación Académica
              </h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "30px" }}>
                <li>
                  <strong>SENA</strong> – Tecnólogo en Obras Civiles (Graduado)
                </li>
                <li>
                  <strong>SENA</strong> – Tecnólogo en Análisis y Desarrollo de
                  Software (Etapa productiva activa)
                </li>
              </ul>

              <h2
                style={{
                  fontSize: "14pt",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                Certificaciones
              </h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "30px" }}>
                <li>Tecnologo en obras Civiles</li>
                <li>Costos y Presupuestos para Edificaciones</li>
                <li>Interpretación de Planos Estructurales</li>
                <li>Microsoft Project: Programación de Obras</li>
                <li>
                  Excel aplicado a levantamientos topográficos planimétricos
                </li>
                <li>Pinturas Arquitectónicas, Estucos, Mármoles y Granitos</li>
                <li>Análisis y Desarrollo de Software</li>
              </ul>

              <h2
                style={{
                  fontSize: "14pt",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                Habilidades Técnicas
              </h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "30px" }}>
                <li>Supervisión técnica y control de calidad en obra civil</li>
                <li>Coordinación de equipos en campo y gestión documental</li>
                <li>
                  Redacción de informes técnicos y estructuración de mensajes
                  formales
                </li>
                <li>
                  Gestión de procesos constructivos y optimización de recursos
                </li>
                <li>
                  Dominio de AutoCAD, Microsoft Project y Excel aplicado a obras
                </li>
                <li>
                  Análisis detallado de problemas técnicos y administrativos
                </li>
              </ul>

              <h2
                style={{
                  fontSize: "14pt",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                Objetivos Profesionales
              </h2>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  Finalizar la etapa productiva en desarrollo de software y
                  obtener el título profesional
                </li>
                <li>
                  Consolidar experiencia laboral mediante certificaciones
                  oficiales
                </li>
                <li>
                  Superar barreras administrativas para avanzar profesionalmente
                </li>
                <li>
                  Ser reconocido como referente técnico en obras civiles y
                  gestión de proyectos
                </li>
              </ul>
            </div>
          )}

          <div className="cv-modal-footer">
            <button
              type="button"
              className="btn cv-modal-btn-secondary"
              onClick={handleModalClose}
            >
              Cerrar
            </button>

            <button
              type="button"
              className="btn cv-modal-btn-primary"
              onClick={() => {
                setShowExportContent(true);
                setIsLoading(true);

                setTimeout(() => {
                  const element = document.getElementById("cv-ats-content");
                  const opt = {
                    margin: 0.5,
                    filename: "LuisFernandoAgudelo_CV.pdf",
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: {
                      unit: "in",
                      format: "letter",
                      orientation: "portrait",
                    },
                  };

                  html2pdf()
                    .set(opt)
                    .from(element)
                    .save()
                    .then(() => {
                      setShowExportContent(false);
                      setIsLoading(false);
                    });
                }, 500); // Espera para renderizado completo
              }}
            >
              {isLoading ? "Generando PDF..." : "Descargar CV"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
