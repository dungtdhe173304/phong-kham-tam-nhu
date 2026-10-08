import { chromium, expect } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const baseURL = process.env.BASE_URL ?? "http://localhost:3000";
const executablePath = process.env.CHROME_PATH ?? [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find(path => existsSync(path));
const browser = await chromium.launch({ executablePath, headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce" });
const page = await context.newPage();
const errors = [];
page.on("pageerror", error => errors.push(error.message));
page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
const failures = [];
const sourceRequests = [];
page.on("request", request => {
  if (/103\.90\.225\.190|\/source-assets\/|05fchm54jvekq\.css|0oclupisgbcx7\.css/.test(request.url())) sourceRequests.push(request.url());
});
page.on("response", response => { if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
await mkdir("artifacts", { recursive: true });

try {
  const pages = JSON.parse(await readFile("src/data/page-metadata.json", "utf8"));
  for (const route of Object.keys(pages)) {
    const response = await page.goto(baseURL + route, { waitUntil: "networkidle" });
    expect(response.status(), route).toBe(200);
    await page.evaluate(async () => {
      await document.fonts.ready;
      document.querySelectorAll('img[loading="lazy"]').forEach(image => { image.loading = "eager"; });
      await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
    });
    const brokenImages = await page.locator("img").evaluateAll(images => images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.src));
    expect(brokenImages, `images on ${route}`).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1), `horizontal overflow on ${route}`).toBe(false);
  }

  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    document.querySelectorAll('img[loading="lazy"]').forEach(image => { image.loading = "eager"; });
    await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
  });
  await page.screenshot({ path: "artifacts/home-desktop.png", fullPage: true });
  const healthSearch = page.getByPlaceholder("Tìm kiếm theo tình trạng bệnh lý", { exact: true });
  await healthSearch.fill("Trị liệu");
  await expect(healthSearch).toHaveValue("Trị liệu");
  await healthSearch.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog").getByRole("link").first()).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  const hero = page.locator("main section").first();
  await hero.getByRole("button", { name: "Slide 2", exact: true }).click();
  await expect(hero.getByRole("button", { name: "Slide 2", exact: true })).toHaveAttribute("aria-current", "true");
  const faq = page.getByRole("button", { name: "Bao lâu nên thực hiện một lần để chăm sóc cơ thể?", exact: true });
  await faq.click();
  await expect(faq).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText("Tùy thuộc vào mức độ căng cơ", { exact: false })).toBeVisible();
  await page.locator("header").getByRole("button", { name: "Đăng nhập", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("dialog").getByLabel("Email", { exact: true }).fill("preview@example.com");
  await page.getByRole("dialog").getByLabel("Mật khẩu", { exact: true }).fill("preview123");
  await page.getByRole("dialog").getByRole("button", { name: "Đăng nhập", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Chức năng tài khoản");
  await expect(page.getByRole("dialog").getByRole("heading", { name: "Đăng nhập", exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);

  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of Object.keys(pages)) {
    const response = await page.goto(baseURL + route, { waitUntil: "networkidle" });
    expect(response.status(), `mobile ${route}`).toBe(200);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1), `mobile overflow on ${route}`).toBe(false);
  }
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    document.querySelectorAll('img[loading="lazy"]').forEach(image => { image.loading = "eager"; });
    await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
  });
  await page.screenshot({ path: "artifacts/home-mobile.png", fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1), "mobile horizontal overflow").toBe(false);
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await expect(page.getByRole("navigation", { name: "Điều hướng di động" })).toBeVisible();
  await page.getByRole("navigation", { name: "Điều hướng di động" }).getByRole("link", { name: "Giới thiệu", exact: true }).click();
  await page.waitForURL("**/gioi-thieu");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  const legacy = await page.goto(baseURL + "/dich-vu/tri-lieu-theo-vung.html", { waitUntil: "networkidle" });
  expect(legacy.status()).toBe(200);
  await page.getByLabel("Họ và Tên", { exact: true }).fill("Preview");
  await page.getByLabel("Số điện thoại", { exact: true }).fill("0901234567");
  await page.getByRole("button", { name: "Thăm khám miễn phí", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Chức năng gửi lịch hẹn");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.goto(baseURL + "/lien-he", { waitUntil: "networkidle" });
  await page.getByLabel("Họ và Tên", { exact: true }).fill("Preview");
  await page.getByLabel("Số điện thoại", { exact: true }).fill("0901234567");
  await page.getByRole("button", { name: "Liên hệ với chúng tôi", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Chức năng gửi liên hệ");
  await page.getByRole("searchbox", { name: "Tìm chi nhánh gần nhất", exact: true }).fill("cau dien");
  await expect(page.getByRole("button", { name: "Xem bản đồ Chi nhánh Cầu Diễn - Hà Nội", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Xem bản đồ Chi nhánh Hoằng Hóa - Thanh Hóa", exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: "Xem bản đồ Chi nhánh Cầu Diễn - Hà Nội", exact: true }).click();
  await expect(page.locator('iframe[title="Bản đồ Chi nhánh Cầu Diễn - Hà Nội"]')).toHaveCount(1);
  expect(errors, "browser runtime errors").toEqual([]);
  expect(failures, "failed asset requests").toEqual([]);
  expect(sourceRequests, "requests to the previous application's source assets").toEqual([]);
  const report = { routes: Object.keys(pages).length, desktop: "1440x1000", mobile: "390x844", errors, failures, sourceRequests, checks: ["route rendering", "local images", "overflow", "health search input and results", "hero carousel", "FAQ", "auth dialog", "mobile navigation", "legacy URL", "booking form", "contact form", "branch search and selection", "no source application requests"] };
  await writeFile(resolve("artifacts/browser-report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
