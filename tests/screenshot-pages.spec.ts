import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const pages = [
  { name: "homepage", path: "/" },
  { name: "list", path: "/explore" },
  { name: "product-detail", path: "/preview/485842" },
];

test("Screenshot pages", async ({ page }, workerInfo) => {
  for (const { name, path } of pages) {
    const browserName = workerInfo.project.name;
    await page.goto(path);
    await argosScreenshot(page, name, {
      fullPage: false,
      viewports: [
        { width: 390, height: 844, orientation: "landscape" },
        { width: 1440, height: 1080 },
      ],
    });
  }
});
