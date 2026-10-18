import Link from "next/link";
import { CONTACT_EMAIL, nav, services } from "@/lib/site-data";
import { CookiePreferencesButton } from "./cookie-consent";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-statement">
          <Logo inverse />
          <p>Built for the work.</p>
        </div>
        <nav className="footer-column" aria-labelledby="footer-explore">
          <h2 id="footer-explore">Explore</h2>
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="footer-column" aria-labelledby="footer-services">
          <h2 id="footer-services">Services</h2>
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              {service.name}
            </Link>
          ))}
        </nav>
        <nav className="footer-column" aria-labelledby="footer-connect">
          <h2 id="footer-connect">Connect</h2>
          <Link href="/engagements">How we engage</Link>
          <Link href="/contact">Contact</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sumnora. All rights reserved.</p>
        <div>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
          <CookiePreferencesButton className="footer-cookie-button" />
        </div>
      </div>
    </footer>
  );
}
