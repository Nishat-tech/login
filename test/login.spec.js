const { test, expect } = require('@playwright/test');

test('Login form visible', async ({ page }) => {
  await page.goto('http://localhost:3000/login.html');
  await page.pause

  // check heading
  await expect(page.locator('h2')).toHaveText('Login');

  // check inputs
  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toHaveText('Login');
});
