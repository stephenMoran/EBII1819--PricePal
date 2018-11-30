import React from 'react'
import ReactDOM from 'react-dom'


class PriceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  //  this.createList = this.createList.bind(this);
  }

  /*
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

*/

  render() {
          return (
              <div className="price-list">
                <ul>
                  <li>
                    <a href="https://www.amazon.co.uk/dp/B000YUBR0S/" target="_blank">
                      <img src=".\imgs\UK.png" alt="UK"/>
                      &nbsp;UK
                    </a>
                    <a2>€3.31 list price</a2>
                    <a3>Total price: €7.80</a3>
                  </li>
                  <li>
                    <a href="https://www.amazon.de/dp/B000YUBR0S/" target="_blank">
                      <img src=".\imgs\DE.png" alt="DE"/>
                      &nbsp;DE
                    </a>
                    <a2>€4 list price</a2>
                    <a3>Total price: € 8.99</a3>
                  </li>
                  <li>
                    <a href="https://www.amazon.es/dp/B000YUBR0S/" target="_blank">
                      <img src=".\imgs\ES.png" alt="ES"/>
                      &nbsp;ES
                    </a>
                    <a2>€4 list price</a2>
                    <a3>Total price: €7.99</a3>
                  </li>
                  <li>
                    <a href="https://www.amazon.fr/dp/B000YUBR0S/" target="_blank">
                      <img src=".\imgs\FR.png" alt="FR"/>
                      &nbsp;FR
                    </a>
                    <a2>€7.43 list price</a2>
                    <a3>Total price: €12.42</a3>
                  </li>
                  <li>
                    <a href="https://www.amazon.it/dp/B000YUBR0S/" target="_blank">
                      <img src=".\imgs\IT.png" alt="IT"/>
                      &nbsp;IT
                    </a>
                    <a2>€4 list price</a2>
                    <a3>Total price: €7.99</a3>
                  </li>
                </ul>
              </div>
          )
    }
}
export default PriceList
