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
				var currentCountry = Amazon.getCountryFromAmazonProductPageUrl(url);
				var currentPrice = Amazon.getPrice(url);
				console.log(currentPrice);
				if(currentCountry = "uk")
				{
					gbpToEur(currentPrice);
					//currentPrice = fx.convert(currentPrice, {from: "GBP", to: "EUR"});
					//console.log("GBP price: " + currentPrice);
				}

        var currentid =  Amazon.getProductIDFromAmazonProductPageUrl(url);

        if(currentPrice != null)
        {
          var countries = ["uk","fr","de","it", "es"];
          var bestPrice = currentPrice;
          for (var i in countries)
					{
						if(countries[i] != currentCountry)
						{
							var item = {available: true, url:null, country:null, price:null, shipping: null};

							  var countryUrl = Amazon.generateAmazonProductPageUrlForCountry(currentid, countries[i]);
								console.log(countryUrl);
								var countryPrice = Amazon.getPrice(countryUrl);
								if(countryPrice == null)
								{
									item.available = false;
									break;
								}
								console.log(countryPrice);
								/*
								.then(
								function(currentUrl)
								{
									item.url = currentUrl;
									var itemPrice = Amazon.getPrice(currentUrl);
									console.log(itemPrice);
									item.price = itemPrice;
								}
							);
							*/
							prices.push(item);
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


function gbpToEur(price)
{
	return fetch('https://api.exchangeratesapi.io/latest?symbols=GBP')
  .then(function(response) {
    return response.json();
  }).then(
		function(gbpJson)
		{
			console.log(JSON.stringify(gbpJson));
			console.log(gbpJson.rates);
			return gbpJson.rates;
		}
	);
}




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
