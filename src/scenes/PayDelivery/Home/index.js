// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Internalization
import { withNamespaces } from 'react-i18next'

// Components
import Header from 'components/views/Header'
import SearchBox from 'components/forms/SearchBox'

import List from './components/List'

// Styles.scss
import './styles.scss'

class PayDelivery extends BaseComponent {
  _handleAction(search) {
    console.log(search)
  }

  render() {
    const { t } = this.props
    return (
      <div className="ScenePayDeliveryHome">
        <Header title={t('Order Admin')} />
        <div className="ScenePayDeliveryHome__Content">
          <div className="ScenePayDeliveryHome__Content__Search">
            <SearchBox
              placeholder={t('Order subdata')}
              title={t('Search order')}
              action={this._handleAction}
            />
          </div>
          <List />
        </div>
      </div>
    )
  }
}

export default withNamespaces()(PayDelivery)
