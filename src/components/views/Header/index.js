// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Header extends BaseComponent {
  render() {
    return (
      <div className="ViewHeader">
        <h1>{this.props.title}</h1>
        <div className="ViewHeader__Extras">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
