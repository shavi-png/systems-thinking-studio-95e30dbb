const links = [
  { label: "Get to know me →", href: "/about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Method", href: "/#method" },
  { label: "Contact", href: "mailto:hello@vitashablii.com" },
];

export function Footer() {
  return (
    <footer className="rule-thin bg-sand/40">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="label-xs !text-charcoal !tracking-[0.3em]">Vita Shablii</p>
            <p className="mt-5 font-serif-editorial text-2xl italic text-charcoal">
              clarity before complexity.
            </p>
            <div className="label-xs mt-8 space-y-2">
              <p>
                <a
                  href="mailto:hello@vitashablii.com"
                  className="underline-offset-4 hover:underline"
                >
                  hello@vitashablii.com
                </a>
              </p>
              <p>Hong Kong</p>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="label-xs mb-2">Index</p>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="label-xs mb-2">Elsewhere</p>
            <a
              href="https://instagram.com"
              className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
            >
              Instagram ↗
            </a>
            <a
              href="https://linkedin.com"
              className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="rule-thin mt-14 flex flex-col justify-between gap-4 pt-6 sm:flex-row">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.65rem] uppercase tracking-[0.12em] text-charcoal/50">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Legal Disclaimer</span>
          </div>
          <p className="label-xs !tracking-[0.14em]">© 2026 Vita Shablii</p>
        </div>
      </div>
    </footer>
  );
}
