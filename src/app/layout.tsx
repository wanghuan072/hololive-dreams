import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c, Nunito } from "next/font/google";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { site } from "@/data/site";
import { pageSeo } from "@/seo/pageSeo";
import { JsonLd, websiteSchema } from "@/seo/structuredData";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-rounded",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: pageSeo.home.title,
    template: "%s",
  },
  description: pageSeo.home.description,
  applicationName: site.name,
  referrer: "origin-when-cross-origin",
  creator: site.name,
  publisher: site.name,
  category: "games",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/images/ico.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
    ],
    shortcut: "/images/ico.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EEF7FF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mPlusRounded.variable} ${nunito.variable}`}>
      <body>
        <JsonLd data={websiteSchema} />
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
