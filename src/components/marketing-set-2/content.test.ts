import { describe, expect, it } from "vitest";
import { offer, assistants, steps } from "./content";

describe("supplied Marketing Set 2 offer", () => {
  it("costs 589 UAH", () => { expect(offer.priceUAH).toBe(589); });
  it("provides lifetime access", () => { expect(offer.lifetimeAccess).toBe(true); });
  it("requires paid Claude", () => { expect(offer.requiresPaidClaude).toBe(true); });
  it("has five strategy steps before the passport", () => { expect(steps.slice(0, offer.strategySteps).map(s => s.n)).toEqual(["01", "02", "03", "04", "05"]); });
  it("includes the copywriter", () => { expect(assistants.find(a => a.title === "Копірайтер")?.price).toBe(0); });
  it.each([["Reels і TikTok",7],["Реклама",3],["Email",10],["Прямі продажі",5],["Контент-план",3],["Лендинг",7],["Лід-магніт",5]])("prices %s at %s EUR", (title,price) => { expect(assistants.find(a => a.title === title)?.price).toBe(price); });
  it("prices the full bundle at 22 EUR", () => { expect(offer.bundleEUR).toBe(22); });
  it("does not invent a checkout URL", () => { expect(offer.checkoutUrl).toBe(""); });
});