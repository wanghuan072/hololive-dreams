import type { Metadata } from "next";
import { site } from "@/data/site";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import styles from "@/styles/trust-page.module.css";

export const metadata: Metadata = metadataFor(
  "legalContact",
  "/legal/contact-us",
);

export default function ContactUsPage() {
  return (
    <main id="main-content" className={styles.page}>
      <PageStructuredData
        seoKey="legalContact"
        path="/legal/contact-us"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/legal/contact-us" },
        ]}
      />
      <article className={styles.reading}>
        <p className={styles.kicker}>Corrections and site feedback</p>
        <h1>Contact hololive Dreams Player Guide - Feedback</h1>
        <p className={styles.lead}>
          Contact this website about page corrections, accessibility concerns,
          copyright questions, or suggestions that would help other players.
        </p>

        <section className={styles.section}>
          <h2>Email</h2>
          <p>The contact email is {site.contactEmail}.</p>
          <p>
            This address is for website matters only. It cannot assist with game
            accounts, purchases, bans, refunds, service incidents, or platform access.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What to include</h2>
          <ul>
            <li>the page address and heading where the issue appears;</li>
            <li>the exact statement, field, image, or interaction involved;</li>
            <li>what you expected and what happened instead;</li>
            <li>the game version, date, platform, and region when relevant;</li>
            <li>a short explanation of the requested correction or improvement.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>What not to send</h2>
          <p>
            Do not send passwords, login codes, payment information, identity
            documents, private account details, or files obtained from the game. Use
            the help tools provided inside the game or platform for account and
            purchase matters.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Accessibility and rights questions</h2>
          <p>
            Accessibility feedback should describe the device, browser, page, and
            blocked task. Copyright messages should identify the exact material and the
            rights concern. Clear, focused messages are easier to review.
          </p>
        </section>
      </article>
    </main>
  );
}
