import styles from '../../../../../Styles/ObrasCiviles/HojaVidaCompleta/Estudios.module.css';
import { FaRegFilePdf } from 'react-icons/fa';

import { useContext } from 'react';
import { ContexEstudios } from '../../../../../Context/hojaDeVidaCompleta/ContexEstudios';
import { CertificateViewerEstudio } from './ModalCerficados/CertificateViewerEstudio';

export const Estudios = () => {
 
 
  const { handleShowCertificate,otrosCursos } = useContext(ContexEstudios);

 

  return (
    <>
      <div className={styles.body}>
        <h5 className={styles.title}>Estudios Realizados</h5>
        <ul className={styles.list}>
          <li><strong>Primaria:</strong> Colegio Nuestra Señora de Fátima</li>
          <li><strong>Secundaria:</strong> Luis Carlos Galán Sarmiento</li>
          <li><strong>Estudios Universitarios:</strong>
            <ul>
              <li>
                <div className={styles.itemRow} onClick={() => handleShowCertificate('Obras Civiles')}>
                  <span>Tecnólogo en Obras Civiles</span>
                  <FaRegFilePdf className={styles.icon} />
                </div>
              </li>
              <li>
                <div className={styles.itemRow} onClick={() => handleShowCertificate('Análisis y Desarrollo de Software')}>
                  <span>Tecnólogo en Análisis y Desarrollo de Software</span>
                  <FaRegFilePdf className={styles.icon} />
                </div>
              </li>
            </ul>
          </li>
          <li><strong>Otros Estudios:</strong>
            <ul>
              {otrosCursos.map((curso, index) => (
                <li key={index}>
                  <div className={styles.itemRow} onClick={() => handleShowCertificate(curso)}>
                    <span>{curso}</span>
                    <FaRegFilePdf className={styles.icon} />
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <CertificateViewerEstudio />
    </>
  );
};
