import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import BestPrice from './components/BestPrice'

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
        <h1> Hello </h1>
        <BestPrice />
      </div>
    );
  }
}

export default App;
