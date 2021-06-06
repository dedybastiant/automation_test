const { client } = require('nightwatch-cucumber');

const bukalapak = {
  url() {
    const url = "https://www.bukalapak.com/";
    return url;
  },
  elements: { 
    searchBox: '//input[@name="search[keywords]"]',
    searchBtn: '//button[@class="v-omnisearch__submit"]',
    resultLabel : './/h1[b]',
    firstProductDescription: '(//div[@class="bl-product-card__description-name"]/p/a)[1]',
  },
  commands: [{
    navigateToHomePage() {
      return this.navigate();
    },
    clickSearchBox() {
      this.waitForElementVisible(bukalapak.elements.searchBox, 10000);
      return this.click(bukalapak.elements.searchBox);
    },
    clickSearchButton() {
      this.waitForElementVisible(bukalapak.elements.searchBtn, 10000);
      return this.click(bukalapak.elements.searchBtn);
    },
    inputSearchKeyword(keyword) {
      this.waitForElementVisible(bukalapak.elements.searchBox, 10000);
      return this.setValue(bukalapak.elements.searchBox, keyword);
    },
    assertSearchResultLabel(keyword) {
      this.waitForElementVisible(bukalapak.elements.resultLabel, 10000);
      return this.assert.containsText(bukalapak.elements.resultLabel, keyword)
    },
    assertFirstItemDesc(keyword) {
      this.waitForElementVisible(bukalapak.elements.firstProductDescription, 10000);
      return this.assert.containsText(bukalapak.elements.firstProductDescription, keyword)
    },
  }],
};

module.exports = bukalapak;
