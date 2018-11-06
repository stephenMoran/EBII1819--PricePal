/*global chrome*/
import * as Amazon from './AmazonAPI.js'

export function price()
{
    var prices = [];
    var url = "www.amazon.co.uk";
    console.log(Amazon.getCountryFromAmazonProductPageUrl(url));

    if (Amazon.validUrl(url))
    {
      var country = Amazon.getCountryFromAmazonProductPageUrl(url);
      console.log(country);
    }
    else {
      {
        prices.push("Navigate to a valid Amazon webpage");
        return prices
      }
    }

};


export function getUrl()
{
  var url;
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    url = tabs[0].url;
    console.log(url);
  });
  return url;
}

function getShipping()
{
  var country = Amazon.getCountryFromProductPageUrl(url);
  
  
}