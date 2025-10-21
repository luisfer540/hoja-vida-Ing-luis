import styles from '../../../../../Styles/ObrasCiviles/HojaVidaCompleta/DatosPersonales.module.css';

export const DatosPersonales = () => {
  return (
    <div className={styles.body}>
      <h5 className={styles.title}>Datos personales</h5>
      <ul className={styles.list}>
        <li><strong>Nombre Completo:</strong> Luis Fernando Agudelo Gutierrez</li>
        <li><strong>Lugar y fecha de nacimiento:</strong> Acacías (Meta), 17/02/1989</li>
        <li><strong>Documento de identidad:</strong> 1.112.123.703</li>
        <li><strong>Matrícula profesional:</strong> Copnia</li>
        <li><strong>Ciudad de residencia:</strong> Bogota (cundinamarca)</li>
        <li><strong>Teléfono:</strong> 304-2494772</li>
        <li><strong>Email:</strong> luisfer540@gmail.com</li>
      </ul>
    </div>
  );
};
