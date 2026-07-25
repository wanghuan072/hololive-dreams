import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { accentTitle, PageHero } from "@/components/PageHero";
import { guides } from "@/data/guides";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import { formatDisplayDate } from "@/utils/date";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor("guides", "/guides");

const lanes = [
  { label: "Learn the full loop", ids: [1] },
  { label: "Improve every Live", ids: [2] },
];

export default function GuidesPage() {
  const guidesUpdated = guides.reduce(
    (latest, guide) =>
      guide.lastVerified > latest ? guide.lastVerified : latest,
    guides[0]?.lastVerified ?? "2026-07-25",
  );

  return (
    <main id="main-content">
      <PageStructuredData
        seoKey="guides"
        path="/guides"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ]}
        dateModified={guidesUpdated}
      />
      <PageHero
        kicker={`Two focused routes · Updated ${formatDisplayDate(guidesUpdated)}`}
        title={accentTitle("hololive Dreams Guide - Beginner Tips & Progression")}
        lead="Start with one complete progression guide, then use the rhythm guide to diagnose timing, note speed, scoring, and custom-chart problems in a controlled order."
      />

      <section className={styles.laneSection}>
        <div className="container">
          {lanes.map((lane, laneIndex) => (
            <div className={styles.guideLane} key={lane.label}>
              <div className={styles.laneLabel}>
                <span>{String(laneIndex + 1).padStart(2, "0")}</span>
                <h2>{lane.label}</h2>
              </div>
              <div className={styles.laneEntries}>
                {lane.ids.map((id) => {
                  const guide = guides.find((item) => item.id === id)!;
                  return (
                    <article key={guide.id}>
                      <Image
                        src={guide.imageUrl}
                        alt={guide.imageAlt}
                        width={240}
                        height={150}
                        sizes="(max-width: 768px) 100vw, 180px"
                      />
                      <div>
                        <p>{guide.stage} · {guide.readTime}</p>
                        <h3>
                          <Link href={`/guides/${guide.addressBar}`}>{guide.title}</Link>
                        </h3>
                        <p>{guide.summary}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.routeSection}>
        <div className={`container ${styles.routeGrid}`}>
          <div>
            <p className={styles.kicker}>Everything fits into two routes</p>
            <h2>Choose by the decision in front of you</h2>
          </div>
          <ol>
            <li><strong>Beginner route</strong><span>Quests, unlocks, teams, minigames, resources, and Dream Park</span></li>
            <li><strong>Rhythm route</strong><span>Timing, note speed, scoring, dense charts, Create Chart, and performance checks</span></li>
          </ol>
        </div>
      </section>
    </main>
  );
}
