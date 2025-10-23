import { NavLink } from 'react-router-dom';
import styles from '../StylesGuiatecnica/BtnVerGuiasTecnicas.module.css';

export const BtnVerGuiasTenicas = ({ onClose }) => {
  return (
    <div className={styles['cv-modal-guias-button']}>
      <NavLink
        to="/guias-tecnicas"
        className="btn cv-modal-btn-secondary"
        onClick={onClose}
      >
        Ver mis Guías Técnicas
      </NavLink>
    </div>
  );
};
