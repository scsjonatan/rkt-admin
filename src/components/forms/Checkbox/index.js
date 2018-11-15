// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Checkbox extends BaseComponent {
  render() {
    const { checked, title, onChange, name } = this.props
    return (
      <div className="FormCheckbox">
        <input
          checked={checked}
          name={name}
          onChange={onChange}
          type="checkbox"
        />
        <p className="FormField__Title">{title}</p>
      </div>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}
