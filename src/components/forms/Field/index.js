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
      className,
      disabled,
      name,
      onChange,
      placeholder,
      title,
      value
    } = this.props
    return (
      <div className={`FormField ${className}`}>
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

Field.defaultProps = {
  className: '',
  disabled: false,
  onChange: () => {},
  placeholder: ''
}
