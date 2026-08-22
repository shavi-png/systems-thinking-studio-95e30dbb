import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ProcessOrbit } from "@/components/site/LineArt";
import shellHero from "@/assets/shell-hero.jpg.asset.json";

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

function ServiceCard({ s }: { s: Service }) {
  return (
    <a href={`#${s.id}`} className="group block">
      <div className="relative overflow-hidden rounded-[50%] bg-stone">
        <img
          src={s.img}
          alt=""
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="label-xs mt-6 !tracking-[0.24em] text-olive">
        {s.n} — {s.best}
      </p>
      <h3 className="display-md mt-3 !text-[clamp(1.5rem,2.2vw,2rem)]">{s.name}</h3>
      <p className="mt-3 font-serif-editorial text-[1.05rem] italic leading-snug text-charcoal/80">
        {s.tagline}
      </p>
      <span className="link-editorial mt-6">
        See how it works <span aria-hidden>→</span>
      </span>
    </a>
  );
}

function ServiceDetail({ s, i }: { s: Service; i: number }) {
  const flip = i % 2 === 1;
  return (
    <section id={s.id} className={`rule-thin ${i % 2 === 1 ? "bg-paper" : ""}`}>
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
            <Reveal>
              <div className="overflow-hidden rounded-[50%] bg-stone">
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
              <p className="label-xs !tracking-[0.26em] text-olive">
                {s.n} — {s.best}
              </p>
              <h2 className="display-md mt-5 !text-[clamp(1.9rem,3.4vw,3rem)]">{s.name}</h2>
              <p className="mt-5 font-serif-editorial text-[clamp(1.2rem,2vw,1.7rem)] italic leading-snug text-charcoal">
                {s.tagline}
              </p>
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
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-[-18%] top-[46%] h-[120%] w-auto max-w-none -translate-y-1/2 select-none opacity-[0.34] [filter:sepia(0.05)_saturate(0.28)_brightness(1.24)_contrast(0.84)] [mask-image:radial-gradient(closest-side,black_52%,transparent_100%)] md:right-[-6%] md:h-[128%] md:opacity-[0.3]"
          />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pb-20 pt-28 md:grid-cols-12 md:px-10 md:pb-28 md:pt-36">
            <div className="md:col-span-7">
              <Reveal>
                <p className="label-xs !tracking-[0.3em]">Strategic Partnership</p>
                <h1 className="display-lg mt-8">
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
                <p className="font-serif-editorial mt-10 max-w-[34rem] text-[clamp(1.1rem,1.7vw,1.5rem)] leading-snug text-charcoal">
                  Senior strategic support for founders, leaders and teams navigating product,
                  marketing, growth and change.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4 md:col-start-9 md:pt-6">
              <Reveal delay={220}>
                <div className="space-y-6 border-t border-line pt-8">
                  <p className="body-read">
                    I work alongside businesses when the challenge goes beyond a single marketing
                    task — when product, market, positioning, growth and execution need to be
                    considered as one connected system.
                  </p>
                  <p className="body-read">
                    The engagement can be focused or ongoing: from working through one strategic
                    decision to developing the strategy itself or stepping in as a Fractional CMO.
                  </p>
                </div>
                <a href="#involvement" className="link-editorial mt-10">
                  Explore working together <span aria-hidden>↓</span>
                </a>
                <p className="label-xs mt-8 !tracking-[0.18em]">
                  Advisory · Strategy development · Fractional CMO
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

            <div className="mt-14 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {[
                "A marketing problem can begin with the product.",
                "A growth problem can be rooted in positioning.",
                "A launch problem can actually be a question of market readiness.",
                "And sometimes a team is executing constantly while the decisions that should guide that execution remain unresolved.",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 80}>
                  <p className="h-full bg-paper px-6 py-8 text-[0.9rem] leading-relaxed text-charcoal/70">
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
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <h2 className="display-md max-w-[36rem]">
                I work where several <span className="italic">decisions meet.</span>
              </h2>
            </Reveal>

            <dl className="mt-14 border-t border-line">
              {fields.map(([k, v], i) => (
                <Reveal key={k} delay={i * 60}>
                  <div className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:items-baseline md:gap-8">
                    <dt className="label-xs !text-charcoal !tracking-[0.24em] md:col-span-3">
                      {k}
                    </dt>
                    <dd className="font-serif-editorial text-[clamp(1.15rem,2vw,1.75rem)] leading-snug text-charcoal/85 md:col-span-9">
                      {v}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <p className="label-xs mt-8 !tracking-[0.16em]">
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
                    Different questions require different levels of{" "}
                    <span className="italic">proximity.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-5 md:col-start-8 md:pt-4">
                <Reveal delay={120}>
                  <p className="body-read">
                    Some decisions need an experienced outside perspective. Others require deeper
                    research and strategic development. And some businesses need senior marketing
                    leadership embedded in the company for a period of time.
                  </p>
                  <p className="font-serif-editorial mt-6 text-[1.35rem] italic text-charcoal">
                    I work across all three.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {services.map((s, i) => (
          <ServiceDetail key={s.id} s={s} i={i} />
        ))}


        {/* ——— 07 HOW I WORK ——— */}
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <Reveal>
                  <p className="label-xs">The working principle</p>
                  <h2 className="display-md mt-5 !text-[clamp(1.9rem,3.2vw,2.8rem)]">
                    Context <span className="italic">first.</span>
                    <br />
                    Format <span className="italic">second.</span>
                  </h2>
                  <p className="body-read mt-8 !text-[0.9rem]">
                    I don’t begin with a predetermined methodology or try to fit every company into
                    the same framework. I begin by understanding the business: what exists, what has
                    changed, where the tension is and which decisions are currently difficult to
                    make.
                  </p>
                  <p className="body-read mt-4 !text-[0.9rem]">
                    Then we determine what the work actually requires.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-6">
                <ProcessOrbit steps={process} />
              </div>

              <div className="lg:col-span-3 lg:pl-4">
                <Reveal delay={140}>
                  <p className="body-read !text-[0.9rem]">The process can move back and forth.</p>
                  <p className="font-serif-editorial mt-4 text-[1.2rem] italic leading-snug text-charcoal">
                    Strategy is not a straight line — new information changes the decisions that
                    follow.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 08 IS / ISN’T ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <Reveal>
                <div className="md:pr-10">
                  <p className="label-xs !text-charcoal">This works well when —</p>
                  <ul className="mt-7 border-t border-line">
                    {worksWhen.map((t) => (
                      <li
                        key={t}
                        className="border-b border-line py-5 font-serif-editorial text-[1.05rem] leading-snug text-charcoal"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="md:border-l md:border-line md:pl-16">
                  <p className="label-xs">Probably not the right fit when —</p>
                  <ul className="mt-7 border-t border-line">
                    {notFit.map((t) => (
                      <li
                        key={t}
                        className="border-b border-line py-5 text-[0.92rem] leading-relaxed text-charcoal/60"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <p className="font-serif-editorial mt-14 max-w-[42rem] text-[clamp(1.15rem,1.9vw,1.6rem)] italic leading-snug text-charcoal">
              Good strategic work requires enough openness to discover that the original question may
              not be the right one.
            </p>
          </div>
        </section>

        {/* ——— 09 WHO ——— */}
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-6">
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
              <div className="md:col-span-5 md:col-start-8">
                <Reveal delay={120}>
                  <p className="label-xs">That might be because the company is</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {moments.map((m) => (
                      <li
                        key={m}
                        className="border border-line px-4 py-2 text-[0.8rem] text-charcoal/70"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 10 EXPERIENCE ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Reveal>
                  <p className="label-xs">Experience behind the work</p>
                  <h2 className="display-md mt-6 !text-[clamp(1.9rem,3.2vw,2.8rem)]">
                    Strategy grounded in having actually{" "}
                    <span className="italic">built things.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Reveal delay={120}>
                  <p className="body-read">
                    13+ years across marketing, strategy and product work, with experience spanning
                    Europe, the US and China and businesses across consulting, IT, e-commerce,
                    fintech and data-driven digital products.
                  </p>
                  <p className="body-read mt-5">
                    I have built marketing functions and teams from scratch, worked on product
                    launches and market expansion, developed positioning and go-to-market strategies
                    and worked alongside technology and product teams.
                  </p>
                  <p className="font-serif-editorial mt-8 border-t border-line pt-6 text-[clamp(1.1rem,1.8vw,1.5rem)] italic leading-snug text-charcoal">
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
        <section className="rule-thin">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <h2 className="display-md max-w-[30rem]">
                Not sure which <span className="italic">format fits?</span>
              </h2>
            </Reveal>
            <div className="mt-12 border-t border-line">
              {formats.map(([q, a, href], i) => (
                <Reveal key={q} delay={i * 70}>
                  <a
                    href={href}
                    className="group grid gap-2 border-b border-line py-7 transition-colors hover:bg-sage/20 md:grid-cols-12 md:items-baseline md:gap-8"
                  >
                    <span className="font-serif-editorial text-[clamp(1.1rem,1.9vw,1.6rem)] text-charcoal md:col-span-7">
                      {q}
                    </span>
                    <span className="label-xs !text-charcoal !tracking-[0.2em] md:col-span-5">
                      <span aria-hidden className="mr-3 text-olive">
                        →
                      </span>
                      {a}
                    </span>
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
