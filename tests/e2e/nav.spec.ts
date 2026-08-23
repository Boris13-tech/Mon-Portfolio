import { test, expect } from "@playwright/test";
const routes = ["/", "/about", "/projects", "/certifications", "/speaking", "/community", "/contributions", "/contact"];
for (const r of routes) {
  test(`renders ${r}`, async ({ page }) => {
    await page.goto(r);
    await expect(page.locator("main")).toBeVisible();
  });
}
test("project detail loads", async ({ page }) => {
  await page.goto("/projects/secureflow");
  await expect(page.getByRole("heading", { name: /SecureFlow/ })).toBeVisible();
});
