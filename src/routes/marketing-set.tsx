import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ChamberSet, ChannelLanes } from "@/components/site/LineArt";
import portrait from "@/assets/vita-portrait.jpg";
import layers from "@/assets/ms-layers.jpg";
import desk from "@/assets/ms-desk.jpg";
import ink from "@/assets/ink-layers.jpg.asset.json";
import ripple from "@/assets/ripple.jpg.asset.json";


const title = "Marketing Set — AI marketing system | Vita Shablii";
const description =
  "A structured AI-powered marketing system: 5 strategic workflows, a personal AI marketing assistant and 45 funnel frameworks. Build the marketing before you scale it.";

export const Route = createFileRoute("/marketing-set")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarketingSetPage,
});

const CTA_HREF = "mailto:hello@vitashablii.com?subject=Marketing%20Set";

function Cta({
  className = "",
  invert = false,
  fixed = false,
}: {
  className?: string;
  invert?: boolean;
  /** keeps the exact hero button tones even inside a colored room */
  fixed?: boolean;
}) {
  return (
    <a
      href={CTA_HREF}
      className={`label-xs group inline-flex items-center gap-3 border px-8 py-4 !tracking-[0.2em] transition-colors ${
        fixed
          ? "border-btn-dark bg-btn-dark !text-btn-dark-foreground hover:border-slate-deep hover:bg-slate-deep"
          : invert
            ? "border-ivory bg-ivory !text-slate-deep hover:border-slate hover:bg-slate hover:!text-ivory"
            : "border-charcoal bg-charcoal !text-ivory hover:border-slate-deep hover:bg-slate-deep"
      } ${className}`}
    >
      GET MARKETING SET
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="label-xs mb-5">{children}</p>;
}

const audience = [
  {
    n: "01",
    t: "Expert / personal brand",
    d: "You know what you do. But explaining why someone should choose you still feels harder than it should.",
    o: "Clarify value & positioning",
  },
  {
    n: "02",
    t: "Founder / business",
    d: "You already have a product, but parts of your marketing still rely on assumptions.",
    o: "Understand market & customers",
  },
  {
    n: "03",
    t: "Marketer / freelancer",
    d: "You know the tools. What you want is a more systematic way to think before executing — especially with AI.",
    o: "Build a reusable logic",
  },
  {
    n: "04",
    t: "Team / agency client",
    d: "Marketing is already happening, but channels, briefs and campaigns aren't always built from the same understanding.",
    o: "Create one shared foundation",
  },
];

const shift = [
  ["noise", "clarity"],
  ["guesswork", "positioning"],
  ["generic AI output", "market context"],
  ["disconnected communication", "customer logic"],
  ["random experiments", "connected decisions"],
];

const outcomes = [
  {
    n: "01",
    t: "Value & differentiation",
    d: "A clearer articulation of what makes your product, service or expertise worth choosing — and where its strongest differentiation may actually come from.",
  },
  {
    n: "02",
    t: "Market map",
    d: "A structured view of your competitive environment, alternatives, category patterns and potential positioning space.",
  },
  {
    n: "03",
    t: "Customer decision map",
    d: "Customer segments built around motivations, needs, triggers, objections and decision logic — not demographics alone.",
  },
  {
    n: "04",
    t: "Positioning & message foundation",
    d: "Core positioning, meanings and communication directions you can translate into your website, offers, content and campaigns.",
  },
  {
    n: "05",
    t: "Personal AI marketing assistant",
    d: "An AI assistant grounded in the context you've already built — your product, market, audience and strategic decisions.",
  },
];

const steps = [
  { n: "01", t: "Differentiation", q: "What makes this worth choosing?" },
  { n: "02", t: "Market", q: "Where are you actually competing?" },
  { n: "03", t: "People", q: "Who needs this — and why?" },
  {
    n: "04",
    t: "Brand core",
    q: "How should this translate into positioning and communication?",
  },
  { n: "05", t: "AI assistant", q: "How do you keep using everything you've learned?" },
];

const notPrompts = [
  {
    t: "Sequence, not random requests",
    d: "Each workflow begins where the previous one ended.",
  },
  {
    t: "Your context, not generic output",
    d: "AI works with your product, competitors, customers and decisions.",
  },
  {
    t: "Strategy before content",
    d: "You build the logic before asking AI to produce more execution.",
  },
  {
    t: "Context that stays useful",
    d: "Instead of starting from zero every time, you create a foundation you can return to.",
  },
];

const how = [
  { t: "Watch", d: "Short video guidance explains the task." },
  { t: "Copy", d: "You take the structured workflow." },
  { t: "Work with AI", d: "Work through it using your own business context." },
  { t: "Save", d: "Keep the conclusions that matter." },
  { t: "Connect", d: "Connect everything into your personal AI marketing assistant." },
];

const receive = [
  { n: "01", t: "5 strategic AI workflows" },
  { n: "02", t: "Step-by-step video guidance" },
  { n: "03", t: "Personal AI assistant setup" },
  { n: "04", t: "45 funnel frameworks" },
  { n: "05", t: "Lifetime access" },
];

const useCases = [
  {
    t: "Expert",
    q: "I know what I do. I just can't explain why it's different.",
    o: "differentiation + positioning",
  },
  {
    t: "Business",
    q: "We're already marketing, but every channel seems to be saying something different.",
    o: "customer logic + shared messaging foundation",
  },
  {
    t: "Marketer",
    q: "I use AI constantly, but every new task starts almost from zero.",
    o: "reusable strategic context + AI assistant",
  },
];

const proof = [
  { k: "13+", v: "years across marketing, strategy and products" },
  { k: "500+", v: "projects and events delivered" },
  { k: "15+", v: "brands built from zero" },
  { k: "3", v: "markets: Europe, United States, China" },
];

const included = [
  "5 strategic AI workflows",
  "Personal AI marketing assistant",
  "Step-by-step video guidance",
  "45 funnel frameworks",
  "Lifetime access",
];

const faq = [
  {
    q: "Do I need a marketing background?",
    a: "No. The system guides you through the logic step by step. What matters is that you can provide information about your product, expertise or business.",
  },
  {
    q: "Do I need experience working with AI?",
    a: "No. The workflows are already structured. You follow the process and add the context about your project.",
  },
  {
    q: "Which AI tools can I use?",
    a: "Marketing Set can be used with ChatGPT or Claude.",
  },
  {
    q: "How much time should I set aside?",
    a: "You don't need to complete Marketing Set in one sitting. Each part can be approached as a focused working session, and you can return whenever your product, market or positioning changes.",
  },
  {
    q: "Will AI give me the “right” strategy?",
    a: "No — and that isn't the point. Marketing Set helps you structure the context, questions and analysis behind stronger decisions. AI helps you explore and connect that information faster. Judgment, experimentation and real market feedback still matter.",
  },
  {
    q: "Is Marketing Set only for personal brands?",
    a: "No. It can be used for experts, services, products, businesses and other projects where you need to understand value, audience, market and positioning.",
  },
  {
    q: "Is this just a collection of prompts?",
    a: "No. The workflows are a connected sequence — each one uses the context and conclusions created in the previous steps. You are building one marketing foundation, not isolated AI answers.",
  },
  {
    q: "I already work with a marketer or agency. Is this still useful?",
    a: "Yes. Marketing Set becomes the strategic foundation you brief other people from, so everyone works from the same understanding of your product, audience, market and positioning.",
  },
  {
    q: "How quickly can I start, and how long do I have access?",
    a: "Immediately after purchase — and access is for life. There is no deadline to finish.",
  },
];

function MarketingSetPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        {/* ——— HERO ——— */}
        <section className="relative overflow-hidden bg-cream">
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 pt-28 pb-16 md:grid-cols-12 md:px-10 md:pt-36 md:pb-24">
            <div className="md:col-span-6">
              <Reveal>
                <SectionLabel>Marketing Set</SectionLabel>
                <h1 className="display-lg">
                  Build the marketing
                  <br />
                  <span className="italic">before you scale it.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-read mt-8">
                  A structured AI-powered system that helps you understand what makes your product
                  valuable, who it is really for, how to position it and what to say about it —
                  before spending more time or money on content, ads or agencies.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <ul className="mt-9 flex flex-wrap gap-x-3 gap-y-2">
                  {[
                    "5 strategic AI workflows",
                    "Personal AI marketing assistant",
                    "45 funnel frameworks",
                    "Lifetime access",
                  ].map((m) => (
                    <li key={m} className="label-xs bg-sage/60 px-3 py-2 !tracking-[0.14em] !text-charcoal">
                      {m}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-11 flex flex-wrap items-center gap-8">
                  <Cta />
                  <div>
                    <p className="font-serif-editorial text-3xl text-charcoal">589 UAH</p>
                    <p className="label-xs mt-1 !tracking-[0.14em]">
                      One-time payment · Immediate access
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-6">
              <ChamberSet
                nodes={["Differentiation", "Market", "People", "Brand core", "AI assistant"]}
                className="w-full"
              />
              <p className="label-xs mt-2 text-center !tracking-[0.16em]">
                Five chambers · one growing system
              </p>
            </div>
          </div>
        </section>

        {/* ——— THE PROBLEM ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <SectionLabel>Before more marketing</SectionLabel>
                  <h2 className="display-md">
                    More marketing
                    <br />
                    <span className="italic">isn't always the answer.</span>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <img
                    src={layers}
                    alt="Layered paper curves in soft daylight"
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="mt-10 block w-full object-cover md:h-[300px]"
                  />
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={80}>
                  <p className="body-read">
                    Content, ads and AI can accelerate execution. But they cannot decide:
                  </p>
                  <ul className="mt-8 border-t border-line">
                    {[
                      "what your product is really valuable for",
                      "who should care about it",
                      "why someone should choose it",
                      "what your communication should be built around",
                    ].map((l) => (
                      <li
                        key={l}
                        className="lead-serif border-b border-line py-4 text-charcoal"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                  <p className="body-read mt-8">
                    When these answers are unclear, more content, tools and channels usually create
                    more activity — not more clarity. Marketing Set helps you build the foundation
                    first.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— RECOGNITION ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Reveal>
                  <SectionLabel>Is this for me?</SectionLabel>
                  <h2 className="display-md">
                    You already have something.
                    <br />
                    <span className="italic">What's missing is the structure around it.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <Reveal delay={120}>
                  <p className="body-read border-l-2 border-olive pl-6">
                    Four starting situations. The same missing layer underneath each of them.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-12 grid gap-x-14 gap-y-0 md:mt-16 md:grid-cols-2">
              {audience.map((a, i) => (
                <Reveal key={a.t} delay={i * 80}>
                  <div className="flex h-full flex-col border-t border-line py-8 md:py-10">
                    <p className="label-xs !text-olive">
                      {a.n} / {a.t}
                    </p>
                    <p className="lead-serif mt-5 text-charcoal">
                      {a.d}
                    </p>
                    <p className="label-xs mt-auto pt-7 !tracking-[0.16em] !text-charcoal">
                      → {a.o.toUpperCase()}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— TRANSFORMATION ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <SectionLabel>From activity to structure</SectionLabel>
                  <h2 className="display-md">
                    A different starting point
                    <br />
                    <span className="italic">changes what comes next.</span>
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <figure className="mt-10 hidden md:block">
                    <img
                      src={ink.url}
                      alt="Layered olive ink strokes forming a single translucent shape"
                      loading="lazy"
                      className="aspect-[4/5] w-full object-contain"
                    />
                    <figcaption className="label-xs mt-3 !tracking-[0.14em]">
                      Many layers · one shape
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
              <div className="flex flex-col md:col-span-6 md:col-start-7 md:justify-between md:pt-10">
                <ul className="border-t border-line">
                  {shift.map(([a, b], i) => (
                    <Reveal key={a} delay={i * 70}>
                      <li className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-line py-5">
                        <span className="lead-serif text-charcoal/40 line-through decoration-taupe">
                          {a}
                        </span>
                        <span aria-hidden className="text-smoke">
                          →
                        </span>
                        <span className="quote-serif text-charcoal">
                          {b}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="quote-serif mt-10 border-l-2 border-olive bg-sage/40 px-7 py-8 text-charcoal md:mt-0">
                  Not more marketing. <span className="italic">A stronger foundation</span> for
                  everything that follows.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* ——— THE RESULT ——— */}
        <section className="teal-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="flex flex-col md:col-span-5">
                <Reveal>
                  <SectionLabel>What you build</SectionLabel>
                  <h2 className="display-md">
                    Not another document
                    <br />
                    <span className="italic">to forget in a folder.</span>
                  </h2>
                  <p className="body-read mt-7">
                    A foundation you can use — across your website, offers, content, campaigns and
                    every future decision.
                  </p>
                </Reveal>
                <Reveal delay={140} className="mt-10 hidden flex-1 md:block">
                  <img
                    src={desk}
                    alt="Notebook with strategy sketches beside a laptop"
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="h-full w-full object-cover md:min-h-[520px]"
                  />
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ul className="border-t border-line">
                  {outcomes.map((o, i) => (
                    <Reveal key={o.t} delay={i * 70}>
                      <li className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:gap-6">
                        <p className="label-xs !text-olive md:col-span-1">{o.n}</p>
                        <div className="md:col-span-11">
                          <h3 className="lead-serif text-charcoal">
                            {o.t}
                          </h3>
                          <p className="body-read mt-2 !max-w-none">{o.d}</p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="lead-serif mt-9 border-l-2 border-olive bg-charcoal/10 px-7 py-6 text-charcoal">
                  The result is not five isolated AI outputs. It's{" "}
                  <span className="italic">one connected marketing context</span> you can keep
                  working from.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— THE METHOD ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>How you build it</SectionLabel>
                  <h2 className="display-md">
                    Five steps.
                    <br />
                    <span className="italic">Each one makes the next one smarter.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <p className="body-read border-l-2 border-olive pl-6">
                    Each step carries the context forward. Nothing starts from a blank prompt.
                  </p>
                </Reveal>
              </div>
            </div>

            <ol className="mt-14 grid gap-0 border-t border-line md:mt-20 md:grid-cols-5 md:border-t-0">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 80} className="h-full">
                  <li className="relative flex h-full flex-col border-b border-line py-8 md:border-b-0 md:border-t md:pr-8 md:pb-2">
                    {i < steps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute -top-[0.72rem] right-1 hidden bg-background px-1 text-xs text-smoke md:block"
                      >
                        →
                      </span>
                    )}
                    <p className="quote-serif text-taupe">
                      {s.n}
                    </p>
                    <h3 className="label-xs mt-4 !tracking-[0.18em] !text-olive">{s.t}</h3>
                    <p className="lead-serif mt-5 text-charcoal">
                      {s.q}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— WHY NOT JUST CHATGPT ——— */}
        <section className="rule-thin bg-cream">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Reveal>
                  <SectionLabel>Why this works differently</SectionLabel>
                  <h2 className="display-md">
                    You can ask AI almost anything.
                    <br />
                    <span className="italic">The harder part is knowing what deserves asking.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <Reveal delay={120}>
                  <p className="quote-serif border-l-2 border-olive pl-6 text-charcoal">
                    AI is the interface.
                    <br />
                    <span className="italic">The value is in the logic.</span>
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-0">
              {notPrompts.map((p, i) => (
                <Reveal key={p.t} delay={i * 80}>
                  <div className="border-t border-line pt-6 md:mr-8">
                    <h3 className="label-xs !text-charcoal">{p.t}</h3>
                    <p className="body-read mt-4 !max-w-none !text-[0.9rem]">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="quote-serif mt-14 text-charcoal">
              The goal isn't better prompts.{" "}
              <span className="italic">It's better marketing decisions.</span>
            </p>
          </div>
        </section>

        {/* ——— HOW IT WORKS ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>Start today</SectionLabel>
                  <h2 className="display-md">
                    Less studying.
                    <br />
                    <span className="italic">More working on your actual business.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <p className="label-xs !tracking-[0.16em] !text-charcoal">
                    WATCH → COPY → WORK WITH AI → SAVE → CONNECT
                  </p>
                  <p className="body-read mt-5">
                    No cohort. No schedule. No deadline. Most steps can be completed in one focused
                    working session.
                  </p>
                </Reveal>
              </div>
            </div>
            <ol className="mt-12 grid gap-8 md:mt-16 md:grid-cols-5 md:gap-6">
              {how.map((h, i) => (
                <Reveal key={h.t} delay={i * 70}>
                  <li className="border-t border-line pt-6">
                    <p className="label-xs !text-olive">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="quote-serif mt-3 text-charcoal">{h.t}</h3>
                    <p className="body-read mt-2 !max-w-none !text-[0.9rem]">{h.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— EXECUTION LAYER ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <SectionLabel>Also included</SectionLabel>
                  <h2 className="display-md">
                    Once you know what to say,
                    <br />
                    <span className="italic">you still need a way to move people.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7 md:pt-4">
                <Reveal delay={90}>
                  <div className="flex items-baseline gap-5">
                    <span className="quote-serif text-charcoal">
                      45
                    </span>
                    <span className="quote-serif italic text-charcoal">
                      funnel frameworks
                    </span>
                  </div>
                  <p className="body-read mt-6">
                    A library of mono- and multi-channel customer journey structures for translating
                    your marketing foundation into execution.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={140}>
              <ChannelLanes
                lanes={["Instagram", "TikTok", "YouTube", "Telegram", "Landing page"]}
                className="mx-auto mt-12 w-full max-w-[900px] md:mt-16"
              />
            </Reveal>

            <p className="label-xs mx-auto mt-6 max-w-[36rem] text-center normal-case !tracking-[0.1em]">
              The funnels don't replace strategy. They help activate it.
            </p>
          </div>
        </section>

        {/* ——— WHAT YOU RECEIVE ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>Immediate access</SectionLabel>
                  <h2 className="display-md">
                    Everything you need
                    <br />
                    <span className="italic">to start today.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <p className="body-read border-l-2 border-olive pl-6">
                    No subscription. No recurring payment. No deadline to finish. Works with ChatGPT
                    and Claude.
                  </p>
                </Reveal>
              </div>
            </div>
            <ul className="mt-12 grid gap-0 border-t border-line md:mt-16 md:grid-cols-5 md:border-t-0">
              {receive.map((r, i) => (
                <Reveal key={r.t} delay={i * 70}>
                  <li className="flex h-full flex-col border-b border-line py-6 md:border-b-0 md:border-t md:pr-6 md:pb-0">
                    <p className="label-xs !text-olive">{r.n}</p>
                    <h3 className="lead-serif mt-4 text-charcoal">
                      {r.t}
                    </h3>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ——— WHERE THIS BECOMES USEFUL ——— */}
        <section className="blue-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Reveal>
                  <SectionLabel>Where this becomes useful</SectionLabel>
                  <h2 className="display-md">
                    Different businesses.
                    <br />
                    <span className="italic">The same underlying need for clarity.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <Reveal delay={120}>
                  <p className="body-read border-l border-line pl-6">
                    The sentences below are the ones I hear most often before the work begins.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
              {useCases.map((u, i) => (
                <Reveal key={u.t} delay={i * 90}>
                  <figure className="flex h-full flex-col border-t border-line pt-7">
                    <p className="label-xs">{u.t}</p>
                    <blockquote className="quote-serif mt-6 text-charcoal">
                      “{u.q}”
                    </blockquote>
                    <figcaption className="label-xs mt-auto pt-8 normal-case !tracking-[0.1em] !text-charcoal">
                      → {u.o}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— BUILT FROM PRACTICE ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
            <div className="flex flex-col md:col-span-4">
              <Reveal>
                <img
                  src={portrait}
                  alt="Vita Shablii"
                  loading="lazy"
                  className="block aspect-[4/5] w-full object-cover object-top"
                />

              </Reveal>
              <Reveal delay={140}>
                <dl className="mt-8 border-t border-line">
                  {proof.map((p) => (
                    <div
                      key={p.k}
                      className="flex items-baseline gap-5 border-b border-line py-4"
                    >
                      <dt className="quote-serif min-w-[4.5rem] text-charcoal">
                        {p.k}
                      </dt>
                      <dd className="label-xs normal-case !tracking-[0.08em]">{p.v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal delay={80}>
                <SectionLabel>Built from practice</SectionLabel>
                <h2 className="display-md">
                  I didn't build Marketing Set
                  <br />
                  <span className="italic">to teach people more marketing.</span>
                </h2>
                <p className="body-read mt-8">
                  I built it after 13+ years working across marketing, strategy and products, because
                  I kept seeing the same pattern across very different businesses: execution starts
                  before the fundamental questions have been answered.
                </p>
                <ul className="mt-8 border-t border-line">
                  {[
                    "Content starts before positioning is clear.",
                    "Campaigns start before customer logic is understood.",
                    "AI generates more before anyone has decided what the output should be built around.",
                  ].map((l) => (
                    <li
                      key={l}
                      className="lead-serif border-b border-line py-4 text-charcoal"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
                <p className="body-read mt-8">
                  Across 500+ projects and events, multiple industries and markets in Europe, the
                  United States and China, the contexts changed — but this problem kept returning. I
                  have also built 15+ brands from zero, from initial concept and market logic through
                  positioning, communication, launch and marketing management.
                </p>
                <p className="body-read mt-5">
                  Marketing Set turns that experience into a structure you can work through yourself.
                  Not my answers to your business — a better system for finding yours.
                </p>


                <Link to="/about" className="link-editorial mt-7 inline-flex">
                  GET TO KNOW ME <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ——— THE OFFER ——— */}
        <section className="blue-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>Marketing Set</SectionLabel>
                  <h2 className="display-md">
                    Build the foundation
                    <br />
                    <span className="italic">before you build more marketing.</span>
                  </h2>
                  <p className="body-read mt-7">
                    One structured marketing foundation — built to be reused across content,
                    launches, campaigns and future decisions.
                  </p>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={100}>
                  <div className="bg-slate-deep/40 p-8 md:p-10">
                    <p className="label-xs">Included</p>
                    <ul className="mt-5 border-t border-line">
                      {included.map((i) => (
                        <li
                          key={i}
                          className="border-b border-line py-3 text-[0.95rem] text-charcoal"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                    <p className="quote-serif mt-8 text-charcoal">
                      589 UAH
                    </p>
                    <p className="label-xs mt-3 normal-case !tracking-[0.1em]">
                      One payment · Immediate access · Lifetime use
                    </p>
                    <Cta invert className="mt-8 w-full justify-center" />
                    <p className="label-xs mt-5 normal-case !tracking-[0.08em]">
                      Works with ChatGPT and Claude. No marketing background required.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={140}>
              <figure className="mt-14 md:mt-20">
                <img
                  src={ripple.url}
                  alt="Concentric ripples spreading from a single point"
                  loading="lazy"
                  className="block h-[170px] w-full object-cover md:h-[240px]"
                />
                <figcaption className="label-xs mt-3 !tracking-[0.14em]">
                  One starting point · every ring after it
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <h2 className="display-md max-w-[30rem]">
                Before
                <br />
                <span className="italic">you start.</span>
              </h2>
            </Reveal>
            <dl className="mt-12 border-t border-line md:mt-16">
              {faq.map((f, i) => (
                <Reveal key={f.q} delay={i * 50}>
                  <div className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-10">
                    <dt className="lead-serif text-charcoal md:col-span-5">
                      {f.q}
                    </dt>
                    <dd className="body-read md:col-span-7 md:!max-w-none">{f.a}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ——— FINAL CTA ——— */}
        <section className="dark-room rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-24 text-center md:px-10 md:py-36">
            <Reveal>
              <SectionLabel>One better starting point</SectionLabel>
              <h2 className="display-lg mx-auto max-w-[46rem]">
                Don't ask AI to make more.
                <br />
                <span className="italic">Give it something worth building from.</span>
              </h2>
              <p className="body-read mx-auto mt-8 text-center">
                Build the foundation once. Keep improving it as your product and market evolve.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mx-auto mt-12 flex max-w-[36rem] flex-col items-center gap-6 px-8 py-12">
                <p className="quote-serif text-charcoal">
                  589 UAH
                </p>
                <p className="label-xs !tracking-[0.14em]">
                  5 strategic AI workflows · Personal AI assistant · 45 funnel frameworks · Lifetime
                  access
                </p>
                <Cta fixed />
                <p className="label-xs mt-6 normal-case !tracking-[0.1em]">
                  Less noise. More context. Better marketing decisions.
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
