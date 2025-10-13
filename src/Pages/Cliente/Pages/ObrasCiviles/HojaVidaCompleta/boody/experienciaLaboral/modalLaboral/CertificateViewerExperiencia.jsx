// Importación de Modal desde react-modal para crear ventanas modales
import Modal from 'react-modal';
// Importación de estilos CSS module para el visor de certificados
import styles from '../../../../../../Styles/ObrasCiviles/HojaVidaCompleta/CertificateViewer.module.css';
// Importación del ícono de descarga desde react-icons
import { FaDownload } from 'react-icons/fa';
// Importación del hook useContext para acceder al contexto
import { useContext } from 'react';
// Importación del contexto de experiencia laboral
import { ContextExperienciaLaboral } from '../../../../../../Context/hojaDeVidaCompleta/ContextExperienciaLaboral';

// Componente funcional que muestra el modal con el certificado laboral
export const CertificateViewerExperiencia = () => {
  // Desestructuración de las propiedades del contexto
  const {
    certModalOpen, // Estado que indica si el modal de certificado está abierto
    handleCloseCertificado, // Función para cerrar el modal de certificado
    certImage, // URL de la imagen del certificado
    fileName // Nombre del archivo del certificado
  } = useContext(ContextExperienciaLaboral);

  // Validación para verificar que la URL del certificado existe y no está vacía
  const isValidCertificate = certImage && certImage.trim() !== "";

  // Función asíncrona que maneja la descarga del certificado
  const handleDownload = async () => {
    // Verifica que exista una URL válida antes de intentar descargar
    if (!isValidCertificate) {
      alert('No hay certificado disponible para descargar');
      return;
    }

    try {
      // Realiza una petición fetch a la URL del certificado
      const response = await fetch(certImage);
      
      // Verifica si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error al obtener el certificado');
      }
      
      // Convierte la respuesta en un blob (objeto binario)
      const blob = await response.blob();
      
      // Crea una URL temporal del blob para poder descargarla
      const url = window.URL.createObjectURL(blob);
      
      // Crea un elemento <a> temporal en memoria
      const link = document.createElement('a');
      
      // Asigna la URL del blob al href del enlace
      link.href = url;
      
      // Define el nombre del archivo para la descarga, si no existe usa 'certificado.png'
      link.download = fileName || 'certificado.png';
      
      // Añade el enlace al DOM temporalmente
      document.body.appendChild(link);
      
      // Simula un click en el enlace para iniciar la descarga
      link.click();
      
      // Elimina el enlace del DOM después de la descarga
      document.body.removeChild(link);
      
      // Libera la memoria ocupada por la URL temporal del blob
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Captura cualquier error durante el proceso de descarga
      console.error('Error al descargar el certificado:', error);
      
      // Muestra un mensaje de error al usuario
      alert('Error al descargar el certificado');
    }
  };

  // Retorna el JSX del componente
  return (
    // Componente Modal de react-modal
    <Modal
      isOpen={certModalOpen} // Prop que controla si el modal está abierto
      onRequestClose={handleCloseCertificado} // Función que se ejecuta al intentar cerrar el modal
      contentLabel="Certificado" // Etiqueta de accesibilidad para lectores de pantalla
      className={styles.modal} // Clase CSS para el contenido del modal
      overlayClassName={styles.overlay} // Clase CSS para el fondo oscuro del modal
    >
      {/* Botón para cerrar el modal */}
      <button className={styles.closeBtn} onClick={handleCloseCertificado}>
        Cerrar
      </button>
      
      {/* Renderizado condicional: solo muestra la imagen si hay una URL válida */}
      {isValidCertificate ? (
        <>
          {/* Imagen del certificado */}
          <img src={certImage} alt="Certificado" className={styles.image} />
          
          {/* Espaciador visual entre la imagen y el botón */}
          <div className={styles.spacer} />
          
          {/* Botón de descarga que ejecuta la función handleDownload */}
          <button onClick={handleDownload} className={styles.downloadBtn}>
            {/* Ícono de descarga con margen a la derecha */}
            <FaDownload style={{ marginRight: '8px' }} />
            {/* Texto del botón */}
            Descargar certificado
          </button>
        </>
      ) : (
        // Mensaje alternativo cuando no hay certificado disponible
        <p className={styles.noCertificate}>No hay certificado disponible</p>
      )}
    </Modal>
  );
};
