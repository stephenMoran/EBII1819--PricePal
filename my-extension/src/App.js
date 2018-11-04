/*global chrome*/
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as PriceCal from './utils/PriceCal.js'
import BestPrice from './components/BestPrice'
import PriceList from './components/PriceList'




class App extends Component {

  constructor() {
          super()
          this.state = {
              prices: [],
              bestPrice: null,
              price: null
          }
        this.changePrice = this.changePrice.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }

  changePrice (tabs) {
        var url = tabs[0].url;
        console.log(typeof url);
        var price = PriceCal.price(url);
  }

  componentDidMount() {
    var x = this.changePrice;
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
        console.log(typeof tabs);
        x(tabs);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.price}</h1>
        <h1> Hello </h1>
        <BestPrice />
        <PriceList/>
      </div>
    );
  }
}

export default App;
