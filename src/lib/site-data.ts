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
      "We design and build production web and mobile apps: architecture, interface, backend, tests and the release pipeline. First release in 6 to 12 weeks.",
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
      "Internal tools, scheduled jobs and integrations between the software you already pay for, built in 3 to 8 weeks so routine work runs on its own.",
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

export const caseStudies = [
  {
    slug: "barnesnest",
    name: "BarnesNest",
    url: "https://barnesnest.com",
    facebook: null,
    appStore: "https://apps.apple.com/gb/app/barnesnest/id6784006599",
    googlePlay: "https://play.google.com/store/apps/details?id=com.barnesnest.app",
    category: "Marketplace · web, iOS and Android",
    metaTitle: "BarnesNest: Home Services Marketplace Case Study",
    metaDescription:
      "BarnesNest case study: a US marketplace for verified local home-service pros with milestone payments, hourly booking, and iOS and Android apps, built by Sumnora.",
    headline: "Book trusted pros for everything under your roof.",
    summary:
      "BarnesNest connects US homeowners with verified local pros for cleaning, plumbing, roofing, and more. Homeowners compare free quotes and pay in milestones that are released only after they approve the work, on the web or in the iOS and Android apps.",
    stack: ["Next.js", "iOS", "Android", "Stripe Connect"],
    facts: [
      ["14,000+", "pros listed across the US"],
      ["12", "service categories, from cleaning to roofing"],
      ["3", "platforms: web, iOS, and Android"],
    ],
    highlights: [
      {
        title: "Paid only after approval",
        text: "Each stage of a job is funded into a milestone account and released to the pro only when the homeowner approves the work, with completion photos attached.",
      },
      {
        title: "Pros checked before they work",
        text: "Every pro completes identity verification. Licensed trades have their license numbers checked with the state, and insurance certificates are kept on file.",
      },
      {
        title: "Hourly booking with a live timer",
        text: "Cleaning, handyman, and lawn-care pros can be booked by the hour. A server-timed clock records the work, and the homeowner reviews the time before paying.",
      },
      {
        title: "Disputes with a paper trail",
        text: "A dispute freezes that milestone's payout while both sides are heard, and the in-app messages are kept as the record of what was agreed.",
      },
    ],
    images: {
      hero: { src: "/work/barnesnest/home.webp", width: 2880, height: 1800, alt: "BarnesNest home page with the headline “Book trusted pros for everything under your roof.” and a quote request box" },
      gallery: { src: "/work/barnesnest/how.webp", width: 2880, height: 1800, alt: "BarnesNest How it works page: post a job, compare quotes, one clear price" },
      feature: { src: "/work/barnesnest/search.webp", width: 2880, height: 1800, alt: "BarnesNest Find a pro search with trade filters and profile cards of local pros" },
      mobile: { src: "/work/barnesnest/mobile.webp", width: 1170, height: 2532, alt: "BarnesNest home page on a phone with the quote request form and service categories" },
    },
  },
  {
    slug: "kainna",
    name: "Kain Na!",
    url: "https://kainna.ph",
    facebook: "https://www.facebook.com/kainnarecipes",
    appStore: null,
    googlePlay: null,
    category: "Consumer web app",
    metaTitle: "Kain Na!: Filipino Meal Planning App Case Study",
    metaDescription:
      "Kain Na! case study: a Filipino recipe and meal-planning app with 1,700 dishes, budget-aware weekly plans, and one market list, built and run by Sumnora.",
    headline: "A seat at the table for every ulam.",
    summary:
      "Kain Na! helps Filipino households decide what to cook: browse 1,700 dishes, plan a week of meals inside a daily budget, and take one market list to the palengke.",
    stack: ["Next.js", "MySQL", "Cloudflare R2", "Hostinger"],
    facts: [
      ["1,700", "dishes with photos"],
      ["7 days", "planned against a budget"],
      ["1 app", "web, API, and admin"],
    ],
    highlights: [
      {
        title: "A collection people actually browse",
        text: "Every dish has its own photo, category, and recipe page, searchable by name and served from a CDN so the catalog stays fast on mobile data.",
      },
      {
        title: "Meal plans that respect a budget",
        text: "Households set how many people they feed and what they can spend a day. The week is planned around it, with leftovers carried into the next day's dish.",
      },
      {
        title: "One list for the palengke",
        text: "The plan becomes a market list grouped by stall, priced from current ingredient costs that the team updates from an admin screen.",
      },
      {
        title: "Shared by the whole household",
        text: "An owner invites family members, and the plan, saved dishes, and market list stay in sync across everyone's phones.",
      },
    ],
    images: {
      hero: { src: "/work/kainna/home.webp", width: 2880, height: 1800, alt: "Kain Na! home page with the headline “A seat at the table for every ulam.”" },
      gallery: { src: "/work/kainna/recipes.webp", width: 2880, height: 1800, alt: "Kain Na! food collection with category filters and dish photos" },
      feature: { src: "/work/kainna/plan.webp", width: 2880, height: 1800, alt: "A weekly meal plan with a budget bar and a market list grouped by stall" },
      mobile: { src: "/work/kainna/mobile.webp", width: 1170, height: 2532, alt: "The Adobong Manok recipe page on a phone, with price per person and cooking time" },
    },
  },
  {
    slug: "larongpinoy",
    name: "LarongPinoy",
    url: "https://larongpinoy.ph",
    facebook: null,
    appStore: null,
    googlePlay: null,
    category: "Mobile web games",
    metaTitle: "LarongPinoy: Offline Filipino Games Case Study",
    metaDescription:
      "LarongPinoy case study: ten Filipino games for the phone, from Jeepney Rush to Patintero, that install like an app and play offline, built and run by Sumnora.",
    headline: "Ten Filipino games that play without a signal.",
    summary:
      "LarongPinoy brings Filipino play to the phone: drive a jeepney through Manila, cross the patintero court, knock down the tumbang preso can, or build a halo-halo order. It installs like an app, works offline, and keeps a moderated leaderboard.",
    stack: ["Next.js", "Three.js", "Phaser", "MySQL", "Hostinger"],
    facts: [
      ["10", "games, five 2D and five 3D"],
      ["Offline", "installs and plays with no signal"],
      ["21", "generated 3D models in the scenes"],
    ],
    highlights: [
      {
        title: "Games people grew up with",
        text: "Patintero, piko, tumbang preso, and kanto basketball rebuilt for a phone screen, each with easy, normal, and hard modes that tighten as you play.",
      },
      {
        title: "Plays with no signal",
        text: "A service worker caches every game, model, and sound on the first visit. Scores save on the phone and upload when the connection returns.",
      },
      {
        title: "Filipino streets in 3D",
        text: "Sari-sari stores, karinderyas, palm trees, and karst islands are image-to-3D models generated with Microsoft TRELLIS.2, then optimized to a few hundred kilobytes each.",
      },
      {
        title: "A leaderboard kept clean",
        text: "Player names pass a public banned-word list, then an AI review covering Tagalog, Bisaya, and English slang. A name stays hidden until it is approved.",
      },
    ],
    images: {
      hero: { src: "/work/larongpinoy/home.webp", width: 2880, height: 1800, alt: "LarongPinoy home page with the headline “Laro tayo.” and the Jeepney Rush cover" },
      gallery: { src: "/work/larongpinoy/play.webp", width: 2880, height: 1800, alt: "Basketball sa Kanto in play: a 3D neighborhood half court with on-screen controls" },
      feature: { src: "/work/larongpinoy/games.webp", width: 2880, height: 1800, alt: "The LarongPinoy game library: ten illustrated covers with category filters" },
      mobile: { src: "/work/larongpinoy/mobile.webp", width: 1170, height: 2532, alt: "Jeepney Rush on a phone: a jeepney on a Manila street with lane and brake controls" },
    },
  },
  {
    slug: "freereviewer",
    name: "FreeReviewer.ph",
    url: "https://freereviewer.ph",
    facebook: null,
    appStore: null,
    googlePlay: null,
    category: "Education web app",
    metaTitle: "FreeReviewer.ph: Philippine Exam Reviewer Case Study",
    metaDescription:
      "FreeReviewer.ph case study: free reviewers for 164 Philippine exams, from UPCAT to the board exams, with 5,183 original practice questions, built and run by Sumnora.",
    headline: "Review for the exam you’re actually taking.",
    summary:
      "FreeReviewer.ph is a free review platform for Philippine exams, from college entrance through civil service, licensure and certification. Every guide links to the body that runs the exam, and learners practise with original questions that explain each answer.",
    stack: ["Next.js", "MariaDB", "Upstash QStash", "Hostinger", "Cloudflare"],
    facts: [
      ["164", "exam guides with official sources"],
      ["5,183", "original practice questions"],
      ["₱0", "for every learner, no account needed"],
    ],
    highlights: [
      {
        title: "Every guide starts at the source",
        text: "An exam is listed only after a current page from the regulator or school confirms it, and each guide links straight to that page for dates, fees and eligibility.",
      },
      {
        title: "Original questions, reviewed twice",
        text: "Each question is written for FreeReviewer.ph, then checked by an independent reviewer for the key, the explanation and give-away cues such as an answer longer than the rest.",
      },
      {
        title: "Practice that feels like the answer sheet",
        text: "Shade a bubble, check it, and read why. Missed questions come back on a spaced schedule, and practice and results stay free of ads.",
      },
      {
        title: "The learner’s data stays theirs",
        text: "Guests practise without an account, their progress merges when they sign up, and export and deletion work from the account page.",
      },
    ],
    images: {
      hero: { src: "/work/freereviewer/home.webp", width: 2880, height: 1800, alt: "FreeReviewer.ph home page with the headline “Review for the exam you’re actually taking.” and an answer-sheet illustration" },
      gallery: { src: "/work/freereviewer/exams.webp", width: 2880, height: 1800, alt: "FreeReviewer.ph exam explorer listing college entrance exams with their question counts" },
      feature: { src: "/work/freereviewer/practice.webp", width: 2880, height: 1800, alt: "A checked UPCAT practice question with the correct answer marked and an explanation below" },
      mobile: { src: "/work/freereviewer/mobile.webp", width: 1170, height: 2532, alt: "The UPCAT exam guide on a phone with a Start free practice button" },
    },
  },
  {
    slug: "phriend",
    name: "Phriend",
    url: "https://phriend.app",
    facebook: "https://facebook.com/phriendapp",
    appStore: null,
    googlePlay: "https://play.google.com/store/apps/details?id=app.phriend.mobile",
    category: "Marketplace · web and mobile",
    metaTitle: "Phriend: Philippine Local Services Marketplace Case Study",
    metaDescription:
      "Phriend case study: a Philippine marketplace for 51 kinds of local service from ID-verified providers, with in-app booking and chat and no commission, built by Sumnora.",
    headline: "Local services, from verified providers.",
    summary:
      "Phriend is a marketplace for local services across the Philippines, from aircon cleaning and bookkeeping to tutoring, photo and video, and errands. Clients compare services by price and photos of the work, book and chat in the app, and pay the provider directly.",
    stack: ["Next.js", "Expo", "NestJS", "PostgreSQL", "Cloudflare R2"],
    facts: [
      ["51", "kinds of service in 18 groups"],
      ["₱0", "commission, providers keep 100%"],
      ["2", "apps: one to book, one to run a business"],
    ],
    highlights: [
      {
        title: "Services, not profiles",
        text: "The listing is the service, not the person. Each one carries its own price per job, hour or session, up to six photos of the work, a visit type, a schedule and the area it covers.",
      },
      {
        title: "Verified before they list",
        text: "Every provider passes a government ID and selfie check. NBI and police clearances, barangay certificates and business documents each earn a badge, and every listing is checked before it goes live.",
      },
      {
        title: "Moderation that runs itself",
        text: "AI reviews photos, documents, listings, reviews and reports against confidence thresholds. Only the uncertain cases reach a person, in one Ops queue where any decision can be overridden.",
      },
      {
        title: "Private until booked",
        text: "A provider sees only the client’s area and city until they accept a booking. ID documents stay private, file views are audited, and rejected files are deleted after 30 days.",
      },
    ],
    images: {
      hero: { src: "/work/phriend/home.webp", width: 2880, height: 1800, alt: "Phriend home page with the headline “Local services, from verified providers” beside the app on a phone" },
      gallery: { src: "/work/phriend/services.webp", width: 2880, height: 1800, alt: "Phriend services directory: service groups with photos and the categories in each" },
      feature: { src: "/work/phriend/occasions.webp", width: 2880, height: 1800, alt: "Phriend occasions page with guides for a wedding, a prenup shoot and a debut" },
      mobile: { src: "/work/phriend/mobile.webp", width: 1170, height: 2532, alt: "Phriend home page on a phone with Book a service and List your services buttons" },
    },
  },
] as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Solutions", href: "/solutions" },
  { label: "Trust", href: "/security" },
  { label: "Company", href: "/company" },
] as const;

export const CONTACT_EMAIL = "hello@sumnora.com";

/**
 * GA4 measurement ID, from `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Next inlines it at
 * build time, so it must be set in the build environment. Public by design —
 * it ships in the page source — so it is configuration, not a secret. Unset
 * means analytics is off. Loaded only after the visitor accepts the analytics
 * category; see `components/analytics.tsx`.
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Meta (Facebook) domain verification token. Public by design: it must be
 * readable in the server-rendered <head> of the home page for Meta to verify
 * ownership of sumnora.com. Rendered via `verification.other` in the root layout.
 */
export const FACEBOOK_DOMAIN_VERIFICATION = "c1u2b4l3n7vudgqv29qur4w7f1jgoq";
