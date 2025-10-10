// Hooks/hooksCustom/Index/Header/usePillNavLogic.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const usePillNavLogic = ({ items, ease, initialLoadAnimation, baseColor, pillColor, hoveredPillTextColor, pillTextColor, onMobileMenuClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const resolvedPillTextColor = pillTextColor ?? baseColor;

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");
        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener("resize", layout);
    document.fonts?.ready?.then(layout).catch(() => {});

    const menu = mobileMenuRef.current;
    if (menu) gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1 });

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;
      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, { scale: 1, duration: 0.6, ease });
      }
      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, { width: "auto", duration: 0.6, ease });
      }
    }

    return () => {
      window.removeEventListener("resize", layout);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: "auto" });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, { rotate: 360, duration: 0.2, ease, overwrite: "auto" });
  };

  const handleDropdownEnter = (i) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(`desktop-${i}`);
    handleEnter(i);
  };

  const handleDropdownLeave = (i) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      handleLeave(i);
    }, 150);
  };

  const handleSubmenuEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleSubmenuLeave = (i) => {
    setActiveDropdown(null);
    handleLeave(i);
  };

  const handleNavigation = (href, e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setOpenSubmenu(null);
    }
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      gsap.to(lines[0], { rotation: newState ? 45 : 0, y: newState ? 3 : 0, duration: 0.3, ease });
      gsap.to(lines[1], { rotation: newState ? -45 : 0, y: newState ? -3 : 0, duration: 0.3, ease });
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          onComplete: () => gsap.set(menu, { visibility: "hidden" }),
        });
      }
    }

    onMobileMenuClick?.();
  };

  return {
    isMobileMenuOpen,
    openSubmenu,
    activeDropdown,
    setIsMobileMenuOpen,
    setOpenSubmenu,
    setActiveDropdown,
    handleEnter,
    handleLeave,
    handleLogoEnter,
    handleDropdownEnter,
    handleDropdownLeave,
    handleSubmenuEnter,
    handleSubmenuLeave,
    handleNavigation,
    toggleMobileMenu,
    circleRefs,
    logoImgRef,
    logoRef,
    navItemsRef,
    hamburgerRef,
    mobileMenuRef,
    resolvedPillTextColor,
  };
};
