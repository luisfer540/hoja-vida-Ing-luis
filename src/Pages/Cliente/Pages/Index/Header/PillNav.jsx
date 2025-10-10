// Importa el hook personalizado que gestiona los datos de navegación tipo "pill"
import { usePillNav } from '../../../Hooks/hooksCustom/Index/Header/usePillNav';

// Importa el contexto para manejar la apertura de modales
import { useModal } from '../../../Context/index/Header/ModalProvider';

// Importa los estilos CSS específicos para el componente PillNav
import "../../../Styles/Index/Header/PillNav.css";

// Importa la lógica adicional para manejar interacciones y estados del menú
import { usePillNavLogic } from '../../../Hooks/hooksCustom/Index/Header/usePillNavLogic';

// Define el componente funcional PillNav, recibe una función como prop para manejar clics en menú móvil
export const PillNav = ({ onMobileMenuClick }) => {
  // Extrae la función para abrir modales desde el contexto
  const { handleModalOpen } = useModal();

  // Extrae datos visuales y de configuración desde el hook de navegación
  const {
    logo, // URL del logo
    logoAlt, // Texto alternativo del logo
    items, // Lista de ítems del menú
    activeHref, // Ruta activa actualmente
    setActiveHref, // Función para actualizar la ruta activa
    className, // Clase CSS adicional
    ease, // Configuración de animación
    baseColor, pillColor, hoveredPillTextColor, pillTextColor, // Colores personalizados
    initialLoadAnimation, // Animación inicial
  } = usePillNav();

  // Extrae funciones y referencias para manejar la lógica del menú
  const {
    isMobileMenuOpen, // Estado del menú móvil
    openSubmenu, // Submenú abierto actualmente
    activeDropdown, // Dropdown activo en escritorio
    setIsMobileMenuOpen, setOpenSubmenu, setActiveDropdown, // Funciones para actualizar estados
    handleEnter, handleLeave, // Eventos de hover en ítems
    handleLogoEnter, // Evento de hover en el logo
    handleDropdownEnter, handleDropdownLeave, // Eventos de hover en dropdowns
    handleSubmenuEnter, handleSubmenuLeave, // Eventos de hover en submenús
    handleNavigation, // Función para manejar navegación por href
    toggleMobileMenu, // Alterna visibilidad del menú móvil
    circleRefs, logoImgRef, logoRef, navItemsRef, hamburgerRef, mobileMenuRef, // Referencias a elementos DOM
    resolvedPillTextColor, // Color de texto resuelto dinámicamente
  } = usePillNavLogic({
    items,
    ease,
    initialLoadAnimation,
    baseColor,
    pillColor,
    hoveredPillTextColor,
    pillTextColor,
    onMobileMenuClick,
  });

  // Define variables CSS personalizadas para aplicar estilos dinámicos
  const cssVars = {
    "--pill-color": pillColor,
    "--pill-text-color": resolvedPillTextColor,
    "--pill-hovered-text-color": hoveredPillTextColor,
  };

  // Renderiza el componente
  return (
    <div className="pill-nav-container"> {/* Contenedor principal del menú */}

      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}> {/* Menú principal con estilos dinámicos */}

        {/* Logo con navegación al inicio */}
        <a
          className="pill-logo"
          href="#inicio"
          aria-label="Inicio"
          onMouseEnter={handleLogoEnter}
          onClick={(e) => handleNavigation("#inicio", e)}
          ref={logoRef}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} /> {/* Imagen del logo */}
        </a>

        {/* Ítems del menú en versión escritorio */}
        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li
                key={item.href || `item-${i}`}
                role="none"
                className={`pill-item ${item.isModal ? "desktop-modal-trigger" : ""}`}
              >
                {/* Si el ítem abre un modal, renderiza como botón con submenú */}
                {item.isModal ? (
                  <div
                    className="desktop-submenu-wrapper"
                    onMouseEnter={() => handleDropdownEnter(i)}
                    onMouseLeave={() => handleDropdownLeave(i)}
                  >
                    <button
                      className={`pill desktop-submenu-toggle dropdown-toggle${
                        activeHref === item.href ? " is-active" : ""
                      }`}
                      aria-expanded={activeDropdown === `desktop-${i}`}
                      type="button"
                    >
                      {/* Círculo animado al hacer hover */}
                      <span
                        className="hover-circle"
                        aria-hidden="true"
                        ref={(el) => {
                          circleRefs.current[i] = el;
                        }}
                      />
                      {/* Etiqueta del ítem con efecto hover */}
                      <span className="label-stack">
                        <span className="pill-label">
                          {item.label}
                          <span className={`submenu-arrow ${activeDropdown === `desktop-${i}` ? "open" : ""}`}>
                            ▼
                          </span>
                        </span>
                        <span className="pill-label-hover" aria-hidden="true">
                          {item.label}
                          <span className={`submenu-arrow ${activeDropdown === `desktop-${i}` ? "open" : ""}`}>
                            ▼
                          </span>
                        </span>
                      </span>
                    </button>

                    {/* Lista de opciones del submenú */}
                    <div
                      className={`desktop-submenu-list ${activeDropdown === `desktop-${i}` ? "show" : ""}`}
                      onMouseEnter={handleSubmenuEnter}
                      onMouseLeave={() => handleSubmenuLeave(i)}
                    >
                      {item.modalOptions?.map((option, j) => (
                        <button
                          key={option.type || `desktop-option-${i}-${j}`}
                          className="desktop-submenu-link modal-option-btn"
                          onClick={() => {
                            handleModalOpen(option.type);
                            setActiveDropdown(null);
                          }}
                          type="button"
                        >
                          {/* Ícono según tipo de opción */}
                          <i className={option.type === "civil" ? "fas fa-hard-hat" : "fas fa-code"}></i>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Ítem normal con navegación por href
                  <a
                    role="menuitem"
                    href={item.href || "#"}
                    className={`pill${activeHref === item.href ? " is-active" : ""}`}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                    onClick={(e) => {
                      handleNavigation(item.href, e);
                      setActiveHref(item.href);
                    }}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">{item.label}</span>
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Botón para abrir el menú móvil */}
        <button
          className="mobile-menu-button mobile-only btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          ref={hamburgerRef}
          type="button"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Menú desplegable para dispositivos móviles */}
      <div
        className={`mobile-menu-popover mobile-only ${isMobileMenuOpen ? "show" : ""}`}
        ref={mobileMenuRef}
        style={cssVars}
      >
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li
              key={item.href || `mobile-item-${i}`}
              className={item.isModal ? "mobile-modal-trigger" : ""}
            >
              {/* Ítem con submenú en móvil */}
              {item.isModal ? (
                <div className="mobile-submenu-wrapper">
                  <button
                    className="mobile-menu-link mobile-submenu-toggle btn dropdown-toggle"
                    onClick={() =>
                      setOpenSubmenu(openSubmenu === `mobile-${i}` ? null : `mobile-${i}`)
                    }
                    aria-expanded={openSubmenu === `mobile-${i}`}
                    type="button"
                  >
                    {item.label}
                    <span className={`submenu-arrow ${openSubmenu === `mobile-${i}` ? "open" : ""}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`collapse mobile-submenu-list ${openSubmenu === `mobile-${i}` ? "show" : ""}`}>
                    {item.modalOptions?.map((option, j) => (
                      <button
                        key={option.type || `mobile-option-${i}-${j}`}
                        className="mobile-submenu-link mobile-modal-btn"
                        onClick={() => {
                                                  handleModalOpen(option.type); // Abre el modal correspondiente según el tipo de opción
                          setIsMobileMenuOpen(false); // Cierra el menú móvil después de seleccionar una opción
                        }}
                        type="button"
                      >
                        {/* Ícono representativo del tipo de opción */}
                        <i
                          className={
                            option.type === "civil" ? "fas fa-hard-hat" : "fas fa-code"
                          }
                        ></i>
                        {option.label} {/* Texto de la opción del submenú */}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Ítem normal del menú móvil sin submenú
                <a
                  href={item.href}
                  className={`mobile-menu-link${activeHref === item.href ? " is-active" : ""}`}
                  onClick={(e) => {
                    handleNavigation(item.href, e); // Navega a la sección correspondiente
                    setActiveHref(item.href); // Actualiza el estado de la ruta activa
                  }}
                >
                  {item.label} {/* Texto del ítem */}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

