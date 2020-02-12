module.exports = {
"Search for word then click on More Results": function(browser) {
  browser
    // Navigate to duckduckgo
    .url("http://duckduckgo.com")
    // Enter "instabug" into the search box
    .setValue("#search_form_input_homepage", "instabug")
    // Click the search button
    .click("#search_button_homepage");

    browser.waitForElementPresent('#links > div',10000);
    browser.expect.elements('#links > div.results_links_deep').count.to.equal(10); //assert number of results displayed are 10 entries
    browser.click('#rld-1 > a'); //click on more results
    browser.expect.element('#rld-1 > div').text.to.contain('2'); //assert page 2 is displayed
    browser.expect.elements('#links > div.results_links_deep').count.to.equal(28); //assert total number of results is now 28

    // Close the browser
    browser.end();
}
};
