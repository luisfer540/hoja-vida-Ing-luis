// Importamos los estilos modulares
import { useState } from 'react';
import styles from '../../../Styles/ObrasCiviles/HojaVidaCompleta/CvCivilCompletaPrincipal.module.css';
import { BrraDerecha } from './boody/BrraDerecha';
import { BrraIzquierda } from './boody/BrraIzquierda';

import { CvCivilCompletaHeader } from './header/CvCivilCompletaHeader';
import { DatosPersonales } from './boody/datosPersonales/DatosPersonales';
import { Estudios } from './boody/estuidosRealizados/Estudios';
import { ExperienciaLaboral } from './boody/experienciaLaboral/ExperienciaLaboral';
import { Habilidades } from './boody/habilidades/Habilidades';
import { ComponenteSEO } from '../../ComponenteSEO';







// Importamos los componentes laterales y el header



// Componente principal de la hoja de vida
export const CvCivilCompletaPrincipal = () => {
  const [seccionActiva, setSeccionActiva] = useState('DatosPersonales');

  return (
    <div className={styles.layout}>
  <ComponenteSEO
          title="Luis Fernando Agudelo | Desarrollador de Software & Auxiliar en Ingeniería Civil"
          description="Soy Luis Fernando Agudelo, desarrollador de software especializado en React y auxiliar técnico en ingeniería civil. Explora mi hoja de vida, proyectos y experiencia profesional."
          canonical="https://hoja-vida-ing-luis-155j.vercel.app/"
          image="https://res.cloudinary.com/dkz51cyxl/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1760324797/bannerSeo3_ldpupt.jpg"
          type="website"
        />
 
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