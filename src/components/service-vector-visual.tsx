"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";

type ServiceSlug = "product-engineering" | "ai-engineering" | "automation" | "platform" | "advisory";

type ServiceVectorVisualProps = {
  slug: ServiceSlug;
  accent: string;
  compact?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Every product uses the same rhythm: structure, connection, outcome, confirmation.
const sequence = {
  hidden: {},
  shown: {},
};

const structure = {
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0, transition: { delay: 0.08, duration: 0.52, ease } },
};

const structureLeft = {
  hidden: { opacity: 0, x: -12 },
  shown: { opacity: 1, x: 0, transition: { delay: 0.08, duration: 0.52, ease } },
};

const structureRight = {
  hidden: { opacity: 0, x: 12 },
  shown: { opacity: 1, x: 0, transition: { delay: 0.08, duration: 0.52, ease } },
};

const stagedStructure = {
  hidden: { opacity: 0, y: 12 },
  shown: (index = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.06 + index * 0.12, duration: 0.44, ease } }),
};

const stagedLeft = {
  hidden: { opacity: 0, x: -12 },
  shown: (index = 0) => ({ opacity: 1, x: 0, transition: { delay: 0.06 + index * 0.12, duration: 0.44, ease } }),
};

const stagedRight = {
  hidden: { opacity: 0, x: 12 },
  shown: (index = 0) => ({ opacity: 1, x: 0, transition: { delay: 0.06 + index * 0.12, duration: 0.44, ease } }),
};

const connect = {
  hidden: { opacity: 0, pathLength: 0 },
  shown: { opacity: 1, pathLength: 1, transition: { delay: 0.66, duration: 0.68, ease } },
};

const stagedConnect = {
  hidden: { opacity: 0, pathLength: 0 },
  shown: (index = 0) => ({ opacity: 1, pathLength: 1, transition: { delay: 0.66 + index * 0.12, duration: 0.52, ease } }),
};

const outcome = {
  hidden: { opacity: 0, y: 6, scale: 0.985 },
  shown: { opacity: 1, y: 0, scale: 1, transition: { delay: 1.22, duration: 0.46, ease } },
};

const confirm = {
  hidden: { opacity: 0, pathLength: 0 },
  shown: { opacity: 1, pathLength: 1, transition: { delay: 1.43, duration: 0.32, ease } },
};

function ProductEngineeringVisual() {
  return (
    <>
      <motion.path className="pv-accent-line" d="M172 144H190" variants={connect} />
      <motion.path className="pv-accent-line" d="M468 144H450" variants={connect} />

      <motion.g variants={structure}>
        <rect className="pv-paper pv-main-panel" x="190" y="68" width="260" height="286" rx="4" />
        <rect className="pv-ink-fill" x="220" y="106" width="82" height="7" rx="3.5" />
        <path className="pv-rule" d="M220 133H420M220 153H388" />
        <rect className="pv-accent-soft" x="220" y="188" width="200" height="12" rx="3" />
        <path className="pv-rule" d="M220 225H420M220 245H392M220 265H410" />
        <path className="pv-ink-line" d="M220 306c31-30 27 21 53-4 20-20 28 17 55-4 18-14 30 7 58-7" />
        {[0, 1, 2, 3, 4, 5].map((tick) => (
          <rect
            className={tick === 5 ? "pv-accent-fill" : "pv-muted-fill"}
            x={220 + tick * 31}
            y="334"
            width="19"
            height="4"
            rx="2"
            key={tick}
          />
        ))}
      </motion.g>

      <motion.g variants={structure}>
        <rect className="pv-paper" x="258" y="52" width="124" height="40" rx="4" />
        <circle className="pv-muted-fill" cx="278" cy="72" r="7" />
        <path className="pv-rule" d="M294 67H360M294 77H340" />
      </motion.g>

      <motion.g variants={structureLeft}>
        <rect className="pv-paper" x="56" y="116" width="116" height="56" rx="4" />
        <circle className="pv-muted-fill" cx="78" cy="144" r="8" />
        <path className="pv-rule" d="M96 138H151M96 151H137" />
      </motion.g>

      <motion.g variants={structureRight}>
        <rect className="pv-paper" x="468" y="116" width="116" height="56" rx="4" />
        <rect className="pv-muted-fill" x="488" y="136" width="16" height="16" rx="3" />
        <path className="pv-rule" d="M516 138H562M516 151H548" />
      </motion.g>

      <motion.g className="pv-outcome" variants={outcome}>
        <circle className="pv-seal" cx="450" cy="310" r="44" />
        <circle className="pv-accent-line pv-thin" cx="450" cy="310" r="33" />
        <motion.path className="pv-seal-mark" d="m432 310 12 12 25-28" variants={confirm} />
      </motion.g>
    </>
  );
}

