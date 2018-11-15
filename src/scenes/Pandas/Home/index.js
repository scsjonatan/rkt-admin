// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Header from 'components/views/Header'
import SearchBox from 'components/forms/SearchBox'

import List from './components/List'

// Styles.scss
import './styles.scss'

export default class Pandas extends BaseComponent {
  _handleAction(search) {
    console.log(search)
  }

  render() {
    return (
      <div className="ScenePandasHome">
        <Header title="P&D: Order Admin"/>
        <div className="ScenePandasHome__Content">
          <div className="ScenePandasHome__Content__Search">
            <SearchBox
              placeholder="Número de orden, email o número de teléfono"
              title="Buscar Orden"
              action={this._handleAction}
            />
          </div>
          <List />
        </div>
      </div>
    )
  }
}
