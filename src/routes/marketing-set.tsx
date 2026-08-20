import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Rosette, ChannelLanes } from "@/components/site/LineArt";
import portrait from "@/assets/vita-portrait.jpg";
import layers from "@/assets/ms-layers.jpg";
import desk from "@/assets/ms-desk.jpg";
import wash from "@/assets/wash.jpg.asset.json";

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

function Cta({ className = "" }: { className?: string }) {
  return (
    <a
      href={CTA_HREF}
      className={`label-xs group inline-flex items-center gap-3 border border-charcoal bg-charcoal px-8 py-4 !tracking-[0.2em] !text-ivory transition-colors hover:bg-olive hover:border-olive ${className}`}
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
    t: "Experts & personal brands",
    d: "You have expertise, a service or an offer — but explaining why someone should choose you still feels harder than it should. You want clearer positioning and messages that don't change with every new post.",
  },
  {
    n: "02",
    t: "Founders & businesses",
    d: "You already have a product, but parts of the marketing still rely on assumptions. You want to understand value, customers and competitive context before investing more into campaigns and growth.",
  },
  {
    n: "03",
    t: "Marketers & freelancers",
    d: "You already know the tools. What you want is a systematic way to think before executing — and a structure you can use with AI instead of starting from a blank conversation.",
  },
  {
    n: "04",
    t: "Teams working with agencies",
    d: "You already have people helping with marketing, but channels, briefs and campaigns don't work from the same strategic logic. Marketing Set creates a shared foundation for decisions.",
  },
];

const shift = [
  ["noise", "clarity"],
  ["guesswork", "positioning"],
  ["generic AI output", "market context"],
  ["disconnected content", "customer logic"],
  ["random experiments", "usable system"],
];

const outcomes = [
  {
    n: "01",
    t: "A clear value proposition",
    d: "Understand what makes your product, service or expertise valuable — and where your real differentiation comes from.",
  },
  {
    n: "02",
    t: "A map of your market",
    d: "See the competitive context around you, how alternatives are positioned and where a stronger position may exist.",
  },
  {
    n: "03",
    t: "Customer logic",
    d: "Understand who you speak to, what they need, what influences their decisions, which objections matter and what language resonates.",
  },
  {
    n: "04",
    t: "Positioning + message foundation",
    d: "Turn analysis into a clearer position, core meanings and messages you can use across website, content, offers and campaigns.",
  },
  {
    n: "05",
    t: "Your personal AI marketing assistant",
    d: "Connect the context you've built into an assistant that already understands your product, audience, market and strategic decisions.",
  },
];

const steps = [
  {
    n: "01",
    t: "Differentiation",
    q: "What makes this worth choosing?",
    d: "Explore the strengths, value, experience and context behind what you offer. Identify what is genuinely distinctive — and what only sounds distinctive because everyone says it.",
    o: "A clearer understanding of your value and differentiation.",
  },
  {
    n: "02",
    t: "Market",
    q: "Where are you actually competing?",
    d: "Analyse the market around your product or expertise: competitors, alternatives, category patterns, saturation and possible positioning opportunities.",
    o: "A structured picture of your competitive context.",
  },
  {
    n: "03",
    t: "People",
    q: "Who needs this — and why?",
    d: "Move beyond demographics. Explore motivations, needs, triggers, objections, priorities, behaviours and language.",
    o: "Customer segments and the logic behind their decisions.",
  },
  {
    n: "04",
    t: "Brand core",
    q: "How should this translate into communication?",
    d: "Connect differentiation, market and customer insight. Turn the analysis into positioning, core meanings and communication directions.",
    o: "A strategic foundation for your brand and messaging.",
  },
  {
    n: "05",
    t: "AI assistant",
    q: "How do you keep using everything you've learned?",
    d: "Bring the previous work together into a personalised AI marketing assistant that works from the context you created rather than answering in isolation.",
    o: "Your reusable AI marketing partner for future decisions.",
  },
];

