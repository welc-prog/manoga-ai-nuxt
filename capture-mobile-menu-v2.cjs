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
  await page.waitForTimeout(1000);

  // Click the mobile menu toggle
  const menuToggle = await page.$('.menu-toggle');
  if (menuToggle) {
    await menuToggle.click();
    console.log('Clicked menu toggle');
    await page.waitForTimeout(500);
  } else {
    console.log('Menu toggle not found!');
  }

  // Check if nav is now active
  const navActive = await page.$('.main-nav.active');
  console.log('Nav active:', !!navActive);

  // Screenshot the page
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'mobile-menu-open-v2.png')
  });
  
  console.log('Mobile menu screenshot saved');
  await browser.close();
}

captureMobileMenu().catch(console.error);
