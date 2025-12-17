import { useEffect, useState } from "react";
import "../loader.css";

const Loader = ({ onComplete }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${hide ? "hide" : ""}`}>
      {/* Horizontal straps */}
      <div className="strap strap-left">
        <span>ENTERING PORTFOLIO</span>
      </div>

      <div className="strap strap-right">
        <span>CRAFTED BY SWAGAT</span>
      </div>

      {/* Vertical lines */}
      <div className="line line-top" />
      <div className="line line-bottom" />
    </div>
  );
};

export default Loader;
