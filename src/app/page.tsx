import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { AssuranceMotion, HeroMotionOverlay, ProductMotionShowcase } from "@/components/enterprise-visuals";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";
import { WorkCarousel } from "@/components/work-carousel";

export default function Home() {
  return (
    <>
      <section className="enterprise-home-hero section-shell">
        <div className="enterprise-hero-copy">
          <Reveal>
            <h1>AI-native engineering for <em>software that ships.</em></h1>
          </Reveal>
          <Reveal className="enterprise-hero-intro" delay={0.08}>
            <p>A boutique software studio in the Philippines, building production web, mobile, and AI products for teams anywhere.</p>
            <div>
              <ButtonLink href="/services">See what we build</ButtonLink>
              <Link href="/approach">How we work <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" /></Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-sculpture-wrap" delay={0.12}>
          <Image
            src="/brand/engineering-sculpture.webp"
            alt="A vermillion ribbon moving through a sequence of precisely aligned planes"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 94vw"
          />
          <HeroMotionOverlay />
        </Reveal>
      </section>

      <div className="credibility-rail section-shell">
        <span>Built for product teams</span>
        <strong>Founders</strong>
        <strong>Scale-ups</strong>
        <strong>Enterprise teams</strong>
        <strong>Operators</strong>
      </div>

      <section className="product-motion-section section-shell">
        <SectionHeading
          description="A selection of the work, in motion."
          layout="visual"
          title="From first commit to production."
        />
        <ProductMotionShowcase />
        <div className="product-link-rail">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              {service.name} <ArrowUpRightIcon aria-hidden="true" size={15} weight="regular" />
            </Link>
          ))}
        </div>
      </section>

      <WorkCarousel />

      <section className="home-founder-story">
        <div className="home-founder-image">
          <Image
            src="/brand/sumnora-team.webp"
            alt="A small engineering team in conversation over a screen"
            fill
            sizes="(max-width: 1100px) 100vw, 68vw"
          />
        </div>
        <div className="home-founder-copy">
          <Reveal>
            <span>Built in the Philippines</span>
            <h2>We build like the team that maintains it.</h2>
            <p>Because usually, that ends up being yours. Every engagement is written, tested, and documented for the people who inherit it.</p>
            <Link href="/company">About Sumnora <ArrowUpRightIcon aria-hidden="true" size={17} weight="regular" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="enterprise-assurance">
        <div className="section-shell assurance-heading">
          <Reveal><h2>Software should show its work.</h2></Reveal>
          <Reveal delay={0.08}><p>Every change stays connected to the reason it was made, the tests that cover it, and the engineer who approved it.</p></Reveal>
        </div>
        <div className="section-shell"><AssuranceMotion /></div>
        <div className="section-shell assurance-points">
          <div><strong>Reviewed by people</strong><span>AI drafts. Engineers decide.</span></div>
          <div><strong>Tested before merge</strong><span>Nothing ships on trust alone.</span></div>
          <div><strong>Documented to hand over</strong><span>The system outlives the engagement.</span></div>
        </div>
      </section>

      <CtaSection
        description="We take on a small number of engagements at a time, so the people who scope your work are the ones who build it."
        title="Bring us one problem worth solving."
        tone="cinematic"
      />
    </>
  );
}
