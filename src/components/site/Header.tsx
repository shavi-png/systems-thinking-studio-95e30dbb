import { useEffect, useState } from "react";

function SpiralLogo({ className = "" }: { className?: string }) {
  const pts: string[] = [];
  for (let t = 0; t <= 4.2 * Math.PI; t += 0.18) {
    const r = 2.4 * Math.exp(0.32 * t);
    pts.push(`${(36 + r * Math.cos(t)).toFixed(2)} ${(36 + r * Math.sin(t)).toFixed(2)}`);
  }
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d={`M${pts.join(" L")}`}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="36" r="2.5" fill="currentColor" />
    </svg>
  );
}

const nav = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#solutions" },
  { label: "Syntez", href: "#solutions" },
  { label: "Consulting", href: "#solutions" },
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
        <a href="#top" className="label-xs min-w-0 !text-charcoal !tracking-[0.3em]">
          Vita Shablii
        </a>

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
          <a href="#solutions" className="link-editorial !text-[0.6875rem]">
            Choose a solution <span aria-hidden>→</span>
          </a>
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
            href="#solutions"
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