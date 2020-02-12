module.exports = {
"Search for specific url": function(browser) {
  browser
    // Navigate to google
    .url("http://duckduckgo.com")
    // Enter "messi" into the search box
    .setValue("#search_form_input_homepage", "www.google.com")
    // Click the search button
    .click("#search_button_homepage");
    // Read the span with the search result count
    // .getText("span.sb_count", function(result) {
    //   console.log(result.value);
    // })
    browser.waitForElementPresent('#links > div',10000);
    browser.expect.elements('#links > div.results_links_deep').count.to.equal(10);

    browser.elements("css selector", '#links > div.results_links_deep', function(text){
      var array = text.value;
      array.forEach(function(currentValue,index){
        if(index === 1){
          index = 2;
        }
        browser.expect.element(browser.page.searchResults().getLinkURLsByIndex(index + 1)).text.to.contain('google');
      });
    });
    // Close the browser
    browser.end();
}
};
