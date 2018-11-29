import React from 'react'
import ReactDOM from 'react-dom'


class PriceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.createTable = this.createTable.bind(this);
    this.initialiseProps = this.initialiseProps.bind(this);
  }

  createTable()
  {
    if(this.props.prices != null)
    {
      var i;
      for(i = 0; i < this.props.prices.length; i++)
      {
        console.log(this.props.prices.length);
        console.log(this.props.prices[i]);
      }
    }
  };

  initialiseProps()
  {
    var prices = this.props.prices;
    var promise1 = Promise.resolve(prices);
    return promise1;
  }

  render() {
          console.log("Rederin");
          return (
              <div className="price-list">
                  <table>
                    {this.createTable()}
                  </table>
              </div>
          )
    }
}
export default PriceList
