// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Nav from 'components/lists/Nav'
import Order from 'scenes/PayDelivery/components/Order'

// Styles
import './styles.scss'

class List extends BaseComponent {
  constructor(props) {
    super(props)
    const { t } = props

    this.state = {
      tabs: [
        {
          label: t('All'),
          number: 0,
          slug_name: 'all'
        },
        {
          label: t('News'),
          number: 0,
          slug_name: 'new'
        },
        {
          label: t('Pending PickUp'),
          number: 0,
          slug_name: 'pending'
        },
        {
          label: t('Exception'),
          number: 0,
          slug_name: 'exception'
        },
        {
          label: t('Return Asked'),
          number: 0,
          slug_name: 'return'
        }
      ],
      orders: [
        {
          ad_id: '43242314',
          buyer: 'lorenamc.qweryty@gmail.com',
          carrier: 'ups (1ZA9T9200480374)',
          conekta_id: '653465346345634',
          created: '9 Noviembre 2018 12:40',
          id: '181124400005405',
          last_update: '9 noviembre 2018 12:40',
          phone: '5554968900',
          seller: 'mascalso_3@hotmail.com'
        }
      ]
    }
  }

  _renderOrder(order) {
    return <Order key={order.id} {...order} />
  }

  render() {
    return (
      <div className="GeneralContainer PayDelivery">
        <Nav tabs={this.state.tabs} />
        <div className="PayDelivery__Content">
          {this.state.orders.map(this._renderOrder)}
        </div>
      </div>
    )
  }
}

export default withNamespaces()(List)
