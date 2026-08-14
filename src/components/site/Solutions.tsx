type Solution = {
  index: string;
  label: string;
  title: string[];
  lede: string;
  transform: string;
  cta: string;
  gravity?: boolean;
};

const solutions: Solution[] = [
  {
    index: "01",
    label: "01 / Product",
    title: ["Marketing", "Set"],
    lede: "For people who already have a product or project, but whose marketing consists of disconnected actions.",
    transform: "chaotic marketing → an understandable system",
    cta: "View Marketing Set",
  },
  {
    index: "02",
    label: "02 / Ecosystem",
    title: ["Syntez"],
    lede: "Before you invest in growth, understand what deserves to grow. Not another course — a decision-making ecosystem for ideas, products and markets.",
    transform: "idea → validation → market → positioning → system → growth",
    cta: "Enter Syntez",
    gravity: true,
  },
  {
    index: "03",
    label: "03 / Direct",
    title: ["Consulting"],
    lede: "Sometimes the problem is not a missing tool or framework. What is needed is a view from another point — on a specific product, market and context.",
    transform: "60 min / online",
    cta: "Work with me",
  },
];

function SolutionBlock({ s }: { s: Solution }) {
  return (
    <article
      className={`group relative flex aspect-square items-center justify-center rounded-[50%] border px-10 py-14 text-center transition-colors duration-500 lg:aspect-[3/4] lg:px-14 ${
        s.gravity
          ? "border-olive/45 bg-sage/25 hover:bg-sage/35"
          : "border-line bg-paper/70 hover:border-olive/40 hover:bg-sage/12"
      }`}
    >
      <div className="mx-auto max-w-[17rem]">
        <p className="label-xs">{s.label}</p>
        <h3
          className={`mt-4 ${s.gravity ? "display-md" : "display-md !text-[clamp(1.7rem,2.4vw,2.4rem)]"} leading-[0.95]`}
        >
          {s.title.map((t) => (
            <span key={t} className="block">
              {t}
            </span>
          ))}
        </h3>
        <p className="body-read mt-5 !text-[0.95rem]">{s.lede}</p>
        <p className="mt-5 font-serif-editorial text-base italic text-charcoal/80">{s.transform}</p>
        <a href="#final" className="link-editorial mt-7 justify-center">
          {s.cta} <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
      <div className="max-w-[46rem]">
        <h2 className="display-lg">
          Find the point
          <br />
          <span className="italic">you are standing on.</span>
        </h2>
        <p className="body-read mt-8">
          Practical instruments and systems for working with ideas, marketing and the development of
          your own projects. Three entry points into one way of thinking.
        </p>
        <p className="label-xs mt-8 !tracking-[0.18em]">
          Three forms of one thinking — separate orbits, one centre
        </p>
      </div>

      {/* three overlapping ovals — the entry points read as intersecting orbits */}
      <div className="relative mt-20 flex flex-col items-center gap-12 lg:mt-28 lg:flex-row lg:items-center lg:justify-center lg:gap-0">
        <div className="w-full max-w-[26rem] lg:w-1/3 lg:max-w-none">
          <SolutionBlock s={solutions[0]!} />
        </div>
        <div className="z-10 w-full max-w-[26rem] lg:-mx-[4%] lg:w-[36%] lg:max-w-none">
          <SolutionBlock s={solutions[1]!} />
        </div>
        <div className="w-full max-w-[26rem] lg:w-1/3 lg:max-w-none">
          <SolutionBlock s={solutions[2]!} />
        </div>
      </div>
    </section>
  );
}