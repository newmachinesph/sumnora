"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site-data";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo onClick={() => setOpen(false)} />
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              data-active={isActive(item.href) || undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link aria-current={isActive("/contact") ? "page" : undefined} className="nav-cta" href="/contact">
          Start a project <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" />
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {open ? <XIcon size={24} weight="regular" /> : <ListIcon size={24} weight="regular" />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                document.querySelector<HTMLButtonElement>(".menu-button")?.focus();
              }
            }}
          >
            {nav.map((item) => (
              <Link
                aria-current={isActive(item.href) ? "page" : undefined}
                data-active={isActive(item.href) || undefined}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              aria-current={isActive("/contact") ? "page" : undefined}
              data-active={isActive("/contact") || undefined}
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Start a project
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
