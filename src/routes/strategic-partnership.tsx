import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ProcessOrbit } from "@/components/site/LineArt";
import shellHero from "@/assets/shell-hero.jpg.asset.json";
import advisoryImg from "@/assets/sp-advisory.jpg";
import strategyImg from "@/assets/sp-strategy.jpg";
import cmoImg from "@/assets/sp-cmo.jpg";
import portraitImg from "@/assets/vita-portrait.jpg";

const title = "Strategic Partnership — Vita Shablii";
const description =
  "Senior strategic support for founders, leaders and teams: strategic advisory, strategy development and fractional CMO leadership across product, market, positioning and growth.";

export const Route = createFileRoute("/strategic-partnership")({
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
  component: StrategicPartnership,
});

const fields = [
  ["Product", "What are we actually building — and why should it exist?"],
  ["Market", "Where can it create meaningful demand and value?"],
  ["Positioning", "Why this product, for these people, instead of the alternatives?"],
  ["Marketing", "What system can consistently connect the product with its market?"],
  ["Growth", "What deserves to scale — and what needs to be fixed first?"],
  ["Organisation", "What people, processes and decisions need to support it?"],
] as const;

type Service = {
  id: string;
  n: string;
  name: string;
  tagline: string;
  best: string;
  img: string;
  lede: string[];
  listLabel: string;
  list: string[];
  outcomeLabel: string;
  outcome: string;
  cta: string;
};

const services: Service[] = [
  {
    id: "advisory",
    n: "01",
    name: "Strategic Advisory",
    tagline: "See the situation from another angle.",
    best: "One decision · focused engagement",
    img: advisoryImg,
    lede: [
      "For a specific decision, challenge or moment of uncertainty. You bring the context — a product, launch, market, positioning question or growth challenge — and we work through what is actually happening beneath the surface.",
      "Rather than jumping directly to solutions, we clarify the situation, identify the decisions that matter and define the most useful way forward.",
    ],
    listLabel: "Right for you if",
    list: [
      "You are deciding how to position or reposition a product.",
      "You are preparing for a launch or market entry.",
      "Growth has slowed and the reason isn’t obvious.",
      "Your marketing has become fragmented.",
      "You are considering a significant change in direction.",
    ],
    outcomeLabel: "What you leave with",
    outcome:
      "A clearer understanding of the situation, the decisions that matter and what should happen next.",
    cta: "Discuss your context",
  },
  {
    id: "strategy",
    n: "02",
    name: "Strategy Development",
    tagline: "When clarity needs to become a strategy.",
    best: "Project · built together",
    img: strategyImg,
    lede: [
      "Some situations cannot be resolved in one conversation. They require looking deeper into the product, customer, market, competition, positioning and existing marketing system — and turning what we learn into a coherent direction.",
      "In these engagements, I don’t simply advise on the strategy. I develop it with you.",
    ],
    listLabel: "The work may include",
    list: [
      "Business, product & market logic",
      "Positioning & value proposition",
      "Go-to-market",
      "Marketing architecture",
      "Customer journey & lifecycle",
      "Channels, priorities & measurement",
      "AI & automation opportunities",
    ],
    outcomeLabel: "The outcome",
    outcome:
      "A working strategic system leadership and teams can use to set priorities, evaluate opportunities and make better decisions.",
    cta: "Explore a strategy project",
  },
  {
    id: "fractional",
    n: "03",
    name: "Fractional CMO",
    tagline: "Senior marketing leadership without another full-time hire.",
    best: "Ongoing · embedded partner",
    img: cmoImg,
    lede: [
      "For businesses that need more than strategic recommendations — they need someone to help make the strategy work inside the company.",
      "The role sits between strategy and execution: setting direction, creating priorities, connecting marketing with product and commercial decisions, strengthening the team and building the systems marketing needs to operate coherently.",
    ],
    listLabel: "What I take on",
    list: [
      "Strategic direction & priorities",
      "Marketing architecture",
      "Team structure & capability",
      "Leadership & decision-making",
      "Execution oversight",
      "Technology, AI & automation",
    ],
    outcomeLabel: "My role",
    outcome:
      "Not an outsourced marketing department — the direction, structure and decision-making environment that helps your people do better work.",
    cta: "Discuss fractional leadership",
  },
];





