// Context/index/Header/ModalContext.jsx
import { createContext, useContext, useState } from 'react';

// 🔐 Contexto global
const ModalContext = createContext();

// 🧩 Proveedor institucional
export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);

  const handleModalOpen = (type) => setActiveModal(type);
  const handleModalClose = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, handleModalOpen, handleModalClose }}>
      {children}
    </ModalContext.Provider>
  );
};

//  Hook para consumir el contexto
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal debe usarse dentro de ModalProvider');
  }
  return context;
};
