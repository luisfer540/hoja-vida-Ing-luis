import styles from '../../../Styles/Index/Boody/Inicio.module.css';

import { ElectricBorder } from './ElectricBorder';
import { useInicio } from '../../../Hooks/hooksCustom/Index/Boody/useInicio';




export const Inicio = () => {

  const{
    slide,
    handlePrev,
    handleNext
  }= useInicio();


  return (
    <div className={styles.contenedor3D}>
      <section
        className={styles.inicioContainer}
        style={{ backgroundImage: `url(${slide.fondo})` }}
      >
        {/* Flecha izquierda */}
        <button 
          onClick={handlePrev} 
          className={`${styles.carruselBtn} ${styles.leftBtn}`}
          aria-label="Slide anterior"
        >
          ⟨
        </button>

        {/* Overlay con efecto vidrio 3D */}
        <div className={`${styles.overlay} ${styles.efectoVidrio} ${styles.animado}  `}> 

          <div className={styles.heroContent} > 
            <h1 className={styles.tituloPrincipal}>
              {slide.titulo}
            </h1>
            <p className={styles.subtitulo}>
              {slide.subtitulo}
            </p>
            <p className={styles.descripcion}>
              {slide.descripcion}
            </p>
            <div className={styles.botones}>

               {/* 
              <ElectricBorder
                color="#eeff02ff"
                speed={1.2}
                chaos={0.7}
                thickness={3}
                style={{ borderRadius: 8 }}
              >
                <a 
                  href="#contacto" 
                  className={styles.btnElectrico}
                  role="button"
                >
                  Descargar Hoja de Vida
                </a>
              </ElectricBorder>
             
          
               
              <ElectricBorder
                color="#1d7a00ff"
                speed={1.2}
                chaos={0.7}
                thickness={3}
                style={{ borderRadius: 8 }}
              >
                <a 
                  href="#contacto" 
                  className={styles.btnElectrico}
                  role="button"
                >
                  Contáctame
                </a>
              </ElectricBorder>
               */}
            </div>
          </div>
        </div>

        {/* Flecha derecha */}
        <button 
          onClick={handleNext} 
          className={`${styles.carruselBtn} ${styles.rightBtn}`}
          aria-label="Siguiente slide"
        >
          ⟩
        </button>
      </section>
    </div>
  );
};
