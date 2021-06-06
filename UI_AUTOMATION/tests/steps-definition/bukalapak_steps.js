const { client } = require('nightwatch-cucumber');
const { Given, Then, When, After } = require('cucumber');

const browser = client.page.bukalapak_page();

After(function(scenario) {
  return client.end();
});

Given(/^user at bukalapak home page$/, () => {
  return browser.navigateToHomePage();
});

When(/^user click searchbox$/, () => {
  return browser.clickSearchBox();
});

When(/^user input keyword "([^"]*)"$/, (keyword) => {
  return browser.inputSearchKeyword(keyword);
});

Then(/^user will see search result label of "([^"]*)"$/, (keyword) => {
  return browser.assertScreenSizeFilter(keyword);
});

Then(/^user will see the first item contain keyword "([^"]*)"$/, (keyword) => {
  return browser.assertScreenSizeFilter(keyword);
});