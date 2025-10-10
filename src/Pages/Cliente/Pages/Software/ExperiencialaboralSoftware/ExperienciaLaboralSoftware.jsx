import { useContext } from 'react';
import styles from '../../../Styles/ObrasCiviles/HojaVidaCompleta/ExperienciaLaboral.module.css';
import { FaImages } from 'react-icons/fa';
import { LaboralModal } from './LaboralModal';

import { ElectricBorder } from '../../Index/Boody/ElectricBorder';
import { ContextExperienciaLaboral } from '../../../Context/hojaDeVidaCompleta/ContextExperienciaLaboral';
import { ServiceExperienciaLaboralSoftware } from '../../../../../Service/ExperienciaLaboralSoftware';
import { CertificateViewerExperiencia } from './CertificateViewerExperiencia';
import { VideoModal } from './VideoModal';




export const ExperienciaLaboralSoftware = () => {
 
const {
  handleOpenFunciones,
  handleOpenCertificado,
  
} = useContext(ContextExperienciaLaboral);


  return (
    <>
      <div className={styles.body}>
        <h5 className={styles.title}>Experiencia Laboral</h5>
        <ul className={styles.list}>
          {ServiceExperienciaLaboralSoftware.map((item, index) => (
            <li key={index}>
              <div className={styles.itemRow}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.empresa}>
                  {item.empresa}
                </a>
              </div>
              <p><strong>Cargo:</strong> {item.cargo}</p>
              <p><strong>Fecha:</strong> {item.fecha}</p>
              <p><strong>Proyecto:</strong> {item.proyecto}</p>

              <div className={styles.buttonsRow}>
                <ElectricBorder
                  color="#322ff0ff"
                  speed={1.2}
                  chaos={0.4}
                  thickness={1.2}
                  style={{ borderRadius: 6 }}
                >
                  <button
                    className={styles.btnElectrico}
                    onClick={() => handleOpenFunciones(item)}
                  >
                    Ver Funciones
                  </button>
                </ElectricBorder>

                <ElectricBorder
                  color="#322ff0ff"
                  speed={1.2}
                  chaos={0.4}
                  thickness={1.2}
                  style={{ borderRadius: 6 }}
                >
                  <button
                    className={styles.btnElectrico}
                    onClick={() => handleOpenCertificado(item.certificado)}
                  >
                    Certificado
                  </button>
                </ElectricBorder>
              </div>



            </li>
          ))}
        </ul>
      </div>

      <LaboralModal/>

      <CertificateViewerExperiencia/>
      <VideoModal/>
    </>
  );
};
