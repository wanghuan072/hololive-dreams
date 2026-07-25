import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { holomems } from "@/data/holomems";
import { metadataFor } from "@/seo/pageSeo";
import { PageStructuredData } from "@/seo/structuredData";
import { formatDisplayDate } from "@/utils/date";
import { CharacterExplorer } from "./CharacterExplorer";
import styles from "./page.module.css";

export const metadata: Metadata = metadataFor("characters", "/characters");

export default function CharactersPage() {
  const rosterUpdated = holomems[0]?.lastVerified ?? "2026-07-23";
  const counts = holomems.reduce(
    (result, holomem) => {
      result[holomem.branch] += 1;
      return result;
    },
    { Japan: 0, Indonesia: 0, English: 0 },
  );

  return (
    <main id="main-content">
      <PageStructuredData
        seoKey="characters"
        path="/characters"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Characters", path: "/characters" },
        ]}
        dateModified={rosterUpdated}
      />
      <PageHero
        kicker="Character gallery · 54 playable members"
        title="hololive Dreams Characters - Full Playable Roster"
        lead="Find a character by name, branch, generation, or group. Each profile brings together their background, game context, and songs in one player-friendly page."
        aside={
          <dl>
            <div><dt>Japan</dt><dd>{counts.Japan}</dd></div>
            <div><dt>Indonesia</dt><dd>{counts.Indonesia}</dd></div>
            <div><dt>English</dt><dd>{counts.English}</dd></div>
            <div><dt>Updated</dt><dd>{formatDisplayDate(rosterUpdated)}</dd></div>
          </dl>
        }
      />

      <section className={styles.rosterSection}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <div>
              <p className={styles.sectionEyebrow}>Directory A–Z</p>
              <h2>Search and filter all 54 playable characters</h2>
            </div>
            <p>
              Browse the full cast, compare branches, and open any portrait to learn
              more about that character.
            </p>
          </div>
          <CharacterExplorer />
        </div>
      </section>

      <section className={styles.boundarySection}>
        <div className={`container ${styles.boundaryGrid}`}>
          <div>
            <p className={styles.kicker}>Use the right layer</p>
            <h2>Roster, invitations, Leaders, cards, and boards are different</h2>
          </div>
          <div>
            <p>
              A playable character is not the same thing as a Leader, card, outfit, or
              team role. Treat each as a separate layer when planning a lineup.
            </p>
            <div className={styles.nextLinks}>
              <Link href="/guides/getting-started">How character unlocks work</Link>
              <Link href="/guides/getting-started">Team and board basics</Link>
              <Link href="/wiki/systems">Game systems reference</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
