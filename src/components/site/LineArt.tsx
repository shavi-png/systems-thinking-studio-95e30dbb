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
  const t0 = 2 * Math.PI;
  // Custom spacing so the outer word stays at the end of the shell
  // and the previous word is raised slightly further from the end.
  const defaultGaps = [0.7 * Math.PI, 0.7 * Math.PI, 0.3 * Math.PI, 0.5 * Math.PI];
  const gaps = nodes.map((_, i) => defaultGaps[i] ?? 0.55 * Math.PI);
  const tNodes = nodes.map((_, i) => t0 + gaps.slice(0, i + 1).reduce((acc, v) => acc + v, 0));
  const tMax = tNodes[tNodes.length - 1]! + 0.05;

  const pts: string[] = [];
  // one extra inner turn so the shell reads as a nautilus, not a comma
  const tStart = t0 - 1.9 * Math.PI;
  for (let t = tStart; t <= tMax; t += 0.04) {
    const r = a * Math.exp(b * t);
    pts.push(`${(r * Math.cos(t)).toFixed(2)} ${(r * Math.sin(t)).toFixed(2)}`);
  }
  const startR = a * Math.exp(b * tStart);
  const startX = startR * Math.cos(tStart);
  const startY = startR * Math.sin(tStart);

  const marks = nodes.map((n, i) => {
    const t = tNodes[i]!;
    const r = a * Math.exp(b * t);
    // Keep labels close to the spiral line; clarity is the first dot, so it sits very near it.
    const offset = i === 0 ? 12 : i === nodes.length - 1 ? 14 : 18 + i * 2;
    return {
      n,
      x: r * Math.cos(t),
      y: r * Math.sin(t),
      lx: (r + offset) * Math.cos(t),
      ly: (r + offset) * Math.sin(t),
      cos: Math.cos(t),
    };
  });

  // Anchor the center word directly above the spiral's starting point.
  const centerX = startX;
  const centerY = startY - 9;

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
        <circle
          cx={startX}
          cy={startY}
          r="3.5"
          fill="var(--smoke)"
          opacity={shown ? 0.8 : 0}
          style={{ transition: "opacity 900ms ease 300ms" }}
        />
        <text
          x={centerX}
          y={centerY}
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
export function FiveForms({ className = "" }: { className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);
  const r = 62;
  const step = 46;
  const cx0 = 130;
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 520 400" className="h-auto w-full" fill="none" aria-hidden>
        <circle
          cx="300"
          cy="200"
          r="168"
          stroke="var(--line-tone)"
          strokeWidth="0.8"
          opacity={shown ? 0.8 : 0}
          style={{ transition: "opacity 1.4s ease" }}
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <g
            key={i}
            style={{
              opacity: shown ? 1 : 0,
              transition: `opacity 1.1s ease ${240 + i * 220}ms`,
            }}
          >
            <circle
              cx={cx0 + step * i}
              cy="200"
              r={r}
              stroke="var(--smoke)"
              strokeWidth="0.9"
              opacity="0.75"
            />
            <text
              x={cx0 + step * i}
              y="205"
              textAnchor="middle"
              fontSize="12"
              letterSpacing="2.5"
              fill="var(--smoke)"
              fontFamily="var(--font-sans-neutral)"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
        <circle cx="378" cy="122" r="3" fill="var(--olive)" opacity={shown ? 0.85 : 0} />
      </svg>
    </div>
  );
}

