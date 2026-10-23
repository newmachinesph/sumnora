import { JsonLd } from "@/components/json-ld";
import { LegalDocument } from "@/components/legal-document";
import { createPageMetadata, pageJsonLd } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site-data";

export default function TermsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ ...page, trail: [["Website terms", page.path]] })} />
      <LegalDocument
        title="Website terms"
        updated="October 4, 2026"
        intro="These terms apply to this informational Sumnora website. Services are provided only under a separate written agreement."
      >
        <h2>1. Who we are</h2>
        <p>
          This is the Sumnora website. References to &ldquo;Sumnora&rdquo;, &ldquo;we&rdquo;, or &ldquo;us&rdquo; in
          these terms mean Sumnora.
        </p>
        <h2>2. Informational purpose</h2>
        <p>
          This site describes the services Sumnora offers. Descriptions, timelines, and indicative engagement lengths are
          general information, not a binding offer or a commitment to any particular scope, price, or availability.
        </p>
        <h2>3. Engagements are contracted separately</h2>
        <p>
          Any work Sumnora performs is governed by a written agreement covering scope, deliverables, fees, intellectual
          property, confidentiality, and liability. Nothing on this site varies such an agreement.
        </p>
        <h2>4. No professional advice</h2>
        <p>
          Website content is general information about software engineering practice. It is not legal, financial,
          security, or other professional advice, and should not be relied on as a substitute for advice from a qualified
          professional.
        </p>
        <h2>5. Intellectual property</h2>
        <p>
          The Sumnora name, symbol, website design, copy, and original materials are owned by Sumnora or their respective
          licensors. No rights are granted except to access this website for lawful informational use.
        </p>
        <h2>6. Acceptable use</h2>
        <p>
          Do not interfere with the website, attempt unauthorized access, misrepresent affiliation with Sumnora, or use
          site materials unlawfully.
        </p>
        <h2>7. Contact</h2>
        <p>
          For questions about these terms, contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalDocument>
    </>
  );
}

const page = {
  title: "Website Terms",
  description: "Terms governing use of the Sumnora software development studio website.",
  path: "/legal/terms",
};

export const metadata = createPageMetadata(page);
