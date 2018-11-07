/*global chrome*/
import * as Amazon from "./AmazonAPI.js"
var prices = [];
var currentGbpRate = null;

export function price(url)
{
  prices = [];
   if(url != "")
   {
      if (Amazon.validUrl(url))
      {
				var currentCountry = Amazon.getCountryFromAmazonProductPageUrl(url);
				Amazon.getPrice(url).then(
          function(currentPrice){
            if(currentCountry = "uk")
            {
              gbpToEur().then(
                function(rate)
                {
                  return updateGbpRates(rate);
                }).then(
                  function(updatedRate)
                  {
                    currentPrice = currentPrice/updatedRate;
                    console.log(currentPrice);
                  }
                );
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
                    item.country = countries[i];
                    item.url = countryUrl;
                    console.log(countryUrl);
                    Amazon.getPrice(countryUrl).then(
                      function(countryPrice)
                      {
                        if(countryPrice == null)
                        {
                          item.available = false;
                        }
                        else
                        {
                          item.price = countryPrice;
                        }
                      }
                    ).then(
                      function()
                      {
                        prices.push(item);
                      }
                    );
                }
              }
            }
          }
        ).then(function(){
           return prices;
        });
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


function updateGbpRates(rate)
{
  currentGbpRate = rate;
  return currentGbpRate;
}



function gbpToEur()
{
  console.log();
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
	).then(
    function(rates){
      console.log(typeof rates.GBP);
      return rates.GBP;
    }
  );


}
