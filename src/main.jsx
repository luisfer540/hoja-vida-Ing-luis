import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ModalProvider } from './Pages/Cliente/Context/index/Header/ModalProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

import { CvModalSoftwareProvider } from './Pages/Cliente/Context/index/Header/CvModalSoftwareProvider.jsx';
import { ProviderExperienciaLaboral } from './Pages/Cliente/Context/hojaDeVidaCompleta/ProviderModalLaboralCertificateViewer.jsx';
import { ProviderEstudios } from './Pages/Cliente/Context/hojaDeVidaCompleta/ProviderEstudios.jsx';






createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      
      <ProviderEstudios>
      <ProviderExperienciaLaboral>
      <CvModalSoftwareProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
      </CvModalSoftwareProvider>
      </ProviderExperienciaLaboral>
      </ProviderEstudios>
    
    </StrictMode>
  </BrowserRouter>

)
