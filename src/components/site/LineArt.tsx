import { useReveal } from "@/hooks/use-reveal";

/** The abstract line that enters the hero from outside the viewport. */
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

/** Orbital resolution of the line: idea → growth. */
export function OrbitMethod({ nodes }: { nodes: string[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.3);
  const cx = 300;
  const cy = 300;
  const r = 210;
  return (
    <div ref={ref}>
      <svg viewBox="0 0 600 600" className="w-full" fill="none" aria-hidden>
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