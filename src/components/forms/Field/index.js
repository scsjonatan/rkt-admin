// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Field extends BaseComponent {
  render() {
    const {
      disabled,
      handleChange,
      placeholder,
      title,
      value
    } = this.props
    return (
      <div className="FormField">
        <p className="FormField__Title">{title}</p>
        <input
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

Field.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func
}

Field.defaultProps = {
  disabled: false,
  placeholder: '',
  handleChange: () => {}
}
