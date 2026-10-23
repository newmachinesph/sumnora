import type { Metadata } from "next";

export const SITE_NAME = "Sumnora";
export const SITE_URL = "https://sumnora.com";
export const SITE_LOCALE = "en_PH";
export const SITE_LANGUAGE = "en-PH";
export const SITE_DESCRIPTION =
  "Sumnora is a software studio in the Philippines that builds web, mobile and AI products for clients anywhere, with a senior engineer reviewing every change.";
export const SITE_LAST_UPDATED = "2026-10-23";
export const OPEN_GRAPH_IMAGE = `${SITE_URL}/opengraph-image`;
export const TWITTER_IMAGE = `${SITE_URL}/twitter-image`;
export const OPEN_GRAPH_IMAGE_ALT = "Sumnora — Built for the work";

type PageImage = { src: string; width: number; height: number; alt: string };

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
  image?: PageImage;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  image,
}: PageMetadataOptions): Metadata {
  const canonical = new URL(path, SITE_URL).toString();
  const socialTitle = absoluteTitle ?? `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [image ? { ...image, url: image.src } : { url: OPEN_GRAPH_IMAGE, width: 1200, height: 630, alt: OPEN_GRAPH_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image ? image.src : TWITTER_IMAGE],
    },
  };
}

type PageJsonLdOptions = {
  title: string;
  description: string;
  path: string;
  /** schema.org WebPage subtype, e.g. AboutPage, ContactPage, CollectionPage, FAQPage. */
  type?: string;
  /** Breadcrumb trail after Home, as [name, path] pairs. */
  trail: (readonly [string, string])[];
  /** Extra properties for the page node, such as mainEntity. */
  page?: Record<string, unknown>;
  /** Further nodes for the graph, such as a Service or CreativeWork. */
  nodes?: Record<string, unknown>[];
};

/** WebPage + BreadcrumbList graph for an inner page; the Organization and WebSite nodes come from the root layout. */
export function pageJsonLd({ title, description, path, type = "WebPage", trail, page, nodes = [] }: PageJsonLdOptions) {
  const url = new URL(path, SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: SITE_LANGUAGE,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...page,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [["Home", "/"] as const, ...trail].map(([name, itemPath], index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          item: new URL(itemPath, SITE_URL).toString(),
        })),
      },
      ...nodes,
    ],
  };
}