function AiEngineeringVisual() {
  const events = [
    { x: 56, y: 64, side: "left" },
    { x: 376, y: 132, side: "right" },
    { x: 56, y: 200, side: "left" },
    { x: 376, y: 268, side: "right" },
  ] as const;

  return (
    <>
      <motion.path className="pv-accent-line pv-spine" d="M320 56V332" variants={connect} />
      {["M264 88H312", "M328 156H376", "M264 224H312", "M328 292H376"].map((path, index) => (
        <motion.path className="pv-accent-line" custom={index} d={path} variants={stagedConnect} key={path} />
      ))}

      <motion.circle className="pv-accent-fill" cx="320" cy="56" r="6" variants={structure} />

      {events.map((event, index) => (
        <motion.g custom={index} variants={event.side === "left" ? stagedLeft : stagedRight} key={event.y}>
          <rect className="pv-paper" x={event.x} y={event.y} width="208" height="48" rx="4" />
          <rect
            className={index === 2 ? "pv-accent-soft" : "pv-muted-fill"}
            x={event.x + 18}
            y={event.y + 14}
            width={index === 1 ? 58 : 42}
            height="6"
            rx="3"
          />
          <path className="pv-rule" d={`M${event.x + 18} ${event.y + 32}H${event.x + 188}`} />
          <circle className="pv-paper pv-node" cx="320" cy={event.y + 24} r="8" />
        </motion.g>
      ))}

      <motion.g className="pv-outcome" variants={outcome}>
        <rect className="pv-accent-fill" x="264" y="332" width="112" height="38" rx="4" />
        <motion.path className="pv-light-line" d="m290 351 8 8 17-18M328 346h22M328 356h16" variants={confirm} />
      </motion.g>
    </>
  );
}

function AutomationVisual() {
  const inputs = [
    { y: 68, icon: "circle" },
    { y: 174, icon: "square" },
    { y: 280, icon: "line" },
  ] as const;
  const targets = inputs.map((input) => input.y + 28);

  return (
    <>
      {["M232 96H378", "M232 202H378", "M232 308H378"].map((path, index) => (
        <motion.path className="pv-accent-line" custom={index} d={path} variants={stagedConnect} key={path} />
      ))}

      {inputs.map((input, index) => (
        <motion.g custom={index} variants={stagedLeft} key={input.y}>
          <rect className="pv-paper" x="56" y={input.y} width="176" height="56" rx="4" />
          {input.icon === "circle" && <circle className="pv-accent-fill" cx="80" cy={input.y + 28} r="7" />}
          {input.icon === "square" && <rect className="pv-ink-fill" x="73" y={input.y + 20} width="15" height="15" rx="2" />}
          {input.icon === "line" && <path className="pv-muted-line" d={`M72 ${input.y + 28}H88`} />}
          <path className="pv-rule" d={`M102 ${input.y + 20}H204M102 ${input.y + 36}H${index === 1 ? 176 : 188}`} />
          <circle className="pv-paper pv-port" cx="232" cy={input.y + 28} r="4" />
        </motion.g>
      ))}

      <motion.g variants={structureRight}>
        <rect className="pv-paper pv-main-panel" x="366" y="52" width="218" height="316" rx="4" />
        {targets.map((target) => <circle className="pv-paper pv-port" cx="366" cy={target} r="4" key={target} />)}
        <rect className="pv-ink-fill" x="392" y="72" width="82" height="7" rx="3.5" />
        <rect className="pv-accent-soft" x="392" y="90" width="160" height="12" rx="3" />
        <path className="pv-rule" d="M392 120H552M392 139H526M392 157H544" />
        <rect className="pv-accent-soft" x="392" y="196" width="145" height="12" rx="3" />
        <path className="pv-rule" d="M392 226H552M392 245H518M392 263H540" />
        <rect className="pv-accent-soft" x="392" y="302" width="118" height="12" rx="3" />
        <path className="pv-rule" d="M392 332H475M392 347H454" />
      </motion.g>

      <motion.g className="pv-outcome" variants={outcome}>
        <rect className="pv-accent-fill" x="510" y="328" width="52" height="24" rx="4" />
        <motion.path className="pv-light-line" d="m524 340 6 6 13-14" variants={confirm} />
      </motion.g>
    </>
  );
}

