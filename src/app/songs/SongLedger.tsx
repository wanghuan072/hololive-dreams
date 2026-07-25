"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { songs } from "@/data/songs";
import styles from "./page.module.css";

export function SongLedger() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"All" | "Original" | "Cover">("All");
  const normalized = query.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      songs.filter(
        (song) =>
          (type === "All" || song.type === type) &&
          (!normalized ||
            song.title.toLowerCase().includes(normalized) ||
            song.performer.toLowerCase().includes(normalized) ||
            song.lyricsBy.toLowerCase().includes(normalized) ||
            song.musicBy.toLowerCase().includes(normalized)),
      ),
    [normalized, type],
  );

  return (
    <>
      <div className={styles.catalogControls}>
        <label htmlFor="song-search">
          Search songs and performers
          <input
            id="song-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Song title or performer"
          />
        </label>
        <div className={styles.typeFilters} aria-label="Filter by song type">
          {(["All", "Original", "Cover"] as const).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={type === item}
              onClick={() => setType(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p aria-live="polite" className={styles.resultCount}>
          <strong>{filtered.length}</strong>
          <span> / {songs.length} tracks</span>
        </p>
      </div>

      {filtered.length ? (
        <ol className={styles.jukebox}>
          {filtered.map((song) => (
            <li key={song.id}>
              <Link href={`/songs/${song.slug}`} className={styles.jacket}>
                <div className={styles.jacketArt}>
                  <Image
                    src={song.imageUrl}
                    alt={song.imageAlt}
                    width={320}
                    height={320}
                    loading="lazy"
                    sizes="(max-width: 768px) 44vw, (max-width: 1024px) 22vw, 160px"
                  />
                  <span className={styles.trackNumber}>
                    #{String(song.id).padStart(3, "0")}
                  </span>
                  <span
                    className={`${styles.songType} ${
                      song.type === "Original" ? styles.typeOriginal : styles.typeCover
                    }`}
                  >
                    {song.type}
                  </span>
                </div>
                <div className={styles.jacketMeta}>
                  <h3>{song.title}</h3>
                  <span className={styles.performer}>{song.performer}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <div className={styles.noSongs}>
          <p className={styles.noSongsTitle}>No songs match</p>
          <p>Try a shorter title, performer, lyricist, or composer name.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setType("All");
            }}
          >
            Clear song filters
          </button>
        </div>
      )}
    </>
  );
}
