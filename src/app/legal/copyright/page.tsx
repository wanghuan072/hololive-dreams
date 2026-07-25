import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import styles from "@/styles/trust-page.module.css";

export const metadata: Metadata = metadataFor(
  "legalCopyright",
  "/legal/copyright",
);

export default function CopyrightPage() {
  return (
    <main id="main-content" className={styles.page}>
      <PageStructuredData
        seoKey="legalCopyright"
        path="/legal/copyright"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Copyright", path: "/legal/copyright" },
        ]}
      />
      <article className={styles.reading}>
        <p className={styles.kicker}>Rights and permitted use</p>
        <h1>hololive Dreams Copyright - Rights &amp; Usage Guide</h1>
        <p className={styles.lead}>
          This notice explains the boundary between this website&apos;s written work and
          the game, character, music, artwork, video, and trademark rights held by
          others.
        </p>
        <p className={styles.date}>Last updated: July 24, 2026</p>

        <section className={styles.section}>
          <h2>Website text and layout</h2>
          <p>
            The original explanations, page organization, navigation, and player tips
            created for this website are protected where applicable. Short quotations
            may be used where permitted by law, but substantial republication,
            automated copying, or resale requires prior permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Game, character, music, and media rights</h2>
          <p>
            hololive Dreams, hololive production, character names, game artwork,
            screenshots, music, videos, logos, and related marks remain the property of
            COVER Corporation, QualiArts, their creators, or other applicable rights
            holders. Their appearance on this player guide does not transfer ownership
            or imply endorsement.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Requests concerning protected material</h2>
          <p>
            A rights-related request should identify the exact page, the material at
            issue, the nature of the concern, and a reliable way to reply. Send the
            request to {site.contactEmail}. Do not include passwords, payment details,
            or unrelated private information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Trademarks and no implied permission</h2>
          <p>
            Product and character names are used to identify the subject of the guide.
            Their use does not grant visitors permission to reproduce logos, artwork,
            music, video, or other protected material.
          </p>
        </section>

        <div className={styles.routeBox}>
          <h2>Contact</h2>
          <Link href="/legal/contact-us">Read the contact guidance</Link>
        </div>
        <p className={styles.date}>
          Copyright © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </article>
    </main>
  );
}
