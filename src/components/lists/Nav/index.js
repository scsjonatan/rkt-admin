// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

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

    this._bind('_renderTabs', '_handleTab')
  }

  _handleTab(slug_name) {
    this.setState({ active: slug_name })
    this.props.handleTab(slug_name)
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
      <div className="ListNav">{this.props.tabs.map(this._renderTabs)}</div>
    )
  }
}

Nav.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      slug_name: PropTypes.string.isRequired
    })
  ),
  handleTab: PropTypes.func.isRequired
}
