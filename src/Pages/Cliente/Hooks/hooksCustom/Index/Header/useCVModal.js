import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useModal } from '../../../../Context/index/Header/ModalProvider';
import { CVModalCivilPrincipal } from '../../../../Pages/ObrasCiviles/HojaVidaModal/CVModalCivilPrincipal';
import { CvModalSoftwarePrincipal } from '../../../../Pages/Software/HojaVidaModal/CvModalSoftwarePrincipal';
import { BtnVerGuiasTenicas } from '../../../../Pages/Software/GuiasTecnicas/ButtomVerGuiasTecnicas.jsx/BtnVerGuiasTenicas';



export const useCVModal = () => {

   const { activeModal, setActiveModal, handleModalOpen, handleModalClose } = useModal();
    
    const  isOpen =activeModal === 'software' || activeModal === 'civil';


  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  const contentRef = useRef(null);
  const headerRef = useRef(null);
  const bodyRef = useRef(null);

 

 const modalConfig = {
  civil: {
    type: "civil",
    title: "Tecnólogo en Obras Civiles",
    subtitle: " Construcción e Infraestructura",
    showGuiasButton: false
  },
  software: {
    type: "software",
    title: "Desarrollador de Software",
    subtitle: "Full Stack Developer & Tech Innovator",
    showGuiasButton: true
  },
};

const { type, title, subtitle,showGuiasButton  } = modalConfig[activeModal] || {};




    useEffect(() => {
    const modal = modalRef.current;
    const backdrop = backdropRef.current;
    const content = contentRef.current;
    const header = headerRef.current;
    const body = bodyRef.current;

    if (!modal || !backdrop || !content) return;

    if (isOpen) {
      // Mostrar modal
      gsap.set(modal, { visibility: 'visible' });
      gsap.set(backdrop, { opacity: 0 });
      gsap.set(content, { 
        scale: 0.7, 
        rotationX: -15, 
        rotationY: 5, 
        z: -200,
        opacity: 0 
      });

      const tl = gsap.timeline();
      
      // Backdrop fade in
      tl.to(backdrop, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.easeOut'
      });

      // Modal 3D entrance
      tl.to(content, {
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        z: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'back.easeOut(1.7)',
        transformOrigin: 'center center'
      }, 0.1);

      // Header animation
      if (header) {
        gsap.set(header, { y: -50, opacity: 0 });
        tl.to(header, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.easeOut'
        }, 0.3);
      }

      // Body animation
      if (body) {
        gsap.set(body, { y: 30, opacity: 0 });
        tl.to(body, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.easeOut'
        }, 0.4);
      }

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Ocultar modal
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(modal, { visibility: 'hidden' });
          document.body.style.overflow = '';
        }
      });

      tl.to(content, {
        scale: 0.8,
        rotationX: 10,
        rotationY: -5,
        z: -100,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.easeIn'
      });

      tl.to(backdrop, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.easeIn'
      }, 0.1);
    }
  }, [isOpen]);

 // Handle click outside
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      handleModalClose();
    }
  };


  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleModalClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleModalClose]);

const getContentComponent = () => {
  switch (activeModal) {
    case 'civil':
      return CVModalCivilPrincipal;
    case 'software':
      return CvModalSoftwarePrincipal;
    default:
      return null;
  }
};



  return {
   
    modalRef,
      backdropRef,
      contentRef,
      headerRef,
      bodyRef,
      activeModal,
      handleModalOpen,
      handleModalClose,
      setActiveModal,
      isOpen,
      handleBackdropClick,
      
      type,
      title,
      subtitle,
      getContentComponent,
      showGuiasButton

  };
};
