import Modal from 'react-modal';
import styles from '../../../../../../Styles/ObrasCiviles/HojaVidaCompleta/CertificateViewer.module.css';
import { FaDownload } from 'react-icons/fa';
import { useContext } from 'react';
import { ContexEstudios } from '../../../../../../Context/hojaDeVidaCompleta/ContexEstudios';


export const CertificateViewerEstudio = () => {
  const {
    modalOpen,
    imageUrl,
    fileName,
    handleCloseCertificate
  } = useContext(ContexEstudios);

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleCloseCertificate}
      contentLabel="Certificado"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeBtn} onClick={handleCloseCertificate}>Cerrar</button>
      <img src={imageUrl} alt="Certificado" className={styles.image} />
      <div className={styles.spacer} />
      <a href={imageUrl} download={fileName} className={styles.downloadBtn}>
        <FaDownload style={{ marginRight: '8px' }} />
        Descargar certificado
      </a>
    </Modal>
  );
};
