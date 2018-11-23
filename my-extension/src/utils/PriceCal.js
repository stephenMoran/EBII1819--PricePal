/*global chrome*/
import * as Amazon from "./AmazonAPI.js"
var prices = [];
var currentGbpRate = null;

export function price(url)
{
  prices = [{id: null, available: true, url:null, country:null, price:null, shipping: null}];
   if(url != "")
   {
      if (Amazon.validUrl(url))
      {
        prices = [];
				Amazon.getPrice(url).then(
          function(price)
          {
            var currentItem = {id: null, available: true, url:null, country:null, price:null, shipping: null};
            currentItem.price = price;
            currentItem.url = url;
            return currentItem;
          }
        ).then(
          function(item)
          {
            item.country = Amazon.getCountryFromAmazonProductPageUrl(item.url);
            return item;
          }
        ).then(
          function(item)
          {
            if(item.country == "uk")
            {
              convertToGbp(item.price).then(
                function(newPrice)
                {
                  item.price = newPrice;
                }
              )
            }
            return item;
          }
        ).then(
          function(item)
          {
            item.id = Amazon.getProductIDFromAmazonProductPageUrl(item.url);
            console.log(item.id);
            return item;
          }
        ).then(
          function(item)
          {
            console.log(item);
            prices.push(item);
            return item;
          }
        ).then(
          function(item)
          {
            return buildPrices(item);
          }
        )
      }
      else
      {
        prices.push("Navigate to a valid Amazon webpage");
        return prices
      }
    }
    else
    {
        prices.push("Navigate to a valid Amazon webpage");
        return prices;
    }
    return prices;
};


function convertToGbp(price)
{
  var currentPrice = price;
  return gbpToEur().then(
    function(rate)
    {
      return updateGbpRates(rate);
    }).then(
      function(updatedRate)
      {
        currentPrice = currentPrice/updatedRate;
        console.log(currentPrice);
        return price;
      }
    );
}


function buildPrices(item)
{
    var currentId =  item.id;
    var currentPrice = item.price;
    var currentCountry = item.country;
    if(currentPrice != null)
    {
      var countries = ["uk","fr","de","it", "es"];
      var bestPrice = currentPrice;
      for (var i in countries)
      {
        if(countries[i] != currentCountry)
        {
            var url = Amazon.generateAmazonProductPageUrlForCountry(currentId, countries[i])

            var promise1 = Promise.resolve(url);
            promise1.then(
              function(url)
              {
                var currentItem = {id: null, available: true, url:null, country:null, price:null, shipping:null};
                currentItem.url = url;
                Amazon.getPrice(url).then(
                  function(price)
                  {
                    currentItem.price = price;
                    return currentItem;
                  }
                ).then(
                  function(item)
                  {
                    item.country = Amazon.getCountryFromAmazonProductPageUrl(item.url);
                    return item;
                  }
                ).then(
                  function(item)
                  {
                    if(item.country == "uk")
                    {
                      convertToGbp(item.price).then(
                        function(newPrice)
                        {
                          item.price = newPrice;
                        }
                      )
                    }
                    return item;
                  }
                ).then(
                  function(item)
                  {
                    item.url = Amazon.addAffiliateLinkToUrl(item.url, item.country);
                    return item;
                  }
                ).then(
                  function(item)
                  {
                    console.log(item);
                    prices.push(item);
                  }
                );
              }
            );
          }
        }
      }
      return prices;
}



function updateGbpRates(rate)
{
  currentGbpRate = rate;
  return currentGbpRate;
}



/*
if(price != null)
{
  item.price = price;

  item.url = url;
  console.log(item.url);
  return item;
}
else
{
  return null;
}
*/

function gbpToEur()
{
  console.log();
	return fetch('https://api.exchangeratesapi.io/latest?symbols=GBP')
  .then(function(response) {
    return response.json();
  }).then(
		function(gbpJson)
		{
			return gbpJson.rates;
		}
	).then(
    function(rates){
      return rates.GBP;
    }
  );
}
