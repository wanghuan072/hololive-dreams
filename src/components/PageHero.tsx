import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  media?: ReactNode;
};

/** Split out “hololive Dreams” for gradient emphasis when title is a plain string. */
export function accentTitle(title: string) {
  const parts = title.split(/(hololive Dreams)/i);
  if (parts.length === 1) {
    return <span className={styles.titleGradient}>{title}</span>;
  }

  return parts.map((part, index) =>
    /hololive Dreams/i.test(part) ? (
      <span key={`${part}-${index}`} className={styles.brandGradient}>
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

export function PageHero({ kicker, title, lead, aside, media }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.shell}`}>
        <div className={`${styles.panel} ${media ? styles.panelWithMedia : ""}`}>
          <div className={styles.copy}>
            <p className={styles.kicker}>
              <span className={styles.cueDot} aria-hidden="true" />
              {kicker}
            </p>
            <h1 className={styles.title}>{title}</h1>
            {lead ? <div className={styles.lead}>{lead}</div> : null}
          </div>
          {aside ? <div className={styles.aside}>{aside}</div> : null}
          {media ? <div className={styles.media}>{media}</div> : null}
        </div>
      </div>
    </section>
  );
}
