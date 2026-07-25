import type { Metadata } from "next";
import Link from "next/link";
import { accentTitle, PageHero } from "@/components/PageHero";
import { songCatalogSummary } from "@/data/songs";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import { formatDisplayDate } from "@/utils/date";
import { SongLedger } from "./SongLedger";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor("songs", "/songs");

export default function SongsPage() {
  return (
    <main id="main-content">
      <PageStructuredData
        seoKey="songs"
        path="/songs"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Songs", path: "/songs" },
        ]}
        dateModified={songCatalogSummary.lastVerified}
      />
      <PageHero
        kicker="Dream Park jukebox · 154 playable tracks"
        title={accentTitle("hololive Dreams Songs - Full Music List & Videos")}
        lead={
          <p>
            Search every track by title, performer, lyricist, or composer. Open a song
            to watch its video, read the credits, and find nearby picks.
          </p>
        }
        aside={
          <dl>
            <div><dt>Total</dt><dd>{songCatalogSummary.total}</dd></div>
            <div><dt>Originals</dt><dd>{songCatalogSummary.originals}</dd></div>
            <div><dt>Covers</dt><dd>{songCatalogSummary.covers}</dd></div>
            <div>
              <dt>Updated</dt>
              <dd>{formatDisplayDate(songCatalogSummary.lastVerified)}</dd>
            </div>
          </dl>
        }
      />

      <section className={styles.catalogSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <p>Opening set</p>
              <h2>Search all songs</h2>
            </div>
            <p>
              Use the filters to move between originals and covers without losing your
              place in the list.
            </p>
          </div>
          <SongLedger />
          <div className={styles.officialCatalog}>
            <p>
              Each song now has its own detail page with a YouTube video, credits, and
              related tracks.
            </p>
            <p>
              New to Rhythm Lives?{" "}
              <Link href="/hololive-dreams-gameplay">Learn the four difficulties and full gameplay loop.</Link>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.catalogNotes}>
        <div className={`container ${styles.notesGrid}`}>
          <article>
            <span>01</span>
            <h2>Original and cover songs</h2>
            <p>
              The current list contains {songCatalogSummary.originals} originals and{" "}
              {songCatalogSummary.covers} covers.
            </p>
          </article>
          <article>
            <span>02</span>
            <h2>Performers and credits</h2>
            <p>
              Performer names make it easy to move from a favorite character to every
              track connected to that name.
            </p>
          </article>
          <article>
            <span>03</span>
            <h2>Charts and MVs</h2>
            <p>
              Chart behavior, difficulty data, and background presentation belong to
              current game screens rather than assumptions from the music title alone.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.nextSection}>
        <div className={`container ${styles.nextInner}`}>
          <div>
            <p className={styles.kicker}>Play and create</p>
            <h2>Turn a song lookup into a rhythm task</h2>
          </div>
          <nav aria-label="Related song guides">
            <Link href="/guides/rhythm-timing">Rhythm timing and note speed</Link>
            <Link href="/guides/rhythm-timing">Create Chart and custom charts</Link>
            <Link href="/updates">Launch song additions</Link>
            <Link href="/characters">Browse playable characters</Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
