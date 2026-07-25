import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { metadataFor } from "@/seo/pageSeo";
import {
  faqPageSchema,
  JsonLd,
  referencePageSchema,
} from "@/seo/structuredData";
import { formatDisplayDate } from "@/utils/date";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor(
  "gameplay",
  "/hololive-dreams-gameplay",
);

const playRoute = [
  {
    label: "Pick a favorite",
    detail: "Choose one talent at the highest rarity when the opening selection appears.",
  },
  {
    label: "Play a Rhythm Live",
    detail: "Start with a familiar song and a chart you can read comfortably.",
  },
  {
    label: "Follow Holomem Quests",
    detail: "Complete the active objectives to meet more characters and open new routes.",
  },
  {
    label: "Grow the park and team",
    detail: "Use rewards for facilities, training, team formation, and Holomem Board nodes.",
  },
  {
    label: "Return to the stage",
    detail: "Bring the stronger team back to Rhythm Lives and push the next target.",
  },
];

const difficulties = [
  {
    name: "EASY",
    number: "01",
    use: "Learn the lane",
    detail:
      "Use EASY to connect what you hear with what reaches the judgment line. A familiar song makes the first timing check easier.",
  },
  {
    name: "NORMAL",
    number: "02",
    use: "Build consistency",
    detail:
      "NORMAL is the natural bridge once EASY feels controlled. Stay here until repeated misses have a clear cause rather than rushing upward.",
  },
  {
    name: "HARD",
    number: "03",
    use: "Read denser charts",
    detail:
      "Choose HARD when you can keep your eyes near the judgment area and follow longer patterns without chasing every note from the top.",
  },
  {
    name: "EXPERT",
    number: "04",
    use: "Challenge the top tier",
    detail:
      "EXPERT is the highest difficulty shown in the current song listings. Treat it as a chart-reading test, not the required route for park progress.",
  },
];

const modes = [
  {
    number: "A",
    title: "Rhythm Live",
    tag: "Main stage",
    detail:
      "Choose a song and difficulty, then play the chart manually or use auto-play when you want to follow the performance without a timing challenge. Team training and formation also contribute to higher score potential.",
  },
  {
    number: "B",
    title: "Dream Park & Quests",
    tag: "Progression",
    detail:
      "Explore the island, complete facility goals, and follow Holomem Quests. These objectives connect the story, park expansion, new playable talents, and more songs.",
  },
  {
    number: "C",
    title: "Team & Holomem Board",
    tag: "RPG layer",
    detail:
      "Set a leader, organize members, and spend growth resources with a purpose. If clean rhythm runs still score below a target, inspect the team and board before changing timing again.",
  },
  {
    number: "D",
    title: "Create Chart",
    tag: "Creative mode",
    detail:
      "Build an original note chart, share it, or play charts made by other players. It extends the rhythm side beyond the built-in song patterns.",
  },
  {
    number: "E",
    title: "Minigames",
    tag: "Solo & multiplayer",
    detail:
      "Play short activities alone or in supported co-op and competitive sessions. Their rewards can feed character growth and Dream Park development.",
  },
];

const minigames = [
  {
    title: "Hoppin' Rope",
    type: "Group timing",
    detail:
      "Read the shared jump rhythm and react cleanly as the rope speeds through the group. The current game page presents it as a simple-control group activity.",
    image: "/images/official-system/hololive-dreams-hoppin-rope.webp",
    alt: "Hoppin' Rope group minigame in hololive Dreams",
  },
  {
    title: "Colliect Cooking",
    type: "Ingredient matching",
    detail:
      "Match ingredient sets and complete requested dishes within the activity's time pressure. The unusual spelling follows the name shown in English promotional material.",
    image: "/images/video/hololive-dreams-cooking-video.jpg",
    alt: "Colliect Cooking minigame demonstration in hololive Dreams",
  },
  {
    title: "MEGA CIRCUIT",
    type: "Competitive course",
    detail:
      "Move through a busy obstacle course and race the field. Learn the current course through one low-pressure attempt before treating it as a rewards run.",
    image: "/images/video/hololive-dreams-mega-circuit-video.jpg",
    alt: "MEGA CIRCUIT competitive course in hololive Dreams",
  },
];

