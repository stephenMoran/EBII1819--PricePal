/*global chrome*/
//var url = "https://www.amazon.com/Samsung-Chromebook-11-6-16GB-XE500C13-K04US/dp/B01N5P6TJW/ref=sr_1_4?s=pc&ie=UTF8&qid=1539534469&sr=1-4&keywords=chromebook";
//var id = this.getProductIDFromAmazonProductPageUrl(url);
console.log("hello");
//get current URL when new tab is opened
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  url = tabs[0].url;
  console.log(url);
//  PriceCal.updateUrl(url);
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    console.log(activeInfo.tabId);
});

chrome.tabs.onCreated.addListener(function ( tab ){
  alert(tab.url);
});

var port = chrome.runtime.connect({name: "knockknock"});
port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
  if (msg.question == "Who's there?")
    port.postMessage({answer: "Madame"});
  else if (msg.question == "Madame who?")
    port.postMessage({answer: "Madame... Bovary"});
});
//When new tab opened

/*
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });


function getProductIDFromAmazonProductPageUrl(url) {
  	var re = /amazon.*\/([A-Z0-9]{10})(\/|\?|$)/
  	var match = re.exec(url)
  	if(url.match(re)){
  		return match[1]
  	}
  	else {
  		return null
  	}
  }
*/
  console.log("hello");
