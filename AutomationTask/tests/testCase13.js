module.exports = {
  "Click on any link to view content after search": function(browser) {
    browser
      // Navigate to duckduckgo
      .url("http://duckduckgo.com")
      // Enter "INSTABUG" into the search box
      .setValue("#search_form_input_homepage", "instabug")
      // Click the search button
      .click("#search_button_homepage");

      browser.waitForElementPresent('#links > div',10000); // wait for list of results to appear
    browser.click('#links > div.results_links_deep:nth-child(1)');
  browser.assert.urlContains('instabug.com');
      // Close the browser
      browser.end();
  }
};
