"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./HeroReveal.module.css";

export default function HeroReveal() {
  const revealRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!revealRef.current) return;
      const rect = revealRef.current.getBoundingClientRect();
      
      // Check if mouse is within the hero section bounds (roughly)
      // to avoid keeping it active when scrolling far down
      if (e.clientY > rect.bottom || e.clientY < rect.top) {
        if (active) setActive(false);
        return;
      }

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      revealRef.current.style.setProperty("--reveal-x", `${x}px`);
      revealRef.current.style.setProperty("--reveal-y", `${y}px`);
      
      if (!active) setActive(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [active]);

  return (
    <div ref={revealRef} className={styles.revealContainer}>
      {/* Muted base layer */}
      <div className={styles.gifBase} />
      {/* Vivid layer revealed by cursor */}
      <div className={`${styles.gifReveal} ${active ? styles.active : ""}`} />
    </div>
  );
}
