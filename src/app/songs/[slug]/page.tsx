import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { holomemDetails } from "@/data/holomemProfiles";
import {
  getRelatedSongs,
  getSongBySlug,
  songs,
} from "@/data/songs";
import { getSongCharacterCredit } from "@/data/songCredits";
import { JsonLd, songPageSchema } from "@/seo/structuredData";
import { metadataForEntry } from "@/seo/pageSeo";
import { formatDisplayDate } from "@/utils/date";
import styles from "./page.module.css";

type SongPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({
  params,
}: SongPageProps): Promise<Metadata> {
  const { slug } = await params;
  const song = getSongBySlug(slug);
  if (!song) return {};

  return metadataForEntry(song.tdk, `/songs/${song.slug}`, "article");
}

export default async function SongPage({ params }: SongPageProps) {
  const { slug } = await params;
  const song = getSongBySlug(slug);
  if (!song) notFound();

  const title = `${song.title} in hololive Dreams`;
  const description = `${song.title} is a ${song.type.toLowerCase()} performed by ${song.performer} in hololive Dreams.`;
  const relatedSongs = getRelatedSongs(song);
  const performerCatalog = songs.filter(
    (candidate) => candidate.performer === song.performer,
  );
  const rosterNames = new Set(holomemDetails.map((member) => member.name));
  const characterCredit = getSongCharacterCredit(song.performer, rosterNames);
  const creditRelation = characterCredit.relation;
  const relatedCharacters = characterCredit.names
    .map((name) => holomemDetails.find((member) => member.name === name))
    .filter((member): member is (typeof holomemDetails)[number] =>
      Boolean(member),
    );
  const updatedLabel = formatDisplayDate(song.lastVerified);
  const videoContext =
    song.video.selectionTier === "community-gameplay"
      ? "Community gameplay"
      : song.video.selectionTier === "topic"
        ? "Catalog audio"
        : song.video.channel.includes("hololive Dreams")
          ? "Game-channel video"
          : "Artist-channel video";
  const credits = [
    ["Lyrics", song.lyricsBy],
    ["Music", song.musicBy],
    ["Arrangement", song.arrangementBy],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));
  const schema = songPageSchema({
    path: `/songs/${song.slug}`,
    title,
    description,
    imageUrl: song.imageUrl,
    songTitle: song.title,
    performer: song.performer,
    performerNames:
      creditRelation === "project-credit"
        ? []
        : relatedCharacters.map((member) => member.name),
    videoId: song.video.videoId,
    videoTitle: `${song.title} video`,
    videoDuration: song.video.duration,
    dateModified: song.lastVerified,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Songs", path: "/songs" },
      { name: song.title, path: `/songs/${song.slug}` },
    ],
  });

  return (
    <main id="main-content">
      <JsonLd data={schema} />
      <article className={styles.songPage}>
        <header className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.sleeve}>
              <div className={styles.vinyl} aria-hidden="true" />
              <Image
                src={song.imageUrl}
                alt={song.imageAlt}
                width={640}
                height={640}
                priority
                sizes="(max-width: 768px) 82vw, 440px"
              />
              <span className={styles.catalogNumber}>
                HD–{String(song.id).padStart(3, "0")}
              </span>
            </div>

            <div className={styles.heroCopy}>
              <p className={styles.breadcrumb}>
                <Link href="/songs">Song catalog</Link>
                <span aria-hidden="true"> / </span>
                {song.type}
              </p>
              <div className={styles.typeLine}>
                <span>{song.type}</span>
                <span>Song #{String(song.id).padStart(3, "0")}</span>
              </div>
              <h1>{song.title} - hololive Dreams Song Guide</h1>
              <p className={styles.performerLead}>Performed by {song.performer}</p>
              <p className={styles.answer}>
                {song.title} is performed by {song.performer}. Watch the featured
                video, check the creator credits, and use the related tracks below to
                keep exploring the music in hololive Dreams.
              </p>
              <dl className={styles.heroFacts}>
                <div>
                  <dt>Catalog type</dt>
                  <dd>{song.type}</dd>
                </div>
                <div>
                  <dt>Performer entries</dt>
                  <dd>{performerCatalog.length}</dd>
                </div>
                <div>
                  <dt>Video channel</dt>
                  <dd>{song.video.channel}</dd>
                </div>
                <div>
                  <dt>Updated</dt>
                  <dd>{updatedLabel}</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <div className={`container ${styles.bodyGrid}`}>
          <aside className={styles.sideLabel}>
            <span>Now reading</span>
            <strong>{String(song.id).padStart(3, "0")}</strong>
            <p>{song.type} · hololive Dreams</p>
          </aside>

          <div className={styles.content}>
            <section className={`${styles.section} ${styles.videoSection}`}>
              <div className={styles.sectionHeading}>
                <span>01</span>
                <div>
                  <p>Press play</p>
                  <h2>Watch {song.title}</h2>
                </div>
              </div>
              <div className={styles.videoFrame}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${song.video.videoId}`}
                  title={`${song.title} video`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className={styles.videoCaption}>
                {videoContext} from {song.video.channel}. Playback stays inside this
                page so you can return to the credits without losing your place.
              </p>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeading}>
                <span>02</span>
                <div>
                  <p>Behind the song</p>
                  <h2>Credits</h2>
                </div>
              </div>
              <dl className={styles.creditLedger}>
                <div>
                  <dt>Performer</dt>
                  <dd>{song.performer}</dd>
                </div>
                {credits.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
                <div>
                  <dt>Entry type</dt>
                  <dd>{song.type}</dd>
                </div>
              </dl>
              <p className={styles.sourceNote}>
                Empty credit fields stay hidden, so the list remains easy to scan.
                Song availability and credits may change as the game adds more music.
                Updated {updatedLabel}.
              </p>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeading}>
                <span>03</span>
                <div>
                  <p>Performer context</p>
                  <h2>
                    {creditRelation === "project-credit"
                      ? "Project-level performer credit"
                      : "Meet the playable performers"}
                  </h2>
                </div>
              </div>
              {creditRelation === "project-credit" ? (
                <>
                  <p>
                    The song list credits “{song.performer}” at project level and does
                    not name a track-by-track vocalist lineup. This page does not assign
                    individual characters without a specific performer credit.
                  </p>
                  <Link className={styles.backLink} href="/characters">
                    Browse the complete playable roster
                  </Link>
                </>
              ) : relatedCharacters.length > 0 ? (
                <>
                  <p>
                    {creditRelation === "credited-group"
                      ? `The performer credit names “${song.performer}.” These are the playable members attached to that credited group in the current roster.`
                      : `The performer credit names ${relatedCharacters.length === 1 ? "a playable character" : "playable characters"} in the 54-character roster. Open each profile for background, group context, and more songs.`}
                  </p>
                  <nav
                    className={styles.memberLinks}
                    aria-label={`${song.title} related character profiles`}
                  >
                    {relatedCharacters.map((member) => (
                      <Link href={`/characters/${member.slug}`} key={member.id}>
                        <Image
                          src={member.imageUrl}
                          alt={member.imageAlt}
                          width={120}
                          height={92}
                          sizes="(max-width: 768px) 92px, 120px"
                        />
                        <span>
                          <small>{member.branch} · {member.group}</small>
                          <strong>{member.name}</strong>
                        </span>
                      </Link>
                    ))}
                  </nav>
                </>
              ) : (
                <p className={styles.sourceNote}>
                  The performer name does not match a playable character or a defined
                  group in the current roster, so this page does not guess.
                </p>
              )}
              <div className={styles.performerSummary}>
                <strong>{performerCatalog.length}</strong>
                <p>
                  {performerCatalog.length === 1 ? "entry uses" : "entries use"} the
                  performer name “{song.performer}” in the current song list:{" "}
                  {performerCatalog.filter((entry) => entry.type === "Original").length}{" "}
                  original and{" "}
                  {performerCatalog.filter((entry) => entry.type === "Cover").length}{" "}
                  cover.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeading}>
                <span>04</span>
                <div>
                  <p>Next in the crate</p>
                  <h2>Related songs</h2>
                </div>
              </div>
              <div className={styles.relatedGrid}>
                {relatedSongs.map((related) => (
                  <Link href={`/songs/${related.slug}`} key={related.id}>
                    <Image
                      src={related.imageUrl}
                      alt={related.imageAlt}
                      width={180}
                      height={180}
                      loading="lazy"
                    />
                    <div>
                      <span>
                        {String(related.id).padStart(3, "0")} · {related.type}
                      </span>
                      <strong>{related.title}</strong>
                      <small>{related.performer}</small>
                    </div>
                  </Link>
                ))}
              </div>
              <Link className={styles.backLink} href="/songs">
                Return to all 154 songs
              </Link>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
