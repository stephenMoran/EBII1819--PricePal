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
              bestPrice: null
          }
      }

  componentDidMount() {
    PriceCal.price();
  }

  render() {
    return (
      <div className="App">
        <h1>{PriceCal.price()}</h1>
        <h1> Hello </h1>
        <BestPrice />
        <PriceList/>
      </div>
    );
  }
}

export default App;
