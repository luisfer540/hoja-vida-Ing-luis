// Importación de estilos CSS module específicos para este componente
import styles from '../../../../../Styles/ObrasCiviles/HojaVidaCompleta/Estudios.module.css';
// Importación del ícono de PDF desde react-icons
import { FaRegFilePdf } from 'react-icons/fa';

// Importación del hook useContext para acceder al contexto
import { useContext } from 'react';
// Importación del contexto de estudios
import { ContexEstudios } from '../../../../../Context/hojaDeVidaCompleta/ContexEstudios';
// Importación del componente modal para visualizar certificados
import { CertificateViewerEstudio } from './ModalCerficados/CertificateViewerEstudio';

// Componente funcional que muestra la lista de estudios realizados
export const Estudios = () => {
  
  // Desestructuración de las propiedades del contexto
  const { 
    handleShowCertificate, // Función para mostrar un certificado
    otrosCursos // Array con la lista de otros cursos
  } = useContext(ContexEstudios);

  // Retorna el JSX del componente
  return (
    <>
      {/* Contenedor principal del componente */}
      <div className={styles.body}>
        {/* Título de la sección */}
        <h5 className={styles.title}>Estudios Realizados</h5>
        
        {/* Lista principal de estudios */}
        <ul className={styles.list}>
          {/* Elemento de lista para estudios de primaria */}
          <li><strong>Primaria:</strong> Colegio Nuestra Señora de Fátima</li>
          
          {/* Elemento de lista para estudios de secundaria */}
          <li><strong>Secundaria:</strong> Luis Carlos Galán Sarmiento</li>
          
          {/* Elemento de lista para estudios universitarios */}
          <li><strong>Estudios Universitarios:</strong>
            {/* Sublista de estudios universitarios */}
            <ul>
              {/* Primer estudio universitario */}
              <li>
                {/* Contenedor clickeable que muestra el certificado al hacer click */}
                <div className={styles.itemRow} onClick={() => handleShowCertificate('Obras Civiles')}>
                  {/* Texto del estudio */}
                  <span>Tecnólogo en Obras Civiles</span>
                  {/* Ícono de PDF */}
                  <FaRegFilePdf className={styles.icon} />
                </div>
              </li>
              
              {/* Segundo estudio universitario */}
              <li>
                {/* Contenedor clickeable que muestra el certificado al hacer click */}
                <div className={styles.itemRow} onClick={() => handleShowCertificate('Análisis y Desarrollo de Software')}>
                  {/* Texto del estudio */}
                  <span>Tecnólogo en Análisis y Desarrollo de Software</span>
                  {/* Ícono de PDF */}
                  <FaRegFilePdf className={styles.icon} />
                </div>
              </li>
            </ul>
          </li>
          
          {/* Elemento de lista para otros estudios */}
          <li><strong>Otros Estudios:</strong>
            {/* Sublista de otros cursos */}
            <ul>
              {/* Mapeo del array otrosCursos para generar dinámicamente los elementos */}
              {otrosCursos.map((curso, index) => (
                // Elemento de lista con key única basada en el índice
                <li key={index}>
                  {/* Contenedor clickeable que muestra el certificado al hacer click */}
                  <div className={styles.itemRow} onClick={() => handleShowCertificate(curso)}>
                    {/* Texto del curso */}
                    <span>{curso}</span>
                    {/* Ícono de PDF */}
                    <FaRegFilePdf className={styles.icon} />
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* Componente modal que se renderiza para mostrar los certificados */}
      <CertificateViewerEstudio />
    </>
  );
};
