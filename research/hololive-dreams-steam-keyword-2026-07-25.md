# hololive Dreams Steam keyword refresh

Date: 2026-07-25

## Decision

The retired event-disambiguation route is replaced by `/hololive-dreams-steam-guide`.
The primary long-tail target is `hololive Dreams Steam`, supported by related intent
around PC features, installation, requirements, language support, and startup
troubleshooting.

This page is kept distinct from `/system-requirements`: the new route explains the
Steam product and player setup journey, while the requirements page remains the
compact hardware and compatibility reference.

## Current facts used

- The Steam store lists a July 22, 2026 release date, free-to-play pricing, and
  single-player, online PvP, online co-op, in-app purchases, and Family Sharing.
- The Steam listing names Windows 11 64-bit, 8 GB RAM, and 50 GB storage for both
  requirement tiers, with separate minimum and recommended CPU/GPU pairs.
- The listing describes more than 50 characters, more than 150 launch songs,
  Create Chart, auto-play, Dream Park, Holomem Quests, and solo/multiplayer
  minigames.
- The July 23, 2026 launch announcement states that service began on the App Store,
  Google Play, and Steam on July 23 JST. The page explains the Steam date as a
  regional store-time difference rather than a second launch.
- The Steam listing warns that a protection component can trigger antivirus false
  positives and directs players to restore the file or verify game-file integrity.

## Sources consulted

- Steam product page: https://store.steampowered.com/app/4282500
- Game website: https://www.hololive-dreams.com/en/
- Launch announcement: https://hololive.hololivepro.com/en/news/20260723-01-401/

## Media refresh

The project image audit found four corrupt character image files rather than missing
paths. AZKi, Koseki Bijou, Ouro Kronii, and Shishiro Botan were re-downloaded from
the current game website media host and locally decoded after replacement.
