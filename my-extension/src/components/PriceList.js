import React from 'react'
import ReactDOM from 'react-dom'


class PriceList extends React.Component {
  render() {
        return (
            <div className="price-list">
              <table>
              <tr>
                <th>Country</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>UK</td>
                <td>70</td>
              </tr>
              </table>
            </div>
        )
    }
}
export default PriceList
