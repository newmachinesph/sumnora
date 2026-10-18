import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { createPageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Sumnora about a software project, an engineering partnership, security questions, or company matters. One address: hello@sumnora.com.",
  path: "/contact",
});

const guidance = [
  {
    label: "WHAT TO INCLUDE",
    text: "What the software needs to do, the constraints around it, your timeline, and who owns it after launch. Rough is fine; vague is harder.",
  },
  {
    label: "WHAT HAPPENS NEXT",
    text: "We reply within two business days with questions or a scoping call. If we are not the right team for the work, we will tell you that instead.",
  },
  {
    label: "EVERYTHING ELSE",
    text: "Security questions, responsible disclosure, invoices, contracts, and press all reach us at the same address. It goes to a person, not a queue.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        title="Start with the problem in front of you."
        description="One address, read by the people who would do the work. Tell us the concrete thing you are trying to build or fix."
      />

      <section className="content-section">
        <h2 className="sr-only">Contact</h2>
        <div className="contact-grid section-shell">
          <Reveal className="contact-primary">
            <span>GENERAL & PROJECTS</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}{" "}
              <ArrowUpRightIcon aria-hidden="true" size={24} weight="regular" />
            </a>
            <p>
              Projects, partnerships, security, contracts, and general
              correspondence.
            </p>
          </Reveal>
          {guidance.map((item, index) => (
            <Reveal
              className="contact-item"
              delay={0.05 + index * 0.05}
              key={item.label}
            >
              <span>{item.label}</span>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-note">
        <div className="section-shell">
          <h2 className="sr-only">Data safety</h2>
          <span>DATA SAFETY</span>
          <p>
            Do not send production credentials, API keys, access tokens,
            customer records, or personal data by email. If the work needs them,
            we will set up a proper channel first.
          </p>
        </div>
      </section>
    </>
  );
}
