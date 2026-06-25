import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('homepage has heading', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toBeVisible();
});

test.skip('skipped navigation test', async ({ page }) => {
  await page.goto('https://example.com');
});
