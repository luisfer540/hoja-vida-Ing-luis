import styles from '../../../../Styles/ObrasCiviles/HojaVidaCompleta/CvCivilCompletaPrincipal.module.css';

// Componente de navegación institucional
export const CvCivilCompletaHeader = ({ onChangeSeccion }) => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <h1 className={styles.navTitle}>Auxiliar en Ingenieria Civil</h1>

        <nav className={styles.navButtons}>
          <button className={styles.navBtn} onClick={() => onChangeSeccion('DatosPersonales')}>Datos Personales</button>
          <button className={styles.navBtn} onClick={() => onChangeSeccion('Estudios')}>Estudios Realizados</button>
          <button className={styles.navBtn} onClick={() => onChangeSeccion('ExperienciaLaboral')}>Experiencia Laboral</button>
          <button className={styles.navBtn} onClick={() => onChangeSeccion('Habilidades')}>Habilidades</button>
        </nav>
      </div>
    </header>
  );
};
