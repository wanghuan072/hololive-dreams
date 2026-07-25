const clean = (value) => value.replace(/\s+/g, " ").trim();

const shorten = (value, maxLength) => {
  const text = clean(value);
  if (text.length <= maxLength) return text;

  const slice = text.slice(0, Math.max(1, maxLength - 1));
  const lastSpace = slice.lastIndexOf(" ");
  const end = lastSpace > Math.floor(maxLength * 0.55) ? lastSpace : slice.length;
  return `${slice.slice(0, end).trim()}…`;
};

export const fitSeoTitle = (value) => {
  let title = clean(value);

  if (title.length < 40) {
    title = `${title} | hololive Dreams Guide`;
  }

  if (title.length > 60) {
    title = shorten(title, 60);
  }

  return title;
};

export const fitSeoDescription = (value) => {
  let description = clean(value);
  const additions = [
    " Find practical details for your next session.",
    " Use the linked pages to keep exploring.",
    " Written for players.",
  ];

  for (const addition of additions) {
    if (description.length >= 140) break;
    if (description.length + addition.length <= 160) {
      description += addition;
    }
  }

  if (description.length < 140) {
    description += " Browse connected tips, profiles, and game systems.";
  }

  if (description.length > 160) {
    description = shorten(description, 159).replace(/[…,:;]$/, "");
    description = `${description}.`;
  }

  return description;
};

export const pageTdk = {
  home: {
    title: "hololive Dreams - Complete Player Guide & Wiki",
    description:
      "Explore hololive Dreams with a complete player guide to characters, songs, Dream Park systems, release updates, and practical routes for every stage.",
    keywords: ["hololive Dreams", "hololive Dreams guide", "hololive Dreams wiki"],
  },
  wiki: {
    title: "hololive Dreams Wiki - Gameplay, Systems & Tips",
    description:
      "Use the hololive Dreams Wiki to understand Rhythm Lives, quests, Dream Park, team growth, key terms, first-session priorities, and common problems.",
    keywords: ["hololive Dreams wiki", "hololive Dreams gameplay", "Dream Park"],
  },
  characters: {
    title: "hololive Dreams Characters - Full Playable Roster",
    description:
      "Browse all 54 hololive Dreams characters by branch and group, then open detailed profiles covering background, game context, songs, and related members.",
    keywords: ["hololive Dreams characters", "hololive Dreams roster", "playable characters"],
  },
  songs: {
    title: "hololive Dreams Songs - Full Music List & Videos",
    description:
      "Search the hololive Dreams songs list by title, performer, type, lyricist, or composer, then watch videos and explore credits, characters, and related tracks.",
    keywords: ["hololive Dreams songs", "hololive Dreams song list", "hololive Dreams music"],
  },
  systems: {
    title: "hololive Dreams Systems - Dream Park Gameplay Guide",
    description:
      "Learn how hololive Dreams systems connect Rhythm Lives, quests, Dream Park, teams, the Holomem Board, Skill Nodes, progression, and minigames.",
    keywords: ["hololive Dreams systems", "Dream Park guide", "Holomem Board"],
  },
  guides: {
    title: "hololive Dreams Guide - Beginner Tips & Progression",
    description:
      "Use two detailed hololive Dreams guides for the complete beginner route, Dream Park progression, character unlocks, rhythm timing, scoring, and charts.",
    keywords: ["hololive Dreams guide", "hololive Dreams beginner guide", "hololive Dreams tips"],
  },
  requirements: {
    title: "hololive Dreams Requirements - PC & Mobile Guide",
    description:
      "Check hololive Dreams requirements for Windows, storage, processor, memory, and graphics, plus current iPhone, iPad, and Android compatibility guidance.",
    keywords: ["hololive Dreams requirements", "hololive Dreams PC", "hololive Dreams mobile"],
  },
  updates: {
    title: "hololive Dreams Updates - Release Date & New Songs",
    description:
      "Follow hololive Dreams updates covering the July 2026 service launch, platform timing, launch rewards, song additions, and changes that affect players.",
    keywords: ["hololive Dreams updates", "hololive Dreams release date", "hololive Dreams launch"],
  },
  gameplay: {
    title: "hololive Dreams Gameplay - How to Play & Modes",
    description:
      "Learn hololive Dreams gameplay, from Rhythm Live difficulty levels and team building to Dream Park quests, Holomem Board growth, custom charts, and minigames.",
    keywords: ["hololive Dreams gameplay", "how to play hololive Dreams", "hololive Dreams modes"],
  },
  legalPrivacy: {
    title: "hololive Dreams Privacy Policy - Player Guide",
    description:
      "Read how the hololive Dreams Player Guide handles routine hosting data, embedded video privacy, cookies, security logs, data retention, and policy changes.",
    keywords: ["hololive Dreams privacy policy", "player guide privacy"],
  },
  legalTerms: {
    title: "hololive Dreams Terms of Service - Player Guide",
    description:
      "Review the hololive Dreams Player Guide terms covering acceptable use, intellectual property, service availability, accuracy limits, and user responsibilities.",
    keywords: ["hololive Dreams terms of service", "player guide terms"],
  },
  legalCopyright: {
    title: "hololive Dreams Copyright - Rights & Usage Guide",
    description:
      "Read the hololive Dreams copyright notice covering site text, game media, character names, music, trademarks, permitted use, and rights-related requests.",
    keywords: ["hololive Dreams copyright", "hololive Dreams rights"],
  },
  legalAbout: {
    title: "About hololive Dreams Player Guide - Site Purpose",
    description:
      "Learn how the hololive Dreams Player Guide helps players explore characters, songs, systems, updates, and practical routes with clear scope and upkeep.",
    keywords: ["about hololive Dreams guide", "hololive Dreams player guide"],
  },
  legalContact: {
    title: "Contact hololive Dreams Player Guide - Feedback",
    description:
      "Find the email and details needed to send corrections, accessibility notes, copyright questions, or useful feedback about the hololive Dreams Player Guide.",
    keywords: ["contact hololive Dreams guide", "hololive Dreams feedback"],
  },
};

export const createSongTdk = (song) => ({
  title: fitSeoTitle(
    `${shorten(song.title, 22)} | hololive Dreams Song Video & Guide`,
  ),
  description: fitSeoDescription(
    `Explore ${shorten(song.title, 28)} in hololive Dreams, performed by ${shorten(song.performer, 30)}. Watch the video, review creator credits, meet linked characters, and browse related tracks.`,
  ),
  keywords: [
    `${song.title} hololive Dreams`,
    "hololive Dreams song",
    `${song.performer} song`,
  ],
});

export const createCharacterTdk = (member) => ({
  title: fitSeoTitle(
    `${shorten(member.name, 23)} | hololive Dreams Character Profile`,
  ),
  description: fitSeoDescription(
    `Meet ${shorten(member.name, 30)} in the hololive Dreams character guide. Explore their branch, group, profile details, game context, featured songs, and related playable characters.`,
  ),
  keywords: [
    `${member.name} hololive Dreams`,
    "hololive Dreams character",
    `${member.name} profile`,
  ],
});

export const createGuideTdk = (guide) => ({
  title: fitSeoTitle(guide.seo.title),
  description: fitSeoDescription(
    `${guide.seo.description} Follow practical steps, avoid common mistakes, and continue with useful related routes.`,
  ),
  keywords: guide.seo.keywords,
});
