import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as PriceCal from './utils/PriceCal.js'
import BestPrice from './components/BestPrice'
import BestPrice from './components/BestPrice'
import Price from './components/Price'

class App extends Component {

  constructor() {
          super()
          this.state = {
              prices: [],
              bestPrice: null
          }
      }

  componentDidMount() {

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
