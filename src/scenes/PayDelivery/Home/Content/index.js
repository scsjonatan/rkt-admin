// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import List from './List'
import SearchBox from 'components/forms/SearchBox'

class Content extends BaseComponent {
  constructor() {
    super()
    this._bind('_handleAction')
  }

  _handleAction(search) {
    const { filter } = this.props
    this.props.fetchOrders(filter, search)
  }

  render() {
    const { t } = this.props
    return (
      <div className="ScenePayDeliveryHome__Content">
        <div className="ScenePayDeliveryHome__Content__Search">
          <SearchBox
            placeholder={t('Order subdata')}
            title={t('Search order')}
            action={this._handleAction}
            startValue={this.props.search}
          />
        </div>
        <List orders={this.props.orders} />
      </div>
    )
  }
}

export default withNamespaces()(Content)
