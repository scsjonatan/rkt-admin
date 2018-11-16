// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

export default class Tab extends BaseComponent {
  constructor() {
    super()
    this._bind('_handleClick')
  }

  _handleClick() {
    const { action, slug_name } = this.props
    action(slug_name)
  }

  render() {
    const { active, label, number, slug_name } = this.props
    const activeClass = active === slug_name ? 'ActiveTab' : ''
    return (
      <div
        className={`BricksNavTab ${activeClass}`}
        onClick={this._handleClick}
      >
        <p>{`${label}(${number})`}</p>
      </div>
    )
  }
}

Tab.propTypes = {
  action: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  slug_name: PropTypes.string.isRequired
}
