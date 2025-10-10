import { CvModalCivilBoody } from "./CvModalCivilBoody";
import { CvModalCivilFooter } from "./CvModalCivilFooter";
import { CvModalCivilHeader } from "./CvModalCivilHeader";

export const CVModalCivilPrincipal = () => {

  
  return (
    <div className="cv-content civil-content">

     <CvModalCivilHeader/>

    <CvModalCivilBoody/>

      <CvModalCivilFooter/>
      
    </div>
  );
};
