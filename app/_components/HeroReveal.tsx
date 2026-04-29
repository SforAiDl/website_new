"use client";

import styles from "./HeroReveal.module.css";

export default function HeroReveal() {
  return (
    <div className={styles.revealContainer}>
      {/* Muted base layer */}
      <div className={styles.gifBase} />
    </div>
  );
}
