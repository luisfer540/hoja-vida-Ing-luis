// Importación del hook useState para manejar estados locales
import { useState } from 'react';

// Hook personalizado que maneja la lógica de los estudios y certificados
export const useCustomEstudios = () => {
  // Estado que controla si el modal está abierto o cerrado
  const [modalOpen, setModalOpen] = useState(false);
  
  // Estado que almacena la URL de la imagen del certificado actual
  const [imageUrl, setImageUrl] = useState('');

  // Objeto que mapea el nombre del curso con su URL de certificado en Cloudinary
  const imageMap = {
    'Obras Civiles': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760299236/obrasciviles.jpg_qsttt4.png',

    'Análisis y Desarrollo de Software': 'https://res.cloudinary.com/dkz51cyxl/image/upload/v1760313676/enproceso_g4h0n3.png',

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

  // Array con los nombres de los otros cursos realizados
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

  // Función que maneja el evento de mostrar un certificado
  const handleShowCertificate = (curso) => {
    // Busca la URL del certificado en el objeto imageMap usando el nombre del curso
    const url = imageMap[curso];
    
    // Si encuentra la URL del certificado
    if (url) {
      // Actualiza el estado con la URL de la imagen
      setImageUrl(url);
      // Abre el modal
      setModalOpen(true);
    } else {
      // Si no encuentra el certificado, muestra una alerta al usuario
      alert(`No se encontró certificado para: ${curso}`);
    }
  };

  // Función que maneja el cierre del modal
  const handleCloseCertificate = () => {
    // Cierra el modal
    setModalOpen(false);
    // Limpia la URL de la imagen
    setImageUrl('');
  };

  // Extrae el nombre del archivo de la URL (última parte después del último '/')
  // Si no hay URL, usa una cadena vacía
  const fileName = imageUrl?.split('/').pop() || '';

  // Retorna un objeto con todas las propiedades y funciones que otros componentes necesitarán
  return {
    modalOpen, // Estado del modal
    imageUrl, // URL de la imagen actual
    fileName, // Nombre del archivo para descarga
    handleShowCertificate, // Función para mostrar certificado
    handleCloseCertificate, // Función para cerrar modal
    otrosCursos // Array de cursos
  };
};
