import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { counterpart, localize, useLang } from "@/lib/lang";

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

const copy = {
  en: {
    nav: [
      { label: "Get to know me", href: "/about" },
      { label: "Syntez", href: "/#solutions" },
      { label: "Strategic Partnership", href: "/strategic-partnership" },
    ],
    set: "Marketing Set",
    versions: [
      { label: "Marketing Set", href: "/marketing-set" },
      { label: "Marketing Set 2", href: "/marketing-set-2", tag: "UA" },
    ],
    choose: "Choose a solution",
    menu: "Menu",
    close: "Close",
    home: "Vita Shablii — go to homepage",
  },
  uk: {
    nav: [
      { label: "Про мене", href: "/about" },
      { label: "Syntez", href: "/#solutions" },
      { label: "Стратегічне партнерство", href: "/strategic-partnership" },
    ],
    set: "Маркетинг-сет",
    versions: [
      { label: "Маркетинг-сет", href: "/marketing-set" },
      { label: "Маркетинг-сет 2", href: "/marketing-set-2", tag: "NEW" },
    ],
    choose: "Обрати рішення",
    menu: "Меню",
    close: "Закрити",
    home: "Віта Шаблій — на головну",
  },
} as const;

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const { pathname } = useLocation();
  const c = copy[lang];
  const L = (h: string) => localize(h, lang);
  const nav = c.nav.map((n) => ({ ...n, href: L(n.href) }));
  const marketingSetVersions: { label: string; href: string; tag?: string }[] = c.versions.map((v) => ({ ...v, href: L(v.href) }));
  const langSwitch = (
    <a
      href={counterpart(pathname)}
      className="label-xs shrink-0 rounded-full border border-charcoal/25 px-3.5 py-1.5 !tracking-[0.18em] transition-colors hover:border-olive hover:!text-charcoal"
      title={lang === "en" ? "Українська версія" : "English version"}
    >
      {lang === "en" ? "UA" : "EN"}
    </a>
  );

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
          to={lang === "uk" ? "/ua" : "/"}
          className="inline-flex items-center text-charcoal transition-colors hover:text-olive"
          aria-label={c.home}
        >
          <SpiralLogo className="h-11 w-11" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.slice(0, 1).map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="label-xs transition-colors duration-300 hover:!text-charcoal"
            >
              {n.label}
            </a>
          ))}

          {/* Marketing Set — dropdown with both versions */}
          <div className="group relative">
            <a
              href={L("/marketing-set")}
              className="label-xs inline-flex items-center gap-1.5 transition-colors duration-300 hover:!text-charcoal"
              aria-haspopup="true"
            >
              {c.set}
              <span aria-hidden className="text-[0.6em] transition-transform duration-300 group-hover:translate-y-0.5">
                ▾
              </span>
            </a>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-300 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="rule-thin min-w-[13rem] bg-ivory/95 px-5 py-3 shadow-[0_1px_24px_rgba(28,28,24,0.08)] backdrop-blur-[2px]">
                {marketingSetVersions.map((v) => (
                  <a
                    key={v.href}
                    href={v.href}
                    className="flex items-center justify-between gap-4 py-2 text-sm text-charcoal/70 transition-colors hover:text-charcoal"
                  >
                    <span>{v.label}</span>
                    {v.tag && (
                      <span className="label-xs !tracking-[0.14em] rounded-full border border-charcoal/25 px-2 py-0.5">
                        {v.tag}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {nav.slice(1).map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="label-xs transition-colors duration-300 hover:!text-charcoal"
            >
              {n.label}
            </a>
          ))}
          <a href={L("/#solutions")} className="link-editorial !text-[0.6875rem]">
            {c.choose} <span aria-hidden>→</span>
          </a>
          {langSwitch}
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
        {langSwitch}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="label-xs shrink-0 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? c.close : c.menu}
        </button>
        </div>
      </div>

      {open && (
        <div className="rule-thin bg-ivory px-6 pb-10 pt-6 lg:hidden">
          <ul className="flex flex-col gap-6">
            {nav.slice(0, 1).map((n) => (
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
            <li>
              <p className="display-md !text-[2rem]">{c.set}</p>
              <ul className="mt-3 flex flex-col gap-3 border-l border-charcoal/20 pl-5">
                {marketingSetVersions.map((v) => (
                  <li key={v.href}>
                    <a
                      href={v.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-base text-charcoal/70 transition-colors hover:text-charcoal"
                    >
                      {v.label}
                      {v.tag && (
                        <span className="label-xs !tracking-[0.14em] rounded-full border border-charcoal/25 px-2 py-0.5 text-[0.6rem]">
                          {v.tag}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {nav.slice(1).map((n) => (
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
            href={L("/#solutions")}
            onClick={() => setOpen(false)}
            className="link-editorial mt-10"
          >
            {c.choose} <span aria-hidden>→</span>
          </a>
        </div>
      )}
    </header>
  );
}
