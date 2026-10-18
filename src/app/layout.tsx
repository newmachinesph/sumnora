import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import "./globals.css";
import { CookieConsentBanner } from "@/components/cookie-consent";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FACEBOOK_DOMAIN_VERIFICATION } from "@/lib/site-data";
import {
  OPEN_GRAPH_IMAGE,
  OPEN_GRAPH_IMAGE_ALT,
  SITE_DESCRIPTION,
  SITE_LANGUAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  TWITTER_IMAGE,
} from "@/lib/seo";

const HOME_TITLE = "Sumnora | AI-Native Software Development Studio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Software development",
  alternates: { canonical: SITE_URL },
  verification: { other: { "facebook-domain-verification": FACEBOOK_DOMAIN_VERIFICATION } },
  openGraph: {
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
    images: [{ url: OPEN_GRAPH_IMAGE, width: 1200, height: 630, alt: OPEN_GRAPH_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: [TWITTER_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = { themeColor: "#fbf7f2", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={SITE_LANGUAGE}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
