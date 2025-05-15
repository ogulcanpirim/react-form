import { useEffect, useRef } from "react";

const useRenderCount = () => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  return renderCount.current;
};
export default useRenderCount;
