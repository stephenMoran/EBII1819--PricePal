
var url = "https://www.amazon.com/Samsung-Chromebook-11-6-16GB-XE500C13-K04US/dp/B01N5P6TJW/ref=sr_1_4?s=pc&ie=UTF8&qid=1539534469&sr=1-4&keywords=chromebook";
var id = getProductIDFromAmazonProductPageUrl(url);
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

  console.log("hello");
