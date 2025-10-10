import { useState } from 'react';

export const usePillNav = () => {
  const [logo] = useState('/imgs/fotoperfil.jpg');
  const [logoAlt] = useState('Luis Fernando Agudelo - Perfil profesional');
  const [activeHref, setActiveHref] = useState('#inicio');

  const items = [
    {
      label: 'Inicio',
      href: '#inicio',
      ariaLabel: 'Ir a la sección de inicio',
    },
    {
      label: 'Hoja de Vida',
      href: '#hoja-de-vida',
      ariaLabel: 'Ver opciones de hoja de vida',
      isModal: true,
      modalOptions: [
        {
          label: 'Tecnólogo en Obras Civiles',
          type: 'civil',
          ariaLabel: 'Ver perfil como tecnólogo en obras civiles',
        },
        {
          label: 'Desarrollador de Software',
          type: 'software',
          ariaLabel: 'Ver perfil como desarrollador de software',
        },
      ],
    },
    {
      label: 'Contáctame',
      href: '#contacto',
      ariaLabel: 'Ir a la sección de contacto',
    },
  ];


  

  return {
    logo,
    logoAlt,
    items,
    activeHref,
    setActiveHref,
    className: 'custom-nav',
    ease: 'power2.easeOut',
    baseColor: 'rgba(255, 255, 255, 0.1)',
    pillColor: 'rgba(0, 204, 255, 0.9)',
    hoveredPillTextColor: '#ffffffff',
    pillTextColor: '#000000',
    initialLoadAnimation: true,
  };
};
