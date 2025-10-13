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
  title="Obras Civiles y Desarrollador de software"
  description="Conocimiento en obras civiles y desarrollo de software."
  canonical="https://hoja-vida-ing-luis-155j.vercel.app/"
  image="https://res.cloudinary.com/dkz51cyxl/image/upload/v1760320799/bannerSeo_r55lod.png"
  type="website"
/>

        <Inicio />
      </main>
    </div>
  );
};
