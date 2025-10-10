
import PropTypes from "prop-types"; 
import { useCustomEstudios } from "../../Hooks/hooksCustom/HojaDevidaCompleta/useCustomEstudios";
import { ContexEstudios } from "./ContexEstudios";



export const ProviderEstudios = ({children}) => {
   const formMethods = useCustomEstudios();
  
    return (
      <ContexEstudios.Provider value={formMethods}>
        {children}
      </ContexEstudios.Provider>
    )
  }
  
  
  ContexEstudios.Provider.propTypes = {
      children: PropTypes.node.isRequired
  }


