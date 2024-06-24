import { test, expect } from "@playwright/test";

test("home button", async ({ page }) => {
  await page.goto("http://localhost:3000/form");
  await page.getByRole("link", { name: "Home" }).click();
  await expect(page).toHaveURL("http://localhost:3000/");
});

test("login button", async ({ page }) => {
  await page.goto("http://localhost:3000/form");
  await page.getByRole("link", { name: "Login" }).click();
  await expect(page).toHaveURL("http://localhost:3000/login");
});

test("successful submission", async ({ page }) => {
  await page.goto("http://localhost:3000/form");
  await page.fill("#email", "demo@test.pt");
  await page.fill("#age", "99");

  // Enabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Form submitted successfully!");
    await dialog.accept();
  });

  await page.click('button[type="submit"]');
});

test("age > 120", async ({ page }) => {
  await page.goto("http://localhost:3000/form");
  await page.fill("#email", "demo@test.pt");
  await page.fill("#age", "130");

  // Enabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Invalid form data");
    await dialog.accept();
  });

  await page.click('button[type="submit"]');
});

test("empty email", async ({ page }) => {
  await page.goto("http://localhost:3000/form");
  await page.fill("#age", "99");

  await page.click('button[type="submit"]'); // Click submit with empty fields

  const isEmailFocused = await page.evaluate(
    () => document.activeElement.id === "email"
  );
  expect(isEmailFocused).toBeTruthy();
});

test("empty age", async ({ page }) => {
  await page.goto("http://localhost:3000/form");
  await page.fill("#email", "demo@test.pt");

  await page.click('button[type="submit"]'); // Click submit with empty fields

  const isAgeFocused = await page.evaluate(
    () => document.activeElement.id === "age"
  );
  expect(isAgeFocused).toBeTruthy();
});
