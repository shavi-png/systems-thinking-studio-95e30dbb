type Solution = {
  index: string;
  label: string;
  title: string[];
  lede: string;
  transform: string;
  cta: string;
  href?: string;
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
    href: "/marketing-set",
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
    title: ["Strategic", "Partnership"],
    lede: "Sometimes the problem is not a missing tool or framework. What is needed is a view from another point — on a specific product, market and context.",
    transform: "60 min / online",
    cta: "Work with me",
    href: "/strategic-partnership",
  },
];

/* ---- shell geometry: chambers of one nautilus ---- */
const CX = 560;
const CY = 330;
const A = 62;
const B = 0.235;
const T_START = -2.4 * Math.PI;
const T_END = 2.72 * Math.PI;

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

// the septa (walls between chambers): short arcs on the shell wall, not full radii
const septaT = [0.72 * Math.PI, 1.5 * Math.PI, 2.28 * Math.PI];

function ShellField() {
  return (
    <svg
      viewBox="0 0 1240 520"
      className="absolute inset-0 h-full w-full"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs />

      <path d={spiralPath(T_START, T_END)} stroke="var(--smoke)" strokeWidth="1.1" opacity="0.45" />
      {/* septa: short walls stepping out from the growth axis */}
      {septaT.map((t) => {
        const [x, y] = pt(t);
        const inner = 0.62;
        return (
          <g key={t}>
            <line
              x1={CX + (x - CX) * inner}
              y1={CY + (y - CY) * inner}
              x2={x}
              y2={y}
              stroke="var(--smoke)"
              strokeWidth="0.8"
              opacity="0.35"
            />
            <circle cx={x} cy={y} r="3.5" fill="var(--olive)" opacity="0.5" />
          </g>
        );
      })}
      <circle cx={CX} cy={CY} r="2.5" fill="var(--olive)" opacity="0.6" />
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
      <a href={s.href ?? "#final"} className="link-editorial mt-7">
        {s.cta} <span aria-hidden>→</span>
      </a>
    </article>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="teal-room rule-thin relative">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[46rem] text-center">
          <p className="section-num mb-7 justify-center">03 / Entry points</p>
          <h2 className="display-lg mx-auto max-w-[40rem]">
            Find the point
            <br />
            <span className="italic">you are standing on.</span>
          </h2>
          <p className="body-read mx-auto mt-8 max-w-[40rem]">
            Practical instruments and systems for working with ideas, marketing and the development of
            your own projects. Three entry points into one way of thinking.
          </p>
          <p className="label-xs mx-auto mt-8 max-w-[40rem] !tracking-[0.18em]">
            Three chambers of one shell — the same thinking at a different scale
          </p>
        </div>

        {/* one shell, cut open: three chambers growing from a single centre */}
        <div className="relative mt-16 lg:mt-20">
          {/* growth-centre glow: CSS so it fades out on every edge, never clipped */}
          <div className="pointer-events-none absolute left-[45%] top-[60%] hidden h-[150%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] [background-image:radial-gradient(closest-side,color-mix(in_oklab,var(--sage)_58%,transparent),transparent_100%)] lg:block" />
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
      </div>
    </section>
  );
}