import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import styles from "@/styles/trust-page.module.css";

export const metadata: Metadata = metadataFor(
  "legalPrivacy",
  "/legal/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className={styles.page}>
      <PageStructuredData
        seoKey="legalPrivacy"
        path="/legal/privacy-policy"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/legal/privacy-policy" },
        ]}
      />
      <article className={styles.reading}>
        <p className={styles.kicker}>Privacy and site use</p>
        <h1>hololive Dreams Privacy Policy - Player Guide</h1>
        <p className={styles.lead}>
          This policy explains how the hololive Dreams Player Guide handles routine
          website data and the privacy choices available to visitors.
        </p>
        <p className={styles.date}>Last updated: July 24, 2026</p>

        <section className={styles.section}>
          <h2>Information processed during a visit</h2>
          <p>
            This website does not provide user accounts, purchases, direct messages,
            or a contact form. A hosting provider may process technical request details
            such as an IP address, browser type, requested page, date, time, device
            information, and security events. These details support page delivery,
            abuse prevention, and service stability.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Cookies, analytics, and advertising</h2>
          <p>
            The current website does not set first-party advertising or analytics
            cookies. If those services are introduced later, this policy will be
            revised before they are enabled. Browser settings can be used to delete or
            block cookies where supported.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Embedded video</h2>
          <p>
            Song pages include privacy-enhanced YouTube video players. The player may
            process device and playback information when a visitor loads or uses it.
            Visitors can choose not to play embedded media and can manage privacy
            controls through their browser.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Retention, security, and children</h2>
          <p>
            Technical logs should be retained only as long as reasonably needed for
            security, troubleshooting, and hosting operations. No website can promise
            absolute security. This guide is intended for a general audience and does
            not knowingly request personal information from children.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Questions and policy changes</h2>
          <p>
            Material changes will appear on this page with a revised date. Privacy
            questions can be sent to {site.contactEmail}. Do not include passwords,
            payment details, account recovery codes, or private game information.
          </p>
        </section>

        <div className={styles.routeBox}>
          <h2>Related legal pages</h2>
          <Link href="/legal/terms-of-service">Read the Terms of Service</Link>
        </div>
      </article>
    </main>
  );
}