const notPrompts = [
  {
    t: "Sequence, not random requests",
    d: "The workflows are connected. Each step begins with the context and conclusions created before it.",
  },
  {
    t: "Your context, not generic output",
    d: "The system works with your product, your competitors, your customers and your decisions. The deeper the context, the more useful AI becomes.",
  },
  {
    t: "Strategy before content",
    d: "You don't begin by asking AI for more posts or campaigns. You first build the logic those outputs should come from.",
  },
  {
    t: "A system you can reuse",
    d: "The goal is not one good conversation with AI. It's context you keep using across future marketing tasks.",
  },
];

const how = [
  { t: "Watch", d: "A short explanation of the task, its logic and what you are trying to understand." },
  { t: "Copy", d: "Take the structured AI workflow for the step." },
  { t: "Work with AI", d: "Use it with ChatGPT or Claude and add information about your own project." },
  { t: "Save", d: "Keep the insights and outputs that form your marketing foundation." },
  { t: "Connect", d: "Use the completed work to configure your personal AI marketing assistant." },
];

const receive = [
  {
    n: "01",
    t: "5 strategic AI marketing workflows",
    d: "A connected process covering differentiation, market, people, brand core and your AI assistant.",
  },
  {
    n: "02",
    t: "Step-by-step video guidance",
    d: "Short explanations of what each step is solving and how to work through it.",
  },
  {
    n: "03",
    t: "Personal AI assistant setup",
    d: "Materials for connecting your strategic outputs into an assistant that understands your context.",
  },
  {
    n: "04",
    t: "45 funnel frameworks",
    d: "Structures for turning strategy and communication into practical customer journeys.",
  },
  {
    n: "05",
    t: "Lifetime access",
    d: "Return to the materials whenever your product, market or marketing changes.",
  },
];

