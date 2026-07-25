import { createGuideTdk } from "@/seo/tdk";

export type GuideSection = {
  heading: string;
  body: string;
  steps?: string[];
  note?: string;
};

export type Guide = {
  id: number;
  title: string;
  publishDate: string;
  imageUrl: string;
  imageAlt: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  tdk: {
    title: string;
    description: string;
    keywords: string[];
  };
  addressBar: string;
  intent: string;
  stage: string;
  readTime: string;
  summary: string;
  detailsHtml: string;
  sections: GuideSection[];
  related: { label: string; href: string }[];
  evidenceSources: string[];
  confidence: "high" | "mixed";
  conflictStatus: "none" | "open";
  lastVerified: string;
};

const guideCatalog: Omit<Guide, "tdk">[] = [
  {
    id: 1,
    title: "hololive Dreams Beginner Guide: Your First Hours in Dream Park",
    publishDate: "2026-07-25",
    imageUrl: "/images/screenshots/hololive-dreams-story-scene-steam.jpg",
    imageAlt: "A story scene from hololive Dreams",
    seo: {
      title: "hololive Dreams Beginner Guide: First Hours",
      description:
        "Follow a complete beginner route through rhythm Lives, quests, character unlocks, teams, minigames, and Dream Park progression.",
      keywords: [
        "hololive Dreams beginner guide",
        "hololive Dreams progression",
        "Dream Park guide",
      ],
    },
    addressBar: "getting-started",
    intent: "Learn the full opening loop without wasting early resources",
    stage: "Beginner",
    readTime: "13 min",
    summary:
      "Build a stable rhythm baseline, follow the opening quests in order, and learn how characters, teams, minigames, and Dream Park feed one another before you optimize.",
    detailsHtml:
      "<p>Your first sessions are easier when you treat hololive Dreams as one connected loop: Lives move quests forward, quests open characters and park options, and those systems feed back into stronger rhythm teams.</p>",
    sections: [
      {
        heading: "Prepare the game before the opening Live",
        body:
          "Start with the device, audio route, and input method you intend to keep using. On PC, leave enough storage headroom for the 50 GB installation and later updates. On mobile, close heavy background apps and confirm that downloads are complete before judging performance. Use headphones or a low-latency wired output when possible, because wireless delay can make a correct tap feel late.",
        steps: [
          "Confirm that music and sound effects reach the intended speakers or headphones.",
          "Choose one input method and keep it unchanged through the first few songs.",
          "Play a familiar chart once with the default timing and note-speed settings.",
          "Change only one setting if a repeated pattern is clearly uncomfortable.",
        ],
        note:
          "A single rough attempt is not enough to diagnose timing. Repeat the same chart before changing another variable.",
      },
      {
        heading: "Read the opening loop as a route, not a checklist",
        body:
          "The opening sequence introduces rhythm play, story prompts, Holomem Quests, invitations, team formation, and Dream Park in a deliberate order. Follow the active objective until the game clearly opens the next layer. Visiting every menu immediately creates more decisions without giving you enough context to understand them.",
        steps: [
          "Finish the opening Live and story prompts.",
          "Follow the highlighted Holomem Quest rather than farming a random stage.",
          "Claim rewards that the route points to before starting the next objective.",
          "Visit Dream Park when the quest flow introduces it, then complete the requested facility action.",
          "Return to the quest route and confirm which new screen or character it unlocked.",
        ],
      },
      {
        heading: "Unlock characters with a playable roster in mind",
        body:
          "Holomem Quests add playable characters, but a larger roster is only useful when you understand the roles already available to you. Open the character page for branch and group context, then compare the in-game skills shown on your current cards. Early on, prefer a clear, usable team over collecting several options that all solve the same problem.",
        steps: [
          "Check the active quest requirement before spending time on unrelated songs.",
          "Unlock the character attached to the route you are already progressing.",
          "Read the current in-game skill text before assigning a permanent role.",
          "Keep at least one comfortable team for familiar charts while testing new members.",
        ],
        note:
          "Character balance, card values, and ideal formations can change. Use current in-game numbers for final decisions.",
      },
      {
        heading: "Build the first team without chasing a launch-day meta",
        body:
          "Leader and member positions matter because team effects connect to rhythm scoring and later growth. Begin with characters you can train consistently and songs you can clear reliably. A stable team produces cleaner comparisons than frequent swaps. When the Holomem Board opens, read the node type, cost, and effect before committing resources; do not assume two nearby nodes have equal value.",
        steps: [
          "Choose a leader whose displayed effect supports the mode you are playing.",
          "Fill member slots with cards you can actually improve.",
          "Run the same song before and after one team change.",
          "Record whether the change improved score, survival, or consistency.",
          "Delay narrow board paths until you understand the resources they consume.",
        ],
      },
      {
        heading: "Use Dream Park as the hub for progression",
        body:
          "Dream Park is not a separate builder pasted onto the rhythm game. Facilities and quests support the broader progression loop, while Lives and minigames provide reasons and resources to keep developing the park. When you feel stuck, return to the active objective and identify whether it asks for a facility action, a quest clear, a character interaction, or a rhythm result.",
        steps: [
          "Open the current objective and identify the exact completion condition.",
          "Upgrade or place only the facility needed for the next confirmed step.",
          "Collect available park rewards before spending another resource.",
          "Recheck the quest route after every major park action.",
        ],
        note:
          "Avoid copying fixed upgrade priorities from an older build. Facility costs and rewards should be read from the version you are playing.",
      },
      {
        heading: "Treat minigames as useful side routes",
        body:
          "Minigames can be played alone or with others and can supply rewards for growth and park development. They are valuable when they serve the next objective or provide a short break from rhythm play. They should not replace the main route if your current blocker is an unopened quest, an unclaimed reward, or an incomplete facility step.",
        steps: [
          "Open the mode instructions before entering multiplayer.",
          "Use a short solo attempt to learn controls.",
          "Confirm the reward category after the result screen.",
          "Return to the quest or park screen to see whether the reward advances your next goal.",
        ],
      },
      {
        heading: "End each session with a clean next step",
        body:
          "Before leaving, claim completed objectives, note the next quest requirement, and keep one familiar chart ready for the next timing check. This prevents the following session from becoming a tour of notification badges. If a loading, storage, or input problem interrupted play, solve that first instead of changing your team or progression plan around a technical issue.",
        steps: [
          "Claim completed quest and park rewards.",
          "Read the next objective once before closing the game.",
          "Leave one team and one familiar song as your baseline.",
          "Use the timing guide if repeated fast, slow, or miss patterns remain.",
        ],
      },
    ],
    related: [
      { label: "Tune rhythm timing and scoring", href: "/guides/rhythm-timing" },
      { label: "Browse all playable characters", href: "/characters" },
      { label: "Understand how the systems connect", href: "/wiki/systems" },
      { label: "See the complete gameplay loop", href: "/hololive-dreams-gameplay" },
    ],
    evidenceSources: ["src-001", "src-003", "src-020"],
    confidence: "mixed",
    conflictStatus: "open",
    lastVerified: "2026-07-25",
  },
  {
    id: 2,
    title: "hololive Dreams Rhythm Timing, Note Speed & Scoring Guide",
    publishDate: "2026-07-25",
    imageUrl: "/images/official-system/hololive-dreams-rhythm-live.webp",
    imageAlt: "Rhythm gameplay in hololive Dreams",
    seo: {
      title: "hololive Dreams Rhythm Timing & Scoring Guide",
      description:
        "Build a reliable timing baseline, tune note speed, diagnose repeated misses, improve scoring, and prepare custom charts without random changes.",
      keywords: [
        "hololive Dreams rhythm guide",
        "hololive Dreams timing",
        "hololive Dreams note speed",
      ],
    },
    addressBar: "rhythm-timing",
    intent: "Make the note lane readable and inputs consistently accurate",
    stage: "All players",
    readTime: "12 min",
    summary:
      "Use one familiar chart, separate visual readability from input delay, and change a single variable at a time until your fast, slow, and miss patterns become predictable.",
    detailsHtml:
      "<p>Reliable timing comes from controlled testing rather than constant adjustment. Hold the song, device, audio route, and team steady while you isolate one problem at a time.</p>",
    sections: [
      {
        heading: "Create a repeatable test chart",
        body:
          "Choose a song whose rhythm and vocal phrasing you already know, then select a difficulty you can clear without panic. The goal is not a personal best. It is a clean sample that reveals whether misses cluster in the same places. Keep the same team so score effects do not distract from the input pattern.",
        steps: [
          "Use one familiar song and one comfortable difficulty.",
          "Keep the same device orientation, input method, and audio output.",
          "Play the chart twice before changing a setting.",
          "Notice whether errors are consistently early, late, or tied to dense sections.",
        ],
      },
      {
        heading: "Separate note speed from timing offset",
        body:
          "Note speed changes spacing and reading time; it does not repair audio or input delay. Increase speed when notes feel visually crowded and you are reacting to groups instead of individual beats. Decrease it when the lane moves faster than you can read. Adjust timing only when taps that feel aligned repeatedly register early or late.",
        steps: [
          "Change note speed by one small step.",
          "Replay the same chart and compare readability.",
          "Return to the previous speed if accuracy worsens without a clearer lane.",
          "Test timing offset separately only after the lane is comfortable.",
        ],
        note:
          "Do not change note speed and timing offset together. If the result improves, you will not know which change helped.",
      },
      {
        heading: "Diagnose fast, slow, and miss patterns",
        body:
          "A repeated early result can mean you are anticipating the sound, while repeated late results can point to audio delay, visual reaction, or a note speed that leaves too little reading time. Random misses often come from inconsistent posture, shifting hand position, background load, or chart sections that use a pattern you have not learned yet.",
        steps: [
          "Compare at least two runs, not one isolated result.",
          "Mark whether the same section produces the same error.",
          "Test speakers or wired audio if wireless playback is in use.",
          "Reduce background load if frame pacing feels uneven.",
          "Practice the pattern before making another global setting change.",
        ],
      },
      {
        heading: "Improve scoring after accuracy is stable",
        body:
          "Score combines your rhythm result with the team and growth systems. First reduce avoidable misses, then compare team effects on the same chart. A higher team value cannot teach the physical pattern, while perfect timing practice cannot explain every score difference caused by leader, member, and board effects.",
        steps: [
          "Reach a repeatable clear with the same timing settings.",
          "Record a baseline score and miss count.",
          "Change one team position or displayed effect.",
          "Replay the chart and compare both score and accuracy.",
          "Keep the change only when you understand what improved.",
        ],
      },
      {
        heading: "Handle dense charts without losing the beat",
        body:
          "Dense patterns are easier when you read groups around musical accents instead of chasing every object independently. Look slightly ahead of the judgment line, relax your hands, and use short practice sessions. If the background makes the lane harder to parse, reduce visual effects or other presentation options available in the current build before lowering every gameplay setting.",
        steps: [
          "Identify the musical pulse before focusing on individual notes.",
          "Keep your gaze above the judgment line.",
          "Practice one difficult section, then return to a full run.",
          "Stop when tension makes your inputs less consistent.",
        ],
      },
      {
        heading: "Prepare Create Chart tests carefully",
        body:
          "Create Chart lets players make and share original charts. Begin with a short, rhythmically clear section and test the chart on the same setup used during editing. Check whether notes communicate the music, whether simultaneous inputs are realistic, and whether difficulty comes from an intentional pattern rather than unreadable density.",
        steps: [
          "Choose a short section with a clear beat.",
          "Place the main pulse before adding decoration.",
          "Test at normal speed on the target input method.",
          "Remove patterns that are difficult only because their intent is unclear.",
          "Share only material and formats permitted by the game.",
        ],
      },
      {
        heading: "Use a safe troubleshooting order",
        body:
          "When timing suddenly changes, check the environment before rebuilding your settings. Confirm the audio output, frame rate, device load, and controller connection. On Steam, verify the installation if files are missing or the game no longer starts. Keep account, purchase, and service problems separate from rhythm calibration.",
        steps: [
          "Restart the game and confirm the selected audio device.",
          "Close heavy background tasks and retest the baseline chart.",
          "Reconnect or replace the input device if inputs drop.",
          "Use the platform's built-in integrity check when installation files are damaged.",
          "Return to the last known-good timing values before further adjustment.",
        ],
      },
    ],
    related: [
      { label: "Follow the complete beginner route", href: "/guides/getting-started" },
      { label: "Browse the current song catalog", href: "/songs" },
      { label: "Review connected game systems", href: "/wiki/systems" },
      { label: "Check PC requirements", href: "/system-requirements" },
    ],
    evidenceSources: ["src-001", "src-003", "src-020"],
    confidence: "mixed",
    conflictStatus: "open",
    lastVerified: "2026-07-25",
  },
];

