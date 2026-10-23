import type { CSSProperties } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { ServiceVectorVisual } from "@/components/service-vector-visual";
import { createPageMetadata, pageJsonLd, SITE_URL } from "@/lib/seo";
import { services } from "@/lib/site-data";

const page = {
  title: "Software Development Services",
  description:
    "Product engineering, AI and LLM features, automation, platform work and technical advisory from one senior team, in engagements of 1 to 12 weeks.",
  path: "/services",
};

export const metadata = createPageMetadata(page);

const servicesJsonLd = pageJsonLd({
  ...page,
  type: "CollectionPage",
  trail: [["Services", page.path]],
  page: {
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.name,
        url: `${SITE_URL}/services/${service.slug}`,
      })),
    },
  },
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <PageHero
        title="Five ways we get software shipped."
        description="Start with the engagement you need. The same senior team carries the context across whichever ones follow."
      />

      <section className="product-showcase-list section-shell">
        {services.map((service) => (
          <article
            className="product-showcase-row"
            key={service.slug}
            style={{ "--product-accent": service.accent } as CSSProperties}
          >
            <div className="product-showcase-visual">
              <ServiceVectorVisual accent={service.accent} slug={service.slug} />
            </div>
            <Reveal className="product-showcase-copy">
              <div className="product-showcase-status">
                <span className="product-status">
                  <i /> {service.engagement}
                </span>
              </div>
              <h2>{service.name}</h2>
              <p>{service.short}</p>
              <Link href={`/services/${service.slug}`}>
                Explore {service.name} <ArrowUpRightIcon aria-hidden="true" size={17} weight="regular" />
              </Link>
            </Reveal>
          </article>
        ))}
      </section>

      <CtaSection
        action="See how we work"
        href="/approach"
        title="One team, one practice, whichever service you start with."
      />
    </>
  );
}
