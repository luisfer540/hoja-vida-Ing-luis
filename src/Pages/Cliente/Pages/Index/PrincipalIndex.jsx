import { Inicio } from './Boody/Inicio';
import styles from '../../Styles/Index/PrincipalIndex.module.css';
import { Navbar } from './Header/Navbar';
import { ComoponenteSEO } from '../ComoponenteSEO';

export const PrincipalIndex = () => {
  return (
    <div className={styles.layout}>
     
      <Navbar/>
      
      <main id="inicio" className={styles.main}>
        <ComoponenteSEO
          title="Obras Civiles y Desarrolador de software"
          description="Conocmiento en obras civiles y desarrollo de software."
          canonical="https://www.tusitio.com"
          image="https://www.tusitio.com/bannerSeo.png"
          type="website"
        />
        <Inicio />
      </main>
    </div>
  );
};
