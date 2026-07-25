"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigation, site } from "@/data/site";
import styles from "./AppHeader.module.css";

export function AppHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href="/" aria-label="hololive Dreams Player Guide home">
          <Image
            className={styles.brandMark}
            src={site.defaultLogo}
            alt=""
            width={54}
            height={54}
            priority
          />
          <span>
            <strong>hololive Dreams</strong>
            <small>player guide</small>
          </span>
        </Link>
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
          <span>{open ? "Close" : "Menu"}</span>
        </button>
        <nav
          id="primary-navigation"
          className={`${styles.navigation} ${open ? styles.navigationOpen : ""}`}
          aria-label="Primary navigation"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={isCurrent(item.href) ? styles.current : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
