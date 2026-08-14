import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SpiralSystem, Spiral } from "@/components/site/LineArt";
import { Solutions } from "@/components/site/Solutions";
import portrait from "@/assets/vita-portrait.jpg";
import shellHero from "@/assets/shell-hero.jpg.asset.json";
import hands from "@/assets/hands-notebook.jpg";
import ripple from "@/assets/ripple.jpg.asset.json";
import shell from "@/assets/shell.jpg.asset.json";
import seeds from "@/assets/seeds.jpg.asset.json";

const title = "Vita Shablii — Strategist · Founder · Advisor";
const description =
  "Clarity before complexity. Strategy, marketing, product thinking and AI — ideas turned into structure, systems and decisions.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const proof = [
  { k: "13 years", v: "marketing & strategy" },
  { k: "500+", v: "projects & events" },
  { k: "Markets", v: "USA · Europe · China" },
  { k: "Experience", v: "Apple · Samsung · Microsoft · Huawei · Cisco" },
  { k: "AI", v: "integrated into marketing workflows since 2020" },
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Header />
      <main>
        {/* ——— HERO — quiet ——— */}
        <section className="relative overflow-hidden">
          {/* faint nautilus silhouette behind everything */}
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -left-[10%] top-[4%] w-[85%] max-w-none select-none opacity-[0.16] [filter:grayscale(0.35)_brightness(1.12)] [mask-image:radial-gradient(closest-side,black,transparent)] md:left-[-6%] md:top-[-6%] md:w-[62%] md:opacity-[0.13]"
          />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pb-16 pt-24 md:grid-cols-12 md:px-10 md:pb-24 md:pt-32">
            <div className="flex flex-col md:col-span-6">
              <Reveal>
                <p className="label-xs !text-charcoal !tracking-[0.3em]">Vita Shablii</p>
                <p className="label-xs mt-2">Strategist · Founder · Advisor</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="display-lg mt-10 md:mt-12">
                  Ideas do not
                  <br />
                  need complexity.
                  <br />
                  <span className="italic">They need structure.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="body-read mt-10 md:mt-12">
                  From idea to product. From product to market. From chaotic marketing to a system.
                </p>
              </Reveal>
              <div className="mt-10 md:mt-auto md:pt-14">
                <a
                  href="#solutions"
                  className="label-xs group inline-flex items-center gap-3 border border-charcoal/25 bg-paper/60 px-7 py-4 !tracking-[0.2em] !text-charcoal backdrop-blur-[2px] transition-colors hover:border-olive hover:bg-olive/10"
                >
                  FIND YOUR ENTRY POINT
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="relative md:col-span-6 md:col-start-7 md:flex md:items-stretch md:gap-6">
              <p className="label-xs hidden shrink-0 self-stretch !tracking-[0.28em] md:block md:[writing-mode:vertical-rl] md:rotate-180">
                Strategy × Marketing × Product Thinking × AI
              </p>
              <div className="grain relative aspect-[3/4] w-full overflow-hidden bg-stone">
                <img
                  src={portrait}
                  alt="Portrait of Vita Shablii"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="label-xs mt-6 md:hidden">
                Strategy × Marketing × Product Thinking × AI
              </p>
            </div>
          </div>
        </section>

        {/* ——— EXPERTISE + POINT OF VIEW — dense ——— */}
        <section className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-20 md:px-10 md:pb-20 md:pt-28">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-7">
                <Reveal>
                  <h2 className="display-md">
                    Working at the intersection of strategy × marketing ×{" "}
                    <span className="italic">product thinking.</span>
                  </h2>
                </Reveal>
                <div className="mt-12 space-y-6">
                  <p className="body-read">
                    Launching a product is only part of the task. It matters far more to understand
                    why some ideas find their place in the market and others do not.
                  </p>
                  <p className="body-read">
                    The answer usually lies at the intersection of what the author wants to create,
                    what people actually need, and what has the potential to work commercially.
                  </p>
                  <p className="body-read">
                    This is where intuition, product thinking, strategy and technology meet — and
                    assemble into one coherent system.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <div className="grain relative aspect-[4/5] overflow-hidden bg-stone">
                  <img
                    src={hands}
                    alt="Hands resting on an open notebook"
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover opacity-95"
                  />
                </div>
              </div>
            </div>

            {/* proof ribbon */}
            <div className="mt-12 md:mt-16">
              <dl className="grid grid-cols-1 gap-px overflow-hidden border border-sage/30 bg-sage/25 sm:grid-cols-2 lg:grid-cols-5">
                {proof.map((p) => (
                  <div
                    key={p.k}
                    className="bg-sage/10 px-6 py-5 transition-colors hover:bg-sage/20 md:px-8 md:py-6"
                  >
                    <dt className="font-serif-editorial text-2xl text-charcoal">{p.k}</dt>
                    <dd className="label-xs mt-1 !tracking-[0.14em] normal-case">{p.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ——— TRANSITION — statement + spiral ——— */}
        <section className="relative overflow-hidden bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16">
            <Reveal>
              <div className="grid items-center gap-14 lg:grid-cols-3 lg:gap-10">
                {/* left third — kicker + headline */}
                <div className="lg:pr-6">
                  <p className="label-xs mb-5">The idea becomes a system</p>
                  <h2 className="display-lg text-charcoal">
                    Marketing
                    <br />
                    is not
                    <br />
                    the starting point.
                  </h2>
                </div>

                {/* centre third — spiral */}
                <div className="w-full">
                  <SpiralSystem
                    center="Context"
                    nodes={["Clarity", "Structure", "Decision", "Action"]}
                  />
                </div>

                {/* right third — supporting text */}
                <div className="lg:pl-6">
                  <p className="body-read !max-w-[26rem]">
                    Most problems begin before the launch. When there is no clarity about what we are
                    creating, for whom, which problem we solve, why anyone should choose us, how to
                    talk about it and how to bring it to market — advertising, content and AI do not
                    add clarity. They only scale what already exists, faster.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative h-[42vh] w-full overflow-hidden md:h-[58vh]">
            <img
              src={ripple.url}
              alt="Concentric ripples spiralling across still water"
              loading="lazy"
              className="h-full w-full object-cover [filter:saturate(0.45)_brightness(1.06)]"
            />
            <Spiral className="pointer-events-none absolute inset-0 m-auto h-[70%] w-[70%] opacity-60" />
          </div>
        </section>

        {/* ——— PRODUCT DISCOVERY — dense + interactive ——— */}
        <Solutions />

        {/* ——— METHOD STATEMENT — editorial diptych ——— */}
        <section className="rule-thin bg-sand/50">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <h2 className="display-md max-w-[46rem]">
                Not every task needs another tool.
                <br />
                <span className="italic">Sometimes you need to see the whole system.</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
              {/* tall image, sits high */}
              <figure className="grain relative md:col-span-4 md:col-start-1">
                <div className="aspect-[3/4] overflow-hidden bg-stone">
                  <img
                    src={seeds.url}
                    alt="Dandelion seeds drifting in pale light"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="label-xs mt-4 text-muted">Many instruments</figcaption>
              </figure>

              {/* second image, dropped lower and smaller — the quiet counterweight */}
              <figure className="grain relative md:col-span-3 md:col-start-5 md:mt-32">
                <div className="aspect-square overflow-hidden bg-stone">
                  <img
                    src={ripple.url}
                    alt="Concentric ripples spreading through still water"
                    loading="lazy"
                    className="h-full w-full object-cover [filter:saturate(0.55)_brightness(1.05)]"
                  />
                </div>
                <figcaption className="label-xs mt-4 text-muted">One structure</figcaption>
              </figure>

              {/* text column, aligned to the lower image */}
              <div className="md:col-span-4 md:col-start-9 md:mt-32">
                <p className="body-read">
                  There are more marketing instruments every year, and AI has made them even more
                  accessible. But the value is less and less about how many tools you know —
                </p>
                <p className="body-read mt-6">
                  and more about whether you understand what your product actually needs, why, at
                  which moment, and how it connects to everything else. That is what I build my
                  work, products and systems around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— THE THINKING BEHIND THE WORK — human ——— */}
        <section id="about" className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="grain relative md:col-span-5 md:col-start-1 md:-mt-16">
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
            <div className="md:col-span-6 md:col-start-7 md:pt-24">
              <Reveal>
                <p className="label-xs mb-5">THE THINKING BEHIND THE WORK</p>
                <h2 className="display-md">
                  Behind every product,
                  <br />
                  I look for the <span className="italic">logic</span> first.
                </h2>
              </Reveal>
              <div className="mt-10 space-y-6">
                <p className="body-read">
                  Thirteen years across marketing, products and different markets have confirmed it
                  again and again: what happens before execution often determines what happens
                  after.
                </p>
                <p className="body-read">
                  What is the product, really?
                  <br />
                  Who is it for?
                  <br />
                  Where does its value come from?
                  <br />
                  What are we assuming — and what do we actually know?
                </p>
                <p className="body-read">
                  The first question is rarely “What should we launch?”
                  <br />
                  It is “What needs to be understood before we do?”
                </p>
                <p className="body-read">
                  The quality of what comes next depends on the quality of what we understand first.
                </p>
              </div>
              <a href="#solutions" className="link-editorial mt-10">
                FOLLOW THE THINKING <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* ——— SELECTED EXPERIENCE — editorial proof ——— */}
          <div className="mt-16 pt-12 md:mt-20 md:pt-16">
            <p className="label-xs">Selected experience</p>
            <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0">
              {[
                {
                  n: "01 / MARKET ENTRY",
                  t: "China → Europe",
                  d: "Market entry strategy and product positioning for a Chinese tech brand expanding into the EU.",
                },
                {
                  n: "02 / PRODUCT & BRAND",
                  t: "Consumer Tech",
                  d: "Go-to-market strategy and lifecycle marketing for global product launches in CEE & CIS.",
                },
                {
                  n: "03 / SYSTEM & TRANSFORMATION",
                  t: "Marketing Systems",
                  d: "Built marketing systems and teams from scratch across multiple markets and industries.",
                },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 90}>
                  <div className="md:border-l md:border-line md:px-8 md:first:border-l-0 md:first:pl-0">
                    <p className="label-xs">{item.n}</p>
                    <h3 className="display-md mt-3 !text-[clamp(1.35rem,1.8vw,1.7rem)]">
                      {item.t}
                    </h3>
                    <p className="body-read mt-4 !max-w-none !text-[0.95rem]">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— FINAL — very quiet ——— */}
        <section id="final" className="rule-thin">
          <div className="mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-center px-6 py-24 md:px-10">
            <Reveal>
              <p className="display-lg">
                Clarity
                <br />
                before
                <br />
                <span className="italic">complexity.</span>
              </p>
            </Reveal>
            <p className="body-read mt-14">Creating things that make sense.</p>
            <div className="mt-14 flex flex-wrap items-center gap-x-12 gap-y-6">
              <a href="#solutions" className="link-editorial">
                Choose a solution <span aria-hidden>↑</span>
              </a>
              <a
                href="mailto:hello@vitashablii.com"
                className="label-xs !tracking-[0.16em] underline-offset-4 hover:underline"
              >
                Write to me →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
