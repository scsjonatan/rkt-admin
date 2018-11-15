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
      onChange,
      placeholder,
      title,
      value,
      name
    } = this.props
    return (
      <div className="FormField">
        <p className="FormField__Title">{title}</p>
        <input
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
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
  onChange: PropTypes.func
}

Field.defaultProps = {
  disabled: false,
  placeholder: '',
  onChange: () => {}
}
