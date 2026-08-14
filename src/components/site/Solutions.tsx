import { useReveal } from "@/hooks/use-reveal";

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

/**
 * Crystal lattice — the three entry points are nodes of one lattice.
 * Each node holds the structure together; remove one and the form changes.
 */
function Lattice() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);

  // primary nodes sit in the gutters beside each block, never over the text
  const A = { x: 22, y: 38 }; // 01 Product   (left gutter, top)
  const B = { x: 1132, y: 470 }; // 02 Ecosystem (right gutter, middle)
  const C = { x: 118, y: 640 }; // 03 Direct    (left gutter, lower)

  // secondary lattice points — the surrounding crystalline structure
  const aux = [
    { x: 1146, y: 108 }, // top right
    { x: 1152, y: 800 }, // lower right
    { x: 470, y: 952 }, // bottom middle
    { x: 14, y: 330 }, // left edge
    { x: 690, y: 610 }, // inner core
  ];

  const bonds: Array<[{ x: number; y: number }, { x: number; y: number }, number]> = [
    [A, aux[0]!, 1],
    [aux[0]!, B, 1],
    [B, aux[1]!, 1],
    [aux[1]!, aux[2]!, 1],
    [aux[2]!, C, 1],
    [C, aux[3]!, 0.5],
    [aux[3]!, A, 0.5],
    [B, aux[4]!, 0.4],
    [aux[4]!, aux[1]!, 0.35],
    [aux[4]!, aux[2]!, 0.35],
  ];

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 hidden lg:block">
      <svg
        viewBox="0 0 1200 1000"
        className="h-full w-full"
        fill="none"
        aria-hidden
        preserveAspectRatio="none"
      >
        {/* facet planes — the crystal body holding the three nodes together */}
        <polygon
          points={`${A.x},${A.y} ${aux[0]!.x},${aux[0]!.y} ${B.x},${B.y} ${aux[1]!.x},${aux[1]!.y} ${aux[2]!.x},${aux[2]!.y} ${C.x},${C.y} ${aux[3]!.x},${aux[3]!.y}`}
          fill="var(--sage)"
          opacity={shown ? 0.1 : 0}
          style={{ transition: "opacity 1.8s ease 0.8s" }}
        />
        <polygon
          points={`${B.x},${B.y} ${aux[4]!.x},${aux[4]!.y} ${aux[1]!.x},${aux[1]!.y}`}
          fill="var(--sage)"
          opacity={shown ? 0.12 : 0}
          style={{ transition: "opacity 1.8s ease 1.1s" }}
        />

        {/* bonds */}
        {bonds.map(([p, q, w], i) => {
          const len = Math.hypot(q.x - p.x, q.y - p.y);
          return (
            <line
              key={i}
              x1={p.x}
              y1={p.y}
              x2={q.x}
              y2={q.y}
              stroke={w >= 1 ? "var(--smoke)" : "var(--line-tone)"}
              strokeWidth={w >= 1 ? 0.9 : 0.7}
              opacity={w >= 1 ? 0.75 : Math.max(w, 0.28)}
              style={{
                strokeDasharray: len,
                strokeDashoffset: shown ? 0 : len,
                transition: `stroke-dashoffset 2.2s cubic-bezier(0.22,1,0.36,1) ${0.15 * i}s`,
              }}
            />
          );
        })}

        {/* auxiliary lattice nodes */}
        {aux.map((p, i) => (
          <rect
            key={i}
            x={p.x - 3}
            y={p.y - 3}
            width={6}
            height={6}
            transform={`rotate(45 ${p.x} ${p.y})`}
            fill="var(--paper)"
            stroke="var(--smoke)"
            strokeWidth={0.7}
            opacity={shown ? 0.6 : 0}
            style={{ transition: `opacity 1s ease ${0.5 + 0.12 * i}s` }}
          />
        ))}

        {/* primary nodes — the three entry points */}
        {[A, C].map((p, i) => (
          <rect
            key={i}
            x={p.x - 6}
            y={p.y - 6}
            width={12}
            height={12}
            transform={`rotate(45 ${p.x} ${p.y})`}
            fill="var(--paper)"
            stroke="var(--charcoal)"
            strokeWidth={0.9}
          />
        ))}
        <rect
          x={B.x - 14}
          y={B.y - 14}
          width={28}
          height={28}
          transform={`rotate(45 ${B.x} ${B.y})`}
          fill="none"
          stroke="var(--olive)"
          strokeWidth={0.7}
          opacity={0.55}
        />
        <rect
          x={B.x - 7}
          y={B.y - 7}
          width={14}
          height={14}
          transform={`rotate(45 ${B.x} ${B.y})`}
          fill="var(--olive)"
        />
      </svg>
    </div>
  );
}

function SolutionBlock({ s }: { s: Solution }) {
  return (
    <article className="max-w-[30rem]">
      <p className="label-xs">{s.label}</p>
      <h3
        className={`mt-4 ${s.gravity ? "display-lg !text-[clamp(3rem,6vw,5.4rem)]" : "display-md"} leading-[0.95]`}
      >
        {s.title.map((t) => (
          <span key={t} className="block">
            {t}
          </span>
        ))}
      </h3>
      <p className="body-read mt-6">{s.lede}</p>
      <p className="mt-6 font-serif-editorial text-lg italic text-charcoal/80">{s.transform}</p>
      <a href="#final" className="link-editorial mt-8">
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
          Three nodes of one lattice — each holds the structure
        </p>
      </div>

      <div className="relative mt-24 lg:mt-32">
        <Lattice />
        {/* mobile connective line */}
        <span
          className="absolute left-[7px] top-2 bottom-2 w-px bg-line lg:hidden"
          aria-hidden
        />
        <div className="grid gap-24 pl-10 lg:grid-cols-12 lg:gap-y-40 lg:pl-0">
          <div className="relative lg:col-span-5 lg:col-start-1">
            <Node className="lg:hidden" />
            <SolutionBlock s={solutions[0]!} />
          </div>
          <div className="relative lg:col-span-6 lg:col-start-6 lg:pt-10">
            <Node accent className="lg:hidden" />
            <SolutionBlock s={solutions[1]!} />
          </div>
          <div className="relative lg:col-span-5 lg:col-start-2">
            <Node className="lg:hidden" />
            <SolutionBlock s={solutions[2]!} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({ accent = false, className = "" }: { accent?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute -left-10 top-1.5 grid place-items-center ${className}`}
    >
      <span
        className={`block h-3 w-3 rotate-45 border ${
          accent ? "border-olive bg-olive" : "border-charcoal bg-paper"
        }`}
      />
    </span>
  );
}