/** Schematic funnel lines — a quiet nod to the 45 frameworks. */
export function SpiralSteps({
  center = "Value",
  nodes,
}: {
  center?: string;
  nodes: string[];
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.18);
  const r2 = (v: number) => Math.round(v * 100) / 100;
  const a = 16;
  const b = 0.19;
  const t0 = 2.2 * Math.PI;
  const gap = 0.62 * Math.PI;
  const tNodes = nodes.map((_, i) => t0 + gap * (i + 1));
  const tMax = tNodes[tNodes.length - 1]! + 0.06;
  const tStart = t0 - 2 * Math.PI;

  const pts: string[] = [];
  for (let t = tStart; t <= tMax; t += 0.04) {
    const r = a * Math.exp(b * t);
    pts.push(`${r2(r * Math.cos(t))} ${r2(r * Math.sin(t))}`);
  }
  const startR = a * Math.exp(b * tStart);
  const startX = r2(startR * Math.cos(tStart));
  const startY = r2(startR * Math.sin(tStart));

  const marks = nodes.map((n, i) => {
    const t = tNodes[i]!;
    const r = a * Math.exp(b * t);
    const off = 16;
    const cos = Math.cos(t);
    return {
      n,
      i,
      x: r2(r * cos),
      y: r2(r * Math.sin(t)),
      lx: r2((r + off) * cos),
      ly: r2((r + off) * Math.sin(t)),
      cos,
    };
  });

  // frame the drawing tightly around curve + labels so nothing is clipped
  const xs = pts.map((s) => Number(s.split(" ")[0]));
  const ys = pts.map((s) => Number(s.split(" ")[1]));
  for (const m of marks) {
    const tw = (m.n.length + 7) * 11;
    if (m.cos > 0.2) xs.push(m.lx, m.lx + tw);
    else if (m.cos < -0.2) xs.push(m.lx, m.lx - tw);
    else xs.push(m.lx - tw / 2, m.lx + tw / 2);
    ys.push(m.ly + 12, m.ly - 12);
  }
  const pad = 24;
  const minX = r2(Math.min(...xs) - pad);
  const minY = r2(Math.min(...ys) - pad);
  const w = r2(Math.max(...xs) - Math.min(...xs) + pad * 2);
  const h = r2(Math.max(...ys) - Math.min(...ys) + pad * 2);

  return (
    <div ref={ref} className="relative">
      <svg viewBox={`${minX} ${minY} ${w} ${h}`} className="h-auto w-full" fill="none" aria-hidden>
        <path
          d={`M${pts.join(" L")}`}
          stroke="var(--smoke)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.65"
          style={{
            strokeDasharray: 12000,
            strokeDashoffset: shown ? 0 : 12000,
            transition: "stroke-dashoffset 4.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <circle cx={startX} cy={startY} r="3.5" fill="var(--olive)" opacity={shown ? 0.85 : 0} />
        <text
          x={startX}
          y={r2(startY - 12)}
          textAnchor="middle"
          fill="var(--smoke)"
          fontSize="13"
          letterSpacing="4"
          fontFamily="var(--font-sans-neutral)"
          style={{ opacity: shown ? 1 : 0, transition: "opacity 900ms ease 300ms" }}
        >
          {center.toUpperCase()}
        </text>
        {marks.map((m) => (
          <g
            key={m.n}
            style={{
              opacity: shown ? 1 : 0,
              transition: `opacity 900ms ease ${500 + m.i * 300}ms`,
            }}
          >
            <circle
              cx={m.x}
              cy={m.y}
              r="3.5"
              fill={m.i === marks.length - 1 ? "var(--olive)" : "var(--paper)"}
              stroke="var(--smoke)"
              strokeWidth="1"
            />
            <text
              x={m.lx}
              y={r2(m.ly + 5)}
              textAnchor={m.cos > 0.2 ? "start" : m.cos < -0.2 ? "end" : "middle"}
              fontSize="13"
              letterSpacing="3.5"
              fill="var(--smoke)"
              fontFamily="var(--font-sans-neutral)"
            >
              {String(m.i + 1).padStart(2, "0")} — {m.n.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function FunnelLines({ className = "" }: { className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  const cols = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 840 200" className="h-auto w-full" fill="none" aria-hidden>
        {cols.map((i) => {
          const x = 60 + i * 120;
          const w = 44 - i * 1.5;
          return (
            <g
              key={i}
              style={{
                opacity: shown ? 1 : 0,
                transition: `opacity 1s ease ${150 + i * 140}ms`,
              }}
            >
              {[0, 1, 2].map((k) => (
                <path
                  key={k}
                  d={`M${x - w + k * 6} ${40 + k * 34} L${x + w - k * 6} ${40 + k * 34} L${x + w - (k + 1) * 12} ${74 + k * 34} L${x - w + (k + 1) * 12} ${74 + k * 34} Z`}
                  stroke="var(--line-tone)"
                  strokeWidth="0.8"
                />
              ))}
              <line
                x1={x}
                y1="142"
                x2={x}
                y2="164"
                stroke="var(--line-tone)"
                strokeWidth="0.8"
              />
              <circle cx={x} cy="170" r="2.4" fill="var(--olive)" opacity="0.7" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

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
/** Five petals forming a single whole — the Marketing Set system. */
export function Rosette({
  center = ["Marketing", "Set"],
  nodes,
  className = "",
}: {
  center?: string[];
  nodes: string[];
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);
  const cx = 320;
  const cy = 320;
  const rx = 126;
  const ry = 248;
  const labelR = 262;
  const n = nodes.length;

  return (
    <div ref={ref} className={className}>
      <svg viewBox="-90 -24 820 692" className="h-auto w-full" fill="none" aria-hidden>
        {nodes.map((label, i) => {
          const rot = (360 / n) * i;
          return (
            <ellipse
              key={`p-${label}`}
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              transform={`rotate(${rot} ${cx} ${cy})`}
              stroke="var(--olive)"
              strokeWidth="1"
              opacity={shown ? 0.8 : 0}
              style={{
                strokeDasharray: 1200,
                strokeDashoffset: shown ? 0 : 1200,
                transition: `stroke-dashoffset 2.6s cubic-bezier(0.22,1,0.36,1) ${i * 180}ms, opacity 1.2s ease ${i * 180}ms`,
              }}
            />
          );
        })}
        {nodes.map((label, i) => {
          const a = (-90 + (360 / n) * i) * (Math.PI / 180);
          const x = Math.round((cx + labelR * Math.cos(a)) * 100) / 100;
          const y = Math.round((cy + labelR * Math.sin(a)) * 100) / 100;
          const cos = Math.cos(a);
          return (
            <g
              key={`l-${label}`}
              style={{
                opacity: shown ? 1 : 0,
                transition: `opacity 900ms ease ${700 + i * 200}ms`,
              }}
            >
              <text
                x={x}
                y={y + 4}
                textAnchor={cos > 0.25 ? "start" : cos < -0.25 ? "end" : "middle"}
                fontSize="15"
                letterSpacing="3.4"
                fill="var(--charcoal)"
                fontFamily="var(--font-sans-neutral)"
              >
                {label.toUpperCase()}
              </text>
            </g>
          );
        })}
        <g
          style={{
            opacity: shown ? 1 : 0,
            transition: "opacity 1.2s ease 1.5s",
          }}
        >
          {center.map((line, i) => (
            <text
              key={line}
              x={cx}
              y={cy + 4 + (i - (center.length - 1) / 2) * 40}
              textAnchor="middle"
              fontSize="38"
              fill="var(--charcoal)"
              fontFamily="var(--font-serif-editorial)"
            >
              {line}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}

/** Channels converging into one action — the funnel library. */
export function ChannelLanes({
  lanes,
  className = "",
}: {
  lanes: string[];
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  const endX = 860;
  const endY = 150;
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 940 300" className="h-auto w-full" fill="none" aria-hidden>
        {lanes.map((l, i) => {
          const y = 40 + i * ((220 - 40) / Math.max(1, lanes.length - 1));
          const d = `M150 ${y} H520 C660 ${y} 700 ${endY} ${endX} ${endY}`;
          return (
            <g key={l}>
              <text
                x="132"
                y={y + 4}
                textAnchor="end"
                fontSize="13"
                letterSpacing="3"
                fill="var(--smoke)"
                fontFamily="var(--font-sans-neutral)"
              >
                {l.toUpperCase()}
              </text>
              <path
                d={d}
                stroke="var(--line-tone)"
                strokeWidth="1"
                style={{
                  strokeDasharray: 1400,
                  strokeDashoffset: shown ? 0 : 1400,
                  transition: `stroke-dashoffset 2.4s cubic-bezier(0.22,1,0.36,1) ${i * 140}ms`,
                }}
              />
              <circle cx="150" cy={y} r="2.6" fill="var(--taupe)" opacity={shown ? 1 : 0} />
            </g>
          );
        })}
        <circle
          cx={endX}
          cy={endY}
          r="6"
          fill="var(--olive)"
          opacity={shown ? 0.9 : 0}
          style={{ transition: "opacity 900ms ease 1.6s" }}
        />
        <text
          x={endX}
          y={endY - 20}
          textAnchor="middle"
          fontSize="13"
          letterSpacing="3"
          fill="var(--charcoal)"
          fontFamily="var(--font-sans-neutral)"
          style={{ opacity: shown ? 1 : 0, transition: "opacity 900ms ease 1.7s" }}
        >
          ACTION
        </text>
      </svg>
    </div>
  );
}

/** Nautilus chambers: one spiral divided into five connected steps. */
export function ChamberSet({
  nodes,
  className = "",
}: {
  nodes: string[];
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);
  const a = 5.4;
  const b = 0.255;
  const r2 = (v: number) => Math.round(v * 100) / 100;
  const tEnd = 5.3 * Math.PI;
  const r = (t: number) => a * Math.exp(b * t);

  const pts: string[] = [];
  for (let t = 0; t <= tEnd; t += 0.03) {
    pts.push(`${r2(r(t) * Math.cos(t))} ${r2(r(t) * Math.sin(t))}`);
  }

  const septa = nodes.map((label, i) => {
    const t = tEnd - (nodes.length - 1 - i) * 0.52 * Math.PI;
    const cos = Math.cos(t);
    const sin = Math.sin(t);
    const rOut = r(t);
    const rIn = r(t - 2 * Math.PI);
    // every label sits right next to its own node dot, just outside it
    const rLab = rOut + 14;
    return {
      label,
      i,
      x1: r2(rIn * cos),
      y1: r2(rIn * sin),
      x2: r2(rOut * cos),
      y2: r2(rOut * sin),
      lx: r2(rLab * cos),
      ly: r2(rLab * sin),
      cos,
    };
  });

  // frame around curve + labels
  const xs = pts.map((s) => Number(s.split(" ")[0]));
  const ys = pts.map((s) => Number(s.split(" ")[1]));
  for (const s of septa) {
    const tw = (s.label.length + 4) * 10;
    if (s.cos > 0.2) xs.push(s.lx, s.lx + tw);
    else if (s.cos < -0.2) xs.push(s.lx, s.lx - tw);
    else xs.push(s.lx - tw / 2, s.lx + tw / 2);
    ys.push(s.ly + 14, s.ly - 14);
  }
  const pad = 18;
  const minX = r2(Math.min(...xs) - pad);
  const minY = r2(Math.min(...ys) - pad);
  const w = r2(Math.max(...xs) - Math.min(...xs) + pad * 2);
  const h = r2(Math.max(...ys) - Math.min(...ys) + pad * 2);

  return (
    <div ref={ref} className={className}>
      <svg viewBox={`${minX} ${minY} ${w} ${h}`} className="h-auto w-full" fill="none" aria-hidden>
        <path
          d={`M${pts.join(" L")}`}
          stroke="var(--charcoal)"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.75"
          style={{
            strokeDasharray: 6000,
            strokeDashoffset: shown ? 0 : 6000,
            transition: "stroke-dashoffset 3.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {septa.map((s) => (
          <g
            key={s.label}
            style={{
              opacity: shown ? 1 : 0,
              transition: `opacity 900ms ease ${700 + s.i * 200}ms`,
            }}
          >
            <line
              x1={s.x1}
              y1={s.y1}
              x2={s.x2}
              y2={s.y2}
              stroke="var(--olive)"
              strokeWidth="0.9"
              opacity="0.85"
            />
            <circle cx={s.x2} cy={s.y2} r="2.6" fill="var(--olive)" />
            <text
              x={s.lx}
              y={r2(s.ly + 4)}
              textAnchor={s.cos > 0.2 ? "start" : s.cos < -0.2 ? "end" : "middle"}
              fontSize="12"
              letterSpacing="3.2"
              fill="var(--charcoal)"
              fontFamily="var(--font-sans-neutral)"
            >
              {String(s.i + 1).padStart(2, "0")} {s.label.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Concentric process orbit — the strategy cycle, six stations around one core. */
export function ProcessOrbit({
  steps,
}: {
  steps: { n: string; label: string; note: string }[];
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);

  // One continuous nautilus spiral; each step sits on it, outward from the centre.
  const a = 6;
  const turns = 2.6;
  const tMax = Math.PI * 2 * turns;
  const b = Math.log(175 / a) / tMax;


  const pt = (t: number) => {
    const r = a * Math.exp(b * t);
    return {
      x: Number((r * Math.cos(t - Math.PI / 2)).toFixed(2)),
      y: Number((r * 0.82 * Math.sin(t - Math.PI / 2)).toFixed(2)),
    };
  };

  const path = (() => {
    const pts: string[] = [];
    for (let i = 0; i <= 460; i++) {
      const { x, y } = pt((i / 460) * tMax);
      pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return `M${pts.join("L")}`;
  })();

  // steps spread evenly around the outer turn so labels never collide
  const nodes = steps.map((s, i) => {
    const t = tMax - Math.PI * 2 + (i * Math.PI * 2) / steps.length;
    const p = pt(t);
    const right = p.x >= -4;
    return { ...s, ...p, right };
  });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[46rem]">
      <div className="relative aspect-[7/6] w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--sage) 82%, transparent), transparent 72%)",
            opacity: shown ? 0.9 : 0,
            transition: "opacity 1.8s ease 150ms",
          }}
        />
        <svg
          viewBox="-250 -215 500 430"
          className="absolute inset-0 h-full w-full overflow-visible"
          fill="none"
        >
          <defs>
            <linearGradient id="orbitInk" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--olive)" stopOpacity="0.25" />
              <stop offset="55%" stopColor="var(--olive)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--charcoal)" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          <path
            d={path}
            stroke="url(#orbitInk)"
            strokeWidth="1.4"
            strokeLinecap="round"
            style={{
              strokeDasharray: 3200,
              strokeDashoffset: shown ? 0 : 3200,
              transition: "stroke-dashoffset 3s cubic-bezier(0.22,1,0.36,1) 150ms",
            }}
          />

          {/* back-and-forth motion, drawn into the composition */}
          <path
            d="M -238 -150 C -208 -126 -178 -126 -150 -148"
            stroke="var(--charcoal)"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            opacity={shown ? 0.4 : 0}
            style={{ transition: "opacity 1.2s ease 1.3s" }}
          />
          <path
            d="M -150 -148 l -9 5 m 9 -5 l -7 -8"
            stroke="var(--charcoal)"
            strokeWidth="0.9"
            opacity={shown ? 0.45 : 0}
            style={{ transition: "opacity 1.2s ease 1.5s" }}
          />
          <path
            d="M -238 -150 l 9 5 m -9 -5 l 7 -8"
            stroke="var(--charcoal)"
            strokeWidth="0.9"
            opacity={shown ? 0.45 : 0}
            style={{ transition: "opacity 1.2s ease 1.5s" }}
          />

          {nodes.map((n, i) => (
            <g
              key={n.label}
              opacity={shown ? 1 : 0}
              style={{ transition: `opacity 900ms ease ${700 + i * 150}ms` }}
            >
              <line
                x1={n.x}
                y1={n.y}
                x2={n.x + (n.right ? 26 : -26)}
                y2={n.y}
                stroke="var(--olive)"
                strokeWidth="0.7"
                opacity="0.55"
              />
              <circle cx={n.x} cy={n.y} r="4.4" fill="var(--background)" />
              <circle cx={n.x} cy={n.y} r="2.9" fill="var(--olive)" />
            </g>
          ))}

          <circle cx="0" cy="0" r="3.4" fill="var(--charcoal)" opacity={shown ? 0.85 : 0} />
        </svg>

        {nodes.map((n, i) => (
          <div
            key={n.label}
            className={`absolute w-[8.5rem] sm:w-[10.5rem] ${n.right ? "text-left" : "text-right"}`}
            style={{
              left: `calc(50% + ${(((n.x + (n.right ? 30 : -30)) / 500) * 100).toFixed(2)}%)`,
              top: `calc(50% + ${((n.y / 430) * 100).toFixed(2)}% - 1.1rem)`,
              transform: n.right ? "none" : "translateX(-100%)",
              opacity: shown ? 1 : 0,
              transition: `opacity 900ms ease ${800 + i * 150}ms`,
            }}
          >
            <p className="label-xs !tracking-[0.2em] !text-charcoal">
              <span className="text-olive">{n.n}</span> {n.label}
            </p>
            <p className="mt-1 text-[0.7rem] leading-snug text-charcoal/55">{n.note}</p>
          </div>
        ))}

        <p
          className="font-serif-editorial absolute left-[2%] top-[13%] w-[11rem] text-[0.95rem] italic leading-snug text-charcoal/70"
          style={{ opacity: shown ? 1 : 0, transition: "opacity 1.2s ease 1.7s" }}
        >
          The process can move back and forth.
        </p>
      </div>
    </div>
  );
}