function ServiceDetail({ s, i }: { s: Service; i: number }) {
  const flip = i % 2 === 1;
  return (
    <section id={s.id} className={`rule-thin ${i % 2 === 1 ? "bg-paper" : ""}`}>
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        {/* mobile: name and tagline lead, image follows */}
        <Reveal>
          <div className="lg:hidden">
            <p className="label-xs !tracking-[0.26em] text-olive">
              {s.n} — {s.best}
            </p>
            <h2 className="display-md mt-5 !text-[clamp(1.9rem,3.4vw,3rem)]">{s.name}</h2>
            <p className="mt-5 font-serif-editorial text-[clamp(1.2rem,2vw,1.7rem)] italic leading-snug text-charcoal">
              {s.tagline}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-center gap-12 lg:mt-0 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
            <Reveal>
              <div className="overflow-hidden bg-stone">
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className={`lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
            <Reveal delay={100}>
              <div className="hidden lg:block">
                <p className="label-xs !tracking-[0.26em] text-olive">
                  {s.n} — {s.best}
                </p>
                <h2 className="display-md mt-5 !text-[clamp(1.9rem,3.4vw,3rem)]">{s.name}</h2>
                <p className="mt-5 font-serif-editorial text-[clamp(1.2rem,2vw,1.7rem)] italic leading-snug text-charcoal">
                  {s.tagline}
                </p>
              </div>

              {s.lede.map((p) => (
                <p key={p} className="body-read mt-5">
                  {p}
                </p>
              ))}

              <p className="label-xs mt-10">{s.listLabel}</p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {s.list.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 py-1.5 text-[0.9rem] leading-relaxed text-charcoal/75"
                  >
                    <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-olive" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-l-2 border-olive bg-sage/35 px-7 py-6">
                <p className="label-xs !tracking-[0.2em]">{s.outcomeLabel}</p>
                <p className="mt-3 font-serif-editorial text-[clamp(1.1rem,1.8vw,1.5rem)] leading-snug text-charcoal">
                  {s.outcome}
                </p>
              </div>

              <a href="#start" className="link-editorial mt-8">
                {s.cta} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


const worksWhen = [
  "You want someone who will question the brief, not simply execute it.",
  "You are comfortable looking beyond marketing when the real issue sits elsewhere.",
  "You need senior thinking without unnecessary corporate complexity.",
  "You value clarity and independent judgment over another layer of activity.",
  "You want strategy connected to what the business can actually execute.",
];

const notFit = [
  "You only need hands to execute a predetermined task.",
  "You are looking for an agency to produce a high volume of content or campaigns.",
  "The strategy has already been decided and you only need operational delivery.",
  "You want a universal growth formula applied without examining the context.",
];

const moments = [
  "launching something new",
  "entering another market",
  "repositioning a product or brand",
  "moving into the next stage of growth",
  "building or restructuring marketing",
  "changing its business model",
  "introducing AI into existing workflows",
  "or simply trying to understand what should happen next",
];

const process = [
  { n: "01", label: "Context", note: "Understand the real situation." },
  { n: "02", label: "Clarity", note: "Define what actually matters." },
  { n: "03", label: "Structure", note: "Create a system that makes sense." },
  { n: "04", label: "Decision", note: "Choose the direction with confidence." },
  { n: "05", label: "Action", note: "Prioritise and move forward." },
  { n: "06", label: "Learning", note: "Measure, learn and refine the next cycle." },
];

const formats = [
  ["I have one decision to work through.", "Strategic Advisory", "#advisory"],
  ["I need a direction and strategy built.", "Strategy Development", "#strategy"],
  ["I need ongoing senior marketing leadership.", "Fractional CMO", "#fractional"],
  ["I’m not sure what I need yet.", "That’s completely fine.", "#start"],
] as const;

function StrategicPartnership() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* ——— 01 HERO ——— */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-sky/45 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[18%] top-[58%] h-[20rem] w-[20rem] rounded-full bg-sage/50 blur-3xl"
          />
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[-22%] bottom-[-30%] h-[95%] w-auto max-w-none select-none opacity-[0.22] [filter:sepia(0.05)_saturate(0.3)_brightness(1.28)_contrast(0.82)] [mask-image:radial-gradient(closest-side,black_50%,transparent_100%)]"
          />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-12 px-6 pb-20 pt-24 md:grid-cols-12 md:gap-10 md:px-10 md:pb-28 md:pt-32">
            <div className="md:col-span-7">
              <Reveal>
                <p className="label-xs !tracking-[0.3em]">Strategic Partnership</p>
                <h1 className="display-lg mt-7 !text-[clamp(2.4rem,5.4vw,4.7rem)]">
                  Sometimes you don’t need
                  <br />
                  another framework.
                  <br />
                  <span className="italic">You need someone</span>
                  <br />
                  inside the thinking.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="font-serif-editorial mt-9 max-w-[32rem] text-[clamp(1.1rem,1.7vw,1.45rem)] leading-snug text-charcoal">
                  Senior strategic support for founders, leaders and teams navigating product,
                  marketing, growth and change.
                </p>
                <p className="body-read mt-7 max-w-[30rem]">
                  I work alongside businesses when the challenge goes beyond a single marketing task
                  — when product, market, positioning, growth and execution need to be considered as
                  one connected system.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a href="#involvement" className="link-editorial">
                    Explore working together <span aria-hidden>↓</span>
                  </a>
                  <p className="label-xs !tracking-[0.18em]">
                    Advisory · Strategy · Fractional CMO
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <Reveal delay={220}>
                <div className="relative isolate ml-auto max-w-[26rem] md:max-w-none">
                  <span
                    aria-hidden
                    className="absolute -left-6 -top-6 -z-10 hidden h-40 w-40 rounded-full bg-sky/70 md:block"
                  />
                  <img
                    src={portraitImg}
                    alt="Vita Shablii"
                    className="relative aspect-[4/5] w-full object-cover"
                  />
                  <span
                    aria-hidden
                    className="absolute -bottom-8 -right-6 -z-10 hidden h-28 w-28 rounded-full bg-clay/70 md:block"
                  />
                </div>
                <p className="font-serif-editorial mt-8 max-w-[22rem] text-[1.05rem] italic leading-snug text-charcoal/75 md:ml-auto">
                  The engagement can be focused or ongoing — one strategic decision, the strategy
                  itself, or stepping in as a Fractional CMO.
                </p>
              </Reveal>
            </div>
          </div>
        </section>





        {/* ——— 02 WHY ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="label-xs">When the answer isn’t another tactic</p>
              <h2 className="display-md mt-6 max-w-[46rem]">
                The challenge you see is not always the challenge you need to{" "}
                <span className="italic">solve.</span>
              </h2>
            </Reveal>

            <div className="mt-14 flex flex-wrap gap-4">
              {[
                "A marketing problem can begin with the product.",
                "A growth problem can be rooted in positioning.",
                "A launch problem can actually be a question of market readiness.",
                "And sometimes a team is executing constantly while the decisions that should guide that execution remain unresolved.",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 80} className="max-w-[22rem] flex-1">
                  <p
                    className={`h-full px-7 py-8 text-[0.95rem] leading-relaxed text-charcoal/75 ${
                      i % 2 === 0 ? "bg-sage/40" : "bg-stone/70"
                    }`}
                    style={{ marginTop: `${(i % 3) * 0.9}rem` }}
                  >
                    {t}
                  </p>
                </Reveal>
              ))}
            </div>


            <Reveal delay={160}>
              <div className="mt-12 max-w-[38rem]">
                <p className="body-read">This is where I tend to be most useful.</p>
                <p className="font-serif-editorial mt-3 text-[clamp(1.2rem,2.1vw,1.8rem)] italic leading-snug text-charcoal">
                  I look across the system before deciding where to intervene.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— 03 WHERE I WORK ——— */}
        <section className="rule-thin relative overflow-hidden">
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[-14%] top-1/2 h-[130%] w-auto max-w-none -translate-y-1/2 select-none opacity-[0.18] [filter:sepia(0.05)_saturate(0.3)_brightness(1.3)_contrast(0.8)] [mask-image:radial-gradient(closest-side,black_45%,transparent_100%)]"
          />
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <h2 className="display-md max-w-[36rem]">
                I work where several <span className="italic">decisions meet.</span>
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
              {fields.map(([k, v], i) => (
                <Reveal key={k} delay={i * 70}>
                  <div
                    className="group flex gap-6"
                    style={{ marginLeft: `${i % 2 === 1 ? 2 : 0}rem` }}
                  >
                    <span
                      aria-hidden
                      className={`mt-[0.7rem] h-3 w-3 shrink-0 rounded-full ${
                        ["bg-olive/70", "bg-sky", "bg-clay", "bg-sage", "bg-blush", "bg-taupe"][
                          i % 6
                        ]
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="label-xs !text-charcoal !tracking-[0.26em]">{k}</p>
                      <p className="font-serif-editorial mt-4 max-w-[24rem] text-[clamp(1.15rem,1.8vw,1.6rem)] leading-snug text-charcoal">
                        {v}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>


            <p className="font-serif-editorial mt-14 max-w-[34rem] text-[clamp(1.05rem,1.7vw,1.45rem)] italic leading-snug text-charcoal/80">
              The work rarely stays inside one box. That’s the point.
            </p>
          </div>
        </section>


        {/* ——— 04 THE THREE SERVICES, IN DETAIL ——— */}
        <section id="involvement" className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 pb-4 pt-20 md:px-10 md:pt-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-6">
                <Reveal>
                  <p className="label-xs">Level of involvement</p>
                  <h2 className="display-md mt-6">
                    Three ways to <span className="italic">work together.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8 md:pt-4">
                <Reveal delay={120}>
                  <p className="body-read">
                    The same thinking at three levels of proximity. Some decisions need an
                    experienced outside perspective. Others require deeper research and strategic
                    development. And some businesses need senior marketing leadership embedded in
                    the company for a period of time.
                  </p>
                  <p className="font-serif-editorial mt-6 text-[1.35rem] italic text-charcoal">
                    I work across all three.
                  </p>
                </Reveal>
              </div>
              <div className="md:col-span-12">
                <Reveal delay={180}>
                  <ul className="mt-2 flex flex-wrap gap-x-10 gap-y-3 md:mt-8">
                    {services.map((s) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="group flex items-baseline gap-3">
                          <span className="label-xs !tracking-[0.24em] text-olive">{s.n}</span>
                          <span className="font-serif-editorial text-[clamp(1.15rem,1.8vw,1.5rem)] text-charcoal transition-colors group-hover:text-olive">
                            {s.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {services.map((s, i) => (
          <ServiceDetail key={s.id} s={s} i={i} />
        ))}


        {/* ——— 07 HOW I WORK ——— */}
        <section className="rule-thin relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-sky/35 blur-3xl"
          />
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="label-xs">The working principle</p>
                  <h2 className="display-md mt-5 !text-[clamp(1.9rem,3.2vw,2.9rem)]">
                    Context <span className="italic">first.</span>
                    <br />
                    Format <span className="italic">second.</span>
                  </h2>
                  <p className="body-read mt-8">
                    I don’t begin with a predetermined methodology or try to fit every company into
                    the same framework. I begin by understanding the business: what exists, what has
                    changed, where the tension is and which decisions are currently difficult to
                    make.
                  </p>
                  <p className="font-serif-editorial mt-7 max-w-[24rem] text-[clamp(1.1rem,1.7vw,1.45rem)] italic leading-snug text-charcoal">
                    Strategy is not a straight line — new information changes the decisions that
                    follow.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                <ProcessOrbit steps={process} />
              </div>
            </div>
          </div>
        </section>


        {/* ——— 08 IS / ISN’T ——— */}
        <section className="rule-thin relative overflow-hidden bg-paper">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/4 h-[30rem] w-[30rem] rounded-full bg-sage/45 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-blush/40 blur-3xl"
          />
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
              {/* fit */}
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="label-xs !text-charcoal">This works well when —</p>
                </Reveal>
                <div className="mt-10 space-y-9">
                  {worksWhen.map((t, i) => (
                    <Reveal key={t} delay={i * 70}>
                      <div
                        className="flex gap-6"
                        style={{ marginLeft: `${[0, 2.5, 1.2, 3.4, 0.8][i % 5]}rem` }}
                      >
                        <span
                          aria-hidden
                          className="font-serif-editorial mt-2 shrink-0 text-[0.85rem] tabular-nums text-olive"
                        >
                          0{i + 1}
                        </span>
                        <p className="font-serif-editorial min-w-0 max-w-[26rem] text-[clamp(1.2rem,1.9vw,1.7rem)] leading-[1.25] text-charcoal">
                          {t}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* not fit */}
              <div className="lg:col-span-4 lg:col-start-9 lg:pt-16">
                <Reveal delay={120}>
                  <p className="label-xs">Probably not the right fit when —</p>
                  <ul className="mt-9 space-y-7">
                    {notFit.map((t) => (
                      <li key={t} className="flex gap-4">
                        <span aria-hidden className="mt-[0.3rem] shrink-0 text-[0.8rem] text-clay">
                          ×
                        </span>
                        <p className="text-[0.9rem] leading-relaxed text-charcoal/50">{t}</p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            <Reveal>
              <p className="font-serif-editorial mt-20 max-w-[44rem] text-[clamp(1.2rem,2.1vw,1.8rem)] italic leading-snug text-charcoal">
                Good strategic work requires enough openness to discover that the original question
                may not be the right one.
              </p>
            </Reveal>
          </div>
        </section>


        {/* ——— 09 WHO ——— */}
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <h2 className="display-md">
                    Usually, there is already something real to{" "}
                    <span className="italic">work with.</span>
                  </h2>
                  <p className="body-read mt-10">
                    I tend to work best with founders, leadership teams and established businesses
                    that already have a product, expertise, customers or market knowledge — but are
                    approaching a point where the existing way of thinking about marketing is no
                    longer enough.
                  </p>
                </Reveal>
              </div>

              <div className="md:col-span-7">
                <Reveal delay={100}>
                  <p className="label-xs">That might be because the company is</p>
                </Reveal>
                <ul className="mt-9 grid gap-x-12 gap-y-5 sm:grid-cols-2">
                  {moments.map((m, i) => (
                    <Reveal key={m} delay={100 + i * 50}>
                      <li className="flex gap-4">
                        <span
                          aria-hidden
                          className="mt-[0.85rem] h-1.5 w-1.5 shrink-0 rounded-full bg-olive/60"
                        />
                        <span className="font-serif-editorial text-[clamp(1.05rem,1.45vw,1.35rem)] leading-snug text-charcoal">
                          {m}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>


              </div>
            </div>
          </div>
        </section>

        {/* ——— 10 EXPERIENCE ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-5">
                <Reveal>
                  <div className="relative isolate">
                    <div
                      aria-hidden
                      className="absolute -left-4 -top-4 -z-10 hidden h-32 w-32 bg-sage/60 md:block"
                    />
                    <img
                      src={portraitImg}
                      alt="Vita Shablii"
                      className="relative aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                    <div
                      aria-hidden
                      className="absolute -bottom-5 -right-4 -z-10 hidden h-24 w-24 bg-clay/60 md:block"
                    />
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    {[
                      ["13+", "years", "bg-sky/55"],
                      ["3", "continents", "bg-sage/65"],
                      ["5+", "industries", "bg-clay/50"],
                    ].map(([n, l, tint]) => (
                      <span
                        key={l}
                        className={`inline-flex items-baseline gap-3 rounded-full px-6 py-3 ${tint}`}
                      >
                        <span className="font-serif-editorial text-[1.5rem] leading-none text-charcoal">
                          {n}
                        </span>
                        <span className="label-xs !text-charcoal/60">{l}</span>
                      </span>
                    ))}
                  </div>

                </Reveal>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <Reveal>
                  <p className="label-xs">Experience behind the work</p>
                  <h2 className="display-md mt-6 !text-[clamp(1.9rem,3.2vw,2.8rem)]">
                    Strategy grounded in having actually{" "}
                    <span className="italic">built things.</span>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="body-read mt-8">
                    13+ years across marketing, strategy and product work, with experience spanning
                    Europe, the US and China and businesses across consulting, IT, e-commerce,
                    fintech and data-driven digital products.
                  </p>
                  <p className="body-read mt-5">
                    I have built marketing functions and teams from scratch, worked on product
                    launches and market expansion, developed positioning and go-to-market strategies
                    and worked alongside technology and product teams.
                  </p>
                  <p className="font-serif-editorial mt-8 bg-sage/55 px-7 py-8 text-[clamp(1.1rem,1.8vw,1.5rem)] italic leading-snug text-charcoal">
                    The value of that experience isn’t the number of things I’ve done. It’s the
                    ability to recognise what kind of problem I’m looking at.
                  </p>
                  <a href="/about" className="link-editorial mt-9">
                    The personality behind the work <span aria-hidden>→</span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 11 CHOOSING THE FORMAT ——— */}
        <section className="rule-thin relative overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-[46rem]">
              <Reveal>
                <h2 className="display-md">
                  Not sure which <span className="italic">format fits?</span>
                </h2>
                <p className="body-read mt-6">
                  Start from the sentence that sounds most like your situation.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 max-w-[52rem] space-y-10">
              {formats.map(([q, a, href], i) => (
                <Reveal key={q} delay={i * 80}>
                  <a href={href} className="group flex gap-6 md:gap-8">
                    <span
                      aria-hidden
                      className="font-serif-editorial mt-[0.55rem] shrink-0 text-[0.9rem] tabular-nums text-olive"
                    >
                      0{i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-serif-editorial text-[clamp(1.35rem,2.4vw,2.1rem)] leading-[1.15] text-charcoal">
                        {q}
                      </p>
                      <p className="label-xs mt-3 !text-charcoal !tracking-[0.22em]">
                        <span
                          aria-hidden
                          className="mr-3 inline-block transition-transform duration-500 group-hover:translate-x-1"
                        >
                          →
                        </span>
                        {a}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>


          </div>
        </section>



        {/* ——— 12 FINAL CTA ——— */}
        <section id="start" className="rule-thin relative overflow-hidden bg-paper">
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.3] [filter:sepia(0.05)_saturate(0.28)_brightness(1.26)_contrast(0.84)] [mask-image:radial-gradient(closest-side,black_52%,transparent_100%)]"
          />
          <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 py-24 text-center md:px-10 md:py-32">
            <Reveal>
              <p className="label-xs">Start here</p>
              <h2 className="display-lg mx-auto mt-7 max-w-[36rem]">
                You don’t need to know the format yet. Start with the{" "}
                <span className="italic">context.</span>
              </h2>
            </Reveal>
            <p className="body-read mx-auto mt-10 max-w-[36rem]">
              Tell me what you’re building, where you are now and where you want to go. From there,
              we can determine whether I can be useful, what level of involvement makes sense and
              what the next step should be.
            </p>
            <a
              href="mailto:hello@vitashablii.com"
              className="label-xs mt-12 inline-flex items-center gap-3 bg-charcoal px-9 py-5 !tracking-[0.2em] !text-ivory transition-colors hover:bg-olive"
            >
              Explore working together <span aria-hidden>→</span>
            </a>
            <p className="label-xs mt-8 !tracking-[0.18em]">
              Strategic advisory · Strategy development · Fractional CMO
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
