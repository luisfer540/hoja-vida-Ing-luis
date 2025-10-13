// Importación del hook useContext para acceder al contexto
import { useContext } from 'react';
// Importación de estilos CSS module para el componente de experiencia laboral
import styles from '../../../../../Styles/ObrasCiviles/HojaVidaCompleta/ExperienciaLaboral.module.css';
// Importación del ícono de imágenes desde react-icons (aunque no se usa en el código actual)
import { FaImages } from 'react-icons/fa';
// Importación del componente modal para mostrar funciones laborales
import { LaboralModal } from './modalLaboral/LaboralModal';

// Importación del componente de borde eléctrico para efectos visuales
import { ElectricBorder } from '../../../../Index/Boody/ElectricBorder';
// Importación del contexto de experiencia laboral
import { ContextExperienciaLaboral } from '../../../../../Context/hojaDeVidaCompleta/ContextExperienciaLaboral';
// Importación de los datos de experiencia laboral en obras civiles
import { experienciaObrasCiviles } from '../../../../../../../Service/ExperienciaLaboralObrasCiviles';
// Importación del componente modal para visualizar certificados
import { CertificateViewerExperiencia } from './modalLaboral/CertificateViewerExperiencia';

// Componente funcional que muestra la lista de experiencia laboral
export const ExperienciaLaboral = () => {
  // Desestructuración de las funciones del contexto
  const {
    handleOpenFunciones, // Función para abrir el modal de funciones
    handleOpenCertificado, // Función para abrir el modal de certificado
  } = useContext(ContextExperienciaLaboral);

  // Retorna el JSX del componente
  return (
    <>
      {/* Contenedor principal del componente */}
      <div className={styles.body}>
        {/* Título de la sección */}
        <h5 className={styles.title}>Experiencia Laboral</h5>
        
        {/* Lista de experiencias laborales */}
        <ul className={styles.list}>
          {/* Mapeo del array de experiencias para generar dinámicamente los elementos */}
          {experienciaObrasCiviles.map((item, index) => (
            // Elemento de lista con key única basada en el índice
            <li key={index}>
              {/* Contenedor para el nombre de la empresa */}
              <div className={styles.itemRow}>
                {/* Enlace a la página de la empresa que se abre en nueva pestaña */}
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.empresa}
                >
                  {item.empresa}
                </a>
              </div>
              
              {/* Párrafo que muestra el cargo desempeñado */}
              <p><strong>Cargo:</strong> {item.cargo}</p>
              
              {/* Párrafo que muestra las fechas de trabajo */}
              <p><strong>Fecha:</strong> {item.fecha}</p>
              
              {/* Párrafo que muestra el nombre del proyecto */}
              <p><strong>Proyecto:</strong> {item.proyecto}</p>

              {/* Contenedor de los botones de acción */}
              <div className={styles.buttonsRow}>
                {/* Primer botón con borde eléctrico animado */}
                <ElectricBorder
                  color="#ffc107" // Color amarillo del borde eléctrico
                  speed={1.2} // Velocidad de la animación
                  chaos={0.4} // Nivel de caos en la animación
                  thickness={1.2} // Grosor del borde
                  style={{ borderRadius: 6 }} // Estilo inline para bordes redondeados
                >
                  {/* Botón para ver las funciones del cargo */}
                  <button
                    className={styles.btnElectrico}
                    onClick={() => handleOpenFunciones(item)} // Al hacer click, abre el modal con las funciones
                  >
                    Ver Funciones
                  </button>
                </ElectricBorder>

                {/* Segundo botón con borde eléctrico animado */}
                <ElectricBorder
                  color="#ffc107" // Color amarillo del borde eléctrico
                  speed={1.2} // Velocidad de la animación
                  chaos={0.4} // Nivel de caos en la animación
                  thickness={1.2} // Grosor del borde
                  style={{ borderRadius: 6 }} // Estilo inline para bordes redondeados
                >
                  {/* Botón para ver el certificado laboral */}
                  <button
                    className={styles.btnElectrico}
                    onClick={() => handleOpenCertificado(item.certificado)} // Al hacer click, abre el modal con el certificado
                  >
                    Certificado
                  </button>
                </ElectricBorder>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Componente modal para mostrar las funciones laborales */}
      <LaboralModal/>

      {/* Componente modal para visualizar y descargar certificados */}
      <CertificateViewerExperiencia/>
    </>
  );
};
