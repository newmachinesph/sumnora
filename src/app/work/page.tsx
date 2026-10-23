import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { StoreBadges } from "@/components/store-badges";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata, pageJsonLd, SITE_URL } from "@/lib/seo";
import { caseStudies } from "@/lib/site-data";

// Names come from the data so a new case study can't be left out of the description.
const studyNames = new Intl.ListFormat("en", { type: "conjunction" }).format(caseStudies.map((study) => study.name));

const page = {
  title: "Our Work: Web and Mobile Apps in Production",
  description: `Case studies of products Sumnora designed and built: ${studyNames}, with screenshots, the stack and the numbers behind each.`,
  path: "/work",
};

export const metadata = createPageMetadata(page);

const workJsonLd = pageJsonLd({
  ...page,
  type: "CollectionPage",
  trail: [["Work", page.path]],
  page: {
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: study.metaTitle,
        url: `${SITE_URL}/work/${study.slug}`,
      })),
    },
  },
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workJsonLd} />
      <PageHero
        eyebrow="SELECTED WORK"
        title="Software in production, not in a deck."
        description="Products we designed, built, and still run. Open them, use them, and judge the work for yourself."
      />

      {caseStudies.map((study, index) => (
        <section className="home-work section-shell" id={study.slug} key={study.slug}>
          <Reveal className="home-work-copy">
            <span className="section-kicker">{study.category}</span>
            <h2>{study.name}</h2>
            <p>{study.summary}</p>
            <div>
              <Link href={`/work/${study.slug}`}>Read the case study <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" /></Link>
              <a href={study.url} rel="noopener" target="_blank">Visit {study.url.replace("https://", "")} <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" /></a>
            </div>
            <StoreBadges appStore={study.appStore} googlePlay={study.googlePlay} name={study.name} />
          </Reveal>
          <Reveal className="home-work-image" delay={0.08}>
            <Link aria-label={`${study.name} case study`} href={`/work/${study.slug}`}>
              <Image {...study.images.hero} priority={index === 0} sizes="(max-width: 1100px) calc(100vw - 48px), 60vw" />
            </Link>
          </Reveal>
        </section>
      ))}

      <CtaSection kicker="YOUR PRODUCT" title="Want something like this built? Bring us the problem." />
    </>
  );
}
