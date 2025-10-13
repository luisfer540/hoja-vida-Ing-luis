import { Inicio } from './Boody/Inicio';
import styles from '../../Styles/Index/PrincipalIndex.module.css';
import { Navbar } from './Header/Navbar';
import { ComponenteSEO } from '../ComponenteSEO';


export const PrincipalIndex = () => {
  return (
    <div className={styles.layout}>
     
      <Navbar/>
      
      <main id="inicio" className={styles.main}>
 <ComponenteSEO
        title="Luis Fernando Agudelo | Desarrollador de Software & Auxiliar en Ingeniería Civil"
        description="Soy Luis Fernando Agudelo, desarrollador de software especializado en React y auxiliar técnico en ingeniería civil. Explora mi hoja de vida, proyectos y experiencia profesional."
        canonical="https://hoja-vida-ing-luis-155j.vercel.app/"
        image="https://res.cloudinary.com/dkz51cyxl/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1760324797/bannerSeo3_ldpupt.jpg"
        type="website"
      />

        <Inicio />
      </main>
    </div>
  );
};
