import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as PriceCal from './utils/PriceCal.js'
import BestPrice from './components/BestPrice'

class App extends Component {

  constructor() {
          super()
          this.state = {
              prices: [],
              bestPrice: null,
              size : 3
          }
      }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <h1>________________</h1>
        <h1> The best price found was  </h1>
        <BestPrice />
        <h2> bye </h2>

      </div>
    );
  }
}

export default App;
