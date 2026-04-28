"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import styles from "./SpotlightHero.module.css";

interface SpotlightHeroProps {
  children: React.ReactNode;
}

export default function SpotlightHero({ children }: SpotlightHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--spot-x", `${x}px`);
    containerRef.current.style.setProperty("--spot-y", `${y}px`);
    if (!isActive) setIsActive(true);
  }, [isActive]);

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.spotlightContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.spotlightLayer} ${isActive ? styles.active : ""}`} />
      {children}
    </div>
  );
}
