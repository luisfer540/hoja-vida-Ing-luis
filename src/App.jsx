import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrincipalIndex } from './Pages/Cliente/Pages/Index/PrincipalIndex';
import { CvCivilCompletaPrincipal } from './Pages/Cliente/Pages/ObrasCiviles/HojaVidaCompleta/CvCivilCompletaPrincipal';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Pages/Cliente/Pages/Index/Header/Navbar';
import styles from './Pages/Cliente/Styles/Index/PrincipalIndex.module.css';
import { useModal } from './Pages/Cliente/Context/index/Header/ModalProvider';
import { ContactoModal } from './Pages/Cliente/Pages/contactame/ContactoModal';
import { GuiasTecnicas } from './Pages/Cliente/Pages/Software/GuiasTecnicas/GuiasTenicas';





function App() {
  const { activeModal, handleModalClose } = useModal();

  return (
    <div className={styles.layout}>
     

      <Navbar />
      
      <Routes>
        <Route path="/" element={<PrincipalIndex />} />
        <Route path="/cv-completa" element={<CvCivilCompletaPrincipal />} />
         <Route path="/guias-tecnicas" element={<GuiasTecnicas />} />
      </Routes>
    
      {activeModal === "contacto" && (
        <ContactoModal isOpen={true} onClose={handleModalClose} />
      )}
    </div>
  );
}

export default App;
