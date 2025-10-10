import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

export const useElectricBorder = ({ as = "div", children, className, color, pathLength = 1000, strokeWidth = 2, ...props }) => {
  const id = useId();
  const rootRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLengthValue, setPathLengthValue] = useState(0);
  const [rootDimensions, setRootDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setRootDimensions({ width, height });
    });

    resizeObserver.observe(rootRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!pathRef.current) return;
    setPathLengthValue(pathRef.current.getTotalLength());
  }, [rootDimensions]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getPath = () => {
    const { width, height } = rootDimensions;
    if (width === 0 || height === 0) return "";

    const w = Math.round(width);
    const h = Math.round(height);
    const x1 = 1;
    const y1 = 1;
    const x2 = w - 1;
    const y2 = h - 1;

    return `M${x1},${y1} L${x2},${y1} L${x2},${y2} L${x1},${y2} L${x1},${y1}`;
  };

  return {
    id,
    rootRef,
    pathRef,
    pathLengthValue,
    isHovering,
    handleMouseEnter,
    handleMouseLeave,
    getPath
  };
};
