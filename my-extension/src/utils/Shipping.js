function getShippingPrices(weight, country)
    {


    //console.log(weight);

    var countries = ['UK','Spain', 'France','Italy', 'Germany', 'Ireland'];


    var shippingBMDSV = [ [2.99 , 4.49, 3.49, 4.49, 3.49 , 4.00], [2.99, 0.99, 3.99, 4.99, 3.99, 5.00], [2.99, 4.99, 2.79, 4.99, 3.99, 7.50], [2.99, 4.99, 3.99, 2.70, 3.99, 5.00], [2.99, 4.99, 3.99, 4.99, 0, 5.00] ];

    var shippingCosts = [ [4.49, 4.99, 3.99, 5.49, 3,49, 6.00], [3.99, 2.99, 4.49, 5.99, 3.99, 7.50], [3.99, 5.49, 4.99, 5.99, 3.99, 7.50], [3.99, 5.49, 4.49, 3.99, 3.99, 7.50], [3.99, 5.49, 4.49, 5.99, 5.00, 7.50] ];
    var costPerKG =  [ [0, 1.99, 1.49, 0.99, 0.99, 0], [0.99, 0, 1.49, 0.99, 0.99, 1.30], [0.99, 1.99, 0, 0.99, 0.99, 1.30], [0.99, 1.99, 1.49, 0, 0.99, 1.30], [0.99, 1.99, 1.49, 0.99, 0, 1.30] ];



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
