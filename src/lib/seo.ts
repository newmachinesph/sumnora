import type { Metadata } from "next";

export const SITE_NAME = "Sumnora";
export const SITE_URL = "https://sumnora.com";
export const SITE_LOCALE = "en_PH";
export const SITE_LANGUAGE = "en-PH";
export const SITE_DESCRIPTION =
  "Sumnora is an AI-native software development boutique. We design, build, and ship production web, mobile, and AI products for teams that need senior engineering judgment.";
export const SITE_LAST_UPDATED = "2026-10-22";
export const OPEN_GRAPH_IMAGE = `${SITE_URL}/opengraph-image`;
export const TWITTER_IMAGE = `${SITE_URL}/twitter-image`;
export const OPEN_GRAPH_IMAGE_ALT = "Sumnora — Built for the work";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle,
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
      images: [{ url: OPEN_GRAPH_IMAGE, width: 1200, height: 630, alt: OPEN_GRAPH_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [TWITTER_IMAGE],
    },
  };
}
