import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata, pageJsonLd } from "@/lib/seo";
import { CONTACT_EMAIL, services } from "@/lib/site-data";

const page = {
  title: "How a Software Project with Sumnora Works",
  description:
    "Scoping call, written proposal with scope and price, weekly demos, documented handover. Plus straight answers on timelines, pricing, code ownership and AI use.",
  path: "/engagements",
};

export const metadata = createPageMetadata(page);

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

// Answers restate commitments made elsewhere on the site and in the legal pages; keep them in step.
const faqs = [
  [
    "How long does a project take?",
    `It depends on the service. Typical lengths: ${services.map((service) => `${service.name}, ${service.engagement}`).join("; ")}. Your proposal states the timeline for your project.`,
  ],
  [
    "How do you price a project?",
    "After the scoping call we send a written proposal with scope, team, timeline and price. We fix the price where we can commit to it and give a range where the unknowns are real, and the proposal says which parts are which.",
  ],
  [
    "Who owns the code when the project ends?",
    "The written agreement for each engagement sets out ownership of the code and other intellectual property; nothing on this website overrides it. At handover your team receives the code, the documentation, the access and the runbooks.",
  ],
  [
    "Do you use AI to write code?",
    "Yes, a lot of it. Models draft, generate and refactor code throughout a project, but an engineer reads, tests and approves every change before it ships. We check what your agreement permits before any of your code reaches a third-party model, and client data is never used to train models.",
  ],
  [
    "Do you work with clients outside the Philippines?",
    "Yes. Sumnora is based in the Philippines and works with teams anywhere. BarnesNest, one of the products we built, is a marketplace for homeowners across the United States.",
  ],
  [
    "Can you keep running the software after launch?",
    "Yes. We still run Kain Na!, LarongPinoy and FreeReviewer.ph, all of which we built. If your team would rather take it over, the handover includes documentation and runbooks so they can run it without us.",
  ],
  [
    "How quickly will you reply?",
    "Within two business days, either with questions or with a time for a scoping call. If we are not the right team for the work, we will say so.",
  ],
] as const;

const mailto = `mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`;

export default function EngagementsPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          ...page,
          type: "FAQPage",
          trail: [["How we engage", page.path]],
          page: {
            mainEntity: faqs.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          },
        })}
      />
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

      <section className="content-section section-shell partner-fit faq-section">
        <SectionHeading title="Questions we hear before every project." />
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <div key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
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
