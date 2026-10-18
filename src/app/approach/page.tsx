import { CtaSection } from "@/components/cta-section";
import { IconCardGrid } from "@/components/icon-card-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import { practiceCapabilities, principles } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "How We Build",
  description:
    "An AI-native engineering practice: discovery, architecture, delivery pipelines, evaluation, and a handover your team can actually run.",
  path: "/approach",
});

const deliveryStages = [
  {
    state: "Engagement opened",
    title: "Context is written down before code",
    text: "Goals, users, constraints, and the measure of success are agreed and recorded while they are still cheap to change.",
    capabilities: [practiceCapabilities[0], practiceCapabilities[1]],
  },
  {
    state: "Work in the open",
    title: "Scope and progress stay visible",
    text: "Decisions, tradeoffs, and what is actually done live in one place your team can read without asking us for a status update.",
    capabilities: [practiceCapabilities[2], practiceCapabilities[3]],
  },
  {
    state: "Change reviewed",
    title: "Nothing ships unreviewed",
    text: "Every change is tested, read by a person, and traceable back to the reason it was made.",
    capabilities: [practiceCapabilities[4]],
  },
  {
    state: "Handover complete",
    title: "The system outlives the engagement",
    text: "Documentation, access, runbooks, and the reasoning behind the architecture transfer with the code.",
    capabilities: [practiceCapabilities[7]],
  },
] as const;

const boundaries = [practiceCapabilities[5], practiceCapabilities[6]] as const;

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="HOW WE BUILD"
        title="AI accelerates. Engineers decide."
        description="One practice across every engagement: discovery, architecture, delivery pipelines, evaluation, and a handover your team can run without us."
      />

      <section className="content-section section-shell platform-record-section">
        <SectionHeading
          description="Models draft, generate, and refactor throughout our process. What ships is reviewed by the engineer whose name is on it. That distinction is the entire method."
          layout="split"
          title="Fast is not the same as finished."
        />
        <div className="platform-record">
          <div className="platform-record-main">
            <div className="platform-record-head">
              <span>ENGAGEMENT / 001</span>
              <strong>One continuous delivery record</strong>
            </div>
            <ol className="record-stage-list">
              {deliveryStages.map((stage) => (
                <li className="record-stage" key={stage.state}>
                  <i className="record-stage-marker" aria-hidden="true" />
                  <div className="record-stage-copy">
                    <small>{stage.state}</small>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </div>
                  <div className="record-stage-capabilities">
                    {stage.capabilities.map((capability) => {
                      const Icon = capability.icon;
                      return (
                        <span key={capability.name}>
                          <Icon aria-hidden="true" size={16} weight="regular" />
                          {capability.name}
                        </span>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="record-boundary">
            <span>WHERE WE DRAW LINES</span>
            <h3>Vendors change. Your system should not have to.</h3>
            <p>Model providers, hosting, and third-party services sit behind interfaces we own, so replacing one later is a change rather than a rewrite.</p>
            <div>
              {boundaries.map((capability) => {
                const Icon = capability.icon;
                return (
                  <span key={capability.name}>
                    <Icon aria-hidden="true" size={18} weight="regular" />
                    <b>{capability.name}</b>
                  </span>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="content-section section-shell architecture-section">
        <SectionHeading title="How we work, stated plainly." />
        <IconCardGrid cards={principles} className="architecture-list" iconSize={22} variant="row" />
      </section>

      <CtaSection
        description="Send the problem and the constraints. We will tell you how we would approach it, and whether we are the right team for it."
        title="See how this fits what you are building."
        tone="internal"
      />
    </>
  );
}
