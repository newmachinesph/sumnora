import type { Icon } from "@phosphor-icons/react";
import { CircleIcon } from "@phosphor-icons/react/ssr";
import { StaggerItem, StaggerList } from "./motion";

export type IconCard = {
  icon: Icon;
  title: string;
  text?: string;
  items?: readonly string[];
};

/**
 * A staggered grid of icon-led cards. `variant` chooses between the two shapes
 * already in the stylesheet: a card carrying a bulleted list, or a row carrying
 * a paragraph.
 */
export function IconCardGrid({
  cards,
  variant = "card",
  className,
  iconSize = 25,
}: {
  cards: readonly IconCard[];
  variant?: "card" | "row";
  className?: string;
  iconSize?: number;
}) {
  return (
    <StaggerList className={className}>
      {cards.map((card) => {
        const CardIcon = card.icon;
        return (
          <StaggerItem className={variant === "card" ? "control-card" : "architecture-row"} key={card.title}>
            <CardIcon aria-hidden="true" size={iconSize} weight="light" />
            <h3>{card.title}</h3>
            {card.text && <p>{card.text}</p>}
            {card.items?.map((item) => (
              <div key={item}>
                <CircleIcon aria-hidden="true" size={9} weight="fill" />
                <span>{item}</span>
              </div>
            ))}
          </StaggerItem>
        );
      })}
    </StaggerList>
  );
}
