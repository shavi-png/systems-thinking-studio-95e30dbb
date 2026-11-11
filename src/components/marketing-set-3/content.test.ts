import { describe, expect, it } from "vitest";
import { offer3, assistants3, stages } from "./content";

describe("Marketing Set 3 offer", () => {
  it("costs 39 €", () => expect(offer3.priceEUR).toBe(39));
  it("bundle of all 7 extra assistants costs 35 €", () => expect(offer3.allSevenAssistantsEUR).toBe(35));
  it("gives 180 days of access", () => expect(offer3.accessDays).toBe(180));
  it("has exactly 8 assistants with only Action-навігатор included", () => {
    expect(assistants3).toHaveLength(8);
    expect(assistants3.filter((a) => a.included).map((a) => a.name)).toEqual(["Action-навігатор"]);
  });
  it("has six strategy stages", () => expect(stages).toHaveLength(6));
  it("has no invented payment link", () => expect(offer3.checkoutUrl).toBe(""));
});
