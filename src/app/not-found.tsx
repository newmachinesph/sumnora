import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="not-found section-shell">
      <LogoMark />
      <span>ERROR / 404</span>
      <h1>This page is not in the build.</h1>
      <p>The page may have moved, been renamed, or never shipped.</p>
      <Link href="/">
        Return to Sumnora <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" />
      </Link>
    </section>
  );
}
