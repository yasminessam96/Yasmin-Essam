module.exports = {
  "Search for an word that doesn't exist": function(browser) {
    browser
      // Navigate to duckduckgo
      .url("http://duckduckgo.com")
      // Enter an incorrect word into the search box
      .setValue("#search_form_input_homepage", "kfkfkrfkernfjernfjinrjrngjknrejkg")
      // Click enter
      .setValue("#search_button_homepage", browser.Keys.ENTER);

      browser.waitForElementPresent('#links > div',10000);
    browser.expect.element('#links > div > p').text.to.contain('No results found for kfkfkrfkernfjernfjinrjrngjknrejkg.'); //assert on displayed message
      // Close the browser
      browser.end();
  }
};
