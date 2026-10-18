import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { FactRail } from "@/components/fact-rail";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Company",
  description:
    "Sumnora is an AI-native software development boutique built in the Philippines, working with product teams anywhere.",
  path: "/company",
});

const facts = [
  { term: "Company", value: "Software studio" },
  { term: "Built for", value: "Product teams" },
  { term: "Practice", value: "AI-native delivery" },
  { term: "Based", value: "Philippines" },
] as const;

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="A small team that ships."
        description="We build software for the people who have to live with it afterwards — founders, product teams, and operators who need working systems rather than more headcount."
      />

      <FactRail facts={facts} />

      <figure className="founder-portrait section-shell">
        <div className="founder-photo">
          <Image
            src="/brand/sumnora-team.webp"
            alt="A small engineering team reviewing work together"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 94vw"
          />
        </div>
        <figcaption className="founder-caption">
          <p>Our conviction: software should make responsibility clearer, not hide it behind a process.</p>
        </figcaption>
      </figure>

      <section className="company-brief section-shell">
        <Reveal className="company-brief-title">
          <h2>Software that respects the seriousness of the work.</h2>
        </Reveal>
        <Reveal className="company-brief-copy" delay={0.08}>
          <p>
            Sumnora combines product engineering, systems design, and disciplined security thinking. We start with the
            work a team actually repeats, understand who is accountable for it, and build the system around that path
            rather than around a technology we wanted to use.
          </p>
        </Reveal>
      </section>

      <section className="company-principles">
        <div className="section-shell company-principles-grid">
          <h2 className="sr-only">Our principles</h2>
          <div>
            <h3>Useful before impressive.</h3>
            <p>Every engagement has to remove a real constraint. Novelty is not a deliverable.</p>
          </div>
          <div>
            <h3>Judgment stays human.</h3>
            <p>AI writes a great deal of our code. An engineer decides what ships and answers for it.</p>
          </div>
          <div>
            <h3>Trust is engineered.</h3>
            <p>Access, review, testing, and documentation belong in the work from the first commit.</p>
          </div>
        </div>
      </section>

      <CtaSection action="Work with Sumnora" title="Tell us what you are building." />
    </>
  );
}
