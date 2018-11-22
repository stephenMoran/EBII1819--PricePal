import React from 'react'
import ReactDOM from 'react-dom'
import * as Amazon from './../utils/AmazonAPI.js'
import * as PriceCal from './../utils/PriceCal.js'

class PriceList extends React.Component {
  render() {

        return (
            <div className="price-list">
            <head>
              <link rel="stylesheet" href="App.css"/>
            </head>
            <body>
            <h1>
              <img width = "150px" src=".\imgs\Logo.png" alt="PricePal"/>
            </h1>
              <DynamicSen/>
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
                <li>
                  <a href="https://www.amazon.it" target="_blank">
                    <img src=".\imgs\IT.png" alt="IT"/>
                    &nbsp;IT
                  </a>
                  <a2>€5500 list price</a2>
                  <a3>€6700</a3>
                </li>
              </ul>
            </body>
            </div>
        )
    }
}
export default PriceList
