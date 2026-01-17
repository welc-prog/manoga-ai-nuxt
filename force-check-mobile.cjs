const { chromium } = require('playwright');
const path = require('path');

async function forceCheck() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const page = await context.newPage();

  // Force refresh to get latest CSS
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Click the mobile menu toggle
  await page.click('.menu-toggle');
  await page.waitForTimeout(500);

  // Check nav dimensions
  const navInfo = await page.evaluate(() => {
    const nav = document.querySelector('.main-nav');
    const rect = nav.getBoundingClientRect();
    const styles = window.getComputedStyle(nav);
    return {
      rect: { width: rect.width, height: rect.height },
      cssHeight: styles.height,
      cssWidth: styles.width,
      top: styles.top,
      bottom: styles.bottom,
      left: styles.left,
      right: styles.right
    };
  });
  console.log('Nav info after reload:', JSON.stringify(navInfo, null, 2));

  // Screenshot
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'mobile-menu-fixed.png')
  });
  
  console.log('Screenshot saved');
  await browser.close();
}

forceCheck().catch(console.error);
