const { chromium } = require('playwright');
const path = require('path');

async function captureDropdown() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Hover over Services to trigger dropdown
  await page.hover('.has-dropdown .dropdown-trigger');
  await page.waitForTimeout(300);

  // Take screenshot of just the header area
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'dropdown-test.png'),
    clip: { x: 0, y: 0, width: 1920, height: 400 }
  });

  console.log('Dropdown screenshot saved');
  await browser.close();
}

captureDropdown().catch(console.error);
