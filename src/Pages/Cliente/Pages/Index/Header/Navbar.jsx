import { PillNav } from './PillNav';
import { CVModal } from './CVModal';
import { TransparentNav } from './TransparentNav';
import { useTransparentNav } from '../../../Hooks/hooksCustom/Index/Header/useTransparentNav';



export const Navbar = () => {
const { logo, logoAlt, items, activeHref, setActiveHref } = useTransparentNav();

  return (
    <>
      <TransparentNav
        logo={logo}
        logoAlt={logoAlt}
        items={items}
        activeHref={activeHref}
        setActiveHref={setActiveHref}
       // onModalOpen={handleModalOpen}
      />
      <CVModal/>
    
    </>
  );
};
