//var sampleElements  = require('../data/selectorAlias/sample.json');

//All navigations, assertions and page functions should be added here
var searchResultsCommands = {

  getLinksByIndex : function(index){
  return '#links > div.results_links_deep:nth-child('+index+')';
},

getLinkURLsByIndex : function(index){
return '#links > div.results_links_deep:nth-child('+index+') div > a > span.result__url__domain';
}
};

module.exports = {
	commands: [searchResultsCommands]
};
