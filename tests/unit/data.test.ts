import { describe, it, expect } from "vitest";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";

describe("data integrity", () => {
  it("every certification has a valid status", () => {
    for (const c of certifications) {
      expect(["earned", "in-progress", "planned", "needs-verification"]).toContain(c.status);
    }
  });
  it("no certification is silently earned without a verification_url", () => {
    for (const c of certifications) {
      if (c.status === "earned") expect(c.verification_url, `${c.code} marked earned needs verification_url`).toBeTruthy();
    }
  });
  it("project slugs are unique", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
