// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Header from 'components/views/Header'
import SearchBox from 'components/forms/SearchBox'
import { ClipLoader } from 'react-spinners'

import List from './components/List'

// Actions
import { fetchOrdersByFilterSearch } from 'scenes/PayDelivery/Home/redux/actions'

// Styles.scss
import './styles.scss'

class PayDelivery extends BaseComponent {
  constructor() {
    super()
    this._bind('_renderContent', '_handleAction')
  }

  componentDidMount() {
    const { filter, search } = this.props
    this.props.fetchOrders(filter, search)
  }

  _handleAction(search) {
    const { filter } = this.props
    this.props.fetchOrders(filter, search)
  }

  _renderContent() {
    const { t } = this.props
    return this.props.isLoading ? (
      <div className="PayDelivery__Loading">
        <ClipLoader color="#1d72db" />
      </div>
    ) : (
      <div className="ScenePayDeliveryHome__Content">
        <div className="ScenePayDeliveryHome__Content__Search">
          <SearchBox
            placeholder={t('Order subdata')}
            title={t('Search order')}
            action={this._handleAction}
          />
        </div>
        <List orders={this.props.orders} />
      </div>
    )
  }

  render() {
    const { t } = this.props
    return (
      <div className="ScenePayDeliveryHome">
        <Header title={t('Order Admin')} />
        {this._renderContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.scenePayDeliveryHome.get('orders'),
    search: state.scenePayDeliveryHome.get('search'),
    filter: state.scenePayDeliveryHome.get('filter'),
    isLoading: state.scenePayDeliveryHome.get('isLoading')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (filter, search) =>
      fetchOrdersByFilterSearch(filter, search, dispatch)
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PayDelivery)
)
