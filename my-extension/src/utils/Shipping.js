function getShippingPrices(weight, country, shippingCategory, priceofItem)
    {


    //console.log(weight);

    var countries = ['uk','es','fr','it','de','ire'];


    var shippingBMDSV = [ [2.99 , 4.49, 3.49, 4.49, 3.49 , 4.00], [2.99, 0.99, 3.99, 4.99, 3.99, 5.00], [2.99, 4.99, 2.79, 4.99, 3.99, 7.50], [2.99, 4.99, 3.99, 2.70, 3.99, 5.00], [2.99, 4.99, 3.99, 4.99, 0, 5.00] ];

    var shippingCosts = [ [4.49, 4.99, 3.99, 5.49, 3,49, 6.00], [3.99, 2.99, 4.49, 5.99, 3.99, 7.50], [3.99, 5.49, 4.99, 5.99, 3.99, 7.50], [3.99, 5.49, 4.49, 3.99, 3.99, 7.50], [3.99, 5.49, 4.49, 5.99, 5.00, 7.50] ];
    var costPerKG =  [ [0, 1.99, 1.49, 0.99, 0.99, 0], [0.99, 0, 1.49, 0.99, 0.99, 1.30], [0.99, 1.99, 0, 0.99, 0.99, 1.30], [0.99, 1.99, 1.49, 0, 0.99, 1.30], [0.99, 1.99, 1.49, 0.99, 0, 1.30] ];

    var currentCountry = country;
    var countryNum;
    var x;
    for( x = 0; x < countries.length ; x++){
      if(countries[x] === currentCountry ){
        countryNum = x;
      }
      else{
        //countryNum = 4;
      }
    }

    var prices = new Array(5);
    if(shippingCategory == 'BMDSV'){
      for( i =0 ; i < countries.length - 1; i++)
      {
          prices[i] = shippingBMDSV[i][countryNum];
          prices[i] += costPerKG[i][countryNum]*weight;
          //console.log(prices[i]);//
          if((i==0 && countryNum==0)&&priceofItem>=10){
            prices[0]=0.00;
          }
          if((i==0 && countryNum==5)&&priceofItem>=25){
            prices[0]=0.00;
          }
          if((i==1 && countryNum==1)&&priceofItem>=19){
            prices[0]=0.00;
          }
          if((i==2 && countryNum==2)&&priceofItem>=25){
            prices[0]=0.00;
          }
          if((i==3 && countryNum==3)&&priceofItem>=25){
            prices[0]=0.00;
          }
          if((i==4 && countryNum==4)&&priceofItem>=0){
            prices[0]=0.00;
          }

        }
    }
    else{
      for( i =0 ; i < countries.length - 1; i++)
      {
          prices[i] = shippingCosts[i][countryNum];
          prices[i] += costPerKG[i][countryNum]*weight;
          //console.log(prices[i]);//
          if((i==0 && countryNum==0)&&priceofItem>=20){
            prices[0]=0.00;
          }
          if((i==0 && countryNum==5)&&priceofItem>=25){
            prices[0]=0.00;
          }
          if((i==1 && countryNum==1)&&priceofItem>=29){
            prices[0]=0.00;
          }
          if((i==2 && countryNum==2)&&priceofItem>=25){
            prices[0]=0.00;
          }
          if((i==3 && countryNum==3)&&priceofItem>=25){
            prices[0]=0.00;
          }
          if((i==4 && countryNum==4)&&priceofItem>=29){
            prices[0]=0.00;
          }
        }
    }
    return(prices);

    }
//console.log(getShippingPrices(1.0,'uk','B',50));
