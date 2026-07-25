import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import { formatDisplayDate } from "@/utils/date";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor("wiki", "/wiki");

const gameLoop = [
  {
    number: "01",
    title: "Play a Rhythm Live",
    body: "Pick a song and a comfortable difficulty. Clean timing matters more than forcing a chart that breaks your combo.",
  },
  {
    number: "02",
    title: "Follow the next quest",
    body: "Quests give the park a direction. Use them to learn which activity, character, or facility the game wants you to meet next.",
  },
  {
    number: "03",
    title: "Grow Dream Park",
    body: "New facilities turn the island into a useful hub. Check what each unlock changes before spending everything at once.",
  },
  {
    number: "04",
    title: "Strengthen the team",
    body: "Choose a Leader, arrange the lineup, and use board nodes to solve a real weakness instead of chasing every upgrade.",
  },
  {
    number: "05",
    title: "Return with a purpose",
    body: "Go back to Lives with a clearer goal: a quest, a score target, a character objective, or simply a song you enjoy.",
  },
];

const fieldNotes = [
  {
    term: "Character",
    note: "A member of the playable cast. Being playable does not automatically tell you how their Leader, cards, outfits, or unlock path work.",
  },
  {
    term: "Leader",
    note: "The anchor of a team. Start with the effect you can actually use, then build the rest of the lineup around it.",
  },
  {
    term: "Invitation",
    note: "A progression step tied to meeting more characters. Follow the game’s current quest prompts before assuming one universal route.",
  },
  {
    term: "Holomem Board",
    note: "The character-growth layer. Skill Nodes and Connect Nodes are choices, so spend toward a goal rather than clearing tiles blindly.",
  },
  {
    term: "Rhythm Live",
    note: "The main performance mode. Note speed, timing comfort, chart familiarity, and a stable frame rate all affect how a chart feels.",
  },
  {
    term: "Create Chart",
    note: "A creative mode for building custom note patterns. Make the rhythm readable first; spectacle only works when the chart still feels fair.",
  },
];

const firstSession = [
  "Choose a favorite you want to keep seeing. Early motivation is more useful than an imaginary perfect pick.",
  "Set note speed and timing so the lane is readable. Change one setting at a time and replay the same easy song.",
  "Let quests introduce the park. They are the cleanest way to learn why Lives, characters, facilities, and teams connect.",
  "Save deep optimization for later. Early resources teach you more when they solve a visible problem.",
];

const stuckGuide = [
  {
    symptom: "Notes feel crowded",
    move: "Raise note speed slightly, then replay an easy chart. Faster spacing can be easier to read even though notes move quicker.",
  },
  {
    symptom: "Timing feels consistently early or late",
    move: "Adjust timing in a small step and test the same section again. Do not change speed and timing together.",
  },
  {
    symptom: "Progression feels directionless",
    move: "Return to the active quest and check the next park or character requirement before repeating random activities.",
  },
  {
    symptom: "The team looks stronger but performs worse",
    move: "Read the Leader effect and board choices together. A lineup needs a plan, not just individually upgraded pieces.",
  },
];

export default function WikiPage() {
  const lastUpdated = "2026-07-25";

  return (
    <main id="main-content" className={styles.wiki}>
      <PageStructuredData
        seoKey="wiki"
        path="/wiki"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Wiki", path: "/wiki" },
        ]}
        dateModified={lastUpdated}
      />
      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>
              Dream Park field manual · Updated {formatDisplayDate(lastUpdated)}
            </p>
            <h1>hololive Dreams Wiki - Gameplay, Systems &amp; Player Tips</h1>
            <p className={styles.lead}>
              Learn how the rhythm game, quests, park, characters, and team growth fit
              together—then use that understanding to decide what to do next.
            </p>
            <nav className={styles.chapterNav} aria-label="Wiki chapters">
              <a href="#game-loop">Game loop</a>
              <a href="#field-notes">Key terms</a>
              <a href="#first-session">First session</a>
              <a href="#when-stuck">When stuck</a>
            </nav>
          </div>
          <figure className={styles.heroVisual}>
            <Image
              src="/images/hero/hololive-dreams-key-visual-1280.webp"
              alt="hololive Dreams characters gathering in Dream Park"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
            <figcaption>
              <span>Read the park</span>
              <strong>Play → Quest → Build → Grow</strong>
            </figcaption>
          </figure>
        </div>
      </header>

      <section className={styles.loopSection} id="game-loop">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p>Chapter one</p>
            <h2>The loop is a circle, not a checklist</h2>
            <p>
              hololive Dreams works best when each mode gives the next one a reason to
              exist. A Live is not isolated score-chasing; it feeds the character and
              park decisions that bring you back to another performance.
            </p>
          </div>
          <ol className={styles.loop}>
            {gameLoop.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.notesSection} id="field-notes">
        <div className={`container ${styles.notesLayout}`}>
          <div className={styles.stickyHeading}>
            <p>Chapter two</p>
            <h2>Six terms that prevent most early confusion</h2>
            <p>
              The same character can appear across several game layers. Keep the
              layers separate and your team decisions become much easier to read.
            </p>
            <Image
              src="/images/official-system/hololive-dreams-team-board.webp"
              alt="A team and character board screen in hololive Dreams"
              width={640}
              height={360}
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
          </div>
          <dl className={styles.fieldNotes}>
            {fieldNotes.map((item, index) => (
              <div key={item.term}>
                <dt>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.term}
                </dt>
                <dd>{item.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.sessionSection} id="first-session">
        <div className={`container ${styles.sessionGrid}`}>
          <div className={styles.sessionImage}>
            <Image
              src="/images/official-system/hololive-dreams-rhythm-live.webp"
              alt="A Rhythm Live performance in hololive Dreams"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <span>First-session route</span>
          </div>
          <div className={styles.sessionCopy}>
            <p className={styles.chapter}>Chapter three</p>
            <h2>A calm first hour beats a rushed start</h2>
            <ol>
              {firstSession.map((item, index) => (
                <li key={item}>
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
            <Link href="/guides/getting-started">Open the full first-hour guide</Link>
          </div>
        </div>
      </section>

      <section className={styles.stuckSection} id="when-stuck">
        <div className="container">
          <div className={styles.sectionIntro}>
            <p>Chapter four</p>
            <h2>Start with the symptom you can see</h2>
            <p>
              One careful change teaches you more than five guesses. Use the left
              column to name the problem, then try only the matching move.
            </p>
          </div>
          <div className={styles.stuckTable}>
            {stuckGuide.map((item) => (
              <article key={item.symptom}>
                <h3>{item.symptom}</h3>
                <p>{item.move}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.nextSection}>
        <div className={`container ${styles.nextInner}`}>
          <div>
            <p>Keep exploring</p>
            <h2>Use the wiki as a map, not a maze</h2>
          </div>
          <div className={styles.nextLinks}>
            <Link href="/characters">
              <span>Meet the cast</span>
              <strong>54 Characters</strong>
            </Link>
            <Link href="/songs">
              <span>Choose a track</span>
              <strong>Song list</strong>
            </Link>
            <Link href="/wiki/systems">
              <span>Go deeper</span>
              <strong>System details</strong>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