const help = [
  {
    t: "Expert / consultant",
    d: "You understand your expertise but struggle to express what makes your offer different. Marketing Set moves you from broad expertise to clearer differentiation and positioning.",
  },
  {
    t: "Product / business",
    d: "You already create content or run campaigns, but different channels communicate different things. Marketing Set creates one foundation around market, customers and positioning.",
  },
  {
    t: "Marketer / freelancer",
    d: "You use AI often, but every new conversation starts almost from zero. Marketing Set helps build reusable context instead of isolated outputs.",
  },
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
    q: "Will Marketing Set create my marketing strategy for me?",
    a: "It helps you build the strategic foundation behind your marketing: the questions, analysis and context needed for stronger decisions. It does not replace judgment, experimentation or real market feedback.",
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
        <section className="relative overflow-hidden bg-paper">
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
                  A structured AI-powered marketing system that helps you understand what makes your
                  product valuable, who it is for, how to position it and what to say about it —
                  before spending more time or money on content, ads or agencies.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <ul className="mt-9 flex flex-wrap gap-x-3 gap-y-2">
                  {[
                    "5 strategic AI workflows",
                    "Personal AI assistant",
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
              <Rosette
                center={["Marketing", "Set"]}
                nodes={["Differentiation", "Market", "People", "Brand core", "AI assistant"]}
                className="w-full"
              />
              <p className="label-xs mt-2 text-center !tracking-[0.16em]">
                Five parts · one system
              </p>
            </div>
          </div>
        </section>

        {/* ——— THE PROBLEM ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
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
                    Content, ads and AI can accelerate execution. But they cannot decide what your
                    product really means, who should care about it, why someone should choose it, or
                    what your marketing should be built around.
                  </p>
                  <ul className="mt-8 border-t border-line">
                    {[
                      "what your product really means",
                      "who should care about it",
                      "why someone should choose it",
                      "what your marketing is built around",
                    ].map((l) => (
                      <li
                        key={l}
                        className="font-serif-editorial border-b border-line py-4 text-[clamp(1.15rem,1.9vw,1.6rem)] text-charcoal"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                  <p className="body-read mt-8">
                    When these answers are unclear, adding more content, tools or channels usually
                    adds more activity — not more clarity. Marketing Set helps you build the
                    foundation first, using your own product, audience and market as the material.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— WHO IT'S FOR ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <SectionLabel>Is this for me?</SectionLabel>
              <h2 className="display-md max-w-[40rem]">
                Built for people who already
                <br />
                <span className="italic">have something to build on.</span>
              </h2>
            </Reveal>
            <div className="mt-12 md:mt-16">
              {audience.map((a, i) => (
                <Reveal key={a.t} delay={i * 80}>
                  <div className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-10 md:py-10">
                    <p className="label-xs md:col-span-1">{a.n}</p>
                    <h3 className="font-serif-editorial text-[clamp(1.3rem,2vw,1.85rem)] text-charcoal md:col-span-4">
                      {a.t}
                    </h3>
                    <p className="body-read md:col-span-7 md:!max-w-none">{a.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— THE SHIFT ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
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
                  <img
                    src={wash.url}
                    alt="Soft watercolour wash in olive tones"
                    loading="lazy"
                    className="mt-10 hidden aspect-[4/3] w-full object-cover object-center md:block"
                  />
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ul className="border-t border-line">
                  {shift.map(([a, b], i) => (
                    <Reveal key={a} delay={i * 70}>
                      <li className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-line py-5">
                        <span className="font-serif-editorial text-[clamp(1.2rem,2vw,1.7rem)] text-charcoal/40 line-through decoration-taupe">
                          {a}
                        </span>
                        <span aria-hidden className="text-smoke">
                          →
                        </span>
                        <span className="font-serif-editorial text-[clamp(1.3rem,2.3vw,2rem)] text-charcoal">
                          {b}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="font-serif-editorial mt-10 text-[clamp(1.5rem,2.8vw,2.3rem)] leading-tight text-charcoal">
                  Not more marketing. <span className="italic">A stronger foundation</span> for
                  everything that comes next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— THE OUTCOME ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <SectionLabel>What you'll have when you're done</SectionLabel>
                  <h2 className="display-md">
                    Something you
                    <br />
                    <span className="italic">can actually use.</span>
                  </h2>
                  <p className="body-read mt-7">
                    Marketing Set is designed to leave you with a working marketing foundation — not
                    just ideas from another AI conversation.
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <img
                    src={desk}
                    alt="Notebook with strategy sketches beside a laptop"
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="mt-10 hidden w-full object-cover md:block md:h-[280px]"
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
                          <h3 className="font-serif-editorial text-[clamp(1.2rem,1.9vw,1.6rem)] text-charcoal">
                            {o.t}
                          </h3>
                          <p className="body-read mt-2 !max-w-none">{o.d}</p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="label-xs mt-8 normal-case !tracking-[0.1em]">
                  One foundation you keep using across content, launches, funnels and future
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— THE SYSTEM ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <div className="max-w-[42rem]">
                <SectionLabel>How it is built</SectionLabel>
                <h2 className="display-md">
                  Five steps.
                  <br />
                  <span className="italic">One connected system.</span>
                </h2>
                <p className="body-read mt-7">
                  Each step uses the result of the previous one. Instead of five disconnected AI
                  conversations, you gradually build one marketing logic from the inside out.
                </p>
              </div>
            </Reveal>

            <ol className="mt-14 border-t border-line md:mt-20">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 70}>
                  <li className="grid gap-5 border-b border-line py-10 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-3">
                      <p className="font-serif-editorial text-[clamp(2.2rem,4vw,3.4rem)] leading-none text-taupe">
                        {s.n}
                      </p>
                      <h3 className="label-xs mt-4 !tracking-[0.18em] !text-charcoal">{s.t}</h3>
                    </div>
                    <div className="md:col-span-5">
                      <p className="font-serif-editorial text-[clamp(1.25rem,2.1vw,1.8rem)] leading-snug text-charcoal">
                        {s.q}
                      </p>
                      <p className="body-read mt-4 !max-w-none">{s.d}</p>
                    </div>
                    <div className="md:col-span-4">
                      <p className="label-xs">Output</p>
                      <p className="mt-3 border-l border-olive/50 bg-sage/40 px-4 py-3 text-[0.9rem] leading-relaxed text-charcoal">
                        {s.o}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <p className="label-xs mt-8 normal-case !tracking-[0.1em]">
              Each step feeds the next. Nothing starts from a blank prompt.
            </p>
          </div>
        </section>

        {/* ——— NOT A PROMPT PACK ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-28">
            <Reveal>
              <SectionLabel>Why this works differently</SectionLabel>
              <h2 className="display-md max-w-[44rem]">
                You can ask AI almost anything. The harder part is knowing{" "}
                <span className="italic">what to ask — and in what order.</span>
              </h2>
            </Reveal>
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
            <p className="font-serif-editorial mt-14 text-[clamp(1.6rem,3vw,2.6rem)] text-charcoal">
              The goal isn't better prompts. <span className="italic">It's better marketing decisions.</span>
            </p>
          </div>
        </section>

        {/* ——— HOW IT WORKS ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <SectionLabel>Start today</SectionLabel>
              <h2 className="display-md max-w-[36rem]">
                No schedule. No cohort.
                <br />
                <span className="italic">No waiting.</span>
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-8 md:mt-16 md:grid-cols-5 md:gap-6">
              {how.map((h, i) => (
                <Reveal key={h.t} delay={i * 70}>
                  <li className="border-t border-line pt-6">
                    <p className="label-xs !text-olive">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="font-serif-editorial mt-3 text-[1.35rem] text-charcoal">{h.t}</h3>
                    <p className="body-read mt-2 !max-w-none !text-[0.85rem]">{h.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <p className="label-xs mt-12 normal-case !tracking-[0.1em]">
              Most steps can be completed in one focused working session. You can move quickly or
              return over several days.
            </p>
          </div>
        </section>

        {/* ——— FUNNEL LIBRARY ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <SectionLabel>Extra execution layer</SectionLabel>
                  <h2 className="display-md">
                    Strategy tells you what to say.
                    <br />
                    <span className="italic">Funnels move it into action.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7 md:pt-4">
                <Reveal delay={90}>
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif-editorial text-[clamp(3.5rem,7vw,6rem)] leading-none text-charcoal">
                      45
                    </span>
                    <span className="font-serif-editorial text-[clamp(1.3rem,2.4vw,2rem)] italic text-charcoal">
                      funnel frameworks
                    </span>
                  </div>
                  <p className="body-read mt-6">
                    Mono- and multi-channel structures designed to help you translate your marketing
                    foundation into customer journeys.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={140}>
              <ChannelLanes
                lanes={["Instagram", "TikTok", "YouTube", "Content", "Offers", "Lead gen"]}
                className="mx-auto mt-12 w-full max-w-[900px] md:mt-16"
              />
            </Reveal>

            <p className="label-xs mx-auto mt-6 max-w-[36rem] text-center normal-case !tracking-[0.1em]">
              Use them after your strategic foundation is clear. The funnels are not the strategy —
              they help activate it.
            </p>
          </div>
        </section>

        {/* ——— WHAT YOU RECEIVE ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <SectionLabel>Immediate access</SectionLabel>
              <h2 className="display-md max-w-[36rem]">
                Everything you need
                <br />
                <span className="italic">to start today.</span>
              </h2>
            </Reveal>
            <ul className="mt-12 border-t border-line md:mt-16">
              {receive.map((r, i) => (
                <Reveal key={r.t} delay={i * 70}>
                  <li className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:gap-10">
                    <p className="label-xs !text-olive md:col-span-1">{r.n}</p>
                    <h3 className="font-serif-editorial text-[clamp(1.2rem,1.9vw,1.6rem)] text-charcoal md:col-span-5">
                      {r.t}
                    </h3>
                    <p className="body-read md:col-span-6 md:!max-w-none">{r.d}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="label-xs mt-8 normal-case !tracking-[0.1em]">
              No subscription. No recurring payment. No deadline to finish.
            </p>
          </div>
        </section>

        {/* ——— WHERE THIS CAN HELP ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <SectionLabel>Where this can help</SectionLabel>
              <h2 className="display-md max-w-[38rem]">
                Different businesses.
                <br />
                <span className="italic">The same underlying problem.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-0">
              {help.map((h, i) => (
                <Reveal key={h.t} delay={i * 80}>
                  <div className="border-t border-line pt-6 md:mr-10">
                    <h3 className="label-xs !text-charcoal">{h.t}</h3>
                    <p className="body-read mt-4 !max-w-none !text-[0.9rem]">{h.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— ABOUT THE CREATOR ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-4">
              <Reveal>
                <img
                  src={portrait}
                  alt="Vita Shablii"
                  loading="lazy"
                  className="block w-full object-cover md:h-[440px]"
                />
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
                <p className="label-xs mt-6 !tracking-[0.14em]">
                  Vita Shablii · 13 years in marketing · 500+ projects & events · USA / Europe /
                  China
                </p>
                <p className="body-read mt-7">
                  I built it because, across products, companies and markets, I kept seeing the same
                  pattern: execution often starts before the fundamental questions have been
                  answered. Teams create content before the message is clear. Ads launch before the
                  audience logic is understood. AI produces more output before anyone has decided
                  what the output should be built around.
                </p>
                <p className="body-read mt-5">
                  Marketing Set puts those questions in a sequence — and uses AI to make the
                  thinking faster, deeper and reusable.
                </p>
                <p className="label-xs mt-8 !tracking-[0.2em] !text-charcoal">
                  STRATEGY × MARKETING × PRODUCT THINKING × AI
                </p>
                <Link to="/" hash="about" className="link-editorial mt-8 inline-flex">
                  ABOUT VITA <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ——— THE OFFER ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <SectionLabel>Marketing Set</SectionLabel>
                  <h2 className="display-md">
                    Build the foundation
                    <br />
                    <span className="italic">you can keep coming back to.</span>
                  </h2>
                  <p className="body-read mt-7">
                    One structured marketing foundation — built to be reused across content,
                    launches, campaigns and future decisions.
                  </p>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={100}>
                  <div className="border border-line bg-background p-8 md:p-10">
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
                    <p className="font-serif-editorial mt-8 text-[3rem] leading-none text-charcoal">
                      589 UAH
                    </p>
                    <p className="label-xs mt-3 normal-case !tracking-[0.1em]">
                      One payment · Immediate access · Lifetime use
                    </p>
                    <Cta className="mt-8 w-full justify-center" />
                    <p className="label-xs mt-5 normal-case !tracking-[0.08em]">
                      Works with ChatGPT and Claude. No marketing background required.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section className="rule-thin bg-background">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
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
                    <dt className="font-serif-editorial text-[clamp(1.2rem,1.9vw,1.6rem)] text-charcoal md:col-span-5">
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
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 text-center md:px-10 md:py-32">
            <Reveal>
              <SectionLabel>One better starting point</SectionLabel>
              <h2 className="display-lg mx-auto max-w-[46rem]">
                Don't ask AI to make more.
                <br />
                <span className="italic">Give it something worth building from.</span>
              </h2>
              <p className="body-read mx-auto mt-8 text-center">
                Build your foundation once. Use it across everything that comes next.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-12 flex flex-col items-center gap-6">
                <p className="font-serif-editorial text-[2.6rem] leading-none text-charcoal">
                  589 UAH
                </p>
                <p className="label-xs !tracking-[0.14em]">
                  5 strategic AI workflows · Personal AI assistant · 45 funnel frameworks · Lifetime
                  access
                </p>
                <Cta />
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
