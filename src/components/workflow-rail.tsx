import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

/**
 * An ordered rail of stages separated by arrows, used for both the numbered
 * service workflow and the unnumbered handoff sequence. The arrow between
 * stages is decorative — the list order already carries the meaning.
 */
export function WorkflowRail({
  steps,
  numbered = false,
  className,
  label,
  arrowSize = 24,
}: {
  steps: readonly string[];
  numbered?: boolean;
  className?: string;
  label?: string;
  arrowSize?: number;
}) {
  return (
    <ol aria-label={label} className={className}>
      {steps.map((step, index) => (
        <li key={step}>
          {numbered && <span>{String(index + 1).padStart(2, "0")}</span>}
          {numbered ? <strong>{step}</strong> : <span>{step}</span>}
          {index < steps.length - 1 && <ArrowRightIcon aria-hidden="true" size={arrowSize} weight="regular" />}
        </li>
      ))}
    </ol>
  );
}