export const guides: Guide[] = guideCatalog.map((guide) => ({
  ...guide,
  tdk: createGuideTdk(guide),
}));

export const guideFaqs: Record<
  string,
  { question: string; answer: string }[]
> = {
  "getting-started": [
    {
      question: "What should I do first in hololive Dreams?",
      answer:
        "Complete the opening Live and follow the highlighted quest route. Let that route introduce Dream Park, character invitations, and teams before exploring every menu.",
    },
    {
      question: "Should I spend resources as soon as a system opens?",
      answer:
        "No. Read the current effect and cost, then spend only when the upgrade supports a confirmed quest, team, or park goal.",
    },
    {
      question: "How do I unlock more playable characters?",
      answer:
        "Progress the relevant Holomem Quests and complete their stated conditions. Check the current quest screen because requirements can change between updates.",
    },
    {
      question: "When should I play minigames?",
      answer:
        "Use them when a quest points there, when their rewards support your next upgrade, or when you want a short break from rhythm play.",
    },
  ],
  "rhythm-timing": [
    {
      question: "Should I change note speed or timing first?",
      answer:
        "Set note speed for visual readability first. Adjust timing only when repeated runs show a consistent early or late result.",
    },
    {
      question: "Can wireless audio affect rhythm accuracy?",
      answer:
        "Yes. Bluetooth and other wireless routes can add delay. Compare speakers or wired audio before making a large timing change.",
    },
    {
      question: "Why did my score change when accuracy looked similar?",
      answer:
        "Team position, character growth, and board effects can influence score. Compare one team change at a time on the same chart.",
    },
    {
      question: "What makes a useful custom chart test?",
      answer:
        "Use a short section, a clear beat, the intended input method, and normal playback speed. Difficulty should come from readable musical patterns.",
    },
  ],
};

export type GuideVideoReference = {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
};

export const guideVideoReferences: Record<string, GuideVideoReference[]> = {};
