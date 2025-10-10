import { useState } from "react"


export const useCvModalSoftwareHeader = () => {
    const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(prev => !prev);

  return {
    expanded,
    toggleExpanded
  }
}
