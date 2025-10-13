import { useState, useEffect, useMemo } from 'react';

export const useInicio = () => {
  // Memoizar el array de slides para evitar recrearlo en cada render
  const slides = useMemo(() => [
    {
      titulo: 'Luis Fernando Agudelo Gutierrez',
      subtitulo: 'Tecnólogo en Obras Civiles & Desarrollador de Software',
      descripcion:
        'Soy especialista en estructuras físicas y arquitecturas digitales. Mi experiencia abarca edificaciones verticales hasta 20 pisos, puentes postensados, señalización vial y desarrollo de software con enfoque en trazabilidad, blindaje y excelencia institucional.',
      fondo: '/imgs/foto3.png',
    },
    {
      titulo: 'Ingeniería Civil Aplicada',
      subtitulo: 'Inspector, Supervisor y Residente de Obra',
      descripcion:
        'He liderado proyectos en sistemas industrializados y aporticados, casas quintas, puentes, vías y señalización horizontal y vertical. Cada obra refleja control técnico, trazabilidad estructural y cumplimiento normativo.',
      fondo: '/imgs/foto5.png',
    },
    {
      titulo: 'Arquitectura Institucional',
      subtitulo: 'Diseño visual + Ingeniería estructural',
      descripcion:
        'Integro estética institucional con ingeniería civil para crear interfaces que transmiten confianza. Cada layout refleja jerarquía visual, seguridad y dualidad profesional.',
      fondo: '/imgs/foto3.png',
    },
    {
      titulo: 'Desarrollo Full Stack',
      subtitulo: 'Frontend refinado + Backend blindado',
      descripcion:
        'Domino React, Spring Boot y MySQL, aplicando ciclos de vida del software, auditoría de infraestructura y despliegue seguro. Cada sistema refleja modularidad, reversibilidad y excelencia visual.',
      fondo: '/imgs/foto3.png',
    },
    {
      titulo: 'Dualidad Profesional',
      subtitulo: 'Obras físicas + Sistemas digitales',
      descripcion:
        'Fusiono mi experiencia en campo con ingeniería de software para entregar soluciones sólidas, escalables y trazables. Opero bajo estándares institucionales que garantizan blindaje técnico y visual.',
      fondo: '/imgs/foto3.png',
    },
  ], []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [index, slides.length]);

  const slide = slides[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return { slide, handlePrev, handleNext };
};
