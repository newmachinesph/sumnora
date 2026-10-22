import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Our Work",
  description:
    "Products Sumnora has designed, built, and runs in production: Kain Na!, a Filipino recipe and meal-planning app, and LarongPinoy, ten Filipino games that play offline.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
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
