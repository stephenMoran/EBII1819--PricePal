function getShippingPrices(weight, country)
    {
    
    
    //console.log(weight);

    var countries = ['UK','Spain', 'France','Italy', 'Germany', 'Ireland'];


    var shippingBMDSV = [ [4, 0, 4.5,3.5,4.5,3.5], [5,3,0,4,5,4], [7.5,3,5,0,5,4], [5,3,5,4,0,4], [5, 3, 5, 4, 5, 0] ];   

    var shippingCosts = [ [6, 0, 5,4,5.5,3.5], [7.5,4,0,4.5,6,4], [7.5,4,5.5,0,6,4], [7.5,4,5.5,4.5,0,4], [7.5, 4, 5.5, 4.5, 6, 0] ];
    var costPerKG =  [ [0, 0, 2,5,1.5,1,1], [1.3,1,0,1.5,1,1], [1.3,1,2,0,1,1], [1.3,1,2,1.5,0,1], [1.3, 1, 2, 1.5, 1, 0] ];
    


    var prices = new Array(5);
    var i =0;
    for( i =0 ; i < countries.length; i++)
    {
        prices[i] = shippingCosts[i][country];
        prices[i] += costPerKG[i][country]*weight;
        //console.log(prices[i]);//
    }
    return(prices);

    }