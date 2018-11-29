import React from 'react'
import ReactDOM from 'react-dom'


class PriceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.createList = this.createList.bind(this);
  }

  //creating list of items
  createList()
  {
    let list = []
    if(this.props.prices != null)
    {
      var prices = this.props.prices;
      var i;
      let items = [];
      for(i = 0; i < this.props.prices.length; i++)
      {
        var price = prices[0];
        var url = price[1];
        var country = price[2]
        var countryPic;
        var id = price[3];
        switch(country)
        {
          case 'es':
            countryPic = ".\imgs\ES.png"
            break;
          case 'de':
          countryPic = ".\imgs\DE.png"
            break;
          case 'fr':
            countryPic = ".\imgs\FR.png"
            break;
          case 'it':
            countryPic = ".\imgs\IT.png"
            break;
            case 'uk':
              countryPic = ".\imgs\UK.png"
            break;

        };

        items.push(
          <li>
                  <a href= {url} target="_blank">
                    <img src={countryPic}/>
                    &nbsp;{country}
                  </a>
                  <a2>€{price} list price</a2>
          </li>
        )
      }
      list.push(<ul>{items}</ul>)
    }
  };

  initialiseProps()
  {
    var prices = this.props.prices;
    var promise1 = Promise.resolve(prices);
    return promise1;
  }

  render() {
          return (
              <div className="price-list">
                {this.createList()}
              </div>
          )
    }
}
export default PriceList
