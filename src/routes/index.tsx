import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SpiralSystem, OrbitMethod, Spiral } from "@/components/site/LineArt";
import { Solutions } from "@/components/site/Solutions";
import portrait from "@/assets/vita-portrait.jpg";
import shellHero from "@/assets/shell-hero.jpg.asset.json";
import hands from "@/assets/hands-notebook.jpg";
import ripple from "@/assets/ripple.jpg.asset.json";
import shell from "@/assets/shell.jpg.asset.json";
import swans from "@/assets/swans.jpg.asset.json";
import seeds from "@/assets/seeds.jpg.asset.json";
import wash from "@/assets/wash.jpg.asset.json";

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
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pb-24 pt-32 md:grid-cols-12 md:px-10 md:pb-32 md:pt-40">
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
                  Find your solution
                  <span aria-hidden className="transition-transform group-hover:translate-y-0.5">
                    ↓
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
        <section id="about" className="rule-thin bg-paper">
          <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="label-xs">Point of view</p>
                <Reveal>
                  <h2 className="display-md mt-8">
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
            <div className="mt-16 md:mt-24">
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
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
            {/* statement — framed, not a heading */}
            <Reveal>
              <figure className="relative border-y border-olive/30 bg-sage/12 px-6 py-14 md:px-12 md:py-20">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] bg-olive/50"
                />
                <figcaption className="label-xs !tracking-[0.3em] text-olive">
                  Statement
                </figcaption>
                <blockquote className="statement-sans mt-8 max-w-[54rem] text-charcoal">
                  Marketing
                  <br />
                  is not
                  <br />
                  the starting point.
                </blockquote>
              </figure>
            </Reveal>

            {/* spiral left (raised) · text right (dropped) — deliberate offset */}
            <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-6 md:-mt-14">
                <p className="label-xs mb-8">The idea becomes a system</p>
                <SpiralSystem
                  center="Idea"
                  nodes={["Context", "Clarity", "Structure", "Decision", "Action"]}
                />
              </div>

              <div className="md:col-span-5 md:col-start-8 md:pt-28">
                {/* mosaic marking the intentional drop */}
                <div aria-hidden className="mb-10 grid w-28 grid-cols-4 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        "aspect-square " +
                        (i % 5 === 0 ? "bg-olive/60" : i % 3 === 0 ? "bg-sage/70" : "bg-sage/25")
                      }
                    />
                  ))}
                </div>
                <p className="body-read">
                  Most problems begin before the launch. When there is no clarity about what we are
                  creating, for whom, which problem we solve, why anyone should choose us, how to talk
                  about it and how to bring it to market —
                </p>
                <p className="body-read mt-6">
                  advertising, content and AI do not add clarity. They only scale what already exists,
                  faster.
                </p>
              </div>
            </div>
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

        {/* ——— METHOD STATEMENT — quiet ——— */}
        <section className="rule-thin bg-sand/50">
          <div className="mx-auto grid max-w-[1440px] gap-20 px-6 py-28 md:grid-cols-12 md:px-10 md:py-40">
            <div className="md:col-span-6">
              <Reveal>
                <h2 className="display-md">
                  Not every task needs another tool.
                  <br />
                  <span className="italic">Sometimes you need to see the whole system.</span>
                </h2>
              </Reveal>
              <p className="body-read mt-12">
                There are more marketing instruments every year, and AI has made them even more
                accessible. But the value is less and less about how many tools you know —
              </p>
              <p className="body-read mt-6">
                and more about whether you understand what your product actually needs, why, at which
                moment, and how it connects to everything else. That is what I build my work,
                products and systems around.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <OrbitMethod nodes={["Idea", "Clarity", "Structure", "System", "Growth"]} />
            </div>
          </div>
        </section>

        {/* ——— ABOUT — human ——— */}
        <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="grain relative md:col-span-5 md:col-start-1 md:-mt-16">
              <div className="aspect-[4/5] overflow-hidden bg-stone">
                <img
                  src={shell.url}
                  alt="Nautilus shell spiral resting in pale sand"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-24">
              <p className="label-xs">About Vita</p>
              <Reveal>
                <h2 className="display-md mt-8">
                  Behind every product,
                  <br />
                  I look for the <span className="italic">logic</span> first.
                </h2>
              </Reveal>
              <p className="body-read mt-10">
                Thirteen years across marketing and strategy, several markets and hundreds of
                projects taught me one thing: the strongest work begins with understanding, not with
                execution. I build products and systems that help people see their own structure
                before they start scaling it.
              </p>
              <a href="#top" className="link-editorial mt-10">
                About me <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ——— FINAL — very quiet ——— */}
        <section id="final" className="rule-thin">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4 px-6 pt-24 md:grid-cols-3 md:gap-8 md:px-10">
            <img
              src={seeds.url}
              alt="Dandelion seeds drifting in pale light"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <img
              src={wash.url}
              alt="Soft olive watercolour wash"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover md:mt-16"
            />
            <Spiral className="col-span-2 mx-auto aspect-square w-2/3 md:col-span-1 md:w-full" />
          </div>
          <div className="mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-center px-6 py-32 md:px-10">
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
