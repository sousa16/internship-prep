import { test, expect } from "@playwright/test";

test("home button", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByRole("link", { name: "Home" }).click();
  await expect(page).toHaveURL("http://localhost:3000/");
});

test("form button", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByRole("link", { name: "Form" }).click();
  await expect(page).toHaveURL("http://localhost:3000/form");
});

test("successful login", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.fill("#username", "admin");
  await page.fill("#password", "admin");

  // Enabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Login successful!");
    await dialog.accept();
  });

  await page.click('button[type="submit"]');
});

test("wrong password", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.fill("#username", "user");
  await page.fill("#password", "wrongpassword");

  // Enabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Invalid credentials");
    await dialog.accept();
  });

  await page.click('button[type="submit"]');
});

test("empty username", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.fill("#password", "admin");

  await page.click('button[type="submit"]'); // Click submit with empty fields

  // Check if the first input (username) is focused
  // This indicates that the browser's validation is prompting the user to fill out this field
  const isUsernameFocused = await page.evaluate(() => {
    const activeElement = document.activeElement as HTMLInputElement; // Type assertion
    return activeElement.id === "username";
  });
  expect(isUsernameFocused).toBeTruthy();
});

test("empty password", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.fill("#username", "admin");

  await page.click('button[type="submit"]'); // Click submit with empty fields

  const isPasswordFocused = await page.evaluate(() => {
    const activeElement = document.activeElement as HTMLInputElement; // Type assertion
    return activeElement.id === "password";
  });
  expect(isPasswordFocused).toBeTruthy();
});
