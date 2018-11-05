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
      </div>
    );
  }
 }

export default App;
