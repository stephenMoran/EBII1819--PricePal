/*global chrome*/
import * as Amazon from './AmazonAPI.js'

export function price(url)
{
   console.log(url);
   var prices = [];
   if(url !== "")
   {
      if (Amazon.validUrl(url))
      {
        var country = Amazon.getCountryFromAmazonProductPageUrl(url);
        console.log(country);
      }
      else {
          prices.push("Navigate to a valid Amazon webpage");
          return prices
      }
    }
    else{
      prices.push("Navigate to a valid Amazon webpage");
      return prices;
    }
};


/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });

*/
