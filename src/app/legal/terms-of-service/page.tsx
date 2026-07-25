import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import styles from "@/styles/trust-page.module.css";

export const metadata: Metadata = metadataFor(
  "legalTerms",
  "/legal/terms-of-service",
);

export default function TermsOfServicePage() {
  return (
    <main id="main-content" className={styles.page}>
      <PageStructuredData
        seoKey="legalTerms"
        path="/legal/terms-of-service"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/legal/terms-of-service" },
        ]}
      />
      <article className={styles.reading}>
        <p className={styles.kicker}>Rules for using this website</p>
        <h1>hololive Dreams Terms of Service - Player Guide</h1>
        <p className={styles.lead}>
          These terms describe the permitted use of the hololive Dreams Player Guide
          and the limits that apply to its gameplay information.
        </p>
        <p className={styles.date}>Last updated: July 24, 2026</p>

        <section className={styles.section}>
          <h2>Acceptance and website purpose</h2>
          <p>
            By using this website, you agree to these terms. The website provides
            player-focused information about characters, songs, game systems, updates,
            and practical play routes. It does not provide game accounts, purchases,
            customer service, or access to the game itself.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Accuracy and changing game information</h2>
          <p>
            Live-service games change through updates, regional availability, store
            decisions, and balance adjustments. Reasonable care is used when preparing
            these pages, but no page guarantees that every value, feature, or route
            will remain unchanged. Check the current game screen before making account,
            purchase, or security decisions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Acceptable use</h2>
          <ul>
            <li>Use the website for lawful personal reading and navigation.</li>
            <li>Do not disrupt the service or attempt to bypass security controls.</li>
            <li>Do not impersonate the game operator, publisher, or another person.</li>
            <li>Do not submit passwords, payment data, or private account details.</li>
            <li>Do not reuse protected media in a way that suggests ownership.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Intellectual property and availability</h2>
          <p>
            Site-written text and layout are protected as applicable. Game names,
            character names, artwork, music, screenshots, video, and trademarks remain
            with their respective rights holders. Website access may be changed,
            limited, or discontinued without guaranteeing uninterrupted availability.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Liability and contact</h2>
          <p>
            Use the information at your own discretion. To the extent permitted by
            applicable law, the website is not responsible for losses caused by game
            changes, store availability, device issues, account actions, or reliance
            on outdated details. Contact this website at {site.contactEmail}.
          </p>
        </section>

        <div className={styles.routeBox}>
          <h2>Privacy</h2>
          <Link href="/legal/privacy-policy">Read the Privacy Policy</Link>
        </div>
      </article>
    </main>
  );
}
