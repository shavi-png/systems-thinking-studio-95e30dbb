import shellHero from "@/assets/shell-hero.jpg.asset.json";

/**
 * Shared backdrop for dark "rooms": one large nautilus at the centre, lit by a
 * broad, low-contrast wash instead of a small bright core (which read as a
 * hot blob against the umber ground).
 */
export function ShellBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* broad, diffuse wash — wide and dim, so there is no hot centre */}
      <div className="absolute left-1/2 top-1/2 h-[190%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] [background-image:radial-gradient(closest-side,oklch(0.95_0.012_120/0.13),oklch(0.93_0.01_120/0.05)_55%,transparent_100%)] md:w-[95%]" />
      {/* the shell itself: kept within the centre of the wash, smaller and softer */}
      <img
        src={shellHero.url}
        alt=""
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[78%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] select-none opacity-[0.24] mix-blend-soft-light [filter:grayscale(1)_brightness(1.2)_contrast(0.9)] [mask-image:radial-gradient(closest-side,black_42%,transparent_92%)] md:h-[115%] md:opacity-[0.28]"
      />
    </div>
  );
}
