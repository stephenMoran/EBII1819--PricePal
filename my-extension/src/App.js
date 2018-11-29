/*global chrome*/
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as PriceCal from './utils/PriceCal.js'
import PriceList from './components/PriceList'
import * as Amazon from "./utils/AmazonAPI.js"

class App extends Component {

  constructor() {
          super()
          this.state = {
              prices: null,
              bestPrice: null,
              price: null
          }
        this.changePrice = this.changePrice.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }

  //update current compoent state with price array
  //BUG: can only access the first element of array
  changePrice (tabs) {
        var url = tabs[0].url;
        var x = this;
        var amazonPrices = PriceCal.price(url).then(
          function(prices)
          {
            x.setState({prices: prices});
          }
        );
  }

  componentDidMount() {
    var x = this.changePrice;
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
        x(tabs);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          <img width = "150px" src=".\imgs\Logo.png" alt="PricePal"/>
        </h1>
        <PriceList prices = {this.state.prices}/>
      </div>
    );
  }
}

export default App;
