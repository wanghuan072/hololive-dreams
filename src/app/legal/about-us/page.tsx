import type { Metadata } from "next";
import Link from "next/link";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import styles from "@/styles/trust-page.module.css";

export const metadata: Metadata = metadataFor(
  "legalAbout",
  "/legal/about-us",
);

export default function AboutUsPage() {
  return (
    <main id="main-content" className={styles.page}>
      <PageStructuredData
        seoKey="legalAbout"
        path="/legal/about-us"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/legal/about-us" },
        ]}
      />
      <article className={styles.reading}>
        <p className={styles.kicker}>Built around player questions</p>
        <h1>About hololive Dreams Player Guide - Site Purpose</h1>
        <p className={styles.lead}>
          This English player guide connects characters, songs, systems, updates, and
          practical routes so each page helps with a clear next decision.
        </p>

        <section className={styles.section}>
          <h2>What the website covers</h2>
          <p>
            Coverage includes the playable character roster, song list, embedded music
            videos, Rhythm Lives, Dream Park progression, team building, character
            unlocks, minigames, system requirements, and dated game updates.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How pages are written</h2>
          <p>
            Stable gameplay concepts are explained separately from details that can
            change after an update. Guides use cautious steps where device, region,
            timing, or progression can affect the result. Repeated directory-style
            text is avoided so character, song, and guide pages answer different player
            needs.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Site relationship</h2>
          <p>
            This is a player-made website and is not operated by COVER Corporation,
            hololive production, QualiArts, or a platform store. Names, artwork, music,
            video, and trademarks belong to their respective rights holders.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Corrections and upkeep</h2>
          <p>
            Pages are revised when a change affects what a player should expect or do.
            Useful feedback identifies the page, the statement in question, the game
            version or date, and the platform or region when relevant.
          </p>
        </section>

        <div className={styles.routeBox}>
          <h2>Send useful feedback</h2>
          <p>Read the contact guidance before sending account-free page feedback.</p>
          <Link href="/legal/contact-us">Open Contact Us</Link>
        </div>
      </article>
    </main>
  );
}
