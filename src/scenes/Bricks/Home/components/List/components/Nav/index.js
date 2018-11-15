// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'
import uuid from 'utils/uuid'

// Components
import Tab from './Tab'

// Styles
import './styles.scss'

export default class Nav extends BaseComponent {
  constructor() {
    super()

    this.state = {
      active: 'all'
    }

    this.tabs = [
      {
        label: 'Todos',
        number: 0,
        slug_name: 'all'
      },
      {
        label: 'Publicados',
        number: 0,
        slug_name: 'public'
      },
      {
        label: 'Eliminados',
        number: 0,
        slug_name: 'deleted'
      }
    ]

    this._bind('_renderTabs', '_handleTab')
  }

  _handleTab(slug_name) {
    this.setState({ active: slug_name })
  }

  _renderTabs(tab) {
    return (
      <Tab
        key={uuid()}
        action={this._handleTab}
        active={this.state.active}
        {...tab}
      />
    )
  }

  render() {
    return (
      <div className="ListNav">
        {this.tabs.map(this._renderTabs)}
      </div>
    )
  }
}
