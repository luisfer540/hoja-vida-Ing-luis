import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrincipalIndex } from './Pages/Cliente/Pages/Index/PrincipalIndex';
import { CvCivilCompletaPrincipal } from './Pages/Cliente/Pages/ObrasCiviles/HojaVidaCompleta/CvCivilCompletaPrincipal';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Pages/Cliente/Pages/Index/Header/Navbar';
import styles from './Pages/Cliente/Styles/Index/PrincipalIndex.module.css';
import { useModal } from './Pages/Cliente/Context/index/Header/ModalProvider';
import { ContactoModal } from './Pages/Cliente/Pages/contactame/ContactoModal';
import { ComponenteSEO } from './Pages/Cliente/Pages/ComponenteSEO';

function App() {
  const { activeModal, handleModalClose } = useModal();

  return (
    <div className={styles.layout}>
      <ComponenteSEO
        title="Luis Fernando Agudelo | Desarrollador de Software & Auxiliar en Ingeniería Civil"
        description="Soy Luis Fernando Agudelo, desarrollador de software especializado en React y auxiliar técnico en ingeniería civil. Explora mi hoja de vida, proyectos y experiencia profesional."
        canonical="https://hoja-vida-ing-luis-155j.vercel.app/"
        image="https://res.cloudinary.com/dkz51cyxl/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1760324797/bannerSeo3_ldpupt.jpg"
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
