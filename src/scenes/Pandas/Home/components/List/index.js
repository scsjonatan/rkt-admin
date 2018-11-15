// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Nav from 'components/lists/Nav'
import Order from 'scenes/Pandas/components/Order'

// Styles
import './styles.scss'

export default class List extends BaseComponent {
  constructor() {
    super()

    this.state = {
      tabs: [
        {
          label: 'Todos',
          number: 0,
          slug_name: 'all'
        },
        {
          label: 'New',
          number: 0,
          slug_name: 'new'
        },
        {
          label: 'Pending PickUp',
          number: 0,
          slug_name: 'pending'
        },
        {
          label: 'Exception',
          number: 0,
          slug_name: 'exception'
        },
        {
          label: 'Return Asked',
          number: 0,
          slug_name: 'return'
        }
      ],
      orders: [{
        ad_id: '43242314',
        buyer: 'lorenamc.qweryty@gmail.com',
        carrier: 'ups (1ZA9T9200480374)',
        conekta_id: '653465346345634',
        created: '9 Noviembre 2018 12:40',
        id: '181124400005405',
        last_update: '9 noviembre 2018 12:40',
        phone: '5554968900',
        seller: 'mascalso_3@hotmail.com'
      }]
    }
  }

  _renderOrder(order) {
    return <Order key={order.id} {...order} />
  }

  render() {
    return (
      <div className="GeneralContainer Pandas">
        <Nav tabs={this.state.tabs} />
        <div className="Pandas__Content">
          {this.state.orders.map(this._renderOrder)}
        </div>
      </div>
    )
  }
}
