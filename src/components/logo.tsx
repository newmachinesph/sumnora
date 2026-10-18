import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/sumnora-mark.png"
      alt=""
      aria-hidden="true"
      width={146}
      height={256}
      className={className}
    />
  );
}

export function Logo({ inverse = false, onClick }: { inverse?: boolean; onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <Link className="brand-lockup" href="/" aria-label="Sumnora home" onClick={onClick}>
      <LogoMark className="brand-mark" />
      <span className="brand-word" data-inverse={inverse || undefined}>Sumnora</span>
    </Link>
  );
}
