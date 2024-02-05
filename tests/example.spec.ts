import { test, expect } from '@playwright/test';
import { listenerCount } from 'node:process';
import { AmazonLandingPage } from '../page-objects/amazon-landing-page';

test('navigate to amazon', async ({ page }) => {
  let amazonLanding = new AmazonLandingPage(page)
  await amazonLanding.goto();
  await expect(amazonLanding.getAmazonLogo).toBeVisible();
  await expect(amazonLanding.getDeliverTo).toBeVisible();
  await expect(amazonLanding.getSearch).toBeVisible();
  await expect(amazonLanding.getSubmitSearch).toBeVisible();
  await expect(amazonLanding.getChooseLanguage).toBeVisible();
  await expect(amazonLanding.getSingIn).toBeVisible();
  await expect(amazonLanding.getReturnsOrders).toBeVisible();
  await expect(amazonLanding.getItemInCart).toBeVisible();
  await expect(amazonLanding.getMenu).toBeVisible();
});

test('check search works', async ({ page }) => {
  let amazonSearch = new AmazonLandingPage(page)
  await amazonSearch.goto();
  let searchAmazon = await page.getByPlaceholder('Search Amazon');
  await searchAmazon.fill('mouse');
  await page.keyboard.press("Enter");
  await expect(amazonSearch.getSearch).toBeVisible();
});

test('check logo footer', async ({ page }) => {
  let amazonFooter = new AmazonLandingPage(page)
  await amazonFooter.goto();
  await amazonFooter.getLogoFooter.scrollIntoViewIfNeeded();
  await expect(amazonFooter.getLogoFooter).toBeVisible();
});

test('check footer', async ({ page }) => {
  let amazonFooter = new AmazonLandingPage(page)
  await amazonFooter.goto();
  await amazonFooter.getLanguageFooter.scrollIntoViewIfNeeded();
  await expect(amazonFooter.getLanguageFooter).toBeVisible();
  await expect(amazonFooter.getCurrencySettingsFooter).toBeVisible();
  await expect(amazonFooter.getCountryRegionFooter).toBeVisible();
});

test('check btn back to top', async ({ page }) => {
  let amazonFooterBackToTop = new AmazonLandingPage(page)
  await amazonFooterBackToTop.goto();
  await amazonFooterBackToTop.getBackToTopFooter.scrollIntoViewIfNeeded();
  await expect(amazonFooterBackToTop.getBackToTopFooter).toBeVisible();
});

test('click btn back to top', async ({ page }) => {
  let amazonLanding = new AmazonLandingPage(page)
  await amazonLanding.goto();
  await amazonLanding.getBackToTopFooter.scrollIntoViewIfNeeded();
  await amazonLanding.getBackToTopFooter.click();
  await expect(amazonLanding.getAmazonLogo).toBeVisible();
});

test('check get to know us', async ({ page }) => {
  let amazonLanding = new AmazonLandingPage(page)
  await amazonLanding.goto();
  await amazonLanding.getToKnowUsFooter.scrollIntoViewIfNeeded();
  await expect(amazonLanding.getToKnowUsFooter).toBeVisible();
  await expect(amazonLanding.getCareersFooter).toBeVisible();
  await expect(amazonLanding.getBlogFooter).toBeVisible();
  await expect(amazonLanding.getAboutAmazonFooter).toBeVisible();
  await expect(amazonLanding.getInvestorRelationsFooter).toBeVisible();
  await expect(amazonLanding.getAmazonDevicesFooter).toBeVisible();
  await expect(amazonLanding.getAmazonScienceFooter).toBeVisible();
})

test('check make money with us', async ({ page }) => {
  let amazonLanding = new AmazonLandingPage(page)
  await amazonLanding.goto();
  await amazonLanding.getSellProductsOnAmazon.scrollIntoViewIfNeeded();
  await expect(amazonLanding.getSellProductsOnAmazon).toBeVisible();
  await expect(amazonLanding.getSellOnAmazonBusiness).toBeVisible();
  await expect(amazonLanding.getSellAppsOnAmazon).toBeVisible();
  await expect(amazonLanding.getBecomeAnAffiliate).toBeVisible();
  await expect(amazonLanding.getAdvertiseYourProducts).toBeVisible();
  await expect(amazonLanding.getSelfPublishWithUs).toBeVisible();
  await expect(amazonLanding.getHostAnAmazonHub).toBeVisible();
  await expect(amazonLanding.getSeeMoreMakeMoneyWithUs).toBeVisible();
})

test('amazon payment products', async ({ page }) => {
  let amazonLanding = new AmazonLandingPage(page)
  await amazonLanding.goto();
  await amazonLanding.getAmazonPaymentProducts.scrollIntoViewIfNeeded();
  await expect(amazonLanding.getAmazonPaymentProducts).toBeVisible();
  await expect(amazonLanding.getAmazonBusinessCard).toBeVisible();
  await expect(amazonLanding.getShopWithPoints).toBeVisible();
  await expect(amazonLanding.getReloadYourBalance).toBeVisible();
  await expect(amazonLanding.getAmazonCurrencyConverter).toBeVisible();

});

test('let us help you', async ({ page }) => {
  let amazonLanding = new AmazonLandingPage(page)
  await amazonLanding.goto();
  await amazonLanding.getLetUsHelpYou.scrollIntoViewIfNeeded();
  await expect(amazonLanding.getLetUsHelpYou).toBeVisible();
  await expect(amazonLanding.getAmazonandCOVID19).toBeVisible();
  await expect(amazonLanding.getYourAccount).toBeVisible();
  await expect(amazonLanding.getYourOrders).toBeVisible();
  await expect(amazonLanding.getShippingRatesPolicies).toBeVisible();
  await expect(amazonLanding.getReturnsReplacements).toBeVisible();
  await expect(amazonLanding.getManageYourContentAndDevices).toBeVisible();
  await expect(amazonLanding.getAmazonAssistant).toBeVisible();
  await expect(amazonLanding.getHelp).toBeVisible();
});

