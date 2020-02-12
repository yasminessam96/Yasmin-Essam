module.exports = {
  "Search for a word by clicking Enter": function(browser) {
    browser
    // Navigate to duckduckgo
      .url("http://duckduckgo.com")
      // Enter "instabug" into the search box
      .setValue("#search_form_input_homepage", "instabug")
      // Click enter
      .setValue("#search_button_homepage", browser.Keys.ENTER);

      browser.waitForElementPresent('#links > div',10000); // wait for list of results to appear
      browser.expect.elements('#links > div.results_links_deep').count.to.equal(10); // assert number of results shown is 10

      browser.elements("css selector", '#links > div.results_links_deep', function(text){
        var array = text.value;
        array.forEach(function(currentValue,index){
          if(index === 1){
            index = 2;
          }
          browser.expect.element(browser.page.searchResults().getLinksByIndex(index + 1)).text.to.match(new RegExp('instabug',"i")); //assert each result contains the word 'instabug' regardless of whether it's lower or upper case
        });
      });
      // Close the browser
      browser.end();
  }
};
