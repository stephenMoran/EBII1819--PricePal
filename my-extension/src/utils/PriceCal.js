/*global chrome*/
import * as Amazon from "./AmazonAPI.js"
var prices = [];

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
              console.log(gbpToEur(currentPrice));
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
                    item.country = countries[i];
                    item.url = countryUrl;
                    console.log(countryUrl);
                    Amazon.getPrice(countryUrl).then(
                      function(countyPrice)
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

function gbpToEur(price)
{
  console.log(typeof price);
	return price/ fetch('https://api.exchangeratesapi.io/latest?symbols=GBP')
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
