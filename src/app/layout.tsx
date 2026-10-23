import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import "./globals.css";
import { CookieConsentBanner } from "@/components/cookie-consent";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { CONTACT_EMAIL, FACEBOOK_DOMAIN_VERIFICATION, caseStudies, services } from "@/lib/site-data";
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

const HOME_TITLE = "Sumnora | AI-Native Software Studio in the Philippines";

// Rendered on every page so each page's graph can point at the same Organization and WebSite by @id.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      slogan: "Built for the work.",
      email: CONTACT_EMAIL,
      address: { "@type": "PostalAddress", addressCountry: "PH" },
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: CONTACT_EMAIL },
      knowsAbout: [
        ...services.map((service) => service.name),
        ...new Set(caseStudies.flatMap((study) => study.stack)),
      ],
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/sumnora-icon-512.png`,
        contentUrl: `${SITE_URL}/brand/sumnora-icon-512.png`,
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: SITE_LANGUAGE,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

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
        <JsonLd data={siteJsonLd} />
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
