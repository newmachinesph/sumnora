import { CheckIcon } from "@phosphor-icons/react/ssr";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/motion";
import { WorkflowRail } from "@/components/workflow-rail";
import { createPageMetadata, pageJsonLd } from "@/lib/seo";
import { audiences } from "@/lib/site-data";

const page = {
  title: "Software for Founders, Scale-ups and Enterprise Teams",
  description:
    "Founders shipping a first product, scale-ups short on senior engineers, enterprise teams with procurement to clear, and operators with no engineering team.",
  path: "/solutions",
};

export const metadata = createPageMetadata(page);

const handoff = ["Problem", "Scope", "Design", "Build", "Review", "Handover"];

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ ...page, trail: [["Solutions", page.path]] })} />
      <PageHero
        title="Built around where you actually are."
        description="A first product and a fifth platform migration need different things from an engineering partner. The practice stays the same; the shape of the engagement does not."
      />

      <section className="content-section section-shell solution-list">
        {audiences.map((item) => {
          const Icon = item.icon;
          return (
            <article className="solution-row" key={item.audience}>
              <Reveal className="solution-number">
                <Icon aria-hidden="true" size={28} weight="light" />
              </Reveal>
              <Reveal className="solution-main">
                <strong className="solution-audience">{item.audience}</strong>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </Reveal>
              <Reveal className="solution-points" delay={0.08}>
                {item.points.map((point) => (
                  <div key={point}>
                    <CheckIcon aria-hidden="true" size={15} weight="bold" />
                    <span>{point}</span>
                  </div>
                ))}
              </Reveal>
            </article>
          );
        })}
      </section>

      <section className="role-handoff">
        <h2 className="sr-only">How an engagement moves</h2>
        <div className="section-shell">
          <Reveal>
            <WorkflowRail className="handoff-list" label="Engagement sequence" steps={handoff} />
          </Reveal>
          <Reveal delay={0.08}>
            <p>Every engagement ends the same way: your team holds working software, the documentation, and the reasoning behind it.</p>
          </Reveal>
        </div>
      </section>

      <CtaSection kicker="YOUR PROBLEM" title="Bring one problem worth solving. We will scope it together." />
    </>
  );
}
