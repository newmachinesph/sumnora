"use client";

import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { StoreBadges } from "@/components/store-badges";
import { Reveal } from "@/components/motion";
import { caseStudies } from "@/lib/site-data";

const pad = (n: number) => String(n).padStart(2, "0");

/** Homepage selected work: one project at a time. Manual only, so no pause control is needed (WCAG 2.2.2). */
export function WorkCarousel() {
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const count = caseStudies.length;
  const go = (step: number) => setActive((index) => (index + step + count) % count);

  return (
    <section
      aria-label="Selected work"
      aria-roledescription="carousel"
      className="work-carousel section-shell"
      onPointerDown={(event) => { startX.current = event.clientX; }}
      onPointerUp={(event) => {
        if (startX.current === null) return;
        const dx = event.clientX - startX.current;
        startX.current = null;
        if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
      }}
    >
      <Reveal className="work-carousel-slides">
        {caseStudies.map((study, index) => (
          <div
            aria-label={`${index + 1} of ${count}`}
            aria-roledescription="slide"
            className={`home-work work-slide${index === active ? " is-active" : ""}`}
            inert={index !== active}
            key={study.slug}
            role="group"
          >
            <div className="home-work-copy">
              <span className="section-kicker">Selected work · {study.category}</span>
              <h2>{study.name}</h2>
              <p>{study.summary}</p>
              <div>
                <Link href={`/work/${study.slug}`}>Read the case study <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" /></Link>
                <a href={study.url} rel="noopener" target="_blank">Visit {study.url.replace("https://", "")} <ArrowUpRightIcon aria-hidden="true" size={16} weight="regular" /></a>
              </div>
              <StoreBadges appStore={study.appStore} googlePlay={study.googlePlay} name={study.name} />
            </div>
            <div className="home-work-image">
              <Link aria-label={`${study.name} case study`} draggable={false} href={`/work/${study.slug}`}>
                <Image {...study.images.hero} draggable={false} sizes="(max-width: 1100px) calc(100vw - 48px), 60vw" />
              </Link>
            </div>
          </div>
        ))}
      </Reveal>

      <div className="work-carousel-controls">
        <span aria-live="polite" className="work-carousel-count">{pad(active + 1)} / {pad(count)}</span>
        <div className="work-carousel-dots">
          {caseStudies.map((study, index) => (
            <button
              aria-current={index === active}
              aria-label={`Show ${study.name}`}
              className={index === active ? "is-active" : undefined}
              key={study.slug}
              onClick={() => setActive(index)}
              type="button"
            />
          ))}
        </div>
        <button aria-label="Previous project" onClick={() => go(-1)} type="button"><ArrowLeftIcon aria-hidden="true" size={18} weight="regular" /></button>
        <button aria-label="Next project" onClick={() => go(1)} type="button"><ArrowRightIcon aria-hidden="true" size={18} weight="regular" /></button>
      </div>
    </section>
  );
}
