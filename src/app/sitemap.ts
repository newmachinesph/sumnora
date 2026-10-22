import type { MetadataRoute } from "next";
import { SITE_LAST_UPDATED, SITE_URL } from "@/lib/seo";
import { caseStudies, services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_UPDATED,
      images: [`${SITE_URL}/brand/engineering-sculpture.webp`],
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: SITE_LAST_UPDATED,
      images: caseStudies.map((study) => `${SITE_URL}${study.images.hero.src}`),
    },
    { url: `${SITE_URL}/services`, lastModified: SITE_LAST_UPDATED },
    { url: `${SITE_URL}/approach`, lastModified: SITE_LAST_UPDATED },
    { url: `${SITE_URL}/solutions`, lastModified: SITE_LAST_UPDATED },
    { url: `${SITE_URL}/security`, lastModified: SITE_LAST_UPDATED },
    {
      url: `${SITE_URL}/company`,
      lastModified: SITE_LAST_UPDATED,
      images: [`${SITE_URL}/brand/sumnora-team.webp`],
    },
    { url: `${SITE_URL}/engagements`, lastModified: SITE_LAST_UPDATED },
    { url: `${SITE_URL}/contact`, lastModified: SITE_LAST_UPDATED },
    { url: `${SITE_URL}/legal/privacy`, lastModified: SITE_LAST_UPDATED },
    { url: `${SITE_URL}/legal/terms`, lastModified: SITE_LAST_UPDATED },
  ];

  return [
    ...pages,
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/work/${study.slug}`,
      lastModified: SITE_LAST_UPDATED,
      images: Object.values(study.images).map((image) => `${SITE_URL}${image.src}`),
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: SITE_LAST_UPDATED,
    })),
  ];
}
