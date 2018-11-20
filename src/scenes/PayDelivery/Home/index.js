// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { getParamByName } from 'utils/url'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Header from 'components/views/Header'
import { ClipLoader } from 'react-spinners'

import Content from './Content'

// Actions
import { fetchOrdersByFilterSearch } from 'scenes/PayDelivery/Home/redux/actions'

// Styles.scss
import './styles.scss'

class PayDelivery extends BaseComponent {
  constructor() {
    super()
    this._bind('_renderContent')
  }

  componentDidMount() {
    const paramQ = getParamByName('q')
    const _search = paramQ ? paramQ : ''
    const { filter } = this.props
    this.props.fetchOrders(filter, _search)
  }

  _renderContent() {
    return this.props.isLoading ? (
      <div className="PayDelivery__Loading">
        <ClipLoader color="#1d72db" />
      </div>
    ) : (
      <Content />
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

PayDelivery.contextTypes = {
  router: PropTypes.object.isRequired
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
