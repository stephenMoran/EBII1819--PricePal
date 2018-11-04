//Script to alter the content of the browser
//Loaded every time a new page is opened
//Amazon associates id : pricepal00-20
//http://www.amazon.com/dp/{ASIN}/?tag={trackingId}

//Listener for messages from background script

console.log("hello")

/*

chrome.runtime.onMessage.addListener(request => {
  if (request.type === 'getHeadlines') {
      // DO SOMETHING
  }
});

function getUrl()
{
  chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    console.log(tabURL);
});
}

var hello = this.getUrl();
console.log(hello);





var url = "https://www.amazon.co.uk/Kaspersky-Security-Devices-Android-Activation/dp/B07HMFC693/ref=sr_1_4?ie=UTF8&qid=1539540217&sr=8-4&keywords=B074SNVGV3%7CB074SP6DLW%7CB074SP8KYT%7CB074SP9XBX%7CB074SP8KYW%7CB074SPB1FL%7CB07HMFC693%7CB074SPC5TK%7CB074SNVGV1%7CB074SNZJHF";
var id = this.getProductIDFromAmazonProductPageUrl(url);
console.log(id);
var url2 = this.generateAmazonProductPageUrlForCountry(id, 'uk');
var hi = this.getPrice(url2);
function getPrice(url)
{
  return fetch(
			url,
			{
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			}
		)
		.then((response) => {
			if(response.ok) {
				response.text().then(function(html) {
					var parser = new DOMParser()
					var doc = parser.parseFromString(html, "text/html")
					var price = this.getPriceFromAmazonProductDetailPage(doc)
          console.log(price);
					if (price === null) {
						return
					}
				})
			} else {
				console.log(`Cannot find this item`)
			}
    })
}


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


function generateAmazonProductPageUrlForCountry(productID, country) {
  	var searchUrlPrefix = 'https://www.amazon.'
  	var countryDomain = country.toLowerCase();
  	if (countryDomain === 'uk') {
  		countryDomain = 'co.uk'
  	}
  	var searchUrlSuffix = '/dp/'
  	return searchUrlPrefix + countryDomain + searchUrlSuffix + productID + '/'
  }


  function getPriceFromAmazonProductDetailPage(doc) {
  	var price = null
  	price = doc.getElementById("priceblock_dealprice")
  	if (price === null) {
  		price = doc.getElementById("priceblock_ourprice")
  	}
  	if (price === null) {
  		return null
  	}
  	var price_str = price.innerHTML.split('-')[0].replace(/&nbsp;/g, '').replace(/ /g, '').replace(/^\D+/g, '').replace(/\,/g, '.')
  	var priceParts = price_str.split('.')
  	var priceAfterPoint = priceParts.pop()
  	var priceBeforePoint = priceParts.join('')
  	var res = priceAfterPoint
  	if (priceBeforePoint != "") {
  		res = priceBeforePoint + "." + priceAfterPoint
  	}
  	return parseFloat(res)
  }
*/
