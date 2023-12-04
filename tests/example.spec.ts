import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const baseUrl = "http://localhost:5173";
const pages = [
  { name: "homepage", path: "/" },
  { name: "list", path: "/explore" },
  { name: "product-detail", path: "/preview/404758" },
  { name: "pricing", path: "/pricing" },
];

test("Screenshot pages", async ({ page, browserName }) => {
  for (const { name, path } of pages) {
    await page.goto(`${baseUrl}${path}`);
    await argosScreenshot(page, `${name}-${browserName}`);
  }
});
