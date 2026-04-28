"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/people", label: "people" },
  { href: "/publications", label: "publications" },
  { href: "/outreach", label: "outreach" },
];

export default function Header() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      <header className={styles.header} id="site-header">
        <div className={styles.logo}>
          <Link href="/">
            <img src="/assets/logo_dark.png" alt="SAiDL Logo" />
            <span>SAiDL</span>
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${sidebarOpen ? styles.active : ""}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Menu"
          id="hamburger-button"
        >
          <span />
          <span />
        </button>

        <nav
          className={`${styles.nav} ${sidebarOpen ? styles.navActive : ""}`}
          id="nav-menu"
        >
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? styles.current : ""}
                onClick={() => setSidebarOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
      </header>

      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.overlayActive : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
    </>
  );
}
