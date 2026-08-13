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

function Constellation() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 hidden lg:block">
      <svg viewBox="0 0 1200 720" className="h-full w-full" fill="none" aria-hidden preserveAspectRatio="none">
        <path
          d="M1010 90C1062 210 1070 320 1046 424"
          stroke="var(--line-tone)"
          strokeWidth="1"
          style={{
            strokeDasharray: 1800,
            strokeDashoffset: shown ? 0 : 1800,
            transition: "stroke-dashoffset 3.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <path
          d="M1046 424C1022 552 1006 630 984 706"
          stroke="var(--line-tone)"
          strokeWidth="0.7"
          opacity="0.8"
          style={{
            strokeDasharray: 900,
            strokeDashoffset: shown ? 0 : 900,
            transition: "stroke-dashoffset 3s cubic-bezier(0.22,1,0.36,1) 0.5s",
          }}
        />
        <circle cx="1046" cy="424" r="44" stroke="var(--line-tone)" strokeWidth="0.6" opacity="0.7" />
        <circle cx="1010" cy="90" r="5" fill="var(--paper)" stroke="var(--charcoal)" strokeWidth="0.9" />
        <circle cx="1046" cy="424" r="7" fill="var(--olive)" />
        <circle cx="984" cy="706" r="5" fill="var(--paper)" stroke="var(--charcoal)" strokeWidth="0.9" />
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
      </div>

      <div className="relative mt-24 lg:mt-32">
        <Constellation />
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
        className={`block h-3 w-3 rounded-full border border-charcoal ${
          accent ? "bg-olive" : "bg-paper"
        }`}
      />
    </span>
  );
}