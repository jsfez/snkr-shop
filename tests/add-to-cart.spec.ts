import { test } from "@playwright/test";

test("add to cart", async ({ page }, workerInfo) => {
  await page.goto("/explore");
  await page.click("text=preview");
  await page.click("button#addToCartButton");
});
