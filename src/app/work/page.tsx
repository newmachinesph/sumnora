import { ArrowUpRightIcon, FacebookLogoIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Our Work",
  description:
    "Products Sumnora has designed, built, and runs in production, starting with Kain Na!, a Filipino recipe and meal-planning app.",
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

      {caseStudies.map((study) => (
        <article className="case-study" id={study.slug} key={study.slug}>
          <div className="section-shell case-study-head">
            <Reveal>
              <span className="section-kicker">{study.category}</span>
              <h2>{study.name}</h2>
              <p className="case-study-headline">{study.headline}</p>
            </Reveal>
            <Reveal className="case-study-intro" delay={0.08}>
              <p>{study.summary}</p>
              <div className="case-study-links">
                <a href={study.url} rel="noopener" target="_blank">
                  Visit {study.url.replace("https://", "")} <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" />
                </a>
                <a href={study.facebook} rel="noopener" target="_blank">
                  <FacebookLogoIcon aria-hidden="true" size={17} weight="regular" /> Follow on Facebook
                </a>
              </div>
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
              <Image {...study.images.recipes} sizes="(max-width: 800px) calc(100vw - 48px), 60vw" />
            </Reveal>
            <Reveal className="case-study-frame is-phone" delay={0.08}>
              <Image {...study.images.mobile} sizes="(max-width: 800px) 70vw, 24vw" />
            </Reveal>
          </div>

          <div className="section-shell case-study-highlights">
            {study.highlights.map((item, index) => (
              <Reveal delay={index * 0.04} key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="section-shell case-study-frame">
            <Image {...study.images.plan} sizes="(max-width: 1488px) calc(100vw - 48px), 1440px" />
          </Reveal>
        </article>
      ))}

      <CtaSection kicker="YOUR PRODUCT" title="Want something like this built? Bring us the problem." />
    </>
  );
}
