const { chromium } = require('playwright');

async function checkNav() {
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
  await page.click('.menu-toggle');
  await page.waitForTimeout(500);

  // Check nav dimensions and position
  const navInfo = await page.evaluate(() => {
    const nav = document.querySelector('.main-nav');
    const rect = nav.getBoundingClientRect();
    const styles = window.getComputedStyle(nav);
    return {
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        right: rect.right,
        bottom: rect.bottom
      },
      inset: styles.inset,
      width: styles.width,
      height: styles.height,
      classList: nav.classList.toString(),
      childCount: nav.querySelectorAll('li').length
    };
  });
  console.log('Nav info:', JSON.stringify(navInfo, null, 2));
  
  await browser.close();
}

checkNav().catch(console.error);
