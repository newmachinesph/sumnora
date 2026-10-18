import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { Reveal, StaggerItem, StaggerList } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceVectorVisual } from "@/components/service-vector-visual";
import { WorkflowRail } from "@/components/workflow-rail";
import { createPageMetadata, SITE_URL } from "@/lib/seo";
import { services } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service
    ? createPageMetadata({
        title: service.name,
        absoluteTitle: service.metaTitle,
        description: service.metaDescription,
        path: `/services/${service.slug}`,
      })
    : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const style = { "--product-accent": service.accent } as CSSProperties;
  const canonicalUrl = `${SITE_URL}/services/${service.slug}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: service.metaTitle,
        description: service.metaDescription,
        inLanguage: "en-PH",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${canonicalUrl}#service` },
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: service.name,
        description: service.description,
        url: canonicalUrl,
        serviceType: service.name,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <div className="product-detail" style={style}>
      <JsonLd data={serviceJsonLd} />
      <section className="product-hero section-shell">
        <Reveal className="product-hero-title">
          <span className="eyebrow">{service.name}</span>
          <h1>{service.headline}</h1>
        </Reveal>
        <Reveal className="product-hero-side" delay={0.08}>
          <ServiceVectorVisual accent={service.accent} compact slug={service.slug} />
          <span className="product-status">
            <i /> Typical engagement: {service.engagement}
          </span>
          <p>{service.description}</p>
          <ButtonLink href="/contact">Start a project</ButtonLink>
        </Reveal>
      </section>

      <section className="product-workflow">
        <div className="section-shell">
          <h2 className="sr-only">How {service.name} runs</h2>
          <WorkflowRail className="product-workflow-rail" numbered steps={service.workflow} />
        </div>
      </section>

      <section className="content-section section-shell product-outcomes">
        <Reveal>
          <h2 className="editorial-heading">What you get.</h2>
        </Reveal>
        <CheckList className="outcome-list" itemClassName="outcome-row" items={service.outcomes} size={19} />
      </section>

      <section className="product-capability-section content-section">
        <div className="section-shell">
          <SectionHeading title="The work, in detail." />
          <StaggerList className="product-capability-grid">
            {service.capabilities.map((capability) => (
              <StaggerItem className="product-capability-card" key={capability.name}>
                <div className="product-capability-media" aria-hidden="true">
                  <Image
                    src={capability.image}
                    alt=""
                    fill
                    sizes="(max-width: 520px) calc(100vw - 30px), (max-width: 800px) calc(50vw - 15px), (max-width: 1100px) calc(50vw - 24px), (min-width: 1488px) 360px, calc(25vw - 12px)"
                  />
                </div>
                <div className="product-capability-copy">
                  <h3>{capability.name}</h3>
                  <p>{capability.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <CtaSection
        description="Tell us the problem, the constraints, and the deadline. We will come back with scope, approach, and a price."
        title="Bring us the hard part."
        tone="close"
      />
    </div>
  );
}
