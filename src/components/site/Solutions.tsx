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

/* ---- shell geometry: chambers of one nautilus ---- */
const CX = 620;
const CY = 290;
const A = 70;
const B = 0.235;
const T_START = -2.4 * Math.PI;
const T_END = 2.6 * Math.PI;

function pt(t: number) {
  const r = A * Math.exp(B * t);
  // rotate so the shell opens to the right and upward
  return [CX + r * Math.cos(t - Math.PI / 2), CY + r * Math.sin(t - Math.PI / 2)] as const;
}

function spiralPath(from: number, to: number) {
  const out: string[] = [];
  for (let t = from; t <= to; t += 0.035) {
    const [x, y] = pt(t);
    out.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const [x, y] = pt(to);
  out.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  return `M${out.join(" L")}`;
}

// the septa (walls between chambers) run from the growth axis out to the shell wall
const septaT = [0.6 * Math.PI, 1.3 * Math.PI, 2.0 * Math.PI, T_END];

function ShellField() {
  return (
    <svg
      viewBox="0 0 1240 520"
      className="absolute inset-0 h-full w-full"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* the widest chamber, softly filled — the ecosystem holds the others */}
      <path
        d={`${spiralPath(septaT[1]!, septaT[2]!)} L ${CX} ${CY} Z`}
        fill="var(--sage)"
        opacity="0.16"
      />
      <path d={spiralPath(T_START, T_END)} stroke="var(--smoke)" strokeWidth="1.3" opacity="0.75" />
      {septaT.map((t) => {
        const [x, y] = pt(t);
        return (
          <line
            key={t}
            x1={CX}
            y1={CY}
            x2={x}
            y2={y}
            stroke="var(--smoke)"
            strokeWidth="0.9"
            opacity="0.4"
          />
        );
      })}
      <circle cx={CX} cy={CY} r="3" fill="var(--olive)" opacity="0.6" />
    </svg>
  );
}

function SolutionBlock({ s }: { s: Solution }) {
  return (
    <article className="group relative">
      <div
        className={`pointer-events-none absolute -left-4 top-0 h-full w-px ${s.gravity ? "bg-olive/35" : "bg-line"} lg:block`}
      />
      <p className="label-xs">{s.label}</p>
      <h3
        className={`mt-5 ${s.gravity ? "display-md" : "display-md !text-[clamp(1.7rem,2.4vw,2.4rem)]"} leading-[0.95]`}
      >
        {s.title.map((t) => (
          <span key={t} className="block">
            {t}
          </span>
        ))}
      </h3>
      <p className="body-read mt-5 max-w-[22rem] !text-[0.95rem]">{s.lede}</p>
      <p className="mt-5 max-w-[22rem] font-serif-editorial text-base italic text-charcoal/80">
        {s.transform}
      </p>
      <a href="#final" className="link-editorial mt-7">
        {s.cta} <span aria-hidden>→</span>
      </a>
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
          Three chambers of one shell — the same thinking at a different scale
        </p>
      </div>

      {/* one shell, cut open: three chambers growing from a single centre */}
      <div className="relative mt-20 lg:mt-28">
        <div className="pointer-events-none absolute inset-x-0 -bottom-10 -top-10 hidden lg:block">
          <ShellField />
        </div>

        <div className="relative grid gap-16 lg:grid-cols-3 lg:gap-10">
          <div className="lg:pt-40">
            <SolutionBlock s={solutions[0]!} />
          </div>
          <div className="lg:pt-20">
            <SolutionBlock s={solutions[1]!} />
          </div>
          <div>
            <SolutionBlock s={solutions[2]!} />
          </div>
        </div>
      </div>
    </section>
  );
}