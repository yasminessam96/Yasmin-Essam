module.exports = {
  "Click search/enter without typing any word ": function(browser) {
    browser
      // Navigate to duckduckgo
      .url("http://duckduckgo.com")
      // Enter nothing into the search box
      .setValue("#search_form_input_homepage", "")
      // Click enter
      .setValue("#search_button_homepage", browser.Keys.ENTER);

      browser.assert.not.elementPresent('#links > div'); //assert no search results are displayed
      browser.assert.elementPresent('#search_form_input_homepage'); //assert we are still on the home page
//repeat same steps but click search instead of enter
browser.setValue("#search_form_input_homepage", "")
.click('#search_button_homepage');
browser.assert.not.elementPresent('#links > div');
browser.assert.elementPresent('#search_form_input_homepage');

      // Close the browser
      browser.end();
  }
};
