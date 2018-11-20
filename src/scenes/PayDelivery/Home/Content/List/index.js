// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Nav from 'components/lists/Nav'
import Order from 'scenes/PayDelivery/components/Order'

// Actions
import { changeTab } from 'scenes/PayDelivery/Home/redux/actions'

// Styles
import './styles.scss'

class List extends BaseComponent {
  constructor(props) {
    super(props)
    const { t, orders } = props

    this.state = {
      isLoading: true,
      tabs: [
        {
          label: t('All'),
          number: orders.all.length,
          slug_name: 'all'
        },
        {
          label: t('News'),
          number: orders.new.length,
          slug_name: 'new'
        },
        {
          label: t('Pending PickUp'),
          number: orders.pending.length,
          slug_name: 'pending'
        },
        {
          label: t('Exception'),
          number: orders.exception.length,
          slug_name: 'exception'
        },
        {
          label: t('Return Asked'),
          number: orders.return.length,
          slug_name: 'return'
        }
      ]
    }

    this._bind('_handleTab', '_renderContent')
  }

  _renderOrder(order) {
    return <Order key={order.id} {...order} />
  }

  _renderContent() {
    const { filter, orders, t } = this.props
    return orders[filter].length ? (
      <div className="PayDelivery__Content">
        {orders[filter].map(this._renderOrder)}
      </div>
    ) : (
      <div className="PayDelivery__Loading">{t('No results')}</div>
    )
  }

  _handleTab(tab) {
    this.props.changeTab(tab)
  }

  render() {
    return (
      <div className="GeneralContainer PayDelivery">
        <Nav tabs={this.state.tabs} handleTab={this._handleTab} />
        {this._renderContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filter: state.scenePayDeliveryHome.get('filter'),
    orders: state.scenePayDeliveryHome.get('orders')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTab: tab => dispatch(changeTab(tab))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)
)
