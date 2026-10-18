import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "How We Engage",
  description:
    "How a Sumnora engagement runs: a scoping call, a written proposal with scope and price, then weekly demos through to a documented handover.",
  path: "/engagements",
});

const fit = [
  "You have a real problem with a deadline and a budget, not an idea you want validated for free.",
  "You want a small senior team, and one person accountable for what ships.",
  "You can give us access to the people who know how the work actually happens today.",
] as const;

const process = [
  ["Scoping call", "One conversation to understand the problem, the constraints, the timeline, and what success actually means to you."],
  ["Written proposal", "Scope, approach, team, timeline, and price. Fixed where we can commit, ranged where the unknowns are real — and we say which is which."],
  ["Build and handover", "Working software from the first week, a demo every week, and a documented handover your engineers can pick up."],
] as const;

const mailto = `mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`;

export default function EngagementsPage() {
  return (
    <>
      <PageHero
        eyebrow="HOW WE ENGAGE"
        title="Bring the problem. We will scope the build."
        description="We take on a small number of engagements at a time so that the people who scope your work are the ones who build it."
      />

      <section className="content-section section-shell partner-fit">
        <SectionHeading title="A good fit is specific." />
        <CheckList className="fit-list" items={fit} />
      </section>

      <section className="partner-process content-section">
        <div className="section-shell">
          <SectionHeading title="Three steps, no theatre." />
          <div className="process-grid">
            {process.map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="apply-section section-shell">
        <Reveal className="apply-copy">
          <span>START A CONVERSATION</span>
          <h2>Tell us what you are building.</h2>
          <p>Include what the software needs to do, the constraints you are working inside, your timeline, and who will own it once it is live.</p>
        </Reveal>
        <Reveal className="apply-panel" delay={0.08}>
          <span>PROJECT INQUIRY</span>
          <a href={mailto}>{CONTACT_EMAIL}</a>
          <p>We reply within two business days, either with questions or with a scoping call. If we are not the right team for it, we will say so.</p>
          <ButtonLink href={mailto}>Email the team</ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