const faqs = [
  {
    question: "How do you play hololive Dreams?",
    answer:
      "Play Rhythm Lives and minigames, complete Holomem Quests, develop Dream Park, and use rewards to train and organize a stronger team. Those systems form a repeating progression loop.",
  },
  {
    question: "How many Rhythm Live difficulties are there?",
    answer:
      "Current song listings show four chart difficulties: EASY, NORMAL, HARD, and EXPERT.",
  },
  {
    question: "Can you play hololive Dreams without strong rhythm skills?",
    answer:
      "Yes. Start on EASY or NORMAL, tune note speed and timing gradually, and use auto-play when you want to enjoy a song or continue the broader game loop without manual chart play.",
  },
  {
    question: "Does hololive Dreams have multiplayer modes?",
    answer:
      "Yes. The game includes supported online cooperative and competitive minigames, alongside activities that can be played solo.",
  },
];

export default function HololiveDreamsGameplayPage() {
  const path = "/hololive-dreams-gameplay";
  const lastUpdated = "2026-07-25";
  const title = "hololive Dreams Gameplay - How to Play & Modes";
  const description =
    "Learn hololive Dreams gameplay, from Rhythm Live difficulty levels and team building to Dream Park quests, Holomem Board growth, custom charts, and minigames.";

  return (
    <main id="main-content">
      <JsonLd
        data={referencePageSchema({
          path,
          title,
          description,
          imageUrl: "/images/official-system/hololive-dreams-rhythm-live.webp",
          dateModified: lastUpdated,
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Gameplay", path },
          ],
        })}
      />
      <JsonLd data={faqPageSchema(faqs, path)} />

      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>
              Player route · Updated {formatDisplayDate(lastUpdated)}
            </p>
            <h1>hololive Dreams Gameplay - How to Play &amp; Game Modes</h1>
            <p className={styles.lead}>
              hololive Dreams is a loop, not a single rhythm menu. Play songs,
              complete quests, build Dream Park, strengthen a team, and return to
              the stage with more options.
            </p>
            <nav className={styles.jumpNav} aria-label="Gameplay sections">
              <a href="#how-to-play">How to play</a>
              <a href="#difficulties">Difficulties</a>
              <a href="#game-modes">Game modes</a>
            </nav>
          </div>

          <div className={styles.stagePass}>
            <div className={styles.passTop}>
              <span>DREAM PARK</span>
              <span>PLAYER ROUTE 01</span>
            </div>
            <figure>
              <Image
                src="/images/official-system/hololive-dreams-rhythm-live.webp"
                alt="Rhythm Live gameplay in hololive Dreams"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </figure>
            <div className={styles.passBottom}>
              <span>4 rhythm difficulties</span>
              <strong>5 connected modes</strong>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.routeSection} id="how-to-play">
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Start here</p>
            <h2>How to play hololive Dreams in five steps</h2>
            <p>
              The most useful first-session route follows the game&apos;s own
              progression instead of trying to finish one system in isolation.
            </p>
          </div>
          <ol className={styles.routeTrack}>
            {playRoute.map((step, index) => (
              <li key={step.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.loopNote}>
            <strong>The loop:</strong> Rhythm Live → quests → Dream Park → team
            growth → stronger Rhythm Live.
          </p>
        </div>
      </section>

      <section className={styles.rhythmSection}>
        <div className={`container ${styles.rhythmGrid}`}>
          <figure>
            <Image
              src="/images/sections/hololive-dreams-official-gameplay-thumbnail.jpg"
              alt="A hololive Dreams Rhythm Live chart in play"
              width={1280}
              height={720}
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <figcaption>Start with one familiar track and change one setting at a time.</figcaption>
          </figure>
          <div>
            <p className={styles.kicker}>The main stage</p>
            <h2>Rhythm accuracy and team strength are separate jobs</h2>
            <p>
              During a Rhythm Live, read notes toward the judgment line and match
              the chart&apos;s timing. Outside the chart, your selected leader,
              members, skills, and growth affect the score ceiling. A clean run and
              a strong team support each other, but fixing one does not automatically
              fix the other.
            </p>
            <div className={styles.rhythmChecks}>
              <article>
                <span>READ</span>
                <h3>Use a familiar song</h3>
                <p>Familiar audio makes early or late hits easier to recognize.</p>
              </article>
              <article>
                <span>TUNE</span>
                <h3>Adjust gradually</h3>
                <p>Change note speed or timing in small steps, then replay the same chart.</p>
              </article>
              <article>
                <span>BUILD</span>
                <h3>Check the team</h3>
                <p>If timing is stable but the target score is not, review team growth.</p>
              </article>
            </div>
            <Link className={styles.textLink} href="/guides/rhythm-timing">
              Open the full rhythm timing guide
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.difficultySection} id="difficulties">
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Rhythm Live ladder</p>
            <h2>Four difficulties, one sensible learning route</h2>
            <p>
              Current song listings use EASY, NORMAL, HARD, and EXPERT. Difficulty
              belongs to the chart you select; it is not a separate setting for the
              whole RPG.
            </p>
          </div>
          <div className={styles.difficultyRail}>
            {difficulties.map((difficulty) => (
              <article key={difficulty.name}>
                <div>
                  <span>{difficulty.number}</span>
                  <strong>{difficulty.name}</strong>
                </div>
                <p>{difficulty.use}</p>
                <p>{difficulty.detail}</p>
              </article>
            ))}
          </div>
          <aside className={styles.difficultyAdvice}>
            <strong>Move up when the pattern is readable.</strong>
            <p>
              A higher label is not automatically better practice. If misses feel
              random, return one step, stabilize the same song, and then try again.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.modesSection} id="game-modes">
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Mode map</p>
            <h2>What each hololive Dreams mode is for</h2>
          </div>
          <div className={styles.modeLedger}>
            {modes.map((mode) => (
              <article key={mode.title}>
                <span className={styles.modeNumber}>{mode.number}</span>
                <div>
                  <p>{mode.tag}</p>
                  <h3>{mode.title}</h3>
                </div>
                <p>{mode.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.parkSection}>
        <div className={`container ${styles.parkGrid}`}>
          <div>
            <p className={styles.kicker}>Why the park matters</p>
            <h2>Dream Park is the route that ties every reward together</h2>
            <p>
              The story begins on an uninhabited island. Completing character
              facilities and park objectives gives the rhythm, quest, and growth
              systems a shared destination. When you are unsure what to do next,
              check the active objective and the facility it points toward.
            </p>
            <Link className={styles.textLink} href="/guides/getting-started">
              Follow the complete beginner route
            </Link>
          </div>
          <figure>
            <Image
              src="/images/official-system/hololive-dreams-developed-park.webp"
              alt="A developed Dream Park in hololive Dreams"
              width={736}
              height={414}
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
            <figcaption>Facilities turn an empty island into the long-term progression map.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.minigameSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Side attractions</p>
            <h2>Minigames change the pace and still feed progression</h2>
            <p>
              The game supports short casual activities and more demanding replayable
              challenges, with solo, cooperative, and competitive play depending on
              the activity.
            </p>
          </div>
          <div className={styles.minigameGallery}>
            {minigames.map((minigame, index) => (
              <article key={minigame.title}>
                <figure>
                  <Image
                    src={minigame.image}
                    alt={minigame.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </figure>
                <div>
                  <span>{String(index + 1).padStart(2, "0")} · {minigame.type}</span>
                  <h3>{minigame.title}</h3>
                  <p>{minigame.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.pokajan}>
            <span>04</span>
            <div>
              <p>Card activity</p>
              <h3>POKAJAN</h3>
            </div>
            <p>
              POKAJAN is the named card-hand minigame. Read its current in-game rule
              screen before the first match, because its decisions do not follow the
              rhythm controls used elsewhere.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.firstSession}>
        <div className={`container ${styles.firstSessionGrid}`}>
          <div>
            <p className={styles.kicker}>A practical first session</p>
            <h2>Leave with one clear baseline</h2>
          </div>
          <ol>
            <li><span>01</span><p>Select the favorite talent you want at the highest rarity.</p></li>
            <li><span>02</span><p>Finish the guided opening and use the objective marker when the island opens.</p></li>
            <li><span>03</span><p>Play one familiar song on EASY, then try NORMAL only if the chart stays readable.</p></li>
            <li><span>04</span><p>Complete the next Holomem Quest or facility objective before spending rewards broadly.</p></li>
            <li><span>05</span><p>Keep that song and team as a baseline for the next session.</p></li>
          </ol>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Quick answers</p>
            <h2>hololive Dreams gameplay FAQ</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
          <nav className={styles.nextLinks} aria-label="Continue exploring">
            <Link href="/songs">Choose a song</Link>
            <Link href="/characters">Browse characters</Link>
            <Link href="/wiki/systems">See the system map</Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
