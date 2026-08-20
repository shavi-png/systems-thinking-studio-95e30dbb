import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SpiralSystem, FiveForms, FunnelLines } from "@/components/site/LineArt";
import portrait from "@/assets/vita-portrait.jpg";
import shellHero from "@/assets/shell-hero.jpg.asset.json";

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
      className={`label-xs group inline-flex items-center gap-3 border border-charcoal/25 bg-olive/10 px-7 py-4 !tracking-[0.2em] !text-charcoal transition-colors hover:border-olive hover:bg-olive/20 ${className}`}
    >
      GET MARKETING SET
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

const audience = [
  {
    n: "01 / YOU HAVE EXPERTISE",
    d: "but struggle to turn it into clear positioning and communication.",
  },
  {
    n: "02 / YOU HAVE A BUSINESS OR PRODUCT",
    d: "but marketing decisions still depend too much on assumptions, agencies or disconnected actions.",
  },
  {
    n: "03 / YOU WORK WITH MARKETING",
    d: "but want decisions grounded in audience, market and positioning — not trends and guesswork.",
  },
];

const from = ["noise", "guesswork", "generic AI output", "disconnected content", "random experiments"];
const to = ["clarity", "positioning", "market context", "customer logic", "a usable system"];

const outcomes = [
  {
    n: "01",
    t: "Your differentiation",
    d: "Understand what makes your product or expertise valuable without manufactured uniqueness or copying competitors.",
  },
  {
    n: "02",
    t: "Your market context",
    d: "See the competitive landscape and identify where your strongest position may exist.",
  },
  {
    n: "03",
    t: "Your customer logic",
    d: "Build detailed customer portraits around motivations, needs, triggers and the language people actually use.",
  },
  {
    n: "04",
    t: "Your brand core",
    d: "Turn the analysis into positioning, key meanings and messages for your website, content and communication.",
  },
  {
    n: "05",
    t: "Your AI marketing assistant",
    d: "Create an assistant informed by the work you've already done — so AI works with your context rather than generating generic copy.",
  },
];

const steps = [
  {
    n: "01",
    t: "Differentiation",
    d: "Find the real value and strengths behind your product or expertise.",
  },
  {
    n: "02",
    t: "Market",
    d: "Understand competitors, saturation and potential points of differentiation.",
  },
  {
    n: "03",
    t: "People",
    d: "Build customer portraits around real motivations, needs and decision triggers.",
  },
  {
    n: "04",
    t: "Brand core",
    d: "Translate what you've learned into positioning, meaning and communication.",
  },
  {
    n: "05",
    t: "AI assistant",
    d: "Turn the foundation into a personalised AI marketing assistant you can keep working with.",
  },
];

const notPrompts = [
  { t: "Sequence, not random requests", d: "Each step builds on what came before." },
  {
    t: "Your context, not generic data",
    d: "AI works with your product, market, customers and communication.",
  },
  {
    t: "Foundation before content",
    d: "You first understand what to say and why. Content comes afterwards.",
  },
];

const how = [
  { t: "Watch", d: "Short explanation." },
  { t: "Copy", d: "Use the structured prompt." },
  { t: "Work with AI", d: "ChatGPT or Claude." },
  { t: "Save", d: "Build your marketing foundation step by step." },
  { t: "Connect", d: "Configure your personal AI marketing assistant." },
];

const arrives = [
  "5 strategic AI marketing workflows",
  "Short step-by-step video instructions",
  "Supporting materials for the AI assistant",
  "45 funnel frameworks",
  "Lifetime access to the materials",
];

