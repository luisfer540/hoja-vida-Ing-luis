
import { ExperienciaLaboralSoftware } from "../ExperiencialaboralSoftware/ExperienciaLaboralSoftware";
import { CvModalSoftwareBoody } from "./CvModalSoftwareBoody";
import { CvModalSoftwareFooter } from "./CvModalSoftwareFooter";
import { CvModalSoftwareHeader } from "./CvModalSoftwareHeader";

export const CvModalSoftwarePrincipal = () => {
  return (
    <div className="cv-content software-content">

      <CvModalSoftwareHeader />

      <CvModalSoftwareBoody />

      <CvModalSoftwareFooter />

      <ExperienciaLaboralSoftware />

      


    </div>
  );
};
