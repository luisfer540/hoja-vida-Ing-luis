// Importa los estilos CSS específicos para el componente CVModal
import "../../../Styles/Index/Header/CvModal/CVModal.css";


// Importa el hook personalizado que gestiona la lógica del modal de CV
import { useCVModal } from "../../../Hooks/hooksCustom/Index/Header/useCVModal";

// Importa la librería html2pdf.js para convertir contenido HTML en un archivo PDF
import html2pdf from "html2pdf.js";

// Importa el hook useState de React para manejar estados dentro del componente
import { useState } from "react";
import { CvATSContentObrasCiviles } from "../../ObrasCiviles/AtsHojaVida/CvATSContentObrasCiviles";
import { CvATSContentSoftware } from "../../Software/AtsHojaVida/CvATSContentSoftware";

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

  // Función para determinar qué perfil está activo
  const getActiveProfile = () => {
    // Puedes usar el 'type' del hook o cualquier otra lógica para determinar el perfil
    // Asumiendo que 'type' contiene información del perfil activo
    return type; // Ejemplo: 'obrasCiviles' o 'software'
  };

  // Función para obtener el componente de CV según el perfil
  const getCVComponentByProfile = (profile) => {
    switch (profile) {
      case "obrasCiviles":
      case "obras-civiles":
        return <CvATSContentObrasCiviles />;
      case "software":
      case "desarrollo":
        return <CvATSContentSoftware />;
      default:
        // Por defecto, puedes retornar el primero o mostrar un mensaje
        return <CvATSContentSoftware />;
    }
  };

  // Función para obtener el nombre del archivo según el perfil
  const getFilenameByProfile = (profile) => {
    switch (profile) {
      case "obrasCiviles":
      case "obras-civiles":
        return "LuisFernandoAgudelo_CV_ObrasCiviles.pdf";
      case "software":
      case "desarrollo":
        return "LuisFernandoAgudelo_CV_Software.pdf";
      default:
        return "LuisFernandoAgudelo_CV.pdf";
    }
  };

  // Función para manejar la descarga del CV
  const handleDownloadCV = () => {
    const activeProfile = getActiveProfile();
    
    setShowExportContent(true);
    setIsLoading(true);

    setTimeout(() => {
      // Busca el elemento específico del perfil activo
      const element = document.getElementById(`cv-ats-content-${activeProfile}`) 
        || document.getElementById("cv-ats-content");
      
      if (!element) {
        console.error("No se encontró el elemento para exportar");
        setShowExportContent(false);
        setIsLoading(false);
        return;
      }

      const opt = {
        margin: 0.5,
        filename: getFilenameByProfile(activeProfile),
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true, // Para imágenes externas
          logging: false // Desactiva logs en consola
        },
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
        })
        .catch((error) => {
          console.error("Error al generar PDF:", error);
          setShowExportContent(false);
          setIsLoading(false);
        });
    }, 500); // Espera para renderizado completo
  };

  // Renderiza el componente CVModal
  return (
    // Contenedor principal del modal con clases dinámicas según si está abierto
    <div
      className={`cv-modal ${isOpen ? "show" : ""}`}
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Fondo oscuro detrás del modal que permite cerrar al hacer clic */}
      <div
        className="cv-modal-backdrop"
        ref={backdropRef}
        onClick={handleBackdropClick}
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
              className="cv-modal-close btn-close"
              onClick={handleModalClose}
              aria-label="Cerrar modal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          {/* Cuerpo del modal donde se renderiza el contenido dinámico */}
          <div className="cv-modal-body" ref={bodyRef}>
            {/* Renderiza el componente de contenido si existe */}
            {ContentComponent && <ContentComponent />}
          </div>

          {/* Contenido temporal para exportar - Solo el perfil activo */}
          {showExportContent && (
            <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
              {getCVComponentByProfile(getActiveProfile())}
            </div>
          )}

          <div className="cv-modal-footer">
            <button
              type="button"
              className="btn cv-modal-btn-secondary"
              onClick={handleModalClose}
              disabled={isLoading}
            >
              Cerrar
            </button>

            <button
              type="button"
              className="btn cv-modal-btn-primary"
              onClick={handleDownloadCV}
              disabled={isLoading}
            >
              {isLoading ? "Generando PDF..." : "Descargar CV"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
