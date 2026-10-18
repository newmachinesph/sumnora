"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  CheckCircleIcon,
  CheckIcon,
  CloudArrowUpIcon,
  CodeIcon,
  FlowArrowIcon,
  GitPullRequestIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  TestTubeIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { useId, useRef, useState, type KeyboardEvent } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const StudioFlowVisual = dynamic(() => import("@/components/studio-flow-visual").then((module) => module.StudioFlowVisual), {
  ssr: false,
  loading: () => (
    <div className="studio-flow-loading" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  ),
});

export function HeroMotionOverlay() {
  const reduce = useReducedMotion();
  return (
    <div className="hero-motion-overlay" aria-hidden="true">
      <motion.div
        className="hero-floating-card hero-floating-card-left"
        initial={reduce ? false : { opacity: 0, y: 20, rotate: -2 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, rotate: -2 }}
        transition={reduce ? undefined : { duration: 0.7, delay: 0.45, ease }}
      >
        <span>
          <TestTubeIcon size={14} weight="regular" /> Tests passing
        </span>
        <strong>Ready to merge</strong>
      </motion.div>
      <motion.div
        className="hero-floating-card hero-floating-card-right"
        initial={reduce ? false : { opacity: 0, y: 18, rotate: 2 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, rotate: 2 }}
        transition={reduce ? undefined : { duration: 0.7, delay: 0.68, ease }}
      >
        <span>
          <CloudArrowUpIcon size={14} weight="regular" /> Deployed
        </span>
        <strong>Live in production</strong>
      </motion.div>
    </div>
  );
}

const scenes = [
  { key: "build", label: "Build", icon: CodeIcon },
  { key: "deliver", label: "Deliver", icon: UsersThreeIcon },
  { key: "automate", label: "Automate", icon: FlowArrowIcon },
] as const;

