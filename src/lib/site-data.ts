import {
  BuildingOfficeIcon,
  ChartLineUpIcon,
  CirclesThreeIcon,
  ClipboardTextIcon,
  CloudArrowUpIcon,
  CompassIcon,
  FlowArrowIcon,
  GitBranchIcon,
  PathIcon,
  PlugsConnectedIcon,
  RocketLaunchIcon,
  ShareNetworkIcon,
  SquaresFourIcon,
  StackIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/ssr";

export const services = [
  {
    slug: "product-engineering",
    name: "Product Engineering",
    metaTitle: "Product Engineering Services | Sumnora",
    metaDescription:
      "Design and build production web and mobile products — architecture, interface, backend, testing, and the release process that keeps them shipping.",
    short: "Ship production software, not prototypes.",
    headline: "From an idea to a product in production.",
    description:
      "Sumnora Product Engineering designs and builds production web and mobile products — the architecture, the interface, the backend, and the release process that keeps them shipping after launch.",
    engagement: "6–12 weeks to first release",
    icon: SquaresFourIcon,
    accent: "#e34224",
    outcomes: [
      "A working product in production, not a slide deck",
      "Architecture your team can still change in a year",
      "Tests, CI, and observability from the first commit",
      "A codebase documented for whoever inherits it",
    ],
    capabilities: [
      {
        name: "Discovery & shaping",
        text: "Turn an ambiguous brief into a scoped build with stated tradeoffs and a defensible estimate.",
        image: "/media/services/product-engineering/discovery.webp",
      },
      {
        name: "Interface & experience",
        text: "Design and build the screens, states, and empty cases your users actually move through.",
        image: "/media/services/product-engineering/interface.webp",
      },
      {
        name: "Backend & data",
        text: "Model the domain, design the API, and keep the data layer honest under real load.",
        image: "/media/services/product-engineering/backend.webp",
      },
      {
        name: "Release engineering",
        text: "Automate build, test, preview, and deploy so shipping stops being an event.",
        image: "/media/services/product-engineering/release.webp",
      },
    ],
    workflow: ["Discover", "Shape", "Design", "Build", "Ship", "Iterate"],
  },
  {
    slug: "ai-engineering",
    name: "AI Engineering",
    metaTitle: "AI Engineering & LLM Development | Sumnora",
    metaDescription:
      "Retrieval, agent, and LLM features built with grounding, evaluation, guardrails, and human review so they stay reliable after launch.",
    short: "LLM features that survive real users.",
    headline: "AI features that hold up in production.",
    description:
      "Sumnora AI Engineering builds retrieval, agent, and language-model features with the grounding, evaluation, and guardrails that keep them reliable once real users arrive.",
    engagement: "4–10 weeks",
    icon: PathIcon,
    accent: "#695070",
    outcomes: [
      "Answers grounded in your data, with traceable sources",
      "Evaluation suites that catch regressions before users do",
      "Cost and latency measured rather than assumed",
      "Human review wherever the stakes require it",
    ],
    capabilities: [
      {
        name: "Retrieval & grounding",
        text: "Index your content and return answers that cite exactly where they came from.",
        image: "/media/services/ai-engineering/retrieval.webp",
      },
      {
        name: "Agents & tools",
        text: "Give models narrow permissions, approved tools, and explicit stopping conditions.",
        image: "/media/services/ai-engineering/agents.webp",
      },
      {
        name: "Evaluation harness",
        text: "Measure accuracy, regressions, injection resistance, latency, and cost on every change.",
        image: "/media/services/ai-engineering/evaluation.webp",
      },
      {
        name: "Guardrails & review",
        text: "Validate structured output and route consequential actions to a person.",
        image: "/media/services/ai-engineering/guardrails.webp",
      },
    ],
    workflow: ["Frame", "Ground", "Build", "Evaluate", "Harden", "Ship"],
  },
  {
    slug: "automation",
    name: "Automation & Integration",
    metaTitle: "Workflow Automation & System Integration | Sumnora",
    metaDescription:
      "Replace manual handoffs with connected systems — internal tools, workflow automation, and integrations between the software you already run.",
    short: "Connect the systems your team fights daily.",
    headline: "Turn manual routine into running systems.",
    description:
      "Sumnora Automation & Integration replaces manual handoffs with connected systems: internal tools, scheduled operations, and the integrations between software you already pay for.",
    engagement: "3–8 weeks",
    icon: FlowArrowIcon,
    accent: "#293f7a",
    outcomes: [
      "Recurring work that runs without someone remembering to run it",
      "One integration layer instead of per-team spreadsheets",
      "Internal tools your staff will actually open",
      "Failures that surface loudly instead of silently",
    ],
    capabilities: [
      {
        name: "Process mapping",
        text: "Document the real path work takes, including the steps nobody wrote down.",
        image: "/media/services/automation/mapping.webp",
      },
      {
        name: "Internal tools",
        text: "Build the focused interface that finally replaces the shared spreadsheet.",
        image: "/media/services/automation/internal-tools.webp",
      },
      {
        name: "System integration",
        text: "Connect the platforms you already run, with retries, backfills, and an audit trail.",
        image: "/media/services/automation/integration.webp",
      },
      {
        name: "Scheduled operations",
        text: "Run recurring jobs with monitoring, alerting, and a named owner.",
        image: "/media/services/automation/operations.webp",
      },
    ],
    workflow: ["Map", "Model", "Connect", "Automate", "Verify", "Operate"],
  },
  {
    slug: "platform",
    name: "Platform & Reliability",
    metaTitle: "Platform Engineering & Reliability | Sumnora",
    metaDescription:
      "Infrastructure as code, delivery pipelines, observability, and cost control that let a small team deploy often and recover fast.",
    short: "Infrastructure that stays boring.",
    headline: "Make deployment the least interesting part of the week.",
    description:
      "Sumnora Platform & Reliability builds the infrastructure, pipelines, and observability that let a small team deploy often, catch problems early, and recover fast.",
    engagement: "3–8 weeks",
    icon: StackIcon,
    accent: "#5b614c",
    outcomes: [
      "Deploys measured in minutes, not maintenance windows",
      "Environments that can be rebuilt from source",
      "Alerts that map to real user impact",
      "Infrastructure cost you can attribute and forecast",
    ],
    capabilities: [
      {
        name: "Infrastructure as code",
        text: "Define environments in version control so they can be reviewed, diffed, and rebuilt.",
        image: "/media/services/platform/infrastructure.webp",
      },
      {
        name: "Delivery pipelines",
        text: "Automate test, preview, and deploy — with a safe path back when something is wrong.",
        image: "/media/services/platform/pipelines.webp",
      },
      {
        name: "Observability",
        text: "Instrument logs, traces, and metrics around the paths that matter to users.",
        image: "/media/services/platform/observability.webp",
      },
      {
        name: "Cost & capacity",
        text: "Right-size what you run and make spend visible per service and per environment.",
        image: "/media/services/platform/cost.webp",
      },
    ],
    workflow: ["Assess", "Design", "Provision", "Automate", "Observe", "Harden"],
  },
  {
    slug: "advisory",
    name: "Technical Advisory",
    metaTitle: "Technical Advisory & AI Readiness | Sumnora",
    metaDescription:
      "Architecture review, AI readiness assessment, and build-or-buy analysis, delivered as a written recommendation your team can act on.",
    short: "Senior judgment, without the hire.",
    headline: "Decide with evidence, not vendor decks.",
    description:
      "Sumnora Technical Advisory reviews architecture, assesses AI readiness, and helps teams decide what to build, buy, or stop — delivered as a written recommendation, not a workshop.",
    engagement: "1–4 weeks",
    icon: CompassIcon,
    accent: "#b4542f",
    outcomes: [
      "A written recommendation with tradeoffs stated plainly",
      "Risks named early, while they are still cheap to fix",
      "A prioritized plan your team can execute without us",
      "Clarity on what to build, what to buy, and what to stop",
    ],
    capabilities: [
      {
        name: "Architecture review",
        text: "Assess the system you have against where the business is actually going.",
        image: "/media/services/advisory/architecture.webp",
      },
      {
        name: "AI readiness",
        text: "Find where models genuinely help — and where they add risk without payoff.",
        image: "/media/services/advisory/ai-readiness.webp",
      },
      {
        name: "Build or buy",
        text: "Compare real options against cost, lock-in, migration risk, and time to value.",
        image: "/media/services/advisory/build-or-buy.webp",
      },
      {
        name: "Team enablement",
        text: "Leave your engineers with the patterns, tooling, and review habits to carry it on.",
        image: "/media/services/advisory/enablement.webp",
      },
    ],
    workflow: ["Review", "Assess", "Prioritize", "Prototype", "Recommend", "Enable"],
  },
] as const;

export const practiceCapabilities = [
  { icon: CompassIcon, name: "Discovery", text: "Goals, users, constraints, and how success gets measured." },
  { icon: StackIcon, name: "Architecture", text: "Systems designed for the change that comes next." },
  { icon: SquaresFourIcon, name: "Interface", text: "Screens, states, and flows built to be used, not demoed." },
  { icon: GitBranchIcon, name: "Delivery", text: "Automated test, preview, and deploy on every change." },
  { icon: ClipboardTextIcon, name: "Quality", text: "Review, tests, and observability as standard practice." },
  { icon: PlugsConnectedIcon, name: "Integration", text: "APIs, webhooks, and the systems you already run." },
  { icon: PathIcon, name: "Intelligence", text: "Grounded, evaluated, permissioned model features." },
  { icon: CloudArrowUpIcon, name: "Handover", text: "Documentation, access, and runbooks that transfer." },
] as const;

export const audiences = [
  {
    icon: RocketLaunchIcon,
    audience: "Founders & early teams",
    title: "Get to a credible product with a small team.",
    text: "Move from a validated idea to software real customers can use, without hiring an engineering department first.",
    points: ["Discovery & scoping", "First release", "Launch support", "Clean handover"],
  },
  {
    icon: ChartLineUpIcon,
    audience: "Scale-ups",
    title: "Add senior capacity without adding headcount.",
    text: "Take on the work your team does not have room for, in a way that leaves their codebase better than we found it.",
    points: ["Feature delivery", "Platform work", "Code review", "Team enablement"],
  },
  {
    icon: BuildingOfficeIcon,
    audience: "Enterprise teams",
    title: "Ship inside the constraints, not around them.",
    text: "Work within existing procurement, security review, and integration requirements instead of treating them as obstacles.",
    points: ["System integration", "Security review", "Documentation", "Knowledge transfer"],
  },
  {
    icon: UsersThreeIcon,
    audience: "Operators without an engineering team",
    title: "Own software without owning an engineering department.",
    text: "Replace the manual routine holding your operation together with systems you control and can afford to maintain.",
    points: ["Process mapping", "Internal tools", "Automation", "Ongoing support"],
  },
] as const;

export const principles = [
  {
    icon: CirclesThreeIcon,
    title: "One senior team",
    text: "The people who scope the work are the people who build it. Nothing is handed down to a junior bench after the contract is signed.",
  },
  {
    icon: ClipboardTextIcon,
    title: "Every decision leaves a record",
    text: "Architecture choices, tradeoffs, and the options we rejected are written down where your engineers can find them later.",
  },
  {
    icon: PathIcon,
    title: "AI accelerates, judgment decides",
    text: "Models draft, generate, and refactor throughout our process. An engineer reviews what ships and answers for it.",
  },
  {
    icon: ShareNetworkIcon,
    title: "Built to be handed over",
    text: "We optimize for the team maintaining this after we leave, which is usually yours.",
  },
] as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Solutions", href: "/solutions" },
  { label: "Trust", href: "/security" },
  { label: "Company", href: "/company" },
] as const;

export const CONTACT_EMAIL = "hello@sumnora.com";

/**
 * GA4 measurement ID. Public by design — it ships in the page source of every
 * site that uses it, so it is not a secret. Loaded only after the visitor
 * accepts the analytics category; see `components/analytics.tsx`.
 */
export const GA_MEASUREMENT_ID = "G-5HP8RZ1KEC";

/**
 * Meta (Facebook) domain verification token. Public by design: it must be
 * readable in the server-rendered <head> of the home page for Meta to verify
 * ownership of sumnora.com. Rendered via `verification.other` in the root layout.
 */
export const FACEBOOK_DOMAIN_VERIFICATION = "c1u2b4l3n7vudgqv29qur4w7f1jgoq";
