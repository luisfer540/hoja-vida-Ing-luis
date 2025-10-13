// Importación del hook useState para manejar estados locales
import { useState } from "react";

// Hook personalizado que maneja la lógica de la experiencia laboral
export const useCustomExperienciaLaboral = () => {
  // Estado que controla si el modal de funciones está abierto o cerrado
  const [modalOpen, setModalOpen] = useState(false);
  
  // Estado que controla si el modal de certificado está abierto o cerrado
  const [certModalOpen, setCertModalOpen] = useState(false);
  
  // Estado que almacena el item seleccionado (empresa/experiencia)
  const [selected, setSelected] = useState(null);
  
  // Estado que almacena la URL de la imagen del certificado actual
  const [certImage, setCertImage] = useState('');
  
  // Estado que controla el índice actual del carrusel de imágenes
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  // Estado que controla si el modal de video está abierto o cerrado
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  // Estado que almacena la URL del video actual
  const [videoSrc, setVideoSrc] = useState('');

  // Función que detecta el tipo de archivo basándose en su extensión
  const detectTipo = (src) => {
    // Extrae la extensión del archivo y la convierte a minúsculas
    const ext = src?.split('.').pop()?.toLowerCase();
    
    // Si la extensión es de video, retorna 'video'
    if (['mp4', 'webm', 'ogg'].includes(ext)) return 'video';
    
    // Si la extensión es de imagen, retorna 'imagen'
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'imagen';
    
    // Si no coincide con ninguno, retorna 'desconocido'
    return 'desconocido';
  };

  // Función que abre el modal de video con la URL proporcionada
  const handleOpenVideo = (src) => {
    // Log para debug - muestra en consola qué video se está abriendo
    console.log('Abriendo video:', src);
    
    // Establece la URL del video
    setVideoSrc(src);
    
    // Abre el modal de video
    setVideoModalOpen(true);
  };

  // Función que cierra el modal de video
  const handleCloseVideo = () => {
    // Log para debug - confirma que se está cerrando el video
    console.log('Cerrando video');
    
    // Cierra el modal de video
    setVideoModalOpen(false);
    
    // Limpia la URL del video
    setVideoSrc('');
  };

  // Función que abre el modal de funciones con el item seleccionado
  const handleOpenFunciones = (item) => {
    // Establece el item seleccionado
    setSelected(item);
    
    // Reinicia el índice del carrusel a 0
    setCarouselIndex(0);
    
    // Abre el modal de funciones
    setModalOpen(true);
  };

  // Función que cierra el modal de funciones
  const handleCloseFunciones = () => {
    // Cierra el modal de funciones
    setModalOpen(false);
    
    // Limpia el item seleccionado
    setSelected(null);
    
    // Reinicia el índice del carrusel a 0
    setCarouselIndex(0);
  };

  // Función que navega a la imagen anterior en el carrusel
  const prevImage = () => {
    // Obtiene el total de imágenes del item seleccionado
    const total = selected?.imagenes?.length || 0;
    
    // Si está en la primera imagen (índice 0), va a la última; si no, retrocede una posición
    setCarouselIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  // Función que navega a la siguiente imagen en el carrusel
  const nextImage = () => {
    // Obtiene el total de imágenes del item seleccionado
    const total = selected?.imagenes?.length || 0;
    
    // Si está en la última imagen, va a la primera; si no, avanza una posición
    setCarouselIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Obtiene la imagen actual del carrusel basándose en el índice
  const imagenActual = selected?.imagenes?.[carouselIndex] || null;
  
  // Obtiene el nombre de la empresa del item seleccionado
  const empresaActual = selected?.empresa || '';

  // Función que abre el modal de certificado con la URL proporcionada
  const handleOpenCertificado = (url) => {
    // Establece la URL del certificado
    setCertImage(url);
    
    // Abre el modal de certificado
    setCertModalOpen(true);
  };

  // Función que cierra el modal de certificado
  const handleCloseCertificado = () => {
    // Cierra el modal de certificado
    setCertModalOpen(false);
    
    // Limpia la URL del certificado
    setCertImage('');
  };

  // Extrae el nombre del archivo de la URL del certificado
  const fileName = certImage?.split('/').pop() || '';
  
  // Verifica si el archivo es un PDF basándose en su extensión
  const isPdf = certImage?.toLowerCase().endsWith('.pdf');

  // Retorna un objeto con todas las propiedades y funciones que otros componentes necesitarán
  return {
    modalOpen, // Estado del modal de funciones
    certModalOpen, // Estado del modal de certificado
    imagenActual, // Imagen actual del carrusel
    empresaActual, // Nombre de la empresa actual
    certImage, // URL del certificado
    fileName, // Nombre del archivo del certificado
    isPdf, // Booleano que indica si es PDF
    handleOpenFunciones, // Función para abrir modal de funciones
    handleCloseFunciones, // Función para cerrar modal de funciones
    handleOpenCertificado, // Función para abrir modal de certificado
    handleCloseCertificado, // Función para cerrar modal de certificado
    prevImage, // Función para imagen anterior
    nextImage, // Función para siguiente imagen
    carouselIndex, // Índice actual del carrusel
    detectTipo, // Función para detectar tipo de archivo
    videoModalOpen, // Estado del modal de video
    videoSrc, // URL del video
    handleOpenVideo, // Función para abrir modal de video
    handleCloseVideo // Función para cerrar modal de video
  };
};
