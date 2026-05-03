import Link from "next/link";
import styles from "./not-found.module.css";
import FadeIn from "./_components/FadeIn";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <FadeIn>
        <div className={styles.content}>
          <div className={styles.glitchWrapper}>
            <h1 className={styles.errorCode} data-text="404">404</h1>
          </div>
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.description}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className={styles.button}>
            Return Home
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