const faq = [
  {
    q: "Do I need a marketing background?",
    a: "No. Each step is structured and explained, so you move through the questions in the right order without prior theory.",
  },
  {
    q: "Do I need experience with AI?",
    a: "No. You copy a structured prompt, work with ChatGPT or Claude, and save the result. Short video instructions cover every step.",
  },
  {
    q: "Will this work for my industry?",
    a: "The workflows are built around your own product, audience and market as the material — so the logic holds across services, products, e-commerce and expertise-led businesses.",
  },
  {
    q: "Can I use it for more than one project?",
    a: "Yes. You keep the materials, so you can run the same sequence again for another product, brand or direction.",
  },
  {
    q: "How long does it take?",
    a: "There is no schedule and no cohort. Most people go through a step in one focused session and complete the foundation at their own pace.",
  },
  {
    q: "Do I need a paid ChatGPT or Claude plan?",
    a: "The core materials work with free versions too. Creating the personal AI assistant depends on features available in paid plans, and a laptop or desktop is recommended for the setup.",
  },
];

function MarketingSetPage() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Header />
      <main>
        {/* ——— 01 / HERO ——— */}
        <section className="relative overflow-hidden">
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 pb-14 pt-24 md:grid-cols-12 md:px-10 md:pb-20 md:pt-32">
            <div className="md:col-span-6">
              <Reveal>
                <p className="label-xs">01 / Marketing Set — AI marketing tool</p>
                <h1 className="display-lg mt-6">
                  Build the marketing
                  <br />
                  <span className="italic">before you scale it.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-read mt-8">
                  A structured AI-powered marketing system for experts and businesses who want to
                  understand their audience, positioning and market — before adding more content,
                  campaigns or tools.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="label-xs mt-8 !tracking-[0.14em] normal-case">
                  5 strategic AI workflows · Personal AI marketing assistant · 45 funnel frameworks ·
                  Lifetime access
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex flex-wrap items-center gap-8">
                  <Cta />
                  <div>
                    <p className="font-serif-editorial text-3xl text-charcoal">589 UAH</p>
                    <p className="label-xs mt-1 !tracking-[0.16em]">One-time payment</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <FiveForms className="w-full" />
            </div>
          </div>
        </section>

        {/* ——— 02 / THE PROBLEM ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-6">
              <Reveal>
                <p className="label-xs mb-5">More marketing isn't always the answer</p>
                <h2 className="display-md">
                  Before creating more,
                  <br />
                  <span className="italic">understand what is already there.</span>
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 md:col-span-5 md:col-start-8 md:pt-4">
              <p className="body-read">
                Content, ads and AI can accelerate execution. They cannot decide what your product
                means, who should care about it, or why someone should choose it.
              </p>
              <p className="body-read">
                Marketing Set helps you build that foundation first — using your own product,
                audience and market as the material.
              </p>
            </div>
          </div>
        </section>

        {/* ——— 03 / WHO IT IS FOR ——— */}
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <p className="label-xs mb-5">03 / Who it is for</p>
              <h2 className="display-md max-w-[40rem]">
                You probably don't need
                <br />
                <span className="italic">another marketing course.</span>
              </h2>
            </Reveal>
            <div className="mt-12 md:mt-16">
              {audience.map((a, i) => (
                <Reveal key={a.n} delay={i * 90}>
                  <div className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-10 md:py-10">
                    <p className="label-xs md:col-span-5">{a.n}</p>
                    <p className="body-read md:col-span-7">{a.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 04 / THE SHIFT ——— */}
        <section className="rule-thin bg-sand/40">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <p className="label-xs mb-10">04 / The shift</p>
            <div className="grid items-center gap-12 md:grid-cols-12">
              <ul className="md:col-span-4">
                <li className="label-xs mb-5">From</li>
                {from.map((f) => (
                  <li
                    key={f}
                    className="font-serif-editorial text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.5] text-charcoal/45"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <div className="md:col-span-4">
                <SpiralSystem center="Value" nodes={["Order", "Meaning", "System"]} />
              </div>
              <ul className="md:col-span-4 md:text-right">
                <li className="label-xs mb-5">To</li>
                {to.map((t) => (
                  <li
                    key={t}
                    className="font-serif-editorial text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.5] text-charcoal"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-serif-editorial mt-14 border-t border-line pt-8 text-[clamp(1.5rem,3vw,2.4rem)] leading-tight text-charcoal">
              Not more marketing.
              <br />
              <span className="italic">A better place to start.</span>
            </p>
          </div>
        </section>

        {/* ——— 05 / WHAT YOU ACTUALLY GET ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <p className="label-xs mb-5">05 / What you actually get</p>
              <h2 className="display-md max-w-[38rem]">
                A marketing foundation
                <br />
                <span className="italic">you can use.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-px border border-line bg-line md:mt-16 md:grid-cols-5">
              {outcomes.map((o, i) => (
                <Reveal key={o.t} delay={i * 70}>
                  <div className="h-full bg-paper px-6 py-8 md:px-6 md:py-9">
                    <p className="label-xs !text-olive">{o.n}</p>
                    <h3 className="label-xs mt-4 !tracking-[0.14em] !text-charcoal">{o.t}</h3>
                    <p className="body-read mt-3 !max-w-none !text-[0.85rem]">{o.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 06 / THE FIVE STEPS ——— */}
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <div className="mx-auto max-w-[40rem] text-center">
                <p className="label-xs mb-5">06 / The five steps</p>
                <h2 className="display-md">
                  Five steps.
                  <br />
                  <span className="italic">One system.</span>
                </h2>
                <p className="body-read mx-auto mt-6 text-center">
                  A clear sequence that turns information into decisions, and decisions into action.
                </p>
              </div>
            </Reveal>

            <div className="mx-auto mt-12 max-w-[46rem] md:mt-16">
              <SpiralSystem
                center="Value"
                nodes={["Differentiation", "Market", "People", "Brand core", "AI assistant"]}
              />
            </div>

            <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-5">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 70}>
                  <div className="h-full bg-background px-6 py-8">
                    <p className="font-serif-editorial text-2xl text-charcoal">{s.n}</p>
                    <h3 className="label-xs mt-3 !tracking-[0.14em] !text-charcoal">{s.t}</h3>
                    <p className="body-read mt-3 !max-w-none !text-[0.85rem]">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 07 / NOT JUST PROMPTS ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-32">
            <Reveal>
              <p className="label-xs mb-6">This is not a prompt pack</p>
              <h2 className="display-md max-w-[36rem]">
                AI is the interface.
                <br />
                <span className="italic">The value is in the logic.</span>
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-0">
              {notPrompts.map((p, i) => (
                <Reveal key={p.t} delay={i * 90}>
                  <div className="md:border-l md:border-line md:px-8 md:first:border-l-0 md:first:pl-0">
                    <h3 className="label-xs !text-charcoal">{p.t}</h3>
                    <p className="body-read mt-4 !max-w-none !text-[0.9rem]">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 08 / HOW IT WORKS ——— */}
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <p className="label-xs mb-5">08 / How it works</p>
              <h2 className="display-md max-w-[34rem]">
                Simple process.
                <br />
                <span className="italic">Real results.</span>
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-8 md:mt-16 md:grid-cols-5 md:gap-6">
              {how.map((h, i) => (
                <Reveal key={h.t} delay={i * 70}>
                  <li className="relative border-t border-line pt-6">
                    <p className="label-xs !text-olive">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="font-serif-editorial mt-3 text-[1.35rem] text-charcoal">
                      {h.t}
                    </h3>
                    <p className="body-read mt-2 !max-w-none !text-[0.85rem]">{h.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <p className="label-xs mt-12 !tracking-[0.14em] normal-case">
              No course schedule. No cohort. No waiting. Work at your own pace.
            </p>
          </div>
        </section>

        {/* ——— 09 / AN EXTRA LAYER ——— */}
        <section className="rule-thin bg-sand/40">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <p className="label-xs mb-5">An extra layer / included</p>
                  <h2 className="display-md">
                    45 funnel <span className="italic">frameworks.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7 md:pt-4">
                <p className="body-read">
                  A library of mono- and multi-channel funnel structures for Instagram, TikTok,
                  YouTube and other communication flows — designed to help you translate strategy
                  into movement from content to action.
                </p>
              </div>
            </div>
            <FunnelLines className="mt-12 w-full md:mt-16" />
          </div>
        </section>

        {/* ——— 10 / WHAT ARRIVES AFTER PURCHASE ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <p className="label-xs mb-5">10 / Immediate access</p>
              <h2 className="display-md max-w-[34rem]">
                What arrives
                <br />
                <span className="italic">after purchase.</span>
              </h2>
            </Reveal>
            <div className="mt-12 md:mt-16">
              {arrives.map((a, i) => (
                <Reveal key={a} delay={i * 60}>
                  <div className="flex items-baseline gap-8 border-t border-line py-6">
                    <span className="font-serif-editorial text-xl text-olive">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif-editorial text-[1.3rem] text-charcoal">{a}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 11 / VITA ——— */}
        <section className="rule-thin">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
            <div className="grain md:col-span-4">
              <div className="aspect-[4/5] overflow-hidden bg-stone">
                <img
                  src={portrait}
                  alt="Portrait of Vita Shablii"
                  loading="lazy"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="label-xs mb-5">Built from practice</p>
              <h2 className="display-md">
                I didn't build Marketing Set
                <br />
                <span className="italic">to teach people more marketing.</span>
              </h2>
              <div className="mt-8 space-y-6">
                <p className="body-read">
                  I built it because, after years of working across products, markets and business
                  models, I kept seeing the same problem: execution often starts before the
                  fundamental questions have been answered.
                </p>
                <p className="body-read">
                  Marketing Set puts those questions in the right order — and uses AI to make the
                  process faster and reusable.
                </p>
              </div>
              <Link to="/" hash="about" className="link-editorial mt-10">
                Vita <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ——— 13 / PRICE + PURCHASE ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-6">
              <p className="label-xs mb-5">Marketing Set</p>
              <h2 className="display-md">
                Build the foundation
                <br />
                <span className="italic">you can keep coming back to.</span>
              </h2>
              <ul className="mt-10 space-y-3">
                {[
                  "5 strategic workflows",
                  "Personal AI marketing assistant",
                  "45 funnel frameworks",
                  "Video guidance",
                  "Lifetime access",
                ].map((l) => (
                  <li key={l} className="label-xs !tracking-[0.14em] normal-case !text-charcoal">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5 md:col-start-8 md:pt-4">
              <p className="font-serif-editorial text-[clamp(2.6rem,5vw,4rem)] leading-none text-charcoal">
                589 UAH
              </p>
              <p className="label-xs mt-3 !tracking-[0.16em]">One payment. Immediate access.</p>
              <Cta className="mt-8" />
              <p className="label-xs mt-6 !tracking-[0.12em] normal-case">
                Works with ChatGPT and Claude · Desktop recommended for AI assistant setup
              </p>
            </div>
          </div>
        </section>

        {/* ——— 14 / FAQ ——— */}
        <section id="faq" className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <h2 className="display-md">Questions.</h2>
            </Reveal>
            <div className="mt-12 md:mt-16">
              {faq.map((f, i) => (
                <Reveal key={f.q} delay={i * 70}>
                  <div className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-10 md:py-10">
                    <h3 className="font-serif-editorial text-xl text-charcoal md:col-span-5">
                      {f.q}
                    </h3>
                    <p className="body-read md:col-span-7">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 15 / FINAL ——— */}
        <section className="rule-thin relative overflow-hidden">
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[105%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.40] [filter:sepia(0.06)_saturate(0.3)_brightness(1.22)_contrast(0.85)] [mask-image:radial-gradient(closest-side,black_55%,transparent_100%)] md:h-[118%] md:opacity-[0.34]"
          />
          <div className="relative mx-auto flex min-h-[60vh] max-w-[1440px] flex-col items-center justify-center px-6 py-16 text-center md:px-10 md:py-20">
            <Reveal>
              <p className="label-xs mb-6">Clarity before complexity</p>
              <p className="display-lg">
                Don't ask AI
                <br />
                to make more.
                <br />
                <span className="italic">Give it something worth building from.</span>
              </p>
            </Reveal>
            <Cta className="mt-12 bg-paper/70" />
            <p className="label-xs mt-6 !tracking-[0.16em] normal-case">
              589 UAH · immediate access
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
