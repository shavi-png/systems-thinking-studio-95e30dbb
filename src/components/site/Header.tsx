import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

function SpiralLogo({ className = "" }: { className?: string }) {
  // same logarithmic shell as the section 3 spiral, three full turns, no labels
  const a = 26;
  const b = 0.17;
  const tMax = 6 * Math.PI;
  const pts: string[] = [];
  for (let t = 0; t <= tMax; t += 0.05) {
    const r = a * Math.exp(b * t);
    pts.push(`${(r * Math.cos(t)).toFixed(2)} ${(r * Math.sin(t)).toFixed(2)}`);
  }
  const rMax = a * Math.exp(b * tMax);
  const pad = 4;
  const size = (rMax + pad) * 2;
  return (
    <svg
      className={className}
      viewBox={`${-(rMax + pad)} ${-(rMax + pad)} ${size} ${size}`}
      fill="none"
      aria-hidden
    >
      <path
        d={`M${pts.join(" L")}`}
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}

const nav = [
  { label: "Get to know me", href: "/about" },
  { label: "Products", href: "/marketing-set" },
  { label: "Syntez", href: "/#solutions" },
  { label: "Consulting", href: "/#solutions" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        solid ? "bg-ivory/88 backdrop-blur-[2px]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-5 md:px-10">
        <Link
          to="/"
          className="inline-flex items-center text-charcoal transition-colors hover:text-olive"
          aria-label="Vita Shablii — go to homepage"
        >
          <SpiralLogo className="h-11 w-11" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="label-xs transition-colors duration-300 hover:!text-charcoal"
            >
              {n.label}
            </a>
          ))}
          <a href="/#solutions" className="link-editorial !text-[0.6875rem]">
            Choose a solution <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            className="label-xs shrink-0 rounded-full border border-charcoal/25 px-3.5 py-1.5 !tracking-[0.18em] transition-colors hover:border-olive hover:!text-charcoal"
            title="Ukrainian version — coming soon"
          >
            UA
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="label-xs shrink-0 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="rule-thin bg-ivory px-6 pb-10 pt-6 lg:hidden">
          <ul className="flex flex-col gap-6">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="display-md !text-[2rem]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#solutions"
            onClick={() => setOpen(false)}
            className="link-editorial mt-10"
          >
            Choose a solution <span aria-hidden>→</span>
          </a>
        </div>
      )}
    </header>
  );
}
