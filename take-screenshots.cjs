const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const pages = [
  { path: '/', name: 'home' },
  { path: '/ai-consulting', name: 'ai-consulting' },
  { path: '/contact', name: 'contact' },
  { path: '/google-ads', name: 'google-ads' },
  { path: '/google-tag-manager', name: 'google-tag-manager' },
  { path: '/meta-advertising', name: 'meta-advertising' },
  { path: '/portfolio', name: 'portfolio' },
  { path: '/seo', name: 'seo' },
  { path: '/vibecoding', name: 'vibecoding' },
  { path: '/webdesign', name: 'webdesign' },
  { path: '/workshops', name: 'workshops' },
];

const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function takeScreenshots() {
  const browser = await chromium.launch();

  // Desktop screenshots (1920x1080)
  console.log('Taking desktop screenshots...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const desktopPage = await desktopContext.newPage();

  for (const pageInfo of pages) {
    const url = `http://localhost:3000${pageInfo.path}`;
    console.log(`  Desktop: ${pageInfo.name}`);
    await desktopPage.goto(url, { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, `desktop-${pageInfo.name}.png`),
      fullPage: true
    });
  }
  await desktopContext.close();

  // Mobile screenshots (390x844 - iPhone 14)
  console.log('Taking mobile screenshots...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();

  for (const pageInfo of pages) {
    const url = `http://localhost:3000${pageInfo.path}`;
    console.log(`  Mobile: ${pageInfo.name}`);
    await mobilePage.goto(url, { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, `mobile-${pageInfo.name}.png`),
      fullPage: true
    });
  }
  await mobileContext.close();

  await browser.close();
  console.log('Done! Screenshots saved to ./screenshots/');
}

takeScreenshots().catch(console.error);
