// TransparentNav.jsx
import React, { useState, useRef } from "react";
import styles from "../../../Styles/Index/Header/TransparentNav.module.css";
import { useModal } from "../../../Context/index/Header/ModalProvider";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

export const TransparentNav = ({
  logo,
  logoAlt,
  items,
  activeHref,
  setActiveHref,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRefs = useRef([]);
  const { handleModalOpen } = useModal();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href, e) => {
    e.preventDefault();

    if (href === "#inicio") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      setActiveHref(href);
      setIsMobileOpen(false);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveHref(href);
      setIsMobileOpen(false);
    }
  };

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <header className={styles.navContainer}>
      <nav className={styles.navBar}>
        <NavLink
          to="/"
          className={styles.logo}
          onClick={(e) => handleNavigation("#inicio", e)}
        >
          <img src={logo} alt={logoAlt} />
        </NavLink>

        <ul className={styles.navItems}>
          {items.map((item, i) => (
            <li key={i} className={styles.navItem}>
              {item.isModal ? (
                item.modalOptions ? (
                  <div className={styles.dropdownWrapper}>
                    <button
                      className={styles.navButton}
                      onClick={() =>
                        dropdownRefs.current[i]?.classList.toggle(
                          styles.showDropdown
                        )
                      }
                    >
                      {item.label} <span className={styles.arrow}>▾</span>
                    </button>
                    <div
                      className={`${styles.dropdown}`}
                      ref={(el) => (dropdownRefs.current[i] = el)}
                    >
                      {item.modalOptions.map((option, j) => (
                        <button
                          key={j}
                          className={styles.dropdownOption}
                          onClick={() => handleModalOpen(option.type)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    className={styles.navButton}
                    onClick={() => handleModalOpen(item.type)}
                  >
                    {item.label}
                  </button>
                )
              ) : (
                <a
                  href={item.href}
                  className={`${styles.navLink} ${
                    activeHref === item.href ? styles.active : ""
                  }`}
                  onClick={(e) => handleNavigation(item.href, e)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button 
          className={`${styles.hamburger} ${isMobileOpen ? styles.open : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Menú de navegación"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${isMobileOpen ? styles.show : ""}`}
      >
        <ul className={styles.mobileList}>
          {items.map((item, i) => (
            <li key={i} className={styles.mobileItem}>
              {item.isModal ? (
                item.modalOptions ? (
                  <details>
                    <summary>{item.label}</summary>
                    <div className={styles.mobileSubmenu}>
                      {item.modalOptions.map((option, j) => (
                        <button
                          key={j}
                          className={styles.mobileOption}
                          onClick={() => {
                            handleModalOpen(option.type);
                            setIsMobileOpen(false);
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </details>
                ) : (
                  <button
                    className={styles.mobileOption}
                    onClick={() => {
                      handleModalOpen(item.type);
                      setIsMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                )
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavigation(item.href, e)}
                  className={styles.mobileLink}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
