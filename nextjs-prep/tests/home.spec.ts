import { test, expect } from '@playwright/test';

test('login button', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL('http://localhost:3000/login');
});

test('form button', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Form' }).click();
    await expect(page).toHaveURL('http://localhost:3000/form');
});