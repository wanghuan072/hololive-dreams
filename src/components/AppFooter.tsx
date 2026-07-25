import Link from "next/link";
import Image from "next/image";
import { footerNavigation, site } from "@/data/site";
import styles from "./AppFooter.module.css";

export function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.statement}>
          <Image src={site.defaultLogo} alt={`${site.name} logo`} width={112} height={112} />
          <p className={styles.name}>{site.name}</p>
          <p>
            Explore characters, songs, systems, updates, and practical routes through
            Dream Park from a player&apos;s point of view.
          </p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} rel={link.rel}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <p className={styles.copyright}>
        Copyright © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
