// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Nav from 'components/lists/Nav'
import Item from './components/Item'

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
          label: 'Disponibles',
          number: 0,
          slug_name: 'available'
        },
        {
          label: 'Vendidos',
          number: 0,
          slug_name: 'sold'
        },
        {
          label: 'Eliminados',
          number: 0,
          slug_name: 'deleted'
        }
      ]
    }
  }

  render() {
    return (
      <div className="GeneralContainer BricksList">
        <Nav tabs={this.state.tabs} />
        <div className="BricksList__Content">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    )
  }
}
