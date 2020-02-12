module.exports = {
"Search for an word that contains a special character": function(browser) {
  browser
  // Navigate to duckduckgo
    .url("http://duckduckgo.com")
    // Enter "Mother-in-law" into the search box
    .setValue("#search_form_input_homepage", "Mother-in-law")
    // Click the search button
    .click("#search_button_homepage");

    browser.waitForElementPresent('#links > div',10000); // wait for list of results to appear
    browser.expect.elements('#links > div.results_links_deep').count.to.equal(10); // assert number of results shown is 10

    browser.elements("css selector", '#links > div.results_links_deep', function(text){
      var array = text.value;
      array.forEach(function(currentValue,index){
        if(index === 1){
          index = 2;
        }
        browser.expect.element(browser.page.searchResults().getLinksByIndex(index + 1)).text.to.match(new RegExp('mother-in-law',"i")); //assert each result contains the word regardless of whether it's lower or upper case
      });
      });
    // Close the browser
    browser.end();
}
};
