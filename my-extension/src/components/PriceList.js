import React from 'react'
import ReactDOM from 'react-dom'


class PriceList extends React.Component {
  render() {
        return (
            <div className="price-list">
            <head>
              <link rel="stylesheet" href="App.css"/>
            </head>
            <body>
              <h1>PricePal</h1>
              <p>Purchasing from the UK saves you €1!</p>
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
              </ul>
            </body>
            </div>
        )
    }
}
export default PriceList
