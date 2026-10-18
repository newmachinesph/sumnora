/**
 * A definition-list rail of short company facts. Kept as a `dl` so the
 * term/value relationship survives for screen readers.
 */
export function FactRail({
  facts,
  className = "company-fact-rail section-shell",
}: {
  facts: readonly { term: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {facts.map((fact) => (
        <div key={fact.term}>
          <dt>{fact.term}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
