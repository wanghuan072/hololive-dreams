"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { holomems } from "@/data/holomems";
import styles from "./page.module.css";

const branches = ["All", "Japan", "Indonesia", "English"] as const;

export function CharacterExplorer() {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState<(typeof branches)[number]>("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return holomems.filter((holomem) => {
      const matchesBranch = branch === "All" || holomem.branch === branch;
      const matchesQuery =
        !normalized ||
        holomem.name.toLowerCase().includes(normalized) ||
        holomem.group.toLowerCase().includes(normalized);
      return matchesBranch && matchesQuery;
    });
  }, [branch, query]);

  return (
    <>
      <div className={styles.filterDesk}>
        <label htmlFor="character-search">
          Search by name or generation
          <input
            id="character-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “Advent” or “Suisei”"
          />
        </label>
        <div className={styles.branchFilters} aria-label="Filter by branch">
          {branches.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={branch === item}
              onClick={() => setBranch(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p aria-live="polite" className={styles.resultCount}>
          <strong>{filtered.length}</strong>
          <span> / {holomems.length} characters</span>
        </p>
      </div>

      {filtered.length ? (
        <div className={styles.portraitLedger}>
          {filtered.map((holomem) => (
            <article key={holomem.id} className={styles.passport}>
              <Link href={`/characters/${holomem.slug}`} className={styles.passportLink}>
                <div className={styles.portraitFrame}>
                  <Image
                    src={holomem.imageUrl}
                    alt={holomem.imageAlt}
                    width={448}
                    height={632}
                    sizes="(max-width: 768px) 44vw, (max-width: 1024px) 28vw, 190px"
                  />
                  <span className={styles.passportNo}>
                    No.{String(holomem.id).padStart(2, "0")}
                  </span>
                  <span
                    className={`${styles.branchChip} ${styles[`branch${holomem.branch}`]}`}
                  >
                    {holomem.branch === "Japan"
                      ? "JP"
                      : holomem.branch === "Indonesia"
                        ? "ID"
                        : "EN"}
                  </span>
                </div>
                <div className={styles.passportMeta}>
                  <h2>{holomem.name}</h2>
                  <p>{holomem.group}</p>
                  <small>Playable character · {holomem.branch}</small>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <h2>No roster matches</h2>
          <p>Clear the search or choose another branch to see every playable character.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setBranch("All");
            }}
          >
            Clear character filters
          </button>
        </div>
      )}
    </>
  );
}
