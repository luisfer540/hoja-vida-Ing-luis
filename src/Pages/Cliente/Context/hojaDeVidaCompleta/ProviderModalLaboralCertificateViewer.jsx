
import PropTypes from "prop-types"; 
import { ContextExperienciaLaboral } from "./ContextExperienciaLaboral";

import { useCustomExperienciaLaboral } from "../../Hooks/hooksCustom/HojaDevidaCompleta/useCustomExperienciaLaboral";

export const ProviderExperienciaLaboral = ({children}) => {
   const formMethods = useCustomExperienciaLaboral();
  
    return (
      <ContextExperienciaLaboral.Provider value={formMethods}>
        {children}
      </ContextExperienciaLaboral.Provider>
    )
  }
  
  
  ContextExperienciaLaboral.Provider.propTypes = {
      children: PropTypes.node.isRequired
  }


