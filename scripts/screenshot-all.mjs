import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const pages = [
  { name: 'index', path: '/' },
  { name: 'contact', path: '/contact' },
  { name: 'seo', path: '/seo' },
  { name: 'google-ads', path: '/google-ads' },
  { name: 'meta-advertising', path: '/meta-advertising' },
  { name: 'webdesign', path: '/webdesign' },
  { name: 'google-tag-manager', path: '/google-tag-manager' },
  { name: 'ai-consulting', path: '/ai-consulting' },
  { name: 'vibecoding', path: '/vibecoding' },
  { name: 'workshops', path: '/workshops' },
  { name: 'portfolio', path: '/portfolio' }
];

const screenshotDir = './screenshots';

async function takeScreenshots() {
  // Create screenshots directory
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: true });

  // Desktop screenshots (1920x1080)
  console.log('\n=== DESKTOP SCREENSHOTS (1920x1080) ===\n');
  const desktopPage = await browser.newPage();
  await desktopPage.setViewport({ width: 1920, height: 1080 });

  for (const p of pages) {
    const url = `http://localhost:3000${p.path}`;
    console.log(`Capturing desktop: ${p.name} (${url})`);
    await desktopPage.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(500); // Wait for animations
    await desktopPage.screenshot({
      path: path.join(screenshotDir, `desktop-${p.name}.png`),
      fullPage: true
    });
  }

  // Mobile screenshots (390x844 - iPhone 14)
  console.log('\n=== MOBILE SCREENSHOTS (390x844) ===\n');
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844, isMobile: true });

  for (const p of pages) {
    const url = `http://localhost:3000${p.path}`;
    console.log(`Capturing mobile: ${p.name} (${url})`);
    await mobilePage.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(500); // Wait for animations
    await mobilePage.screenshot({
      path: path.join(screenshotDir, `mobile-${p.name}.png`),
      fullPage: true
    });
  }

  await browser.close();
  console.log('\n=== ALL SCREENSHOTS CAPTURED ===');
  console.log(`Screenshots saved to: ${path.resolve(screenshotDir)}`);
}

takeScreenshots().catch(console.error);
