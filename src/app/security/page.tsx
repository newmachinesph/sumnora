import {
  ClipboardTextIcon,
  FileTextIcon,
  FingerprintIcon,
  KeyIcon,
  ShieldCheckIcon,
  WarningIcon,
} from "@phosphor-icons/react/ssr";
import { ButtonLink } from "@/components/button-link";
import { CheckList } from "@/components/check-list";
import { IconCardGrid } from "@/components/icon-card-grid";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Trust & Security",
  description:
    "How Sumnora handles client code, credentials, and data — access control, engineering practice, operational resilience, and disclosed use of AI.",
  path: "/security",
});

const controls = [
  {
    icon: FingerprintIcon,
    title: "Access & identity",
    items: ["Least-privilege client access", "MFA and passkeys", "Named access per engagement", "Offboarding on handover"],
  },
  {
    icon: KeyIcon,
    title: "Credentials & data",
    items: ["No shared logins", "Managed secret storage", "Encrypted in transit and at rest", "Client data deleted on request"],
  },
  {
    icon: ClipboardTextIcon,
    title: "Engineering practice",
    items: ["Peer-reviewed changes", "Automated test suites", "Dependency scanning", "Documented runbooks"],
  },
  {
    icon: ShieldCheckIcon,
    title: "Operational resilience",
    items: ["Automated backups", "Restore testing", "Incident response", "Vendor risk review"],
  },
] as const;

const aiRules = [
  "Generated code is read and understood by the engineer who ships it.",
  "Model output is tested like any other change, never merged on trust.",
  "We check what your agreement permits before your code reaches a third-party model.",
  "Agents get narrow permissions, approved tools, and explicit stopping conditions.",
] as const;

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="TRUST & SECURITY"
        title="Trust is a system property."
        description="An engineering partner ends up holding your credentials, your codebase, and sometimes your customers' data. These are the controls that come with us by default."
      />

      <section className="control-section content-section">
        <div className="section-shell">
          <SectionHeading kicker="Baseline controls" title="What we bring to every engagement." />
          <IconCardGrid cards={controls} className="control-grid" />
        </div>
      </section>

      <section className="ai-governance section-shell content-section">
        <SectionHeading kicker="Disclosed AI use" title="We use AI. Here is exactly how." />
        <div className="ai-governance-grid">
          <Reveal className="ai-model-card">
            <div className="ai-model-top">
              <FileTextIcon aria-hidden="true" size={22} weight="regular" />
              <span>OUTPUT REVIEW / REQUIRED</span>
            </div>
            <h3>Generated change</h3>
            <p>Drafted from 6 repository files</p>
            <div className="source-stack" aria-label="Example source files">
              <span>
                <FileTextIcon aria-hidden="true" size={13} weight="regular" />
                Spec
              </span>
              <span>
                <FileTextIcon aria-hidden="true" size={13} weight="regular" />
                Schema
              </span>
              <span>
                <FileTextIcon aria-hidden="true" size={13} weight="regular" />
                Tests
              </span>
              <b>+3</b>
            </div>
            <div className="review-gate">
              <WarningIcon aria-hidden="true" size={15} weight="regular" />
              No change reaches production until an engineer reviews and approves it.
            </div>
          </Reveal>
          <CheckList className="ai-rules" items={aiRules} size={15} weight="bold" />
        </div>
      </section>

      <section className="security-note" aria-labelledby="security-questions">
        <div className="section-shell">
          <Reveal className="security-note-copy">
            <span>BEFORE YOU ASK</span>
            <h2 id="security-questions">Happy to answer the hard questions first.</h2>
            <p>
              If your security team needs to review us before work starts, ask early. We would rather answer a
              questionnaire up front than discover a blocker halfway through a build.
            </p>
          </Reveal>
          <div className="security-note-action">
            <ButtonLink href="/contact">Ask a security question</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
