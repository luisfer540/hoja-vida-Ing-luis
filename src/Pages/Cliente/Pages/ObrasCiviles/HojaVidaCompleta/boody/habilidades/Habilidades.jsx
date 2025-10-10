import styles from '../../../../../Styles/ObrasCiviles/HojaVidaCompleta/Habilidades.module.css';

export const Habilidades = () => {
  return (
    <div className={styles.body}>
      <h5 className={styles.title}>Habilidades Blandas</h5>
      <ul className={styles.list}>
        <li><strong>Comunicación Efectiva:</strong> Capacidad para expresar ideas claramente y escuchar a los demás</li>
        <li><strong>Trabajo en Equipo:</strong> Colaborar con colegas para lograr objetivos comunes</li>
        <li><strong>Liderazgo:</strong> Capacidad para guiar y motivar a un equipo</li>
        <li><strong>Solución de Problemas:</strong> Habilidad para encontrar soluciones eficaces a desafíos</li>
        <li><strong>Adaptabilidad:</strong> Capacidad para ajustarse a nuevas situaciones y cambios</li>
      </ul>

      <h5 className={styles.title}>Habilidades Técnicas</h5>
      <ul className={styles.list}>
        <li><strong>Softwares:</strong> Autocad, Microsoft Project, Topo-cal, Office</li>
        <li><strong>Normas y Regulaciones:</strong> Entender y aplicar las normativas legales en construcción civil</li>
        <li><strong>Ingeniería y Diseño:</strong> Aplicar principios técnicos a proyectos de construcción</li>
        <li><strong>Coordinación y Supervisión:</strong> Coordinar y liderar equipos de trabajo</li>
        <li><strong>Gestión de Recursos y Costos:</strong> Optimizar recursos y controlar costos en obras civiles</li>
        <li><strong>Topografía:</strong> Levantamientos topográficos y representación planimétrica del terreno</li>
        <li><strong>Seguridad y Salud:</strong> Implementar prácticas seguras en el entorno laboral</li>
      </ul>
    </div>
  );
};
