import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const baseUrl = "http://localhost:5173";
const pages = [
  { name: "homepage", path: "/" },
  { name: "list", path: "/explore" },
  { name: "product-detail", path: "/preview/404758" },
];

test("Screenshot pages", async ({ page }, workerInfo) => {
  for (const { name, path } of pages) {
    const browserName = workerInfo.project.name;
    await page.goto(`${baseUrl}${path}`);
    await argosScreenshot(page, `${name}-${browserName}`, { fullPage: false });
  }
});
