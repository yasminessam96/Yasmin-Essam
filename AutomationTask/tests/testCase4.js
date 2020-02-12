module.exports = {
  "Search for an empty word": function(browser) {
    browser
      // Navigate to duckduckgo
      .url("http://duckduckgo.com")
      // Enter " " into the search box
      .setValue("#search_form_input_homepage", " ")
      // Click enter
      .setValue("#search_button_homepage", browser.Keys.ENTER);

      browser.waitForElementPresent('#error_homepage',10000);
    browser.expect.element('#error_homepage').text.to.contain('Oops, no search  Please try again'); //assert on the error message displayed
      // Close the browser
      browser.end();
  }
};
