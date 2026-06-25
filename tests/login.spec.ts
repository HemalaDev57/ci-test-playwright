import { test, expect } from '@playwright/test';

test('page loads successfully', async ({ page }) => {
  await page.goto('https://example.com');
  const status = await page.evaluate(() => document.readyState);
  expect(status).toBe('complete');
});

test('deliberate fail - wrong title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/This Title Does Not Exist/);
});
