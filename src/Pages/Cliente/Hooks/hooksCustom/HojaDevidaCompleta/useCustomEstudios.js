import { useState } from 'react';

export const useCustomEstudios = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const imageMap = {
    'Obras Civiles': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299236/obrasciviles.jpg_qsttt4.png',

    'Análisis y Desarrollo de Software': '/certificados/desarrollo-software.jpg',

    'Apliacion de la hoja de la hoja de calculo de microsoft excel en levantamientos topograficos planimetricos': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299240/planimetria_yqe6yj.png',

    'Costos y presupuestos para edificaciones': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299241/costosEdificaciones_lfal5v.png',

    'Básico en costos y presupuestos': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299237/basicocostosypresupuesto_pkqjhc.png',

    'Interpretación de planos estructurales': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299241/planosEstructurales_n4ylrk.png',

    'Trabajo seguro en alturas': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299241/trabajoSeguroEnAlturas_tj2cvl.png',

    'Microsoft Project:Aplicacion en la programacion de obras': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299241/programacionDeObras_vg7kxj.png',

    'Pinturas arquitectónicas': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299241/pinturasArquitectonica_vkmpxn.png',

    'Mármoles y granitos': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299240/marmoles-granitos_hrsfkm.png',

    'Estucos': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299240/estucos_mpdk5a.png'
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
