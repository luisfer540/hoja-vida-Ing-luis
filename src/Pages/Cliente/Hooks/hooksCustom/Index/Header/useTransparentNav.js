// src/Hooks/useTransparentNav.jsx
import { useState } from "react";

export const useTransparentNav = () => {
  const [logo] = useState("/imgs/fotoperfil.jpg");
  const [logoAlt] = useState("Luis Fernando Agudelo - Perfil profesional");
  const [activeHref, setActiveHref] = useState("#inicio");

  const items = [
    {
      label: "Inicio",
      href: "#inicio",
      ariaLabel: "Ir a la sección de inicio",
    },
    {
      label: "Hoja de Vida",
      href: "#hoja-de-vida",
      ariaLabel: "Ver opciones de hoja de vida",
      isModal: true,
      modalOptions: [
        {
          label: "Tecnólogo en Obras Civiles",
          type: "civil",
        },
        {
          label: "Desarrollador de Software",
          type: "software",
        },
      ],
    },
    {
      label: "Contáctame",
      type: "contacto",
      isModal: true,
    },
  ];

  return {
    logo,
    logoAlt,
    items,
    activeHref,
    setActiveHref,
  };
};
