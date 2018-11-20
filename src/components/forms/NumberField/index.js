// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Field extends BaseComponent {
  _renderErrors(error) {
    return (
      <p key={error} className="FormNumberField__Error">
        {`* ${error}`}
      </p>
    )
  }

  render() {
    const {
      disabled,
      onChange,
      placeholder,
      title,
      value,
      name,
      max,
      min,
      errors
    } = this.props
    return (
      <div className="FormNumberField">
        <p className="FormNumberField__Title">{title}</p>
        <input
          type="number"
          min={min}
          max={max}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {errors.map(this._renderErrors)}
      </div>
    )
  }
}

Field.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  errors: PropTypes.array
}

Field.defaultProps = {
  min: 0,
  max: 100000,
  disabled: false,
  placeholder: '',
  onChange: () => {},
  errors: []
}
