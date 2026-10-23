import { JsonLd } from "@/components/json-ld";
import { LegalDocument } from "@/components/legal-document";
import { createPageMetadata, pageJsonLd } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site-data";

const page = {
  title: "Privacy Notice",
  description: "How Sumnora handles information submitted through its website and during client engagements.",
  path: "/legal/privacy",
};

export const metadata = createPageMetadata(page);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ ...page, trail: [["Privacy notice", page.path]] })} />
      <LegalDocument
        title="Privacy notice"
        updated="October 4, 2026"
        intro="This website collects only the information you choose to send to Sumnora by email or direct correspondence."
      >
        <h2>1. Who we are</h2>
        <p>
          Sumnora is responsible for the information described in this notice. References to &ldquo;Sumnora&rdquo;,
          &ldquo;we&rdquo;, or &ldquo;us&rdquo; in this notice mean Sumnora.
        </p>
        <h2>2. Information you provide</h2>
        <p>
          We may receive your name, organization, role, contact details, and the contents of your inquiry. Please do not
          send production credentials, API keys, access tokens, customer records, or personal data about other people
          through email.
        </p>
        <h2>3. How information is used</h2>
        <p>
          We use correspondence to respond to inquiries, scope potential engagements, deliver contracted work, maintain
          security, and meet applicable legal obligations.
        </p>
        <h2>4. Client data during engagements</h2>
        <p>
          Where an engagement requires access to your systems or data, that access is governed by the written agreement
          for that engagement, granted on a least-privilege basis, and revoked at handover. Client data is not used to
          train models.
        </p>
        <h2>5. Cookies and analytics</h2>
        <p>
          This site sets one cookie by default, <code>cc_cookie</code>, which records your cookie choice so we do not ask
          again on every page. It contains no identifier we can link to you.
        </p>
        <p>
          If you accept analytics, we load Google Analytics 4, which sets <code>_ga</code> cookies to distinguish
          visitors and measure which pages are read. Nothing is requested from Google unless you accept. Google acts as
          our processor for this and may process the data outside the Philippines; see Google&rsquo;s own privacy
          documentation for how it handles that data. We do not use advertising cookies, cross-site tracking, or
          remarketing, and we do not sell or share this information.
        </p>
        <p>
          You can change or withdraw your choice at any time through the cookie preferences link in the footer.
          Withdrawing consent stops the analytics tag loading and deletes the <code>_ga</code> cookies it set.
        </p>
        <h2>6. Sharing and service providers</h2>
        <p>
          We do not sell personal information. Information may be processed by service providers supporting email,
          hosting, security, or business operations, subject to appropriate arrangements.
        </p>
        <h2>7. Retention and security</h2>
        <p>
          We retain correspondence only as long as reasonably needed for the purpose it was received, legal compliance, or
          legitimate business records. No method of transmission or storage is completely secure.
        </p>
        <h2>8. Your choices</h2>
        <p>
          You may ask about, correct, or request deletion of information you provided, subject to applicable law and
          legitimate recordkeeping needs.
        </p>
        <h2>9. Contact</h2>
        <p>
          For privacy questions, contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalDocument>
    </>
  );
}
