import { chromium } from "@playwright/test";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import sharp from "sharp";

const baseURL = process.env.BASE_URL ?? "http://localhost:3000";
const source = process.env.SOURCE_DIR ?? "D:/yhoccotruyen/yhoccotruyen/103.90.225.190";
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
await mkdir("artifacts", { recursive: true });
const comparisons = [];
try {
  for (const [name, viewport] of [["desktop", { width: 1440, height: 1000 }], ["mobile", { width: 390, height: 844 }]]) {
    const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
    const reference = await context.newPage();
    await reference.route("**/source-assets/_next/static/chunks/*.css", async route => {
      const fontStyles = route.request().url().includes("05fchm54jvekq");
      const css = (await readFile(`artifacts/reference-assets/${fontStyles ? "fonts" : "layout"}.css`, "utf8"))
        .replaceAll("/source-assets/_next/static/media/", "/fonts/");
      await route.fulfill({ contentType: "text/css", body: css });
    });
    let html = await readFile(`${source}/index.html`, "utf8");
    // Keep the source's inline streaming completion scripts; omit its remote app bundles.
    html = html.replace(/<script\b[^>]*\bsrc="[^"]*"[^>]*>[\s\S]*?<\/script>/g, "")
      .replaceAll("http://103.90.225.190/_next/", `${baseURL}/source-assets/_next/`)
      .replaceAll("http://103.90.225.190", baseURL);
    await reference.route(`${baseURL}/__reference`, route => route.fulfill({ contentType: "text/html; charset=utf-8", body: html }));
    await reference.goto(`${baseURL}/__reference`, { waitUntil: "networkidle" });
    const current = await context.newPage();
    await current.goto(baseURL, { waitUntil: "networkidle" });
    for (const page of [reference, current]) {
      await page.evaluate(async () => {
        document.querySelectorAll('img[loading="lazy"]').forEach(image => { image.loading = "eager"; });
        await document.fonts.ready;
        await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
      });
    }
    const [sourceScreenshot, currentScreenshot] = await Promise.all([
      reference.screenshot({ path: `artifacts/reference-${name}.png`, fullPage: true, animations: "disabled" }),
      current.screenshot({ path: `artifacts/home-${name}.png`, fullPage: true, animations: "disabled" }),
    ]);
    const sourceHeight = await reference.evaluate(() => document.documentElement.scrollHeight);
    const currentHeight = await current.evaluate(() => document.documentElement.scrollHeight);
    const captureHeight = Math.min(viewport.height, sourceHeight, currentHeight);
    const a = await sharp(await reference.screenshot()).extract({ left: 0, top: 0, width: viewport.width, height: captureHeight }).removeAlpha().raw().toBuffer();
    const b = await sharp(await current.screenshot()).extract({ left: 0, top: 0, width: viewport.width, height: captureHeight }).removeAlpha().raw().toBuffer();
    let different = 0;
    for (let i = 0; i < a.length; i += 3) if (Math.max(Math.abs(a[i] - b[i]), Math.abs(a[i + 1] - b[i + 1]), Math.abs(a[i + 2] - b[i + 2])) > 12) different++;
    const commonHeight = Math.min(sourceHeight, currentHeight);
    const fullA = await sharp(sourceScreenshot).extract({ left: 0, top: 0, width: viewport.width, height: commonHeight }).removeAlpha().raw().toBuffer();
    const fullB = await sharp(currentScreenshot).extract({ left: 0, top: 0, width: viewport.width, height: commonHeight }).removeAlpha().raw().toBuffer();
    let fullDifferent = 0;
    for (let i = 0; i < fullA.length; i += 3) if (Math.max(Math.abs(fullA[i] - fullB[i]), Math.abs(fullA[i + 1] - fullB[i + 1]), Math.abs(fullA[i + 2] - fullB[i + 2])) > 12) fullDifferent++;
    const measurements = async page => page.evaluate(() => ["html", "body", "header", "header > div", "main section:nth-of-type(2) > div", "main section:nth-of-type(2) p", "main section:nth-of-type(2) > div > div > div > div", ...Array.from({ length: 10 }, (_, index) => `main > section:nth-of-type(${index + 1})`), "footer"].map(selector => {
      const element = document.querySelector(selector), style = getComputedStyle(element), rect = element.getBoundingClientRect();
      return { selector, font: style.fontFamily, size: style.fontSize, width: rect.width, height: rect.height, top: rect.top, paddingLeft: style.paddingLeft, spacing: style.getPropertyValue("--spacing"), breakpoint: style.getPropertyValue("--breakpoint-desktop") };
    }));
    comparisons.push({ name, viewport, sourceHeight, currentHeight, aboveFoldPixelDifferencePercent: +(different / (viewport.width * captureHeight) * 100).toFixed(3), fullPagePixelDifferencePercent: +(fullDifferent / (viewport.width * commonHeight) * 100).toFixed(3), source: await measurements(reference), current: await measurements(current) });
    await context.close();
  }
  await writeFile("artifacts/source-comparison.json", JSON.stringify(comparisons, null, 2));
  console.log(JSON.stringify(comparisons.map(result => Object.fromEntries(Object.entries(result).filter(([key]) => !["source", "current"].includes(key)))), null, 2));
} finally { await browser.close(); }
