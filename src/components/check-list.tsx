import { CheckIcon } from "@phosphor-icons/react/ssr";
import { StaggerItem, StaggerList } from "./motion";

/**
 * A staggered list of confirmed statements, each led by a check mark. Used for
 * service outcomes, engagement fit criteria, and the AI governance rules.
 */
export function CheckList({
  items,
  className,
  itemClassName,
  weight = "regular",
  size = 17,
}: {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
  weight?: "regular" | "bold";
  size?: number;
}) {
  return (
    <StaggerList className={className}>
      {items.map((item) => (
        <StaggerItem className={itemClassName} key={item}>
          <CheckIcon aria-hidden="true" size={size} weight={weight} />
          <p>{item}</p>
        </StaggerItem>
      ))}
    </StaggerList>
  );
}
