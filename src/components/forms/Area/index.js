// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import './styles.scss'

export default class Area extends BaseComponent {
  _renderErrors(error) {
    return (
      <p key={error} className="FormField__Error">
        {`* ${error}`}
      </p>
    )
  }

  render() {
    const {
      disabled,
      onChange,
      name,
      placeholder,
      title,
      value,
      errors
    } = this.props
    return (
      <div className="FormArea">
        <p className="FormArea__Title">{title}</p>
        <textarea
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

Area.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  errors: PropTypes.array
}

Area.defaultProps = {
  disabled: false,
  placeholder: '',
  onChange: () => {},
  errors: []
}
