import { expect, test } from "@playwright/test";

test("add to cart", async ({ page }) => {
  await page.goto("/cart");
  await page.getByRole("link", { name: "Explore", exact: true }).click();
  await page.getByRole("button", { name: "Add to cart" }).nth(1).click();
  await page.getByRole("link", { name: "cart" }).click();
  await expect(page.locator("body")).toHaveText(
    /^The Air Jordan 1 Retro High OG 'Crimson Tint'/,
    { timeout: 100 },
  );
});
