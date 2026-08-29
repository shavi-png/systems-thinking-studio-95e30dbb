import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SpiralSteps, Spiral } from "@/components/site/LineArt";
import portrait from "@/assets/vita-portrait.jpg";
import shellHero from "@/assets/shell-hero.jpg.asset.json";
import { ShellBackdrop } from "@/components/site/ShellBackdrop";
import ink from "@/assets/ink-layers.jpg.asset.json";
import chambers from "@/assets/about-chambers.jpg";
import mist from "@/assets/about-mist.jpg";
import leaves from "@/assets/about-leaves.jpg";
import light from "@/assets/about-light.jpg";

const title = "The personality behind the work — Vita Shablii";
const description =
  "Vita Shablii — strategist, marketer and product thinker working at the intersection of business, marketing, technology and human behaviour. Clarity before complexity.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function Kicker({ children }: { children: string }) {
  return <p className="label-xs mb-6">{children}</p>;
}

const markets = [
  {
    n: "01",
    t: "Across markets",
    meta: "Europe · United States · China",
    body: [
      "Working across different markets taught me that strategy cannot simply be transported from one context into another.",
      "Culture changes. Competition changes. Customer expectations change. The perception of value changes.",
      "I have worked with product launches, positioning, go-to-market decisions and market adaptation across very different international environments.",
    ],
    qA: "How do we replicate what already worked?",
    qB: "What should remain — and what needs to change?",
  },
  {
    n: "02",
    t: "Across business models",
    meta: "Technology · IT · Consulting · E-commerce · Fintech · Consumer",
    body: [
      "Different industries use different language, channels and business models. But underneath them are often remarkably similar questions:",
      "Where is value created? Why does someone choose? What makes the economics work? Where is the constraint?",
      "Moving between industries taught me not to begin with category conventions.",
    ],
    qA: "Which conventions does this category follow?",
    qB: "What is the actual logic of this business?",
  },
  {
    n: "03",
    t: "Building systems",
    meta: "From disconnected activity to connected decisions",
    body: [
      "A significant part of my experience has been building brands, marketing functions, teams and processes from the ground up.",
      "That changes how you see marketing. Content cannot be separated from positioning. Acquisition cannot be separated from economics. Growth cannot be separated from product.",
      "Automation cannot fix a process that does not make sense.",
    ],
    qA: "Which activity should we add next?",
    qB: "Which decisions are still missing?",
  },
];

const numbers = [
  {
    k: "13+ years",
    meta: "Across marketing, strategy, products and business transformation.",
    v: "More than thirteen years working not only with execution, but with the decisions behind it — product, positioning, market entry, commercial strategy, teams and systems.",
  },
  {
    k: "500+ projects & events",
    meta: "Across different industries, markets and stages of business.",
    v: "Hundreds of different contexts mean hundreds of opportunities to see what changes — and what keeps repeating. The real value of that number is pattern recognition.",
  },
  {
    k: "15+ brands built from zero",
    meta: "From concept to marketing management.",
    v: "Brands built from the original idea and market logic through positioning, identity, communication, launch and ongoing marketing management.",
  },
  {
    k: "Global market experience",
    meta: "Europe · United States · China",
    v: "Experience working across very different cultural, competitive and commercial environments.",
  },
];

const cases = [
  {
    k: "3×",
    t: "Commercial growth",
    d: "Pricing and commercial strategy followed by a threefold increase in sales within six months.",
  },
  {
    k: "2,000+",
    t: "China",
    d: "PR campaign and roadshow across Hong Kong, Guangzhou and Beijing.",
  },
  {
    k: "USA",
    t: "Zero to market",
    d: "Marketing strategy for a product launched from scratch in the United States.",
  },
];

const model = [
  { t: "Observe", d: "What is actually happening?" },
  { t: "Question", d: "Which assumptions are we treating as facts?" },
  { t: "Trace", d: "Where is the result really being created?" },
  { t: "Clarify", d: "What problem are we actually solving?" },
  { t: "Find the lever", d: "What could meaningfully change the system?" },
  { t: "Decide", d: "What matters now — and what doesn't?" },
  { t: "Build", d: "Turn the decision into something usable." },
  { t: "Learn", d: "Watch what reality gives back." },
  { t: "Return", d: "New information changes the context." },
];

