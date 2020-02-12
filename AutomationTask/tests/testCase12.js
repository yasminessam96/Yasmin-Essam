module.exports = {
  "Type a search term then clear it": function(browser) {
    browser
      // Navigate to duckduckgo
      .url("http://duckduckgo.com")
      // Enter "instabug" into the search box
      .setValue("#search_form_input_homepage", "instabug")
      .click("#search_button_homepage");//click search

      browser.waitForElementPresent('#links > div',10000);

    browser.assert.attributeContains('#search_form_input', 'value', 'instabug'); //assert search box contains the word
    browser.click('#search_form_input_clear'); //click on x to clear input
    browser.assert.attributeContains('#search_form_input', 'value', ''); //assert search term is removed from search box

      // Close the browser
      browser.end();
  }
};
