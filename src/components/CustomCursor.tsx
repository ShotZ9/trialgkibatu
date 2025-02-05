"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|iphone|ipad|ipod|windows phone|mobile/i.test(userAgent) || window.innerWidth < 768;
    };

    setIsMobile(checkIsMobile());

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const hoverElements = document.querySelectorAll("a, button, .cursor-hover");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-12 h-12 bg-white mix-blend-difference rounded-full pointer-events-none transition-transform duration-200 ease-out z-[9999] ${isHovering ? "scale-150 opacity-80" : "scale-100 opacity-100"
        }`}
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
      }}
    />
  );
};

export default CustomCursor;
