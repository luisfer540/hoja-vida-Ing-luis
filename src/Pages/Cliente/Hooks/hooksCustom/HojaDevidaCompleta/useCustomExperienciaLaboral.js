import { useState } from "react";

export const useCustomExperienciaLaboral = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [certImage, setCertImage] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const detectTipo = (src) => {
    const ext = src?.split('.').pop()?.toLowerCase();
    if (['mp4', 'webm', 'ogg'].includes(ext)) return 'video';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'imagen';
    return 'desconocido';
  };

  const handleOpenVideo = (src) => {
    console.log('Abriendo video:', src); // Para debug
    setVideoSrc(src);
    setVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    console.log('Cerrando video'); // Para debug
    setVideoModalOpen(false);
    setVideoSrc('');
  };

  const handleOpenFunciones = (item) => {
    setSelected(item);
    setCarouselIndex(0);
    setModalOpen(true);
  };

  const handleCloseFunciones = () => {
    setModalOpen(false);
    setSelected(null);
    setCarouselIndex(0);
  };

  const prevImage = () => {
    const total = selected?.imagenes?.length || 0;
    setCarouselIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextImage = () => {
    const total = selected?.imagenes?.length || 0;
    setCarouselIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const imagenActual = selected?.imagenes?.[carouselIndex] || null;
  const empresaActual = selected?.empresa || '';

  const handleOpenCertificado = (url) => {
    setCertImage(url);
    setCertModalOpen(true);
  };

  const handleCloseCertificado = () => {
    setCertModalOpen(false);
    setCertImage('');
  };

  const fileName = certImage?.split('/').pop() || '';
  const isPdf = certImage?.toLowerCase().endsWith('.pdf');

  return {
    modalOpen,
    certModalOpen,
    imagenActual,
    empresaActual,
    certImage,
    fileName,
    isPdf,
    handleOpenFunciones,
    handleCloseFunciones,
    handleOpenCertificado,
    handleCloseCertificado,
    prevImage,
    nextImage,
    carouselIndex,
    detectTipo,
    videoModalOpen,
    videoSrc,
    handleOpenVideo,
    handleCloseVideo
  };
};
