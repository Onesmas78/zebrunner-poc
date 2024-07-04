import { test, expect } from "@playwright/test";
import { zebrunner } from "@zebrunner/javascript-agent-playwright";

test("Create Workflow", async ({ page }) => {
  zebrunner.testCaseKey("FPRW-2");
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
  await page
    .locator(
      "xpath=//body/div[@id='root']/div[1]/div[1]/div[1]/ul[1]/div[5]/a[1]/div[1]/div[2]/span[1]"
    )
    .first()
    .click();
  await page
    .locator(
      "xpath=//body[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[2]/button[1]/span[1]"
    )
    .first()
    .click();
  await page
    .locator(
      "xpath=//body/div[10]/div[3]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/button[1]"
    )
    .first()
    .click();
  await page.getByTestId("tab-settings_tab").click();
  await page.getByLabel("Workflow Name *").click();
  await page.getByLabel("Workflow Name *").fill("Test Automation Workflow");
  await page.getByRole("button", { name: "Save" }).click();
});
