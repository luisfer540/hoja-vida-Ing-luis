import { useState } from 'react';

export const useCustomEstudios = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const imageMap = {
    'Obras Civiles': '/certificados/obrasciviles.jpg.png',
    'Análisis y Desarrollo de Software': '/certificados/desarrollo-software.jpg',
    'Apliacion de la hoja de la hoja de calculo de microsoft excel en levantamientos topograficos planimetricos': '/certificados/planimetria.png',
    'Costos y presupuestos para edificaciones': '/certificados/costosEdificaciones.png',
    'Básico en costos y presupuestos': '/certificados/basicocostosypresupuesto.png',
    'Interpretación de planos estructurales': '/certificados/planosEstructurales.png',
    'Trabajo seguro en alturas': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299241/trabajoSeguroEnAlturas_tj2cvl.png',
    'Microsoft Project:Aplicacion en la programacion de obras': '/certificados/programacionDeObras.png',
    'Pinturas arquitectónicas': '/certificados/pinturasArquitectonica.png',
    'Mármoles y granitos': '/certificados/marmoles-granitos.png',
    'Estucos': '/certificados/estucos.png'
  };

   const otrosCursos = [
      'Apliacion de la hoja de la hoja de calculo de microsoft excel en levantamientos topograficos planimetricos',
      'Costos y presupuestos para edificaciones',
      'Básico en costos y presupuestos',
      'Interpretación de planos estructurales',
      'Trabajo seguro en alturas',
      'Microsoft Project:Aplicacion en la programacion de obras',
      'Pinturas arquitectónicas',
      'Mármoles y granitos',
      'Estucos'
    ];

  const handleShowCertificate = (curso) => {
    const url = imageMap[curso];
    if (url) {
      setImageUrl(url);
      setModalOpen(true);
    } else {
      alert(`No se encontró certificado para: ${curso}`);
    }
  };

  const handleCloseCertificate = () => {
    setModalOpen(false);
    setImageUrl('');
  };

  const fileName = imageUrl?.split('/').pop() || '';

  return {
    modalOpen,
    imageUrl,
    fileName,
    handleShowCertificate,
    handleCloseCertificate,
    otrosCursos
  };
};
