// Importación de Modal desde react-modal para crear ventanas modales
import Modal from 'react-modal';
// Importación de estilos CSS module para el modal laboral
import styles from '../../../../../../Styles/ObrasCiviles/HojaVidaCompleta/LaboralModal.module.css';
// Importación de iconos de flechas para navegación del carrusel
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Importación del hook useContext para acceder al contexto
import { useContext } from 'react';
// Importación del contexto de experiencia laboral
import { ContextExperienciaLaboral } from '../../../../../../Context/hojaDeVidaCompleta/ContextExperienciaLaboral';

// Componente funcional que muestra el modal con las funciones laborales
export const LaboralModal = () => {
  // Desestructuración de las propiedades del contexto
  const {
    modalOpen, // Estado que indica si el modal está abierto
    handleCloseFunciones, // Función para cerrar el modal
    imagenActual, // Objeto con la imagen actual del carrusel
    empresaActual, // Nombre de la empresa actual
    prevImage, // Función para navegar a la imagen anterior
    nextImage // Función para navegar a la siguiente imagen
  } = useContext(ContextExperienciaLaboral);

  // Retorna el JSX del componente
  return (
    // Componente Modal de react-modal
    <Modal
      isOpen={modalOpen} // Prop que controla si el modal está abierto
      onRequestClose={handleCloseFunciones} // Función que se ejecuta al intentar cerrar el modal
      className={styles.modal} // Clase CSS para el contenido del modal
      overlayClassName={styles.overlay} // Clase CSS para el fondo oscuro del modal
      contentLabel="Detalle de experiencia" // Etiqueta de accesibilidad para lectores de pantalla
    >
      {/* Botón para cerrar el modal */}
      <button className={styles.closeBtn} onClick={handleCloseFunciones}>Cerrar</button>

      {/* Renderizado condicional: solo muestra el contenido si hay una imagen actual */}
      {imagenActual && (
        <>
          {/* Título que muestra "Funciones" y el nombre de la empresa */}
          <h3 className={styles.titulo}>Funciones – {empresaActual}</h3>
          
          {/* Contenedor del carrusel de imágenes */}
          <div className={styles.carousel}>
            {/* Flecha izquierda para navegar a la imagen anterior */}
            <FaChevronLeft 
              className={`${styles.arrow} ${styles.left}`} 
              onClick={prevImage} 
            />
            
            {/* Imagen actual del carrusel */}
            <img 
              src={imagenActual.src} 
              alt="Imagen actual" 
              className={styles.image} 
            />
            
            {/* Flecha derecha para navegar a la siguiente imagen */}
            <FaChevronRight 
              className={`${styles.arrow} ${styles.right}`} 
              onClick={nextImage} 
            />
          </div>
          
          {/* Descripción de la imagen actual */}
          <p className={styles.descripcion}>{imagenActual.descripcion}</p>
        </>
      )}
    </Modal>
  );
};
