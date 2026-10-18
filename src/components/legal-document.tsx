import type { ReactNode } from "react";
import { Reveal } from "./motion";

export function LegalDocument({ title, updated, intro, children }: { title: string; updated: string; intro: string; children: ReactNode }) {
  return <div className="legal-shell section-shell"><Reveal className="legal-head"><span>SUMNORA / LEGAL</span><h1>{title}</h1><p>{intro}</p><small>Last updated {updated}</small></Reveal><article className="legal-content">{children}</article></div>;
}

