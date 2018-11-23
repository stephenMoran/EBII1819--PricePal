import React from 'react'
import ReactDOM from 'react-dom'
import * as Amazon from './../utils/AmazonAPI.js'
import * as PriceCal from './../utils/PriceCal.js'

class PriceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.createTable = this.createTable.bind(this);
  }

  createTable(){
      let prices = this.props.prices;
      console.log(prices[0].url);
      return(
          <p>{prices[0].url}</p>
      )
    }


  render() {
          let prices = this.props.prices;
          console.log("rendered")
          return (
              <div className="price-list">
                  {prices[0].url}
              </div>
          )
    }
}
export default PriceList
