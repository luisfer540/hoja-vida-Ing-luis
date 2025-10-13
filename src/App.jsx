import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrincipalIndex } from './Pages/Cliente/Pages/Index/PrincipalIndex';
import { CvCivilCompletaPrincipal } from './Pages/Cliente/Pages/ObrasCiviles/HojaVidaCompleta/CvCivilCompletaPrincipal';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Pages/Cliente/Pages/Index/Header/Navbar';
import styles from './Pages/Cliente/Styles/Index/PrincipalIndex.module.css';

import { useModal } from './Pages/Cliente/Context/index/Header/ModalProvider';
import { ContactoModal } from './Pages/Cliente/Pages/contactame/ContactoModal';
import { ComoponenteSEO } from './Pages/Cliente/Pages/ComoponenteSEO';


function App() {
const { activeModal, handleModalClose } = useModal()

  return (
    <div className={styles.layout}>
          <ComoponenteSEO
                title="Obras Civiles y Desarrolador de software"
                description="Conocmiento en obras civiles y desarrollo de software."
                canonical="https://www.tusitio.comhttps://hoja-vida-ing-luis-155j.vercel.app/"
                image="https://res.cloudinary.com/dkz51cyxl/image/upload/v1760320799/bannerSeo_r55lod.png"
                type="website"
              />  
      <Navbar />
      <Routes>
        <Route path="/" element={<PrincipalIndex />} />
        <Route path="/cv-completa" element={<CvCivilCompletaPrincipal />} />
      </Routes>
    
     {activeModal === "contacto" && (
  <ContactoModal isOpen={true} onClose={handleModalClose} />
)}
    </div>
  );
}

export default App;
