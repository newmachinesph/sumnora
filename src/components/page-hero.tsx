import { Reveal } from "./motion";

export function PageHero({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero section-shell${compact ? " is-compact" : ""}`}>
      <Reveal className="page-hero-copy">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
      </Reveal>
      <Reveal className="page-hero-intro" delay={0.08}>
        <p>{description}</p>
      </Reveal>
    </section>
  );
}
