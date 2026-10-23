import { SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";
import { CONTACT_EMAIL, caseStudies, services } from "@/lib/site-data";

export const dynamic = "force-static";

// Plain-text map of the site for language models (llmstxt.org), built from the same data as the pages.
export function GET() {
  const lines = [
    "# Sumnora",
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "Models draft much of the code; an engineer reads, tests and approves every change before it ships. The people who scope a project are the ones who build it.",
    `Contact: ${CONTACT_EMAIL}. A person replies within two business days.`,
    "",
    "## Services",
    "",
    ...services.map(
      (service) => `- [${service.name}](${SITE_URL}/services/${service.slug}): ${service.description} Typical engagement: ${service.engagement}.`,
    ),
    "",
    "## Case studies",
    "",
    ...caseStudies.map((study) => {
      const facts = study.facts.map(([value, label]) => `${value}: ${label}`).join("; ");
      return `- [${study.name}](${SITE_URL}/work/${study.slug}): ${study.summary} Facts: ${facts}. Built with ${study.stack.join(", ")}. Live at ${study.url}.`;
    }),
    "",
    "## How we work",
    "",
    `- [How a project works](${SITE_URL}/engagements): scoping call, written proposal with scope and price, weekly demos, documented handover, and answers to common questions.`,
    `- [Approach](${SITE_URL}/approach): how AI is used in delivery and where engineers make the decisions.`,
    `- [Trust & security](${SITE_URL}/security): access control, credentials, engineering practice, backups, and rules for AI use.`,
    `- [Who we build for](${SITE_URL}/solutions): founders, scale-ups, enterprise teams, and operators without an engineering team.`,
    `- [Company](${SITE_URL}/company): a small software studio based in the Philippines, working with clients anywhere.`,
    "",
    "## Optional",
    "",
    `- [Privacy notice](${SITE_URL}/legal/privacy)`,
    `- [Website terms](${SITE_URL}/legal/terms)`,
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
