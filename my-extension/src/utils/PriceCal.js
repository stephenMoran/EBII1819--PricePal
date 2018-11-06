/*global chrome*/
import * as Amazon from "./AmazonAPI.js"


export function price(url)
{
	/*
	chrome.tabs.sendMessage(, {"message": "get_current_page_info"}, function(results) {
		if (results === null || results[0] === null) {
			return
		}
		console.log(results[0]);
	})
	*/
  console.log(Amazon.getPrice(url));
   var prices = [];
   if(url != "")
   {

      if (Amazon.validUrl(url))
      {
        var currentPrice = Amazon.getPrice(url);
				var currentCountry = Amazon.getCountryFromAmazonProductPageUrl(url);
        var currentid =  Amazon.getProductIDFromAmazonProductPageUrl(url);
        console.log(currentPrice);
        if(currentPrice != null)
        {
          var countries = ["uk","fr","de","it", "es"];
          var bestPrice = currentPrice;
          for (var i in countries)
					{
						if(countries[i] != currentCountry)
						{
							var item = {url:null, country:null, price:null, shipping: null};
							  generateAmazonProductPageUrlForCountry(currentid, countries[i]).then(
								function(currentUrl)
								{
									var itemPrice = Amazon.getPrice(currentUrl);
									item.price = itemPrice;
									return currentUrl;
								}
							);
						}
          }

        }
        else
        {
          prices.push("We're sorry. We cannot detect the price on this page");
          return prices
        }
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
