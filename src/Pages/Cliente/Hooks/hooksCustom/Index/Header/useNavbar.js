import { useEffect, useState } from 'react';
import { useModal } from '../../../../Context/index/Header/ModalProvider';



export const useNavbar = () => {
  const { activeModal, handleModalOpen, handleModalClose } = useModal();
  const [activeSection, setActiveSection] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'tecnologo-obras-civiles', 'desarrollador-software', 'contacto'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    handleScroll();
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, []);

  return { activeSection, activeModal, handleModalOpen, handleModalClose };
};