const beyond = [
  {
    n: "Story 01",
    kicker: "What I notice",
    t: "The space between cause and effect.",
    lead: "I notice the missing link between things people assume are automatically connected.",
    items: [
      "Traffic and sales.",
      "Revenue and profit.",
      "A product and the reason people choose it.",
      "Activity and actual progress.",
      "A decision and the behaviour it creates.",
    ],
    close:
      "The interesting part is often somewhere between the two. That is usually where I start looking.",
  },
  {
    n: "Story 02",
    kicker: "What I value",
    t: "Independent thinking without the need to always agree.",
    lead: "I value people who can hold their own point of view and still remain curious.",
    items: [
      "People who can disagree without turning disagreement into conflict.",
      "People willing to change their mind when reality gives them better information.",
      "People who take responsibility for the decisions they make.",
    ],
    close:
      "Good collaboration doesn't require permanent agreement. It requires honesty, curiosity and enough trust to challenge each other's thinking.",
  },
  {
    n: "Story 03",
    kicker: "What keeps me curious",
    t: "The moment before something fully reveals what it is.",
    lead: "I am drawn to situations where something already exists, but the full logic has not yet become visible.",
    items: [
      "A product has customers — but its strongest value may be somewhere nobody is looking.",
      "A business is growing — but the obvious growth lever may not be the right one.",
      "An idea feels intuitively right — but still needs a structure capable of surviving contact with the market.",
    ],
    close:
      "That space between “something is here” and “now I understand what this could become” is probably where I am most curious.",
  },
];

const principles = [
  "Clarity before complexity.",
  "Context before tactics.",
  "Understand the problem before choosing the solution.",
  "Structure before scale.",
  "Technology where it creates leverage.",
  "Evidence without losing intuition.",
  "Enough structure to move.",
  "Enough openness to learn.",
];

const useful = [
  "The product exists — but its position isn't clear.",
  "The business is moving — but the next growth decision isn't.",
  "Marketing is active — but nobody is completely sure what it should be built around.",
  "The market has changed — and the old logic no longer fits.",
  "There is an idea — but too many assumptions around what it should become.",
  "Or the situation simply refuses to fit neatly into one function or framework.",
];

const products = [
  {
    t: "Marketing Set",
    meta: "For building the marketing foundation",
    d: "For when the product, business or expertise already exists — but the marketing around it needs structure. A guided AI-powered system for understanding value, market, customers, positioning and communication.",
    cta: "Explore Marketing Set",
    href: "/marketing-set",
  },
  {
    t: "Synthesis",
    meta: "For going deeper",
    d: "For questions that require a wider view of the product, market, positioning and the system around them. A growing ecosystem of strategic frameworks and AI-supported tools for turning complexity into connected decisions.",
    cta: "Explore Synthesis",
    href: "/#solutions",
  },
  {
    t: "Consulting",
    meta: "For the problems that don't fit",
    d: "For situations where the answer isn't obvious — or where the first question itself needs to be challenged. We look at the context together and define what actually deserves attention next.",
    cta: "Work with me",
    href: "mailto:hello@vitashablii.com?subject=Consulting",
  },
];


