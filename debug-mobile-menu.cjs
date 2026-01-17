const { chromium } = require('playwright');
const path = require('path');

async function debugMobileMenu() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Click the mobile menu toggle
  await page.click('.menu-toggle');
  await page.waitForTimeout(500);

  // Check computed styles of nav
  const navStyles = await page.evaluate(() => {
    const nav = document.querySelector('.main-nav');
    const styles = window.getComputedStyle(nav);
    return {
      transform: styles.transform,
      position: styles.position,
      background: styles.background,
      zIndex: styles.zIndex,
      display: styles.display,
      visibility: styles.visibility,
      opacity: styles.opacity
    };
  });
  console.log('Nav computed styles:', navStyles);

  // Screenshot with wait
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'mobile-menu-debug.png')
  });
  
  console.log('Debug screenshot saved');
  await browser.close();
}

debugMobileMenu().catch(console.error);
