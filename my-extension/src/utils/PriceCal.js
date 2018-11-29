/*global chrome*/
import * as Amazon from "./AmazonAPI.js"
import * as Shipping from "./shipping.js"
var prices = [];
var currentGbpRate = null;

export function price(url)
{
  prices = [];
   if(url != "")
   {
      if (Amazon.validUrl(url))
      {
				return Amazon.getPrice(url).then(
          function(price)
          {
            var currentItem = [];
            currentItem.push(price);
            currentItem.push(url);
            return currentItem;
          }
        ).then(
          function(item)
          {
            item.push(Amazon.getCountryFromAmazonProductPageUrl(item[1]));
            return item;
          }
        ).then(
          function(item)
          {
            if(item[2] == "uk")
            {
              convertToGbp(item[0]).then(
                function(newPrice)
                {
                  item[0] = newPrice;
                }
              )
            }
            return item;
          }
        ).then(
          function(item)
          {
            var id = Amazon.getProductIDFromAmazonProductPageUrl(item[1]);
            item.push(id);
            return item;
          }
        ).then(
          function(item)
          {
            var position = getCountryPosition(item[2])
            console.log(Shipping.getShippingPrices(item[2]));
            var costs = Shipping.getShippingPrices(item[2]);
            var cost = costs[position];
            item.push(cost)
            return item
          }
        ).then(
          function(item)
          {
            if(item[0] != null)
            {
              prices.push(item);
            }
            return item;
          }
        ).then(
          function(item)
          {
            return buildPrices(item)
          }
        ).then(
          function()
          {
            console.log(prices);
            return prices;
          }
        );
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
};

//Build price array of other amazon prices
function buildPrices(item)
{
    var currentPrice = item[0];
    var currentCountry = item[2];
    var currentId = item[3];
    var promise1;
    if(currentPrice != null)
    {
      var countries = ["uk","fr","de","it", "es"];
      var bestPrice = currentPrice;
      for (var i in countries)
      {
        if(countries[i] != currentCountry)
        {
            var url = Amazon.generateAmazonProductPageUrlForCountry(item[3], countries[i])
            promise1 = Promise.resolve(url);
            promise1.then(
              function(url)
              {
                var currentItem = [];
                currentItem[1] = url;
                Amazon.getPrice(url).then(
                  function(price)
                  {
                    currentItem[0] = price;
                    return currentItem;
                  }
                ).then(
                  function(item)
                  {
                    item[2] = Amazon.getCountryFromAmazonProductPageUrl(item[1]);
                    return item;
                  }
                ).then(
                  function(item)
                  {

                    if(item[2] == "uk")
                    {
                      convertToGbp(item[0]).then(
                        function(newPrice)
                        {
                          item[0] = newPrice;
                        }
                      )
                    }
                    return item;
                  }
                ).then(
                  function(item)
                  {
                    item[1] = Amazon.addAffiliateLinkToUrl(item[1], item[2]);
                    return item;
                  }
                ).then
                (
                  function(item)
                  {
                    var id = Amazon.getProductIDFromAmazonProductPageUrl(item[1]);
                    item.push(id);
                    return item;
                  }
                ).then(
                  function(item)
                  {
                    //assuming were shipping to the country of the visited site
                    var costs = Shipping.getShippingPrices(currentCountry);
                    var position = getCountryPosition(item[2]);
                    var cost = costs[position];
                    item.push(cost);
                    return item;
                  }
                )
                .then(
                  function(item)
                  {
                    if(item[0] != null)
                    {
                      prices.push(item);
                    }
                  }
                );
              }
            ).then(
              function()
              {
                return prices;
              }
            );
          }
        }
      }
      return promise1;

}


function getCountryPosition(country)
{
  var position;
  switch (country) {
  case 'uk':
      position = 0
      break;
  case 'es':
        position = 1
      break;
  case 'fr':
        position = 2
      break;
  case 'it':
        position = 3
      break;
  case 'de':
        position = 4
      break;
  case 'ire':
        position = 5
}

return position;

}


//CURRENCY RATES FOR THE UK
//convert prices to current rate
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
        //rounding
        currentPrice = Math.round(currentPrice * 100) / 100;
        return currentPrice;
      }
    );
}

//update current rate
function updateGbpRates(rate)
{
  currentGbpRate = rate;
  return currentGbpRate;
}

//calculate current rate
function gbpToEur()
{
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