export function ProductMotionShowcase() {
  const [active, setActive] = useState<(typeof scenes)[number]["key"]>("build");
  const reduce = useReducedMotion();
  const instanceId = useId().replace(/:/g, "");

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % scenes.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + scenes.length) % scenes.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = scenes.length - 1;
    else return;

    event.preventDefault();
    setActive(scenes[nextIndex].key);
    const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs?.[nextIndex]?.focus();
  };

  return (
    <div className="motion-product-shell">
      <div className="motion-product-tabs" role="tablist" aria-label="Engineering workflow visualizations">
        {scenes.map((scene, index) => {
          const Icon = scene.icon;
          return (
            <button
              key={scene.key}
              id={`product-tab-${instanceId}-${scene.key}`}
              type="button"
              role="tab"
              aria-selected={active === scene.key}
              aria-controls={`product-panel-${instanceId}-${scene.key}`}
              tabIndex={active === scene.key ? 0 : -1}
              onClick={() => setActive(scene.key)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {active === scene.key && (
                <motion.span
                  className="motion-tab-indicator"
                  layoutId={reduce ? undefined : `product-tab-indicator-${instanceId}`}
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 34 }}
                />
              )}
              <span className="motion-tab-label">
                <Icon aria-hidden="true" size={16} weight="light" />
                {scene.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="motion-product-stage">
        <AnimatePresence mode="wait">
          {active === "build" && (
            <motion.div
              key="build"
              id={`product-panel-${instanceId}-build`}
              role="tabpanel"
              aria-labelledby={`product-tab-${instanceId}-build`}
              tabIndex={0}
              className="scene scene-build"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="scene-sidebar">
                <span className="scene-brand">Sumnora Build</span>
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="scene-main">
                <div className="scene-toolbar">
                  <span>Payment retry handler</span>
                  <b>Ready to merge</b>
                </div>
                <div className="document-sheet">
                  <small>PULL REQUEST #248</small>
                  <h3>
                    Retry failed
                    <br />
                    payment webhooks
                  </h3>
                  <p />
                  <p />
                  <p className="short" />
                  <div className="signature-line">
                    <TestTubeIcon size={15} weight="regular" />
                    <span>12 tests passing</span>
                  </div>
                </div>
                <motion.div
                  className="identity-panel"
                  initial={reduce ? false : { x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.18, duration: 0.5, ease }}
                >
                  <GitPullRequestIcon size={22} weight="regular" />
                  <strong>Review complete</strong>
                  <span className="identity-status">Approved by 2 engineers</span>
                  <div>
                    <CheckIcon size={14} weight="bold" /> Types clean
                  </div>
                  <div>
                    <CheckIcon size={14} weight="bold" /> Preview deployed
                  </div>
                  <span className="scene-action">Merge and ship</span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {active === "deliver" && (
            <motion.div
              key="deliver"
              id={`product-panel-${instanceId}-deliver`}
              role="tabpanel"
              aria-labelledby={`product-tab-${instanceId}-deliver`}
              tabIndex={0}
              className="scene scene-work"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="work-rail">
                <span className="scene-brand">Atlas platform</span>
                <small>Project workspace</small>
                {["Overview", "Repos", "Tasks", "People"].map((item, index) => (
                  <b className={index === 0 ? "active" : ""} key={item}>
                    {item}
                  </b>
                ))}
              </div>
              <div className="matter-area">
                <div className="matter-head">
                  <div>
                    <small>ACTIVE PROJECT</small>
                    <h3>Atlas platform</h3>
                  </div>
                  <UsersThreeIcon size={24} weight="regular" />
                </div>
                <div className="matter-columns">
                  <div>
                    <span>Today</span>
                    {["Search rewrite merged", "Preview environment deployed", "Load test passed at 4× traffic"].map((item, index) => (
                      <motion.p
                        key={item}
                        initial={reduce ? false : { opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * index }}
                      >
                        <i />
                        {item}
                      </motion.p>
                    ))}
                  </div>
                  <div className="matter-card">
                    <RocketLaunchIcon size={19} weight="regular" />
                    <small>NEXT ACTION</small>
                    <strong>Ship to production</strong>
                    <span>All checks green</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {active === "automate" && (
            <motion.div
              key="automate"
              id={`product-panel-${instanceId}-automate`}
              role="tabpanel"
              aria-labelledby={`product-tab-${instanceId}-automate`}
              tabIndex={0}
              className="scene scene-studio"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="studio-top">
                <span className="scene-brand">Order sync flow</span>
                <b>Live</b>
              </div>
              <span className="sr-only">
                An incoming order passes a validation check, then routes to fulfilment and a notification step.
              </span>
              <StudioFlowVisual />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function AssuranceMotion() {
  const reduce = useReducedMotion();
  const motionRef = useRef<HTMLDivElement>(null);
  // Entering the viewport starts a self-running timeline that cannot scrub or reverse.
  const isTriggered = useInView(motionRef, { once: true, amount: "some", margin: "0px 0px -12% 0px" });
  const events = [
    { label: "Change proposed", icon: GitPullRequestIcon },
    { label: "Tests passed", icon: TestTubeIcon },
    { label: "Review recorded", icon: CheckCircleIcon },
    { label: "Shipped to production", icon: ShieldCheckIcon },
  ];
  const trace = "M125 35 H350 V20 H375 H600 V50 H625 H850 V35 H875";
  const verticalTrace = "M18 18 V230";
  const traceState = reduce || isTriggered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 };
  const traceTransition = reduce
    ? { duration: 0 }
    : {
        opacity: { delay: 0.9, duration: 0.01 },
        pathLength: { delay: 0.9, duration: 1.45, ease },
      };

  return (
    <div className="assurance-motion" ref={motionRef}>
      <svg className="assurance-trace assurance-trace-desktop" viewBox="0 0 1000 70" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d={trace}
          className="assurance-trace-active"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={traceState}
          transition={traceTransition}
        />
      </svg>
      <svg className="assurance-trace assurance-trace-mobile" viewBox="0 0 36 248" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d={verticalTrace}
          className="assurance-trace-active"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={traceState}
          transition={traceTransition}
        />
      </svg>
      <ol className="assurance-events" aria-label="Accountable delivery process">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <motion.li
              className={`assurance-event assurance-event-${index + 1}`}
              key={event.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={reduce || isTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ delay: reduce ? 0 : 0.06 + index * 0.12, duration: reduce ? 0 : 0.36, ease }}
            >
              <i>
                <Icon size={15} weight="regular" />
              </i>
              <span>{event.label}</span>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
