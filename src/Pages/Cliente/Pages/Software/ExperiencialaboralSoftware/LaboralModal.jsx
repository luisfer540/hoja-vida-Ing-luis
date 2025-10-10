import Modal from 'react-modal';
import styles from '../../../Styles/ObrasCiviles/HojaVidaCompleta/LaboralModal.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useContext } from 'react';
import { ContextExperienciaLaboral } from '../../../Context/hojaDeVidaCompleta/ContextExperienciaLaboral';

export const LaboralModal = () => {
  const {
    modalOpen,
    handleCloseFunciones,
    imagenActual,
    empresaActual,
    prevImage,
    nextImage,
    carouselIndex
  } = useContext(ContextExperienciaLaboral);

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleCloseFunciones}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel="Detalle de experiencia"
    >
      <button className={styles.closeBtn} onClick={handleCloseFunciones}>Cerrar</button>

      {imagenActual && (
        <>
          <h3 className={styles.titulo}>Funciones – {empresaActual}</h3>
          <div className={styles.carousel}>
            <FaChevronLeft className={`${styles.arrow} ${styles.left}`} onClick={prevImage} />

            {imagenActual.tipo === 'video' ? (
              <iframe
                className={styles.videoPlayer}
                src={imagenActual.src}
                controls
                controlsList="nodownload"
                preload="metadata"
              >
                Tu navegador no soporta el elemento de video.
              </iframe>
            ) : (
              <img
                src={imagenActual.src}
                alt={`Imagen ${carouselIndex + 1}`}
                className={styles.image}
              />
            )}

            <FaChevronRight className={`${styles.arrow} ${styles.right}`} onClick={nextImage} />
          </div>

          <p className={styles.descripcion}>{imagenActual.descripcion}</p>
        </>
      )}
    </Modal>
  );
};