function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* ——— 01 HERO ——— */}
        <section className="relative overflow-hidden">
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[62%] top-[58%] h-[120%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.32] [filter:sepia(0.06)_saturate(0.3)_brightness(1.22)_contrast(0.85)] [mask-image:radial-gradient(closest-side,black_50%,transparent_100%)]"
          />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 pb-16 pt-28 md:grid-cols-12 md:px-10 md:pb-24 md:pt-36">
            <div className="md:col-span-7">
              <Reveal>
                <p className="label-xs !tracking-[0.3em]">About / Vita Shablii</p>
                <h1 className="display-lg mt-8">
                  The personality
                  <br />
                  behind <span className="italic">the work.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-10 space-y-6 md:mt-12">
                  <p className="body-read">
                    Vita Shablii is a strategist, marketer and product thinker working at the
                    intersection of business, marketing, technology and human behaviour.
                  </p>
                  <p className="body-read">
                    Her work is less about adding more marketing — and more about understanding what
                    is actually happening underneath it.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <ul className="mt-10 border-l border-olive/40 bg-sage/25 px-7 py-6 md:mt-12">
                  {[
                    "What is being built?",
                    "For whom?",
                    "Where does the value really come from?",
                    "What is preventing growth?",
                    "And which decision needs to become clear before anything else moves forward?",
                  ].map((q) => (
                    <li
                      key={q}
                      className="quote-serif text-xl text-charcoal md:"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={340}>
                <p className="label-xs mt-10 !tracking-[0.28em]">
                  Strategy × Marketing × Product × AI
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="grain relative aspect-[3/4] overflow-hidden bg-stone">
                <img
                  src={portrait}
                  alt="Portrait of Vita Shablii"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ——— 02 NOT A STRAIGHT LINE ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <Kicker>Not a straight line</Kicker>
                  <h2 className="display-md">
                    I didn't build my career around one industry. I followed the problems{" "}
                    <span className="italic">I wanted to understand.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <div className="space-y-6">
                    <p className="body-read">
                      I came into marketing almost by accident. What kept me there was never
                      marketing as a discipline on its own. It was the access it gave me to the whole
                      business — the product, the customer, the market, the economics, the decisions
                      and the people behind them.
                    </p>
                    <p className="body-read">
                      That curiosity took me across industries, business models and markets:
                      technology, IT, consulting, e-commerce, fintech and consumer businesses;
                      products and launches across Europe, the United States and China. I built
                      marketing functions and teams, worked alongside developers, entered unfamiliar
                      markets and repeatedly found myself inside problems that did not fit neatly
                      into a marketing brief.
                    </p>
                    <p className="body-read">
                      And the more different businesses I saw, the more familiar the underlying
                      questions became.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={80}>
              <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  "Why does this product work?",
                  "Why isn't this one growing?",
                  "Where is the value actually created?",
                  "What are customers really responding to?",
                  "Which part of the system is creating the result — and which part are we simply assuming does?",
                ].map((q) => (
                  <li
                    key={q}
                    className="border-t border-slate-deep/25 pt-5 font-serif-editorial text-lg leading-snug text-charcoal"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-20 flex flex-col items-center gap-8 border-t border-line/60 pt-16 text-center md:mt-24">
                <Spiral className="h-16 w-16 opacity-60" accent />
                <p className="display-md mx-auto max-w-[34em]">
                  Eventually, marketing stopped being the category.{" "}
                  <span className="italic">Understanding the system became the work.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— 03 EXPERIENCE IN CONTEXT ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[42rem] text-center">
                <Kicker>Experience / not as a timeline</Kicker>
                <h2 className="display-md">
                  Different contexts taught me to look for{" "}
                  <span className="italic">what remains true.</span>
                </h2>
                <p className="body-read mt-8">
                  Not the tactics. Not the channels. The system underneath them.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 space-y-px md:mt-20">
              {markets.map((m, i) => (
                <Reveal key={m.n} delay={i * 100}>
                  <article className="grid gap-8 border-t border-line/60 py-12 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <p className="label-xs">
                        {m.n} / {m.t}
                      </p>
                      <p className="mt-4 font-serif-editorial text-2xl italic text-charcoal">
                        {m.meta}
                      </p>
                    </div>
                    <div className="space-y-5 md:col-span-5">
                      {m.body.map((p) => (
                        <p key={p} className="body-read">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="md:col-span-3">
                      <div className="border border-line/70 p-6">
                        <p className="label-xs">Rarely the question</p>
                        <p className="mt-2 text-sm text-charcoal/55 line-through">{m.qA}</p>
                        <p className="label-xs mt-6">More often</p>
                        <p className="mt-2 font-serif-editorial text-xl leading-snug text-charcoal">
                          {m.qB}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ——— 04 EXPERIENCE, QUANTIFIED ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-12 md:items-stretch">
              <div className="flex flex-col md:col-span-5">
                <Reveal>
                  <Kicker>Selected experience</Kicker>
                  <h2 className="display-md max-w-[18em]">
                    Experience is useful only when it{" "}
                    <span className="italic">changes how you see.</span>
                  </h2>
                </Reveal>
                <div className="grain relative mt-10 min-h-[260px] flex-1 overflow-hidden bg-stone">
                  <img
                    src={mist}
                    alt="Mist settling over still water"
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col md:col-span-6 md:col-start-7">
                <Reveal delay={100}>
                  <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                    {numbers.map((n) => (
                      <div key={n.k} className="border-t border-slate-deep/30 pt-5">
                        <dt className="font-serif-editorial text-3xl text-charcoal">{n.k}</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-charcoal/70">{n.v}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
                <ul className="mt-10 flex-1 divide-y divide-line/60 border-t border-line/60">
                  {cases.map((c) => (
                    <li key={c.t} className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-8">
                      <p className="label-xs !text-charcoal sm:w-40 sm:shrink-0">
                        {c.k} / {c.t}
                      </p>
                      <p className="text-sm leading-relaxed text-charcoal/70">{c.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 05 THE SHIFT ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[44rem] text-center">
                <Kicker>What experience actually changed</Kicker>
                <h2 className="display-md">
                  Experience made me slower to accept the question —{" "}
                  <span className="italic">and faster to look for the system behind it.</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <div className="border border-line/70 bg-paper p-8">
                    <p className="label-xs">Someone says</p>
                    <p className="mt-3 font-serif-editorial text-3xl italic text-charcoal">
                      “We need more leads.”
                    </p>
                    <p className="label-xs mt-8">Maybe. But perhaps the real problem is</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {[
                        "conversion",
                        "retention",
                        "pricing",
                        "product mix",
                        "positioning",
                        "margin",
                        "a design that should come first",
                      ].map((x) => (
                        <li
                          key={x}
                          className="label-xs border border-olive/30 bg-sage/25 px-3 py-1.5 !tracking-[0.14em] !text-charcoal"
                        >
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={120}>
                  <div className="space-y-6">
                    <p className="body-read">
                      The first version of a problem is often only its most visible version. That is
                      why I have become increasingly interested in what happens before the solution.
                    </p>
                    <ul className="space-y-4 border-t border-line/60 pt-6">
                      {[
                        ["A marketing problem", "may actually be a product problem."],
                        ["A growth problem", "may actually be a positioning problem."],
                        ["A communication problem", "may begin with a decision nobody has made yet."],
                      ].map(([a, b]) => (
                        <li key={a} className="flex flex-wrap items-baseline gap-2">
                          <span className="label-xs !text-charcoal">{a}</span>
                          <span className="text-sm text-charcoal/65">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="body-read">
                      And sometimes the thing everyone is trying to optimise is not the thing
                      creating the result at all.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={80}>
              <p className="display-md mt-16 max-w-[30em] border-t border-line/60 pt-10">
                Execution becomes much easier{" "}
                <span className="italic">once the real problem has a name.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ——— 06 HOW I THINK ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[40rem] text-center">
                <Kicker>A mental model</Kicker>
                <h2 className="display-md">
                  I rarely think <span className="italic">in straight lines.</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-14 md:mt-16 md:grid-cols-12 md:items-center">
              <div className="md:col-span-6">
                <Reveal>
                  <div className="mx-auto max-w-[520px]">
                    <SpiralSteps
                      center="Context"
                      nodes={["Observe", "Question", "Trace", "Clarify", "Decide"]}
                    />
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <ol className="divide-y divide-line/60 border-y border-line/60">
                    {model.map((m, i) => (
                      <li key={m.t} className="flex items-baseline gap-5 py-4">
                        <span className="label-xs shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="font-serif-editorial text-xl text-charcoal">{m.t}</span>{" "}
                          <span className="text-sm leading-relaxed text-charcoal/60">{m.d}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>
            </div>

            <Reveal>
              <div className="mx-auto mt-16 max-w-[46rem] space-y-6 text-center">
                <p className="body-read">
                  Products evolve. Markets respond. People behave differently from our assumptions.
                  Decisions create new information. So I don't see strategy as a document created
                  once and followed forever — but as a living system of connected decisions that
                  becomes clearer as you move through it.
                </p>
                <p className="quote-serif text-2xl italic text-charcoal md:">
                  You move forward. You learn. You return to the question with more context than you
                  had before. And the system evolves.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— 07 THE SHELL ——— */}
        <section className="blue-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-16 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-deep/40">
                    <img
                      src={chambers}
                      alt="Backlit nautilus shell chambers"
                      loading="lazy"
                      width={1200}
                      height={1504}
                      className="h-full w-full object-cover [filter:grayscale(0.55)_contrast(1.05)_brightness(1.02)]"
                    />
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={100}>
                  <Kicker>A form I keep returning to</Kicker>
                  <h2 className="display-md">
                    Structure does not always <span className="italic">have to be imposed.</span>
                  </h2>
                  <div className="mt-10 space-y-6">
                    <p className="body-read">
                      There is a reason the shell keeps appearing throughout my work. Not because I
                      needed a symbol — because its logic felt familiar.
                    </p>
                    <p className="body-read">
                      A shell is not assembled from unrelated parts and forced into shape. Its
                      structure develops from within — layer after layer, each new part responding to
                      what already exists.
                    </p>
                    <p className="body-read">
                      Order, but not rigidity. Growth, but not randomness. Complexity, with an
                      underlying logic holding it together. That is close to how I think about good
                      products, businesses and brands.
                    </p>
                    <p className="body-read">
                      Often the structure is already there in fragments: in the product, in customer
                      behaviour, in the economics, in the founder's intuition, in the market
                      response. The work is to see the relationships between them.
                    </p>
                    <p className="mt-4 border-t border-line/60 pt-8 quote-serif text-2xl italic text-charcoal md:">
                      The goal isn't always to add more. Sometimes it is to understand the logic
                      already there — and help it take form.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 08 TECHNOLOGY & AI ——— */}
        <section className="teal-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <Kicker>Technology / AI</Kicker>
                  <h2 className="display-md">
                    Tools change. <span className="italic">The question comes first.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={100}>
                  <div className="space-y-6">
                    <p className="body-read">
                      I have always been interested in technology when it removes unnecessary work
                      rather than creates another layer of it. Working alongside IT teams gradually
                      moved me beyond marketing briefs and deeper into processes, automation and the
                      logic behind digital products. AI is a continuation of that thinking for me —
                      a way to analyse faster, connect information, challenge assumptions, generate
                      possibilities and move from information to iteration.
                    </p>
                    <p className="body-read">
                      But speed only becomes valuable when there is direction. More output is not
                      automatically better thinking. More automation is not automatically a better
                      system. And a powerful tool cannot decide what matters unless we give it the
                      right context.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={80}>
              <p className="display-md mt-16 max-w-[32em] border-t border-line/60 pt-10">
                Not a substitute for strategy.{" "}
                <span className="italic">A layer inside a strategy that already makes sense.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ——— 09 BEYOND THE WORK ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <Kicker>Beyond the work</Kicker>
                  <h2 className="display-md">
                    The person is always <span className="italic">bigger than the profession.</span>
                  </h2>
                  <div className="mt-10 space-y-6">
                    <p className="body-read">
                      The way I work is difficult to separate from the way I look at things in
                      general. I notice relationships. Contradictions. Missing links. The small
                      assumption somewhere in the middle that everyone else has already accepted and
                      moved past.
                    </p>
                    <p className="body-read">
                      I like understanding why something works — not only knowing that it does.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <div className="grain relative aspect-[4/3] overflow-hidden bg-stone">
                    <img
                      src={mist}
                      alt="Mist settling over still water"
                      loading="lazy"
                      width={1408}
                      height={1056}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
              {beyond.map((b, i) => {
                const img = i === 0 ? light : i === 1 ? leaves : ink.url;
                const flip = i % 2 === 1;
                return (
                  <Reveal key={b.kicker} delay={60}>
                    <article className="grid gap-10 border-t border-line/60 pt-12 md:grid-cols-12 md:items-start">
                      <div
                        className={
                          flip
                            ? "md:col-span-5 md:col-start-8 md:row-start-1"
                            : "md:col-span-5"
                        }
                      >
                        <div className="grain relative aspect-[4/3] overflow-hidden bg-stone">
                          <img
                            src={img}
                            alt=""
                            aria-hidden
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className={
                          flip
                            ? "md:col-span-6 md:row-start-1"
                            : "md:col-span-6 md:col-start-7"
                        }
                      >
                        <p className="label-xs">
                          {b.n} / {b.kicker}
                        </p>
                        <h3 className="display-sm mt-4 max-w-[16em]">{b.t}</h3>
                        <p className="body-read mt-7">{b.lead}</p>
                        <ul className="mt-6 space-y-2">
                          {b.items.map((x) => (
                            <li key={x} className="body-read !text-base">
                              {x}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-7 max-w-[36em] text-sm italic leading-relaxed text-charcoal/65">
                          {b.close}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>


        {/* ——— 10 PRINCIPLES ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[42rem] text-center">
                <Kicker>A few things I keep coming back to</Kicker>
              </div>
            </Reveal>
            <ol className="mx-auto mt-10 max-w-[52rem] divide-y divide-line/60 border-y border-line/60">
              {principles.map((p, i) => (
                <Reveal key={p} delay={i * 50}>
                  <li className="flex items-baseline gap-6 py-5">
                    <span className="label-xs shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="quote-serif text-2xl text-charcoal md:">
                      {p}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— 10b WHERE THINKING BECOMES WORK ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <Kicker>Where thinking becomes work</Kicker>
                  <h2 className="display-md">
                    Usually, people come to me when something{" "}
                    <span className="italic">doesn't quite connect.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <ul className="divide-y divide-line/60 border-y border-line/60">
                    {useful.map((u) => (
                      <li
                        key={u}
                        className="py-5 font-serif-editorial text-xl leading-snug text-charcoal"
                      >
                        {u}
                      </li>
                    ))}
                  </ul>
                  <p className="body-read mt-8">
                    These are the kinds of problems I like working with.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 11 FROM THINKING TO PRODUCTS ——— */}

        <section id="products" className="blue-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[42rem] text-center">
                <Kicker>The work, made useful</Kicker>
                <h2 className="display-md">
                  Some of my thinking <span className="italic">eventually became products.</span>
                </h2>
                <p className="body-read mx-auto mt-8 text-center">
                  Not because every problem can be turned into a framework — it can't. But some
                  questions appear often enough that a good structure helps people think through them
                  without starting from zero every time.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden border border-line/60 bg-line/40 md:mt-20 lg:grid-cols-3">
              {products.map((p, i) => (
                <Reveal key={p.t} delay={i * 100}>
                  <article className="flex h-full flex-col bg-slate-deep/40 px-7 py-10">
                    <p className="label-xs">{p.meta}</p>
                    <h3 className="display-sm mt-4">{p.t}</h3>
                    <p className="body-read mt-6 flex-1">{p.d}</p>
                    {p.href.startsWith("/") ? (
                      <Link to={p.href} className="link-editorial mt-8 self-start">
                        {p.cta} <span aria-hidden>→</span>
                      </Link>
                    ) : (
                      <a href={p.href} className="link-editorial mt-8 self-start">
                        {p.cta} <span aria-hidden>→</span>
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 12 FINAL ——— */}
        <section className="dark-room rule-thin relative overflow-hidden">
          <ShellBackdrop />
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <div className="mx-auto max-w-[44rem] text-center">
                <Kicker>Still curious?</Kicker>
                <h2 className="display-lg">
                  Bring me a system <span className="italic">you want to understand.</span>
                </h2>
                <p className="body-read mx-auto mt-10">
                  Explore the tools I've built from this way of thinking — or bring me a problem that
                  doesn't fit neatly into one.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="/#solutions"
                    className="label-xs group inline-flex items-center gap-3 border border-ivory bg-ivory px-8 py-4 !tracking-[0.2em] !text-ink transition-colors hover:bg-slate hover:border-slate hover:!text-ivory"
                  >
                    EXPLORE THE PRODUCTS
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="mailto:hello@vitashablii.com?subject=Work%20with%20Vita"
                    className="label-xs group inline-flex items-center gap-3 border border-ivory/45 px-8 py-4 !tracking-[0.2em] !text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
                  >
                    WORK WITH ME
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rule-thin mt-20 flex flex-col gap-6 pt-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
                <div>
                  <p className="label-xs !text-charcoal !tracking-[0.3em]">Vita Shablii</p>
                  <p className="label-xs mt-2 !tracking-[0.24em]">
                    Strategy × Marketing × Product × AI
                  </p>
                </div>
                <p className="font-serif-editorial text-xl italic leading-relaxed text-charcoal">
                  Clarity before complexity. Context before tactics.
                  <br />
                  Better questions before more execution.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
