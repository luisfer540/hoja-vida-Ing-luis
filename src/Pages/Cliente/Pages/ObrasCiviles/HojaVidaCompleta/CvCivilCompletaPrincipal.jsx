// Importamos los estilos modulares
import { useState } from 'react';
import styles from '../../../Styles/ObrasCiviles/HojaVidaCompleta/CvCivilCompletaPrincipal.module.css';
import { BrraDerecha } from './boody/BrraDerecha';
import { BrraIzquierda } from './boody/BrraIzquierda';
import { CuerpoDelContenidoPrincipal } from './boody/CuerpoDelContenidoPrincipal';
import { CvCivilCompletaHeader } from './header/CvCivilCompletaHeader';
import { DatosPersonales } from './boody/datosPersonales/DatosPersonales';
import { Estudios } from './boody/estuidosRealizados/Estudios';
import { ExperienciaLaboral } from './boody/experienciaLaboral/ExperienciaLaboral';
import { Habilidades } from './boody/habilidades/Habilidades';






// Importamos los componentes laterales y el header



// Componente principal de la hoja de vida
export const CvCivilCompletaPrincipal = () => {
  const [seccionActiva, setSeccionActiva] = useState('DatosPersonales');

  return (
    <div className={styles.layout}>
      <BrraIzquierda />

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <CvCivilCompletaHeader onChangeSeccion={setSeccionActiva} />

          {/* Renderizado condicional según la sección activa */}
          {seccionActiva === 'DatosPersonales' && <DatosPersonales />}
          {seccionActiva === 'Estudios' && <Estudios />}
          {seccionActiva === 'ExperienciaLaboral' && <ExperienciaLaboral />}
          {seccionActiva === 'Habilidades' && <Habilidades />}
        </div>
      </div>

      <BrraDerecha />
    </div>
  );
};