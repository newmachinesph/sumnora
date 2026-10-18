import type { CSSProperties } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { ServiceVectorVisual } from "@/components/service-vector-visual";
import { createPageMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Software Development Services",
  description:
    "Product engineering, AI engineering, automation, platform reliability, and technical advisory from a small senior team.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
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
