import { test, expect } from "@playwright/test";
import { zebrunner } from "@zebrunner/javascript-agent-playwright";

test("login", async ({ page }) => {
  zebrunner.testCaseKey("FPRW-1");
  await page.goto("https://web.v3.fieldproapp.com/login");
  await expect(
    page.getByRole("heading", { name: "Sign in into your account" })
  ).toBeVisible();
  await page.getByPlaceholder("yourworkemail@yourcompany.com").click();
  await page
    .getByPlaceholder("yourworkemail@yourcompany.com")
    .fill("onesmas78@gmail.com");
  await page.getByPlaceholder("yourworkemail@yourcompany.com").press("Tab");
  await page.getByPlaceholder("••••••••••••••").fill("PBGLNNBKntyvfbN");
  await page.getByLabel("Login").click();
  await page.waitForTimeout(3000);
  await expect(page.getByText("Overview")).toBeVisible();
});
