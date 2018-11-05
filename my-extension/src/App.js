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
          }
        this.changePrice = this.changePrice.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }

  changePrice (tabs) {

  }

  componentDidMount() {

  }

  render() {
     return (
      <div className="App">
        <BestPrice />
        <PriceList/>
      </div>
    );
  }
 }

export default App;
