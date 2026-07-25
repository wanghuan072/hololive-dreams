import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { guides } from "@/data/guides";
import { holomems } from "@/data/holomems";
import { songCatalogSummary, songs } from "@/data/songs";
import { systems } from "@/data/systems";
import { metadataFor } from "@/seo/pageSeo";
import {
  faqPageSchema,
  JsonLd,
  PageStructuredData,
} from "@/seo/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor("home", "/");

const tasks = [
  { number: "01", label: "Start your first hour", href: "/guides/getting-started", note: "Opening route" },
  { number: "02", label: "Browse the full wiki", href: "/wiki", note: "Facts & systems" },
  { number: "03", label: "Meet the characters", href: "/characters", note: "54 playable members" },
  { number: "04", label: "Check recent changes", href: "/updates", note: "Launch and song updates" },
];

const quickLinks = [
  { label: "Characters", href: "/characters", note: "54" },
  { label: "Songs", href: "/songs", note: String(songCatalogSummary.total) },
  { label: "Guides", href: "/guides", note: String(guides.length) },
  { label: "Systems", href: "/wiki/systems", note: String(systems.length) },
  { label: "Updates", href: "/updates", note: "Live" },
  { label: "First hour", href: "/guides/getting-started", note: "Start" },
];

const homeFaqs = [
  {
    question: "Is hololive Dreams free to play?",
    answer:
      "Yes. The game is free to play with in-app purchases and is available on PC, iOS, and Android.",
  },
  {
    question: "How many characters are playable?",
    answer:
      "There are 54 named playable characters in the current roster, with profile pages grouped by Japan, Indonesia, and English branches.",
  },
  {
    question: "How many songs are available?",
    answer:
      "The current catalog contains 154 tracks. The total can change when the game adds or rotates music.",
  },
  {
    question: "Where should a new player start?",
    answer:
      "Set a stable rhythm baseline, follow the opening quest route, and learn the Dream Park loop before optimizing teams or board paths.",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <PageStructuredData
        seoKey="home"
        path="/"
        breadcrumb={[{ name: "Home", path: "/" }]}
      />
      <JsonLd data={faqPageSchema(homeFaqs, "/")} />
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/hero/hololive-dreams-key-visual-mobile.webp"
            />
            <Image
              src="/images/hero/hololive-dreams-key-visual-1280.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </picture>
        </div>
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={styles.heroLights} aria-hidden="true" />
        <div className={`container ${styles.heroShell}`}>
          <div className={styles.heroPanel}>
            <p className={styles.stageCue}>
              <span>Live</span>
              <span className={styles.cueDot} aria-hidden="true" />
              <span>Dream Park</span>
            </p>
            <h1 className={styles.brandLockup}>
              <span className={styles.brandHololive}>hololive </span>
              <span className={styles.brandDreams}>Dreams </span>
              <span className={styles.heroTitle}>
                Complete Player Guide <span className={styles.titleAccent}>&amp; Wiki</span>
              </span>
            </h1>
            <p className={styles.heroLead}>
              Roster, songs, systems, and first-hour routes — one English hub built
              around the questions players ask next.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href="/guides/getting-started">
                Start the first-hour guide
              </Link>
              <Link className={styles.secondaryAction} href="/wiki">
                Open the wiki
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.stageFloor} aria-hidden="true" />
      </section>

      <section className={styles.answerSection}>
        <div className={`container ${styles.answerGrid}`}>
          <div className={styles.sectionIndex}>
            <span>Scene 01</span>
            <strong>What hololive Dreams is</strong>
          </div>
          <div className={styles.answerCopy}>
            <h2>A rhythm game and RPG connected through Dream Park</h2>
            <p>
              Rhythm Lives feed into quests, character invitations, park development,
              team building, and the Holomem Board. Mobile service opened on July 23,
              2026 JST, while Steam can display July 22 because of regional timing.
            </p>
            <dl className={styles.factLedger}>
              <div>
                <dt>Playable roster</dt>
                <dd>54 characters</dd>
              </div>
              <div>
                <dt>Song list</dt>
                <dd>{songCatalogSummary.total} tracks</dd>
              </div>
              <div>
                <dt>Platforms</dt>
                <dd>PC · iOS · Android</dd>
              </div>
            </dl>
            <div className={styles.quickFind} aria-label="Quick page finder">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.quickChip}>
                  <strong>{link.label}</strong>
                  <span>{link.note}</span>
                </Link>
              ))}
            </div>
            <div className={styles.answerLinks}>
              <Link href="/wiki/systems">See how the systems connect</Link>
              <Link href="/guides/getting-started">Plan your first hour</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.switchboardSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Task switchboard</p>
            <h2>Choose your next move</h2>
          </div>
          <div className={styles.switchboard}>
            {tasks.map((task) => (
              <Link href={task.href} key={task.href} className={styles.taskRow}>
                <span className={styles.taskNumber}>{task.number}</span>
                <strong>{task.label}</strong>
                <small>{task.note}</small>
                <span className={styles.taskArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.rosterSection}>
        <div className={`container ${styles.rosterLayout}`}>
          <div className={styles.rosterCopy}>
            <p className={styles.eyebrow}>Passport gallery · 54/54</p>
            <h2>Meet every playable character</h2>
            <p>
              Search the full cast by name, branch, or generation, then open a profile
              for background details, game context, and songs.
            </p>
            <Link href="/characters">Browse all 54 characters</Link>
          </div>
          <div className={styles.rosterStrip} aria-label="Playable character preview">
            {holomems.slice(0, 12).map((holomem) => (
              <Link
                key={holomem.id}
                href={`/characters/${holomem.slug}`}
                className={styles.rosterCard}
              >
                <Image
                  src={holomem.imageUrl}
                  alt={holomem.imageAlt}
                  width={224}
                  height={316}
                  sizes="(max-width: 768px) 30vw, 140px"
                />
                <span className={styles.rosterNo}>
                  No.{String(holomem.id).padStart(2, "0")}
                </span>
                <span className={styles.rosterName}>{holomem.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.songPreviewSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Jukebox stage</p>
            <h2>Spin through the song list</h2>
          </div>
          <div className={styles.songPreviewGrid} aria-label="Song catalog preview">
            {songs.slice(0, 12).map((song) => (
              <Link
                key={song.id}
                href={`/songs/${song.slug}`}
                className={styles.songPreviewCard}
              >
                <Image
                  src={song.imageUrl}
                  alt={song.imageAlt}
                  width={160}
                  height={160}
                  sizes="(max-width: 768px) 28vw, 120px"
                />
                <span>#{String(song.id).padStart(3, "0")}</span>
                <strong>{song.title}</strong>
              </Link>
            ))}
          </div>
          <Link className={styles.railLink} href="/songs">
            Browse all {songCatalogSummary.total} songs
          </Link>
        </div>
      </section>

      <section className={styles.systemSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Progression score</p>
            <h2>How Dream Park progression connects</h2>
          </div>
          <ol className={styles.systemRail}>
            {systems.slice(0, 4).map((system, index) => (
              <li key={system.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{system.title}</h3>
                  <p>{system.short}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link className={styles.railLink} href="/wiki/systems">
            Read the full systems explanation
          </Link>
        </div>
      </section>

      <section className={styles.guideSection}>
        <div className={`container ${styles.guideLayout}`}>
          <div className={styles.guideIntro}>
            <p className={styles.eyebrow}>Two complete routes</p>
            <h2>Start smart, then go deeper</h2>
            <p>
              Pick the task that matches the screen or decision in front of you.
              Tips stay focused on the decision in front of you, with clear reminders
              when an update may change the best route.
            </p>
            <Link href="/guides">View every guide</Link>
          </div>
          <ol className={styles.guideList}>
            {guides.map((guide, index) => (
              <li key={guide.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <Link href={`/guides/${guide.addressBar}`}>{guide.title}</Link>
                  <small>
                    {guide.stage} · {guide.readTime}
                  </small>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <p className={styles.eyebrow}>Quick answers</p>
            <h2>Launch questions, routed carefully</h2>
            <p>
              Counts and availability are dated because the launch catalog and store
              details can change.
            </p>
          </div>
          <div className={styles.faqList}>
            {homeFaqs.map((faq, index) => (
              <article key={faq.question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={`container ${styles.trustInner}`}>
          <p>Built for players who want a clear route through Dream Park</p>
          <div>
            <Link href="/legal/about-us">About this site</Link>
            <Link href="/legal/contact-us">Send site feedback</Link>
            <Link href="/updates">See dated updates</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
