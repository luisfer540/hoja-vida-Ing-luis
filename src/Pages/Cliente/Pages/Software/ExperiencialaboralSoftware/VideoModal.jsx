import Modal from 'react-modal';
import styles from '../../../Styles/ObrasCiviles/HojaVidaCompleta/VideoModal.module.css';
import { useContext } from 'react';
import { ContextExperienciaLaboral } from '../../../Context/hojaDeVidaCompleta/ContextExperienciaLaboral';

export const VideoModal = () => {
  const {
    videoModalOpen,
    videoSrc,
    handleCloseVideo
  } = useContext(ContextExperienciaLaboral);

  return (
    <Modal
      isOpen={videoModalOpen}
      onRequestClose={handleCloseVideo}
      className={styles.videoModal}
      overlayClassName={styles.overlay}
      contentLabel="Video en pantalla completa"
    >
      <button className={styles.closeBtn} onClick={handleCloseVideo}>
        ✕ Cerrar
      </button>
      
      <video
        className={styles.videoPlayer}
        src={videoSrc}
        controls
        autoPlay
        controlsList="nodownload"
      />
    </Modal>
  );
};
