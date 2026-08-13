import { useReveal } from "@/hooks/use-reveal";

/** The abstract line that enters the hero from outside the viewport. */
export function Spiral({
  className = "",
  strokeWidth = 1,
  accent = false,
}: {
  className?: string;
  strokeWidth?: number;
  accent?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);
  // Logarithmic (nautilus) spiral
  const pts: string[] = [];
  for (let t = 0; t <= 6.6 * Math.PI; t += 0.08) {
    const r = 3.2 * Math.exp(0.245 * t);
    pts.push(`${(300 + r * Math.cos(t)).toFixed(2)} ${(300 + r * Math.sin(t)).toFixed(2)}`);
  }
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 600 600" className="h-full w-full" fill="none" aria-hidden>
        <path
          d={`M${pts.join(" L")}`}
          stroke={accent ? "var(--olive)" : "var(--line-tone)"}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{
            strokeDasharray: 6000,
            strokeDashoffset: shown ? 0 : 6000,
            transition: "stroke-dashoffset 4.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <circle cx="300" cy="300" r="3" fill="var(--olive)" opacity={shown ? 0.8 : 0} />
      </svg>
    </div>
  );
}

export function HeroLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 1200"
      fill="none"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden
    >
      <path
        d="M-60 120C220 40 520 210 610 430c90 220-160 330-300 420-140 90-210 230-120 350"
        stroke="var(--line-tone)"
        strokeWidth="1"
        style={{
          strokeDasharray: 2400,
          strokeDashoffset: 2400,
          animation: "vs-draw 3.6s cubic-bezier(0.22,1,0.36,1) 0.3s forwards",
        }}
      />
      <circle cx="610" cy="430" r="3.5" fill="var(--olive)" opacity="0.75" />
      <style>{`@keyframes vs-draw{to{stroke-dashoffset:0}}`}</style>
    </svg>
  );
}

