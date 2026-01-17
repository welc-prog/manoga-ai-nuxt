const { chromium } = require('playwright');
const path = require('path');

async function captureMobileMenu() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Click the mobile menu toggle
  await page.click('.menu-toggle');
  await page.waitForTimeout(300);

  // Screenshot the open menu
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'mobile-menu-open.png')
  });
  
  console.log('Mobile menu screenshot saved');
  await browser.close();
}

captureMobileMenu().catch(console.error);
