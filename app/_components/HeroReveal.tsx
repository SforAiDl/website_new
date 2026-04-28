"use client";

import { useRef, useCallback, useState } from "react";
import styles from "./HeroReveal.module.css";

export default function HeroReveal() {
  const revealRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!revealRef.current) return;
    const rect = revealRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    revealRef.current.style.setProperty("--reveal-x", `${x}px`);
    revealRef.current.style.setProperty("--reveal-y", `${y}px`);
    if (!active) setActive(true);
  }, [active]);

  const handleMouseLeave = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <div
      ref={revealRef}
      className={styles.revealContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Muted base layer */}
      <div className={styles.gifBase} />
      {/* Vivid layer revealed by cursor */}
      <div className={`${styles.gifReveal} ${active ? styles.active : ""}`} />
    </div>
  );
}
