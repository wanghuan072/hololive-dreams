import type { Metadata } from "next";
import Link from "next/link";
import { accentTitle, PageHero } from "@/components/PageHero";
import { updates } from "@/data/updates";
import { metadataFor, pageSeo } from "@/seo/pageSeo";
import { JsonLd, updatesPageSchema } from "@/seo/structuredData";
import { formatDisplayDate } from "@/utils/date";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor("updates", "/updates");

export default function UpdatesPage() {
  const latestUpdate = updates[0]?.date ?? "2026-07-25";
  const schema = updatesPageSchema({
    path: "/updates",
    title: pageSeo.updates.title,
    description: pageSeo.updates.description,
    dateModified: latestUpdate,
    updates,
  });

  return (
    <main id="main-content">
      <JsonLd data={schema} />
      <PageHero
        kicker="Launch timeline · what changed"
        title={accentTitle("hololive Dreams Updates - Release Date & New Songs")}
        lead="hololive Dreams opened mobile service on July 23, 2026 JST, while Steam can display July 22 by region. Use this timeline for launch timing, platform availability, and player-facing changes."
      />

      <section className={styles.releaseSection}>
        <div className={`container ${styles.releaseGrid}`}>
          <div className={styles.releaseDate}>
            <span>Mobile service date</span>
            <strong>23</strong>
            <p>July · 2026 · JST</p>
          </div>
          <div className={styles.releaseAnswer}>
            <p className={styles.kicker}>Quick answer</p>
            <h2>When did hololive Dreams launch?</h2>
            <p>
              Mobile service began Thursday, July 23, 2026 JST. Steam lists July 22,
              which reflects regional store timing. Platform availability can still
              differ by country, device, and storefront.
            </p>
            <dl>
              <div><dt>Status</dt><dd>Live</dd></div>
              <div><dt>Platforms</dt><dd>Steam · iOS · Android</dd></div>
              <div><dt>Price</dt><dd>Free to play</dd></div>
              <div><dt>Launch roster</dt><dd>54 playable characters</dd></div>
              <div><dt>Updated</dt><dd>{formatDisplayDate(latestUpdate)}</dd></div>
            </dl>
            <div className={styles.releaseLinks}>
              <Link href="/guides/getting-started">Start the first-hour guide</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.launchCampaign}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Launch package</p>
            <h2>What arrived with the service launch</h2>
          </div>
          <div className={styles.campaignLedger}>
            <article>
              <span>01</span>
              <h3>Favorite highest-rarity choice</h3>
              <p>
                Players can choose one favorite talent at the highest rarity when
                starting the game.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Pre-registration gifts</h3>
              <p>
                The launch package followed the 1.5 million pre-registration milestone
                and included currencies, tickets, Memories, and accessories. Claim
                periods remain controlled by in-game notices.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>25 songs in 15 days</h3>
              <p>
                The Extra Song Campaign added 25 songs across 15 days, so the current
                total can keep growing after launch.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Recent changes</p>
            <h2>Launch timeline</h2>
          </div>
          <ol className={styles.timeline}>
            {updates.map((update) => (
              <li key={update.id}>
                <time dateTime={update.date}>{update.date}</time>
                <div>
                  <p>{update.label}</p>
                  <h2>{update.title}</h2>
                  <p>{update.detail}</p>
                  <ul aria-label="Affected sections">
                    {update.affects.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.watchSection}>
        <div className={`container ${styles.watchGrid}`}>
          <article>
            <span>Music</span>
            <h2>Song additions</h2>
            <p>
              The launch campaign adds 25 songs across 15 days, so the catalog count
              can change while new tracks continue to arrive.
            </p>
            <Link href="/songs">See the song catalog</Link>
          </article>
          <article>
            <span>Operations</span>
            <h2>System and platform notices</h2>
            <p>
              Availability, requirements, and service incidents can change. Start with
              low-risk troubleshooting and avoid copying a workaround you do not
              understand.
            </p>
            <Link href="/guides/rhythm-timing">Open performance guidance</Link>
          </article>
          <article>
            <span>Player route</span>
            <h2>Gameplay and mode guide</h2>
            <p>
              See how Rhythm Lives, four chart difficulties, quests, Dream Park,
              team growth, custom charts, and minigames connect.
            </p>
            <Link href="/hololive-dreams-gameplay">Learn how the game works</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
