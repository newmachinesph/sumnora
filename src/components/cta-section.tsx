import { ButtonLink } from "./button-link";
import { Reveal } from "./motion";

type CtaTone = "simple" | "cinematic" | "internal" | "close";

/**
 * Every page closes with the same ask. This collapses the four hand-written
 * closing sections into one component; `tone` picks the existing section shell
 * so each page keeps the visual treatment it already had.
 */
export function CtaSection({
  kicker,
  title,
  description,
  action = "Start a project",
  href = "/contact",
  tone = "simple",
}: {
  kicker?: string;
  title: string;
  description?: string;
  action?: string;
  href?: string;
  tone?: CtaTone;
}) {
  if (tone === "internal") {
    return (
      <section className="internal-cta">
        <div className="section-shell internal-cta-grid">
          <Reveal>
            <h2>{title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            {description && <p>{description}</p>}
            <ButtonLink href={href} tone="light">
              {action}
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    );
  }

  if (tone === "close") {
    return (
      <section className="product-close section-shell">
        <Reveal>
          <h2>{title}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          {description && <p>{description}</p>}
          <ButtonLink href={href}>{action}</ButtonLink>
        </Reveal>
      </section>
    );
  }

  return (
    <section className={`${tone === "cinematic" ? "cinematic-cta" : "simple-cta"} section-shell`}>
      <Reveal>
        {kicker && <span>{kicker}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </Reveal>
      <ButtonLink href={href}>{action}</ButtonLink>
    </section>
  );
}
