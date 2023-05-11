import { useEffect } from "react";

const ScrollBlocker = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    document.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default ScrollBlocker;
