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
    let rows = [];
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = 'cell${i}-${idx}'
        cell.push(<td key={cellID} id={cellID}></td>)
    }
    rows.push(<tr key={i} id={rowID}>{cell}</tr>)
  }
  return (
    <div className="container">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
               <tbody>
                 {rows}
               </tbody>
             </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
