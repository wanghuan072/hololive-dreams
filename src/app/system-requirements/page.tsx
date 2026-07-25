import type { Metadata } from "next";
import Link from "next/link";
import { accentTitle, PageHero } from "@/components/PageHero";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor("requirements", "/system-requirements");

const specs = [
  ["OS", "Windows 11 64-bit", "Windows 11 64-bit"],
  ["Processor", "AMD Ryzen 3 2200G / Intel Core i3-8100", "AMD Ryzen 5 3500 / Intel Core i5-9400"],
  ["Memory", "8 GB RAM", "8 GB RAM"],
  ["Graphics", "Radeon RX 470 / GeForce GTX 970", "Radeon RX 580 / GeForce GTX 1060"],
  ["Storage", "50 GB available space", "50 GB available space"],
];

export default function RequirementsPage() {
  return (
    <main id="main-content">
      <PageStructuredData
        seoKey="requirements"
        path="/system-requirements"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Requirements", path: "/system-requirements" },
        ]}
        dateModified="2026-07-24"
      />
      <PageHero
        kicker="Compatibility sheet · Updated July 24, 2026"
        title={accentTitle("hololive Dreams Requirements - PC & Mobile Guide")}
        lead="Compare your PC with the current Windows requirements, reserve download headroom, and let your mobile store determine device compatibility. Steam Deck and Linux are not covered here."
      />

      <section className={styles.specSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Windows PC</p>
            <h2>Minimum and recommended specifications</h2>
          </div>
          <div className={styles.tableWrap} tabIndex={0} aria-label="Scrollable PC requirements table">
            <table>
              <thead>
                <tr><th scope="col">Field</th><th scope="col">Minimum</th><th scope="col">Recommended</th></tr>
              </thead>
              <tbody>
                {specs.map(([field, minimum, recommended]) => (
                  <tr key={field}>
                    <th scope="row">{field}</th>
                    <td>{minimum}</td>
                    <td>{recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.sourceNote}>
            Requirements can change with game updates, so leave extra storage and
            retest after major patches.
          </p>
        </div>
      </section>

      <section className={styles.mobileSection}>
        <div className={`container ${styles.mobileGrid}`}>
          <div>
            <p className={styles.kicker}>iOS and Android</p>
            <h2>Use the live store compatibility check</h2>
          </div>
          <div>
            <p>
              The English App Store listing reviewed on July 24 requires iOS 16.0 or
              later on iPhone and iPadOS 16.0 or later on iPad. Google Play provides a
              live compatibility decision for the signed-in Android device. Model,
              region, and availability can still change after launch.
            </p>
            <Link href="/guides/rhythm-timing">Review device performance steps</Link>
          </div>
        </div>
      </section>

      <section className={styles.notesSection}>
        <div className={`container ${styles.notesGrid}`}>
          <article>
            <span>01</span>
            <h2>Storage planning</h2>
            <p>
              Steam lists 50 GB of available space. Keep additional room for temporary
              download files and later updates rather than filling the drive exactly.
            </p>
          </article>
          <article>
            <span>02</span>
            <h2>Protection component and antivirus</h2>
            <p>
              Steam notes that a security protection component can trigger false
              positives. Use Steam’s repair tools and your antivirus vendor’s
              documented controls; do not download replacement game files elsewhere.
            </p>
          </article>
          <article>
            <span>03</span>
            <h2>Performance checklist</h2>
            <p>
              If the device meets the listing but performance is poor, identify the
              exact scene, close competing workloads, and change one graphics option at
              a time.
            </p>
            <Link href="/guides/rhythm-timing">Open performance checks</Link>
          </article>
        </div>
      </section>

      <section className={styles.helpRoute}>
        <div className={`container ${styles.helpInner}`}>
          <p>Still unsure whether the problem is storage, loading, or input?</p>
          <Link href="/guides/rhythm-timing">Choose a safe troubleshooting route</Link>
        </div>
      </section>
    </main>
  );
}
