import { useInicio } from "../../../Hooks/hooksCustom/Index/Boody/useInicio";
import styles from "../../../Styles/Index/Boody/Inicio.module.css";
import { memo } from 'react';
import { ComponenteSEO } from "../../ComponenteSEO";


export const Inicio = memo(() => {
  const { slide, handlePrev, handleNext } = useInicio();

  return (
    <div 
      className={styles.contenedor3D}
      style={{
        backgroundImage: `url(${slide.fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
 <ComponenteSEO
  title="Obras Civiles y Desarrollador de software"
  description="Conocimiento en obras civiles y desarrollo de software."
  canonical="https://hoja-vida-ing-luis-155j.vercel.app/"
  image="https://res.cloudinary.com/dkz51cyxl/image/upload/v1760324797/bannerSeo3_ldpupt.jpg"
  type="website"
/>


      <section className={styles.inicioContainer}>
        {/* Flecha izquierda */}
        <button
          onClick={handlePrev}
          className={`${styles.carruselBtn} ${styles.leftBtn}`}
          aria-label="Slide anterior"
        >
          ‹
        </button>

        {/* Overlay con efecto vidrio 3D */}
        <div className={styles.overlay}>
          <div className={`${styles.efectoVidrio} ${styles.animado}`}>
            <div className={styles.heroContent}>
              <h1 className={styles.tituloPrincipal}>{slide.titulo}</h1>
              <p className={styles.subtitulo}>{slide.subtitulo}</p>
              <p className={styles.descripcion}>{slide.descripcion}</p>
            </div>
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          onClick={handleNext}
          className={`${styles.carruselBtn} ${styles.rightBtn}`}
          aria-label="Siguiente slide"
        >
          ›
        </button>
      </section>
    </div>
  );
});

Inicio.displayName = 'Inicio';
