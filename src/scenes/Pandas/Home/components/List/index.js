// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Nav from 'components/lists/Nav'
import Item from './Item'

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
      ]
    }
  }

  render() {
    return (
      <div className="GeneralContainer Pandas">
        <Nav tabs={this.state.tabs} />
        <div className="Pandas__Content">
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
