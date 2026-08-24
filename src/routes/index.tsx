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
          {/* faint nautilus silhouette behind everything — kept very soft so the white page stays clean */}
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[78%] h-[115%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.40] [filter:sepia(0.06)_saturate(0.3)_brightness(1.22)_contrast(0.85)] [mask-image:radial-gradient(closest-side,black_55%,transparent_100%)] md:left-[38%] md:top-[72%] md:h-[128%] md:opacity-[0.34]"
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
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 md:mt-auto md:pt-14">
                <a
                  href="#solutions"
                  className="label-xs group inline-flex items-center gap-3 border border-charcoal/25 bg-paper/60 px-7 py-4 !tracking-[0.2em] !text-charcoal backdrop-blur-[2px] transition-colors hover:border-olive hover:bg-olive/10"
                >
                  FIND YOUR ENTRY POINT
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a href="/about" className="link-editorial">
                  Get to know me <span aria-hidden>→</span>
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
                  <p className="section-num mb-6">01 / Point of view</p>
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

            {/* proof ribbon — restrained cream band, sage only as an accent rule */}
            <div className="mt-14 md:mt-20">
              <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
                {proof.map((p) => (
                  <div
                    key={p.k}
                    className="border-b border-line py-6 pr-6 lg:border-b-0 lg:border-l lg:border-line lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
                  >
                    <dt className="quote-serif text-charcoal">
                      {p.k}
                    </dt>
                    <dd className="label-xs mt-3 !tracking-[0.14em] normal-case">{p.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ——— TRANSITION — the first dark room ——— */}
        <section className="dark-room relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
            <Reveal>
              <p className="section-num mb-8">02 / The idea becomes a system</p>
              <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
                {/* the single biggest voice in this room */}
                <div className="lg:col-span-7">
                  <h2 className="display-xl">
                    Marketing is not
                    <br />
                    <span className="italic">the starting point.</span>
                  </h2>
                </div>

                {/* restrained supporting text, strictly aligned to the grid */}
                <div className="lg:col-span-4 lg:col-start-9">
                  <p className="body-read !max-w-none">
                    Most problems begin before the launch. When there is no clarity about what we are
                    creating, for whom, which problem we solve, why anyone should choose us, how to
                    talk about it and how to bring it to market — advertising, content and AI do not
                    add clarity. They only scale what already exists, faster.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* the shell motif, larger and cleaner, owning its own band */}
            <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16">
              <div className="mx-auto max-w-[54rem]">
                <SpiralSystem
                  center="Context"
                  nodes={["Clarity", "Structure", "Decision", "Action"]}
                />
              </div>
            </div>
          </div>

          {/* full-bleed image moment — the visual event, not decoration */}
          <div className="relative h-[52vh] w-full overflow-hidden md:h-[76vh]">
            <img
              src={ripple.url}
              alt="Concentric ripples spiralling across still water"
              loading="lazy"
              className="h-full w-full object-cover [filter:grayscale(0.8)_sepia(0.2)_brightness(0.86)_contrast(1.04)]"
            />
            <Spiral className="pointer-events-none absolute inset-0 m-auto h-[62%] w-[62%] text-ivory opacity-40" />
            <p className="label-xs absolute bottom-6 left-6 !text-ivory md:bottom-10 md:left-10">
              One structure, unfolding
            </p>

          </div>
        </section>

        {/* ——— PRODUCT DISCOVERY — dense + interactive ——— */}
        <Solutions />

        {/* ——— METHOD STATEMENT — one image owns the section ——— */}
        <section id="method" className="rule-thin bg-cream">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="section-num mb-8">04 / The method</p>
              <h2 className="display-md max-w-[46rem]">
                Not every task needs another tool.
                <br />
                <span className="italic">Sometimes you need to see the whole system.</span>
              </h2>
            </Reveal>

            {/* one large, quiet image — the counterweight to the type */}
            <figure className="mt-14 md:mt-20">
              <div className="grain relative aspect-[16/9] overflow-hidden bg-stone md:aspect-[21/9]">
                <img
                  src={seeds.url}
                  alt="Dandelion seeds drifting in pale light"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="label-xs mt-4">Many instruments — one structure</figcaption>
            </figure>

            <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <p className="quote-serif italic text-charcoal">
                  Fewer instruments.
                  <br />
                  One structure.
                </p>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="body-read !max-w-none">
                  There are more marketing instruments every year, and AI has made them even more
                  accessible. But the value is less and less about how many tools you know —
                </p>
                <p className="body-read mt-6 !max-w-none">
                  and more about whether you understand what your product actually needs, why, at
                  which moment, and how it connects to everything else. That is what I build my work,
                  products and systems around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— THE THINKING BEHIND THE WORK — human ——— */}
        <section id="about" className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          {/* eyebrow + headline */}
          <Reveal>
            <div className="max-w-4xl">
              <p className="section-num mb-6">05 / The thinking behind the work</p>
              <h2 className="display-md">
                Behind every product,
                <br />
                I look for the <span className="italic">logic</span> first.
              </h2>
            </div>
          </Reveal>

          {/* ——— SELECTED EXPERIENCE — editorial proof ——— */}
          <div className="mt-12 md:mt-16">
            <p className="label-xs">Selected experience</p>
            <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-0">
              {[
                {
                  n: "01 / MARKET ENTRY",
                  t: "China → Europe → USA",
                  d: "Experience launching and positioning products across Europe, the US and China — adapting strategy and go-to-market decisions to different market contexts.",
                },
                {
                  n: "02 / PRODUCT & BRAND",
                  t: "CROSS-INDUSTRY",
                  d: "Strategy, product and lifecycle marketing across consulting, IT, e-commerce, fintech and data-driven digital businesses.",
                },
                {
                  n: "03 / SYSTEM & TRANSFORMATION",
                  t: "Marketing Systems",
                  d: "Built marketing functions, teams and processes from the ground up — turning disconnected activities into structured, scalable systems.",
                },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 90}>
                  <div className="md:border-l md:border-line md:px-5 md:first:border-l-0 md:first:pl-0">
                    <p className="label-xs">{item.n}</p>
                    <h3 className="display-sm mt-3">
                      {item.t}
                    </h3>
                    <p className="body-read mt-4 !max-w-none !text-[0.9rem]">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* portrait + philosophy */}
          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <div className="grain relative md:col-span-5 md:col-start-1">
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
            <div className="md:col-span-6 md:col-start-7 md:pt-10">
              <div className="space-y-6">
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
        </section>

        {/* ——— FAQ — open questions ——— */}
        <section id="faq" className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="section-num mb-6">06 / Open questions</p>
              <h2 className="display-md">What if...?</h2>
            </Reveal>

            <div className="mt-12 space-y-0 md:mt-16">
              {[
                {
                  q: "What if I already have a marketing team?",
                  a: "I work with in-house teams and founders to clarify the thinking behind the work, not to replace the people doing it.",
                },
                {
                  q: "What if my product is not fully formed yet?",
                  a: "That is often the best moment. The earlier strategy becomes part of the product, the fewer costly pivots come later.",
                },
                {
                  q: "What if I need help with AI tools?",
                  a: "We integrate AI into the parts of the workflow where it actually supports decisions — not where it adds noise.",
                },
                {
                  q: "What if I do not know which market to enter first?",
                  a: "We map your product, audience, and constraints to find the right entry point, before you start spending on channels.",
                },
                {
                  q: "What if I only need clarity on one specific decision?",
                  a: "That is exactly what a focused engagement is for. Clarity in one right place usually unlocks the rest.",
                },
              ].map((item, i) => (
                <Reveal key={item.q} delay={i * 80}>
                  <div className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-10 md:py-10">
                    <h3 className="font-serif-editorial text-xl text-charcoal md:col-span-5">
                      {item.q}
                    </h3>
                    <p className="body-read md:col-span-7">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— FINAL — the closing dark room ——— */}
        <section id="final" className="dark-room relative overflow-hidden">
          {/* a tilted nacre oval at the centre — the shell reads out of its core */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[128%] w-[70%] -translate-x-1/2 -translate-y-1/2 -rotate-[29deg] rounded-[50%] [background-image:radial-gradient(closest-side,oklch(0.95_0.016_70/0.26),oklch(0.95_0.016_70/0.1)_60%,transparent_100%)] md:w-[32%]" />
          <img
            src={shellHero.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[29deg] select-none opacity-[0.3] [filter:grayscale(1)_brightness(1.15)_contrast(1.1)] [mask-image:radial-gradient(closest-side,black_30%,transparent_82%)] md:h-[78%] md:opacity-[0.34]"
          />


          <div className="relative mx-auto grid min-h-[58vh] max-w-[1440px] content-center gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <div className="md:col-span-7">
              <Reveal>
                <p className="section-num mb-8">07 / The principle behind the work</p>
                <p className="display-xl">
                  Clarity before <span className="italic">complexity.</span>
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:self-end">
              <p className="body-read !max-w-none">
                Every product, system and decision I build starts with one question: does this make
                sense? If the thinking is clear, everything else follows.
              </p>
              <div className="mt-10 flex flex-col items-start gap-5">
                <a href="#solutions" className="link-editorial">
                  Choose a solution <span aria-hidden>↑</span>
                </a>
                <a href="mailto:hello@vitashablii.com" className="link-editorial">
                  Write to me <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
