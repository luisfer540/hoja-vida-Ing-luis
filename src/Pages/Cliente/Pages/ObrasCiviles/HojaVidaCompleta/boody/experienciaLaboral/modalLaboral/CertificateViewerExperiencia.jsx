import Modal from 'react-modal';
import styles from '../../../../../../Styles/ObrasCiviles/HojaVidaCompleta/CertificateViewer.module.css';
import { FaDownload } from 'react-icons/fa';
import { useContext } from 'react';
import { ContextExperienciaLaboral } from '../../../../../../Context/hojaDeVidaCompleta/ContextExperienciaLaboral';



export const CertificateViewerExperiencia = () => {
  const {
    certModalOpen,
    handleCloseCertificado,
    certImage,
    fileName
  } = useContext(ContextExperienciaLaboral);

  return (
    <Modal
      isOpen={certModalOpen}
      onRequestClose={handleCloseCertificado}
      contentLabel="Certificado"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeBtn} onClick={handleCloseCertificado}>Cerrar</button>
      <img src={certImage} alt="Certificado" className={styles.image} />
      <div className={styles.spacer} />
      <a href={certImage} download={fileName} className={styles.downloadBtn}>
        <FaDownload style={{ marginRight: '8px' }} />
        Descargar certificado
      </a>
    </Modal>
  );
};
