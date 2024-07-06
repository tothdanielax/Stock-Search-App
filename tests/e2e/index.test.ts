import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.evaluate(() => {
		const selectedStock = { symbol: 'AAPL' };
		localStorage.setItem('selectedStock', JSON.stringify(selectedStock));
	});
});

test('index', async ({ page }) => {
	const searchInput = page.getByTestId('search-input');
	const searchButton = page.getByTestId('search-button');
	const clearButton = page.getByTestId('clear-button');
	const languageSelect = page.getByTestId('language-select');
	const colorSchemaToggle = page.getByTestId('color-schema-toggle');
	const selectedStock = page.getByText(/search for a stock/i);

	await test.step('initial state', async () => {
		expect(searchInput).toBeDefined();
		expect(searchButton).toBeDefined();
		expect(clearButton).toBeDefined();
		expect(selectedStock).toBeDefined();
		expect(languageSelect).toBeDefined();
		expect(colorSchemaToggle).toBeDefined();

		await expect(searchInput).toBeVisible();
		await expect(searchButton).toBeVisible();
		await expect(clearButton).toBeVisible();
		await expect(selectedStock).toBeVisible();
		await expect(languageSelect).toBeVisible();
		await expect(colorSchemaToggle).toBeVisible();

		await expect(searchButton).toBeEnabled();
		await expect(clearButton).toBeEnabled();
	});

	await expect(page.getByText(/symbol needs to be at least 1 character long./i)).not.toBeVisible();

	await test.step('search with invalid term', async () => {
		await searchButton.click();
		await expect(page.getByText(/symbol needs to be at least 1 character long./i)).toBeVisible();
	});

	await test.step('search with valid term', async () => {
		await searchInput.fill('IBM');
		await searchButton.click();
		await expect(
			page.getByText(/symbol needs to be at least 1 character long./i),
		).not.toBeVisible();

		try {
			await expect(page.getByText(/latest trading day/i)).toBeVisible();
		} catch {
			await expect(page.getByText(/no data/i)).toBeVisible();
		}
	});

	await test.step('clear on search', async () => {
		await clearButton.click();
		await expect(
			page.getByText(/symbol needs to be at least 1 character long./i),
		).not.toBeVisible();
		await expect(searchInput).toHaveText('');
	});
});
