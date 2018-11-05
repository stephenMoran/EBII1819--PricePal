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
<<<<<<< HEAD
              size : 3
=======
              price: null
>>>>>>> danielsTestBranch
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

  }

  render() {
     return (
      <div className="App">
<<<<<<< HEAD
        <div class="stage">
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
         <div class="layer"></div>
       </div>
        <table class="center">
        <tr>
          <th>#</th>
          <th>Region</th>
          <th>Price</th>
          <th>time</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>Eng</td>
          <td>€99.99</td>
          <td>2 days</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Ger</td>
          <td>€109.99</td>
          <td>3 day</td>
        </tr>
       </table>
=======
        <h1>{this.state.price}</h1>
        <h1> Hello </h1>
        <BestPrice />
        <PriceList/>
>>>>>>> danielsTestBranch
      </div>
    );
  }
 }

export default App;
