import type { Metadata } from "next";
import { ArrowUpRightIcon, FacebookLogoIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { StoreBadges } from "@/components/store-badges";
import { Reveal } from "@/components/motion";
import { createPageMetadata, pageJsonLd, SITE_URL } from "@/lib/seo";
import { caseStudies } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  return study
    ? createPageMetadata({
        title: study.metaTitle,
        description: study.metaDescription,
        path: `/work/${study.slug}`,
        image: study.images.hero,
      })
    : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  const path = `/work/${study.slug}`;
  const caseStudyId = `${SITE_URL}${path}#casestudy`;
  const caseStudyJsonLd = pageJsonLd({
    title: study.metaTitle,
    description: study.metaDescription,
    path,
    trail: [["Work", "/work"], [study.name, path]],
    page: { mainEntity: { "@id": caseStudyId }, primaryImageOfPage: `${SITE_URL}${study.images.hero.src}` },
    nodes: [
      {
        "@type": "CreativeWork",
        "@id": caseStudyId,
        name: study.metaTitle,
        headline: study.headline,
        abstract: study.summary,
        genre: "Case study",
        image: Object.values(study.images).map((image) => `${SITE_URL}${image.src}`),
        creator: { "@id": `${SITE_URL}/#organization` },
        keywords: study.stack.join(", "),
        about: {
          "@type": "WebSite",
          name: study.name,
          url: study.url,
          sameAs: [study.facebook, study.appStore, study.googlePlay].filter(Boolean),
        },
      },
    ],
  });

  return (
    <>
      <JsonLd data={caseStudyJsonLd} />
      <article className="case-study" id={study.slug}>
        <div className="section-shell case-study-head">
          <Reveal>
            <span className="section-kicker">{study.category}</span>
            <h1>{study.name}</h1>
            <p className="case-study-headline">{study.headline}</p>
          </Reveal>
          <Reveal className="case-study-intro" delay={0.08}>
            <p>{study.summary}</p>
            <div className="case-study-links">
              <a href={study.url} rel="noopener" target="_blank">
                Visit {study.url.replace("https://", "")} <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" />
              </a>
              {study.facebook && (
                <a href={study.facebook} rel="noopener" target="_blank">
                  <FacebookLogoIcon aria-hidden="true" size={17} weight="regular" /> Follow on Facebook
                </a>
              )}
            </div>
            <StoreBadges appStore={study.appStore} googlePlay={study.googlePlay} name={study.name} />
          </Reveal>
        </div>

        <Reveal className="section-shell case-study-frame">
          <Image {...study.images.hero} priority sizes="(max-width: 1488px) calc(100vw - 48px), 1440px" />
        </Reveal>

        <div className="section-shell case-study-facts">
          {study.facts.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
          <div>
            <strong>Built with</strong>
            <span>{study.stack.join(" · ")}</span>
          </div>
        </div>

        <div className="section-shell case-study-gallery">
          <Reveal className="case-study-frame">
            <Image {...study.images.gallery} sizes="(max-width: 800px) calc(100vw - 48px), 60vw" />
          </Reveal>
          <Reveal className="case-study-frame is-phone" delay={0.08}>
            <Image {...study.images.mobile} sizes="(max-width: 800px) 70vw, 24vw" />
          </Reveal>
        </div>

        <div className="section-shell case-study-highlights">
          {study.highlights.map((item, index) => (
            <Reveal delay={index * 0.04} key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-shell case-study-frame">
          <Image {...study.images.feature} sizes="(max-width: 1488px) calc(100vw - 48px), 1440px" />
        </Reveal>
      </article>

      <CtaSection kicker="YOUR PRODUCT" title="Want something like this built? Bring us the problem." />
    </>
  );
}
