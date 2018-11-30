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
                    <a href="https://www.amazon.co.uk" target="_blank">
                      <img src=".\imgs\UK.png" alt="UK"/>
                      &nbsp;UK
                    </a>
                    <a2>€38 list price</a2>
                    <a3>€40</a3>
                  </li>
                  <li>
                    <a href="https://www.amazon.de" target="_blank">
                      <img src=".\imgs\DE.png" alt="DE"/>
                      &nbsp;DE
                    </a>
                    <a2>€38 list price</a2>
                    <h3>Total price:</h3
                    <a3>€41</a3>
                  </li>
                  <li>
                    <a href="https://www.amazon.es" target="_blank">
                      <img src=".\imgs\ES.png" alt="ES"/>
                      &nbsp;ES
                    </a>
                    <a2>€44 list price</a2>
                    <a3>€46</a3>
                  </li>
                  <li>
                    <a href="https://www.amazon.fr" target="_blank">
                      <img src=".\imgs\FR.png" alt="FR"/>
                      &nbsp;FR
                    </a>
                    <a2>€55 list price</a2>
                    <a3>€67</a3>
                  </li>
                  <li>
                    <a href="https://www.amazon.it" target="_blank">
                      <img src=".\imgs\IT.png" alt="IT"/>
                      &nbsp;IT
                    </a>
                    <a2>€5500 list price</a2>
                    <a3>€6700</a3>
                  </li>
                </ul>
              </div>
          )
    }
}
export default PriceList
