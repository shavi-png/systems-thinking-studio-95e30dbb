export function Footer() {
  return (
    <footer className="rule-thin bg-sand/40">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="label-xs !text-charcoal !tracking-[0.3em]">Vita Shablii</p>
            <p className="mt-5 font-serif-editorial text-2xl italic text-charcoal">
              clarity before complexity.
            </p>
            <p className="label-xs mt-8">Strategy × Marketing × Product × AI</p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="label-xs mb-2">Index</p>
            {["About", "Marketing Set", "Syntez", "Consulting"].map((l) => (
              <a
                key={l}
                href="#solutions"
                className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
              >
                {l}
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
            <div className="label-xs mt-8 flex flex-col gap-2 !tracking-[0.14em]">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Legal Disclaimer</span>
            </div>
          </div>
        </div>

        <div className="rule-thin mt-16 flex flex-col justify-between gap-3 pt-6 sm:flex-row">
          <p className="label-xs !tracking-[0.14em]">Hong Kong</p>
          <p className="label-xs !tracking-[0.14em]">© 2026 Vita Shablii</p>
        </div>
      </div>
    </footer>
  );
}