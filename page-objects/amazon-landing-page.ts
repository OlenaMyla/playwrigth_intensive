import { expect, type Locator, type Page } from '@playwright/test';
import test from 'node:test';

export class AmazonLandingPage {
    readonly page: Page;

    readonly getAmazonLogo: Locator;
    readonly getDeliverTo: Locator;
    readonly getSearch: Locator;
    readonly getSubmitSearch: Locator;
    readonly getChooseLanguage: Locator;
    readonly getSingIn: Locator;
    readonly getReturnsOrders: Locator;
    readonly getItemInCart: Locator;
    readonly getMenu: Locator;
    readonly getLogoFooter: Locator;
    readonly getLanguageFooter: Locator;
    readonly getCurrencySettingsFooter: Locator;
    readonly getCountryRegionFooter: Locator;
    readonly getBackToTopFooter: Locator;
    readonly getToKnowUsFooter: Locator;
    readonly getCareersFooter: Locator;
    readonly getBlogFooter: Locator;
    readonly getAboutAmazonFooter: Locator;
    readonly getInvestorRelationsFooter: Locator;
    readonly getAmazonDevicesFooter: Locator;
    readonly getAmazonScienceFooter: Locator;
    readonly getSellProductsOnAmazon: Locator;
    readonly getSellOnAmazonBusiness: Locator;
    readonly getSellAppsOnAmazon: Locator;
    readonly getBecomeAnAffiliate: Locator;
    readonly getAdvertiseYourProducts: Locator;
    readonly getSelfPublishWithUs: Locator;
    readonly getHostAnAmazonHub: Locator;
    readonly getSeeMoreMakeMoneyWithUs: Locator;
    readonly getAmazonPaymentProducts: Locator;
    readonly getAmazonBusinessCard: Locator;
    readonly getShopWithPoints: Locator;
    readonly getReloadYourBalance: Locator;
    readonly getAmazonCurrencyConverter: Locator;
    readonly getLetUsHelpYou: Locator;
    readonly getAmazonandCOVID19: Locator;
    readonly getYourAccount: Locator;
    readonly getYourOrders: Locator;
    readonly getShippingRatesPolicies: Locator;
    readonly getReturnsReplacements: Locator;
    readonly getManageYourContentAndDevices: Locator;
    readonly getAmazonAssistant: Locator;
    readonly getHelp: Locator;



    constructor(page: Page) {
        this.page = page;
        this.getAmazonLogo = page.locator("//div[@id='nav-logo']");
        this.getDeliverTo = page.locator("//a[@id='nav-global-location-popover-link']");
        this.getSearch = page.locator("//div[@id='nav-search-dropdown-card']");
        this.getSubmitSearch = page.locator("//input[@id='twotabsearchtextbox']");
        this.getChooseLanguage = page.locator("//a[@id='icp-nav-flyout']");
        this.getSingIn = page.locator("//a[@id='nav-link-accountList']");
        this.getReturnsOrders = page.locator("//a[@id='nav-orders']");
        this.getItemInCart = page.locator("//div[@id='nav-cart-count-container']");
        this.getMenu = page.locator("//a[@id='nav-hamburger-menu']");
        this.getLogoFooter = page.locator("//div[@class='navFooterLine navFooterLogoLine']");
        this.getLanguageFooter = page.locator("//a[@id='icp-touch-link-language']");
        this.getCurrencySettingsFooter = page.locator("//a[@id='icp-touch-link-cop']")
        this.getCountryRegionFooter = page.locator("//a[@id='icp-touch-link-country']");
        this.getBackToTopFooter = page.locator("//a[@id='navBackToTop']");
        this.getToKnowUsFooter = page.locator("//div[@class='navFooterColHead'][text()='Get to Know Us']");
        this.getCareersFooter = page.locator("//a[@class='nav_a'][text()='Careers']");
        this.getBlogFooter = page.locator("//a[@class='nav_a'][text()='Blog']")
        this.getAboutAmazonFooter = page.locator("//a[@class='nav_a'][text()='About Amazon']")
        this.getInvestorRelationsFooter = page.locator("//a[@class='nav_a'][text()='Investor Relations']");
        this.getAmazonDevicesFooter = page.locator("//a[@class='nav_a'][text()='Amazon Devices']");
        this.getAmazonScienceFooter = page.locator("//a[@class='nav_a'][text()='Amazon Science']");
        this.getSellProductsOnAmazon = page.locator("//a[@class='nav_a'][text()='Sell products on Amazon']");
        this.getSellOnAmazonBusiness = page.locator("//a[@class='nav_a'][text()='Sell on Amazon Business']");
        this.getSellAppsOnAmazon = page.locator("//a[@class='nav_a'][text()='Sell apps on Amazon']");
        this.getBecomeAnAffiliate = page.locator("//a[@class='nav_a'][text()='Become an Affiliate']");
        this.getAdvertiseYourProducts = page.locator("//a[@class='nav_a'][text()='Advertise Your Products']");
        this.getSelfPublishWithUs = page.locator("//a[@class='nav_a'][text()='Self-Publish with Us']");
        this.getHostAnAmazonHub = page.locator("//a[@class='nav_a'][text()='Host an Amazon Hub']");
        this.getSeeMoreMakeMoneyWithUs = page.locator("//a[@class='nav_a'][text()='See More Make Money with Us']");
        this.getAmazonPaymentProducts = page.locator("//div[@class='navFooterColHead'][text()='Amazon Payment Products']");
        this.getAmazonBusinessCard = page.locator("//a[@class='nav_a'][text()='Amazon Business Card']");
        this.getShopWithPoints = page.locator("//a[@class='nav_a'][text()='Shop with Points']");
        this.getReloadYourBalance = page.locator("//a[@class='nav_a'][text()='Reload Your Balance']");
        this.getAmazonCurrencyConverter = page.locator("//a[@class='nav_a'][text()='Amazon Currency Converter']");
        this.getLetUsHelpYou = page.locator("//div[@class='navFooterColHead'][text()='Let Us Help You']");
        this.getAmazonandCOVID19 = page.locator("//a[@class='nav_a'][text()='Amazon and COVID-19']");
        this.getYourAccount = page.locator("//a[@class='nav_a'][text()='Your Account']");
        this.getYourOrders = page.locator("//a[@class='nav_a'][text()='Your Orders']");
        this.getShippingRatesPolicies = page.locator("//a[@class='nav_a'][text()='Shipping Rates & Policies']");
        this.getReturnsReplacements = page.locator("//a[@class='nav_a'][text()='Returns & Replacements']");
        this.getManageYourContentAndDevices = page.locator("//a[@class='nav_a'][text()='Manage Your Content and Devices']");
        this.getAmazonAssistant = page.locator("//a[@class='nav_a'][text()='Amazon Assistant']");
        this.getHelp = page.locator("//a[@class='nav_a'][text()='Help']");

    }

    async goto() {
        await this.page.goto('https://amazon.com');
    }

}