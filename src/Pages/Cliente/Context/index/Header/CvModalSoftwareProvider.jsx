
import { useCvModalSoftwareHeader } from "../../../Hooks/hooksCustom/Index/Header/useCvModalSoftwareHeader";
import { CvModalSoftwareContext } from "./CvModalSoftwareContext";
import PropTypes from "prop-types";


export const CvModalSoftwareProvider = ({ children }) => {

    const formMethods = useCvModalSoftwareHeader();

  return (
    <CvModalSoftwareContext.Provider value={formMethods}>
      {children}
    </CvModalSoftwareContext.Provider>
  )
}


CvModalSoftwareContext.Provider.propTypes = {
    children: PropTypes.node.isRequired
}