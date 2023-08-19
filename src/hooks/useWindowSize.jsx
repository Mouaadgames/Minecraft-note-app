import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  function setTheState() { setWindowSize({ width: window.innerWidth, height: window.innerHeight }) }
  useEffect(() => {
    window.addEventListener("resize", setTheState)
    return () => {
      window.removeEventListener("resize", setTheState)
    };
  }, []);
  return windowSize
}
export default useWindowSize