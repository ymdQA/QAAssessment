import { test, expect } from '@playwright/test';

test('login and add multiple items', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.locator(".ico-login").click();
  await page.locator("#Email").click();
  await page.locator("#Email").fill("xyz@gmail.com");
  var password=await page.locator("#Password");
  password.click();
  password.fill("xyz123");
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
  await page.locator('#add-to-cart-button-4').click();
  await page.getByTitle('Close').click();
  await page.locator('.cart-label').click();
  await page.getByRole('link', { name: 'nopCommerce demo store' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();

  await page.locator('.close').click();
  await page.locator('.cart-label').click();  
  var cart_total= await page.locator('.cart-qty').textContent();
  const quantity = parseInt(cart_total.replace(/[^\d]/g, ''), 10);
  expect (quantity).toBe(3);



}); 


