import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/en/404');
});

test('not existing', async ({ page }) => {
	await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
	await expect(page.getByText(/not found/i)).toBeVisible();
});
