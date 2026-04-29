import styles from "./Footer.module.css";

const SOCIAL_LINKS = [
  { href: "https://github.com/SforAiDl", icon: "/assets/github_dark.png", alt: "GitHub" },
  { href: "https://x.com/SforAiDL", icon: "/assets/twitter_dark.png", alt: "Twitter" },
  { href: "https://www.youtube.com/channel/UCU5Pl1RJvrfwegSciyNdH5Q", icon: "/assets/youtube_dark.png", alt: "YouTube" },
  { href: "https://www.linkedin.com/company/sforaidl/", icon: "/assets/linkedin_dark.png", alt: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.icons}>
        {SOCIAL_LINKS.map((link) => (
          <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.alt} />
          </a>
        ))}
      </div>
      <div className={styles.copy}>&copy; 2026 Society for Artificial Intelligence and Deep Learning</div>
    </footer>
  );
}
