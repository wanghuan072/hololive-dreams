export const site = {
  name: "hololive Dreams Player Guide",
  shortName: "Dreams Player Guide",
  description:
    "A player-focused English guide, wiki, character roster, and song reference for hololive Dreams.",
  origin: "https://hololive-dreams.org",
  contactEmail: "wyong@hololive-dreams.org",
  defaultOgImage: "/images/og-image.png",
  defaultLogo: "/images/logo.png",
  lastChecked: "July 24, 2026",
};

type NavigationLink = {
  label: string;
  href: string;
  rel?: string;
};

export const primaryNavigation: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Wiki", href: "/wiki" },
  { label: "Characters", href: "/characters" },
  { label: "Songs", href: "/songs" },
  { label: "Guides", href: "/guides" },
  { label: "Updates", href: "/updates" },
  { label: "Gameplay", href: "/hololive-dreams-gameplay" },
];

export const footerNavigation: { title: string; links: NavigationLink[] }[] = [
  {
    title: "Navigate",
    links: primaryNavigation,
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        href: "/legal/privacy-policy",
        rel: "noopener noreferrer nofollow",
      },
      {
        label: "Terms of Service",
        href: "/legal/terms-of-service",
        rel: "noopener noreferrer nofollow",
      },
      {
        label: "Copyright",
        href: "/legal/copyright",
        rel: "noopener noreferrer nofollow",
      },
      {
        label: "About Us",
        href: "/legal/about-us",
        rel: "noopener noreferrer nofollow",
      },
      {
        label: "Contact Us",
        href: "/legal/contact-us",
        rel: "noopener noreferrer nofollow",
      },
    ],
  },
];
