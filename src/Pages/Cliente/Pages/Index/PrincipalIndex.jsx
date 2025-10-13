import { Inicio } from './Boody/Inicio';
import styles from '../../Styles/Index/PrincipalIndex.module.css';
import { Navbar } from './Header/Navbar';




export const PrincipalIndex = () => {
  return (
    <div className={styles.layout}>
     
      <Navbar/>
      
      <main id="inicio" className={styles.main}>


        <Inicio />
      </main>
    </div>
  );
};
