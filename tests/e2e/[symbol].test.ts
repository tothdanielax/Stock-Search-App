import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.evaluate(() => {
		const selectedStock = { symbol: 'AAPL' };
		localStorage.setItem('selectedStock', JSON.stringify(selectedStock));
	});
});

test('index', async ({ page }) => {
	const languageSelect = page.getByTestId('language-select');
	const colorSchemaToggle = page.getByTestId('color-schema-toggle');

	await test.step('initial state', async () => {
		expect(languageSelect).toBeDefined();
		expect(colorSchemaToggle).toBeDefined();

		await expect(languageSelect).toBeVisible();
		await expect(colorSchemaToggle).toBeVisible();
	});
});
