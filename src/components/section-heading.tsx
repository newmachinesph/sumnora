import type { ReactNode } from "react";
import { Reveal } from "./motion";

/**
 * The heading pattern used across internal sections: an optional kicker, a
 * display heading, and optional supporting copy revealed just behind it.
 *
 * `layout` selects which of the existing section shells wraps the heading, so
 * the rendered classes stay identical to the hand-written markup they replaced.
 */
export function SectionHeading({
  kicker,
  title,
  description,
  layout = "stacked",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  layout?: "stacked" | "split" | "visual";
  className?: string;
}) {
  const wrapper = {
    stacked: "internal-section-head",
    split: "intro-split",
    visual: "visual-section-heading",
  }[layout];

  const heading = (
    <>
      {kicker && <span className="section-kicker">{kicker}</span>}
      <h2 className={layout === "visual" ? undefined : "editorial-heading"}>{title}</h2>
    </>
  );

  // The split and visual shells are grids: heading and copy are separate cells,
  // so each needs its own Reveal. The stacked shell reveals as one block.
  if (layout === "stacked") {
    return (
      <Reveal className={className ? `${wrapper} ${className}` : wrapper}>
        {heading}
        {description && <p>{description}</p>}
      </Reveal>
    );
  }

  return (
    <div className={className ? `${wrapper} ${className}` : wrapper}>
      <Reveal>{heading}</Reveal>
      {description && (
        <Reveal delay={0.08}>
          <p>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
