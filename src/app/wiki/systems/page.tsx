import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { accentTitle, PageHero } from "@/components/PageHero";
import { systems } from "@/data/systems";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor("systems", "/wiki/systems");

const steps = [
  { from: "Rhythm Lives", to: "Quests", detail: "Performances and story tasks establish the active progression route." },
  { from: "Quests", to: "Dream Park", detail: "Objectives point toward invitations, resources, and new facilities." },
  { from: "Dream Park", to: "Teams", detail: "Park progress expands the choices available for character and team development." },
  { from: "Teams", to: "Stronger Lives", detail: "Leader, member, board, and node choices return to rhythm scoring." },
];

export default function SystemsPage() {
  return (
    <main id="main-content">
      <PageStructuredData
        seoKey="systems"
        path="/wiki/systems"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Wiki", path: "/wiki" },
          { name: "Systems", path: "/wiki/systems" },
        ]}
      />
      <PageHero
        kicker="System score · read left to right"
        title={accentTitle("hololive Dreams Systems - Dream Park Gameplay Guide")}
        lead="The game is not a rhythm menu beside a separate RPG. Rhythm Lives, quests, Dream Park, teams, and board growth form one loop."
        media={
          <Image
            src="/images/official-system/hololive-dreams-rhythm-live.webp"
            alt="Rhythm Live gameplay in hololive Dreams"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        }
      />

      <section className={styles.loopSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <p>Core progression loop</p>
            <h2>From rhythm play back to a stronger team</h2>
          </div>
          <ol className={styles.loopTrack}>
            {steps.map((step, index) => (
              <li key={step.from}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{step.from}</p>
                  <strong>{step.to}</strong>
                </div>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.modulesSection}>
        <div className="container">
          {systems.map((system, index) => (
            <article className={styles.moduleRow} key={system.id}>
              <div className={styles.moduleNumber}>{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h2>{system.title}</h2>
                <p>{system.short}</p>
              </div>
              <aside>
                <span>Connects to</span>
                <strong>{system.connectsTo}</strong>
              </aside>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.nextSection}>
        <div className={`container ${styles.nextGrid}`}>
          <div>
            <p className={styles.kicker}>Turn the model into a task</p>
            <h2>Continue with a focused guide</h2>
          </div>
          <nav aria-label="Related system guides">
            <Link href="/guides/rhythm-timing">Rhythm timing and scoring</Link>
            <Link href="/guides/getting-started">Dream Park progression</Link>
            <Link href="/guides/getting-started">Unlocking characters</Link>
            <Link href="/guides/getting-started">Team and board</Link>
            <Link href="/guides/getting-started">Minigames</Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