function PlatformVisual() {
  const votes = [0, 1, 2, 3, 4];

  return (
    <>
      <motion.path className="pv-accent-line" d="M320 104V130M320 162V188M320 312V334" variants={connect} />

      {votes.map((vote) => (
        <motion.g custom={vote} variants={stagedStructure} key={vote}>
          <rect className="pv-paper" x={56 + vote * 112} y="52" width="80" height="52" rx="4" />
          <circle className={vote < 3 ? "pv-accent-soft" : "pv-muted-fill"} cx={80 + vote * 112} cy="78" r="8" />
          <path
            className="pv-rule"
            d={`M${96 + vote * 112} 72H${120 + vote * 112}M${96 + vote * 112} 84H${112 + vote * 112}`}
          />
        </motion.g>
      ))}

      <motion.g variants={structure}>
        <rect className="pv-paper" x="56" y="130" width="528" height="32" rx="4" />
        <path className="pv-ink-line" d="M344 128V164" />

        <rect className="pv-paper pv-main-panel" x="214" y="188" width="212" height="124" rx="4" />
        <rect className="pv-ink-fill" x="240" y="214" width="76" height="7" rx="3.5" />
        <path className="pv-rule" d="M240 244H400M240 264H378M240 284H398" />
      </motion.g>

      <motion.path className="pv-rule" d="M76 146H564" variants={connect} />
      <motion.path className="pv-threshold" d="M76 146H344" variants={connect} />

      <motion.g className="pv-outcome" variants={outcome}>
        <path className="pv-ledger" d="M112 334h416v38H112zM142 334v38" />
        <path className="pv-ink-line" d="M162 347H405" />
        <path className="pv-rule" d="M162 360H328" />
        <motion.path className="pv-register-mark" d="m484 351 7 7 15-17" variants={confirm} />
      </motion.g>
    </>
  );
}

function AdvisoryVisual() {
  return (
    <>
      <motion.path className="pv-accent-line" d="M206 112H250M206 262H250M390 136H434M390 238H434M320 318V334" variants={connect} />

      <motion.g custom={0} variants={stagedLeft}>
        <rect className="pv-paper" x="56" y="56" width="150" height="112" rx="4" />
        <rect className="pv-ink-fill" x="76" y="76" width="52" height="6" rx="3" />
        <path className="pv-rule" d="M76 98H182M76 118H172M76 138H182" />
        <rect className="pv-accent-soft" x="72" y="109" width="104" height="17" rx="2" />
      </motion.g>

      <motion.g custom={1} variants={stagedLeft}>
        <rect className="pv-paper" x="56" y="206" width="150" height="112" rx="4" />
        <rect className="pv-ink-fill" x="76" y="226" width="66" height="6" rx="3" />
        <path className="pv-rule" d="M76 248H182M76 268H166M76 288H182" />
        <rect className="pv-accent-soft" x="72" y="259" width="98" height="17" rx="2" />
      </motion.g>

      <motion.g custom={2} variants={stagedStructure}>
        <rect className="pv-paper pv-main-panel" x="250" y="56" width="140" height="262" rx="4" />
        <rect className="pv-accent-fill" x="250" y="56" width="6" height="262" rx="3" />
        <path className="pv-ink-line" d="M256 108H390M256 160H390M256 212H390M256 264H390" />
        <path className="pv-rule" d="M276 84H352M276 136H365M276 188H344M276 240H360M276 292H348" />
      </motion.g>

      <motion.g custom={3} variants={stagedRight}>
        <rect className="pv-paper pv-main-panel" x="434" y="56" width="150" height="262" rx="4" />
        <rect className="pv-ink-fill" x="454" y="77" width="68" height="7" rx="3.5" />
        <path className="pv-rule" d="M454 104H562M454 126H546M454 148H562M454 190H558M454 212H538M454 234H562M454 278H536" />
        <circle className="pv-citation" cx="560" cy="148" r="8" />
        <circle className="pv-citation" cx="560" cy="234" r="8" />
      </motion.g>

      <motion.g className="pv-outcome" variants={outcome}>
        <rect className="pv-review-gate" x="250" y="334" width="334" height="38" rx="4" />
        <rect className="pv-paper" x="268" y="344" width="18" height="18" rx="3" />
        <path className="pv-ink-line" d="M306 347H425M306 359H390" />
        <motion.path className="pv-accent-line" d="m538 352 7 7 15-17" variants={confirm} />
      </motion.g>
    </>
  );
}

const visuals: Record<ServiceSlug, () => React.JSX.Element> = {
  "product-engineering": ProductEngineeringVisual,
  "ai-engineering": AiEngineeringVisual,
  automation: AutomationVisual,
  platform: PlatformVisual,
  advisory: AdvisoryVisual,
};

function useOnceVisible(ref: RefObject<HTMLElement | null>, disabled: boolean) {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (disabled || hasEntered) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setHasEntered(true);
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [disabled, hasEntered, ref]);

  return hasEntered;
}

export function ServiceVectorVisual({ slug, accent, compact = false }: ServiceVectorVisualProps) {
  const reduceMotion = useReducedMotion();
  const visualRef = useRef<HTMLDivElement>(null);
  // Each rendered service owns an observer that latches after its first visible frame.
  const isInView = useOnceVisible(visualRef, Boolean(reduceMotion));
  const Visual = visuals[slug];
  const animationState = reduceMotion || isInView ? "shown" : "hidden";

  return (
    <div
      ref={visualRef}
      aria-hidden="true"
      className={`product-vector-visual${compact ? " is-compact" : ""}`}
      style={{ color: accent }}
    >
      <motion.svg
        className="product-vector-svg"
        viewBox="0 0 640 420"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        focusable="false"
        initial={reduceMotion ? false : "hidden"}
        animate={animationState}
        variants={sequence}
      >
        <Visual />
      </motion.svg>
    </div>
  );
}