/** Vertical architectural drawing: the line becomes a system. */
export function SystemPath({ nodes }: { nodes: string[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.25);
  const step = 150;
  const height = step * (nodes.length - 1) + 120;

  return (
    <div ref={ref} className="relative">
      <svg
        viewBox={`0 0 420 ${height}`}
        className="w-full max-w-[520px]"
        fill="none"
        aria-hidden
      >
        <path
          d={nodes
            .map((_, i) =>
              i === 0
                ? `M120 60`
                : `C${120 + (i % 2 ? 120 : -80)} ${60 + step * (i - 0.5)} ${
                    120 + (i % 2 ? 90 : -50)
                  } ${60 + step * (i - 0.4)} 120 ${60 + step * i}`,
            )
            .join(" ")}
          stroke="var(--line-tone)"
          strokeWidth="1"
          style={{
            strokeDasharray: 3000,
            strokeDashoffset: shown ? 0 : 3000,
            transition: "stroke-dashoffset 3s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {nodes.map((n, i) => (
          <g
            key={n}
            style={{
              opacity: shown ? 1 : 0,
              transition: `opacity 1s ease ${400 + i * 380}ms`,
            }}
          >
            <circle
              cx="120"
              cy={60 + step * i}
              r="5"
              fill={i === nodes.length - 1 ? "var(--olive)" : "var(--paper)"}
              stroke="var(--charcoal)"
              strokeWidth="0.9"
            />
            <text
              x="152"
              y={65 + step * i}
              fill="var(--charcoal)"
              fontSize="13"
              letterSpacing="4"
              fontFamily="var(--font-sans-neutral)"
            >
              {n.toUpperCase()}
            </text>
            <text
              x="86"
              y={65 + step * i}
              textAnchor="end"
              fill="var(--smoke)"
              fontSize="10"
              letterSpacing="2"
              fontFamily="var(--font-sans-neutral)"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Nautilus spiral: the center word unfolds into a system. */
export function SpiralSystem({
  center = "Context",
  nodes,
}: {
  center?: string;
  nodes: string[];
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  const a = 26;
  const b = 0.17;
  const step = 0.7 * Math.PI;
  const lastGap = 0.55 * Math.PI;
  const t0 = 2 * Math.PI;

  const pts: string[] = [];
  const tMax = t0 + 3 * step + lastGap + 0.5;
  const tMin = 0; // spiral begins at the center dot and expands outward
  for (let t = tMin; t <= tMax; t += 0.04) {
    const r = a * Math.exp(b * t);
    pts.push(`${(r * Math.cos(t)).toFixed(2)} ${(r * Math.sin(t)).toFixed(2)}`);
  }

  const marks = nodes.map((n, i) => {
    const t =
      i === nodes.length - 1
        ? t0 + 3 * step + lastGap
        : t0 + (i + 1) * step;
    const r = a * Math.exp(b * t);
    const offset = i === 0 ? 34 : 18 + i * 2;
    return {
      n,
      x: r * Math.cos(t),
      y: r * Math.sin(t),
      lx: (r + offset) * Math.cos(t),
      ly: (r + offset) * Math.sin(t),
      cos: Math.cos(t),
    };
  });

  return (
    <div ref={ref} className="relative">
      <svg viewBox="-260 -225 640 405" className="h-auto w-full" fill="none" aria-hidden>
        <path
          d={`M${pts.join(" L")}`}
          stroke="var(--smoke)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
          style={{
            strokeDasharray: 9000,
            strokeDashoffset: shown ? 0 : 9000,
            transition: "stroke-dashoffset 4s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <circle cx={0} cy={0} r="3.5" fill="var(--smoke)" opacity={shown ? 0.8 : 0} style={{ transition: "opacity 900ms ease 300ms" }} />
        <text
          x={0}
          y={-6}
          textAnchor="middle"
          fill="var(--smoke)"
          fontSize="15"
          letterSpacing="4"
          fontFamily="var(--font-sans-neutral)"
          style={{ opacity: shown ? 1 : 0, transition: "opacity 900ms ease 300ms" }}
        >
          {center.toUpperCase()}
        </text>
        {marks.map((m, i) => (
          <g
            key={m.n}
            style={{
              opacity: shown ? 1 : 0,
              transition: `opacity 900ms ease ${500 + i * 320}ms`,
            }}
          >
            <circle
              cx={m.x}
              cy={m.y}
              r="3.5"
              fill={i === marks.length - 1 ? "var(--olive)" : "var(--paper)"}
              stroke="var(--smoke)"
              strokeWidth="1"
              opacity="0.9"
            />
            <text
              x={m.lx}
              y={m.ly + 6}
              textAnchor={m.cos > 0.2 ? "start" : m.cos < -0.2 ? "end" : "middle"}
              fontSize="15"
              letterSpacing="4"
              fill="var(--smoke)"
              fontFamily="var(--font-sans-neutral)"
            >
              {m.n.toUpperCase()}
            </text>
          </g>
        ))}

      </svg>
    </div>
  );
}

/** Orbital resolution of the line: idea → growth. */
export function OrbitMethod({ nodes }: { nodes: string[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.3);
  const cx = 300;
  const cy = 300;
  const r = 210;
  return (
    <div ref={ref}>
      <svg viewBox="-130 -30 860 660" className="w-full" fill="none" aria-hidden>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="var(--line-tone)"
          strokeWidth="1"
          style={{
            strokeDasharray: 1400,
            strokeDashoffset: shown ? 0 : 1400,
            transition: "stroke-dashoffset 3.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <circle cx={cx} cy={cy} r={r * 0.55} stroke="var(--line-tone)" strokeWidth="0.6" opacity="0.6" />
        {nodes.map((n, i) => {
          const a = (-90 + (360 / nodes.length) * i) * (Math.PI / 180);
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);
          const outer = 1.16;
          return (
            <g
              key={n}
              style={{
                opacity: shown ? 1 : 0,
                transition: `opacity 900ms ease ${500 + i * 320}ms`,
              }}
            >
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="var(--line-tone)"
                strokeWidth="0.5"
                opacity="0.7"
              />
              <circle cx={x} cy={y} r="5" fill="var(--paper)" stroke="var(--charcoal)" strokeWidth="0.9" />
              <text
                x={cx + r * outer * Math.cos(a)}
                y={cy + r * outer * Math.sin(a) + 4}
                textAnchor={Math.cos(a) > 0.2 ? "start" : Math.cos(a) < -0.2 ? "end" : "middle"}
                fill="var(--charcoal)"
                fontSize="12"
                letterSpacing="3.5"
                fontFamily="var(--font-sans-neutral)"
              >
                {n.toUpperCase()}
              </text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r="3.5" fill="var(--olive)" />
      </svg>
    </div>
  );
}