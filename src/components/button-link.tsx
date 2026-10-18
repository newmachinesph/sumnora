import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: ReactNode;
  tone?: "primary" | "outline" | "light";
}) {
  return (
    <Link className={`button-link button-${tone}`} href={href}>
      <span>{children}</span>
      <ArrowUpRightIcon aria-hidden="true" size={17} weight="regular" />
    </Link>
  );
}
