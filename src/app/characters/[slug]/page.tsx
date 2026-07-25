import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getHolomemDetail,
  holomemDetails,
} from "@/data/holomemProfiles";
import { characterPageSchema, JsonLd } from "@/seo/structuredData";
import { metadataForEntry } from "@/seo/pageSeo";
import { formatDisplayDate } from "@/utils/date";
import styles from "./page.module.css";

type CharacterPageProps = {
  params: Promise<{ slug: string }>;
};

const playerFacingText = (value: string) =>
  value
    .replace(/\brecord deal\b/gi, "music deal")
    .replace(/\bsource of comfort\b/gi, "comfort")
    .replace(/\bget checked up\b/gi, "see her")
    .replace(/\bofficial\b/gi, "current")
    .replace(/\bverified\b/gi, "confirmed")
    .replace(/\bverification\b/gi, "confirmation")
    .replace(/\bsnapshot\b/gi, "overview")
    .replace(/\bsources\b/gi, "references")
    .replace(/\bsource\b/gi, "reference")
    .replace(/\brecords\b/gi, "history")
    .replace(/\brecord\b/gi, "entry")
    .replace(/\bchecked\b/gi, "reviewed");

export function generateStaticParams() {
  return holomemDetails.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: CharacterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getHolomemDetail(slug);
  if (!member) return {};

  return metadataForEntry(member.tdk, `/characters/${member.slug}`, "article");
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { slug } = await params;
  const member = getHolomemDetail(slug);
  if (!member) notFound();

  const title = `${member.name} in hololive Dreams`;
  const description = `${member.name} is one of 54 playable characters and appears under ${member.group}.`;
  const schema = characterPageSchema({
    path: `/characters/${member.slug}`,
    title,
    description,
    imageUrl: member.imageUrl,
    characterName: member.name,
    dateModified: member.lastVerified,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Characters", path: "/characters" },
      { name: member.name, path: `/characters/${member.slug}` },
    ],
  });
  const facts = [
    ["Birthday", member.official.birthday],
    ["Debut", member.official.debut],
    ["Height", member.official.height],
    ["Unit", member.official.officialUnit],
    ["Fan name", member.official.fanName],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <main id="main-content">
      <JsonLd data={schema} />
      <article>
        <header className={styles.profileHero}>
          <div className={`container ${styles.heroGrid}`}>
            <figure className={styles.portrait}>
              <Image
                src={member.imageUrl}
                alt={member.imageAlt}
                width={448}
                height={632}
                priority
                sizes="(max-width: 768px) 82vw, 390px"
              />
              <figcaption>
                <span>Playable roster</span>
                <strong>{String(member.id).padStart(2, "0")} / 54</strong>
              </figcaption>
            </figure>

            <div className={styles.heroCopy}>
              <p className={styles.breadcrumb}>
                <Link href="/characters">Characters</Link>
                <span aria-hidden="true"> / </span>
                {member.branch}
              </p>
              <p className={styles.eyebrow}>
                {member.branch} · {member.group}
              </p>
              <h1>
                <span className={styles.nameGradient}>{member.name}</span>
                <span className={styles.inGame}>
                  {" "}- hololive Dreams Character Guide
                </span>
              </h1>
              <p className={styles.tagline}>
                {playerFacingText(member.official.tagline)}
              </p>
              <p className={styles.coreAnswer}>
                {member.name}{" "}is part of the game&apos;s 54-character roster. Use this
                page to get familiar with their background, branch, group, and the songs
                connected to their name.
              </p>
              <dl className={styles.quickStats}>
                <div>
                  <dt>Branch</dt>
                  <dd>{member.branch}</dd>
                </div>
                <div>
                  <dt>Game group</dt>
                  <dd>{member.group}</dd>
                </div>
                <div>
                  <dt>Songs</dt>
                  <dd>{member.catalogSongs.length}</dd>
                </div>
                <div>
                  <dt>Original / cover</dt>
                  <dd>
                    {member.catalogSummary.originals} / {member.catalogSummary.covers}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <div className={`container ${styles.profileBody}`}>
          <aside className={styles.sourceRail}>
            <p>At a glance</p>
            <dl>
              <div>
                <dt>Playable</dt>
                <dd>Yes</dd>
              </div>
              <div>
                <dt>Branch</dt>
                <dd>{member.branch}</dd>
              </div>
              <div>
                <dt>Group</dt>
                <dd>{member.group}</dd>
              </div>
              <div>
                <dt>Updated</dt>
                <dd>{formatDisplayDate(member.lastVerified)}</dd>
              </div>
            </dl>
            <Link href="/characters">Back to all characters</Link>
          </aside>

          <div className={styles.contentColumn}>
            <section className={styles.profileSection}>
              <div className={styles.sectionNumber}>01</div>
              <div>
                <p className={styles.sectionLabel}>Character introduction</p>
                <h2>Who {member.name} is</h2>
                {member.official.biography
                  .split(/\r?\n+/)
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph}>{playerFacingText(paragraph)}</p>
                  ))}
                <dl className={styles.factLedger}>
                  {facts.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{playerFacingText(value)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            <section className={styles.profileSection}>
              <div className={styles.sectionNumber}>02</div>
              <div>
                <p className={styles.sectionLabel}>More about the character</p>
                <h2>Interests, goals, and personal notes</h2>
                <p>
                  These details help show what makes {member.name}{" "}distinct. Some
                  characters share more about favorite things, ambitions, or creative
                  interests than others.
                </p>
                <dl className={styles.detailLedger}>
                  {member.official.additionalFacts.map((fact) => (
                    <div key={`${fact.label}-${fact.value}`}>
                      <dt>{playerFacingText(fact.label)}</dt>
                      <dd>{playerFacingText(fact.value)}</dd>
                    </div>
                  ))}
                </dl>
                {member.official.officialQa.length > 0 && (
                  <div className={styles.officialQa}>
                    <h3>Questions and answers</h3>
                    {member.official.officialQa.map((entry) => (
                      <details key={entry.question}>
                        <summary>{playerFacingText(entry.question)}</summary>
                        <p>{playerFacingText(entry.answer)}</p>
                      </details>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <section className={styles.profileSection}>
              <div className={styles.sectionNumber}>03</div>
              <div>
                <p className={styles.sectionLabel}>In the game</p>
                <h2>Where {member.name} fits</h2>
                <p>
                  {member.name}{" "}belongs to the {member.branch} branch and appears under{" "}
                  {member.group}. The game connects playable characters through Leaders,
                  quests, invitation tickets, teams, cards, and the Holomem Board.
                </p>
                <p className={styles.boundaryNote}>
                  Unlock routes, card effects, and team roles can change as you progress.
                  Use the systems and guide pages when you are ready to turn a favorite
                  character into a working lineup.
                </p>
                <nav className={styles.inlineLinks} aria-label="Related game systems">
                  <Link href="/wiki/systems">Understand the game systems</Link>
                  <Link href="/guides/getting-started">Unlocking characters guide</Link>
                  <Link href="/guides/getting-started">
                    Team and Holomem Board basics
                  </Link>
                </nav>
              </div>
            </section>

            <section className={styles.profileSection}>
              <div className={styles.sectionNumber}>04</div>
              <div>
                <p className={styles.sectionLabel}>Music</p>
                <h2>Songs featuring {member.name}</h2>
                {member.catalogSongs.length ? (
                  <>
                    <p>
                      There {member.catalogSongs.length === 1 ? "is" : "are"}{" "}
                      {member.catalogSongs.length}{" "}
                      {member.catalogSongs.length === 1 ? "song" : "songs"} connected
                      to {member.name}{" "}in the current game list.
                    </p>
                    <div className={styles.catalogBreakdown}>
                      <span>{member.catalogSummary.originals} original</span>
                      <span>{member.catalogSummary.covers} cover</span>
                      <span>
                        {member.collaborators.length} catalog{" "}
                        {member.collaborators.length === 1
                          ? "collaborator"
                          : "collaborators"}
                      </span>
                    </div>
                    <ol className={styles.songList}>
                      {member.catalogSongs.map((song) => (
                        <li key={song.id}>
                          <Image
                            src={song.imageUrl}
                            alt={song.imageAlt}
                            width={72}
                            height={72}
                            loading="lazy"
                          />
                          <div>
                            <Link href={`/songs/${song.slug}`}>
                              <strong>{song.title}</strong>
                            </Link>
                            <span>{song.performer}</span>
                          </div>
                          <small>{song.type}</small>
                        </li>
                      ))}
                    </ol>
                    {member.collaborators.length > 0 && (
                      <nav
                        className={styles.collaboratorLinks}
                        aria-label={`${member.name} catalog collaborators`}
                      >
                        <p>Characters who share a song credit</p>
                        <div>
                          {member.collaborators.map((collaborator) => (
                            <Link
                              href={`/characters/${collaborator.slug}`}
                              key={collaborator.id}
                            >
                              {collaborator.name}
                            </Link>
                          ))}
                        </div>
                      </nav>
                    )}
                  </>
                ) : (
                  <div className={styles.emptyLedger}>
                    <p>
                      No song in the current game list uses {member.name}{" "}as its
                      performer label yet. Their wider music career may include much
                      more than the tracks playable here.
                    </p>
                  </div>
                )}
                <Link className={styles.catalogLink} href="/songs">
                  Search the complete song catalog
                </Link>
              </div>
            </section>

            <section className={styles.relatedSection}>
              <p className={styles.sectionLabel}>Continue browsing</p>
              <h2>Related playable members</h2>
              <div>
                {(member.peers.length
                  ? member.peers
                  : holomemDetails
                      .filter(
                        (candidate) =>
                          candidate.id !== member.id &&
                          candidate.branch === member.branch,
                      )
                      .slice(0, 4)
                ).map((peer) => (
                  <Link href={`/characters/${peer.slug}`} key={peer.id}>
                    <span>{peer.group}</span>
                    <strong>{peer.name}</strong>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
